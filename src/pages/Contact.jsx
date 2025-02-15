import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_ID
      )
      .then(() => {
        setIsLoading(false);
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setCurrentAnimation("idle");
      })
      .catch(() => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        alert("Failed to send message. Try again.");
      });
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 bg-white gap-6">
      {/* Contact Form */}
      <div className="w-full max-w-sm bg-white p-5 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800 text-center mb-4">
          🌴 Let's Connect
        </h1>

        <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <label className="text-gray-700 text-sm">
            Name
            <input
              type="text"
              name="name"
              className="w-full p-2 mt-1 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-gray-700 text-sm">
            Email
            <input
              type="email"
              name="email"
              className="w-full p-2 mt-1 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-gray-700 text-sm">
            Message
            <textarea
              rows={3}
              name="message"
              className="w-full p-2 mt-1 rounded-md bg-gray-100 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message..."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md shadow-md transition-all"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* 3D Model Section */}
      <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <directionalLight intensity={1.5} position={[2, 2, 5]} />
          <ambientLight intensity={0.7} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.6, 0.6, 0.6]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
