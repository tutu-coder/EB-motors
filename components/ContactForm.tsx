"use client";

import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TEMP: replace with EmailJS / backend later
    console.log("Lead submitted:", form);

    alert("Thank you — we’ll get back to you shortly.");
    setForm({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-16 bg-black">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight">
            Get In Touch
          </h2>
          <p className="text-white/60 mt-4">
            Enquire about any vehicle or request a personalised quote
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* NAME */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-white/40 outline-none focus:border-white/40"
            required
          />

          {/* EMAIL */}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-white/40 outline-none focus:border-white/40"
            required
          />

          {/* PHONE */}
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-white/40 outline-none focus:border-white/40"
          />

          {/* INTEREST */}
          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="bg-white/5 border border-white/10 px-5 py-4 text-white outline-none focus:border-white/40"
          >
  <option value="" className="text-white bg-black">
    Vehicle of Interest
  </option>

  <option className="text-white bg-black">
    Mercedes-AMG
  </option>

  <option className="text-white bg-black">
    BMW M Series
  </option>

  <option className="text-white bg-black">
    Porsche
  </option>

  <option className="text-white bg-black">
    Audi RS
  </option>

  <option className="text-white bg-black">
    Other
  </option>
</select>

          {/* MESSAGE */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message..."
            className="md:col-span-2 bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-white/40 outline-none focus:border-white/40 h-40 resize-none"
          />

          {/* BUTTON */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-white text-black py-5 font-semibold uppercase tracking-widest hover:scale-[1.02] transition"
            >
              Send Enquiry
            </button>
          </div>

        </form>

      </div>

    </section>
  );
}