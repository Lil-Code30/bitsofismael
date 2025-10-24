"use client";

import React, { useState } from "react";
import { Twitch, Youtube, Github, Linkedin, Twitter } from "lucide-react";
import SocialLinkCard from "@/components/SocialLinkCard";

// export const metadata: Metadata = {
//   title: "Contact — Loko Ismaël",
//   description:
//     "Let's connect! Get in touch with Loko Ismaël for collaborations, freelance work, or just to say hi.",
// };
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "27e4d1fa-e9ce-40ee-91e4-161a18ca47db",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      id: 1,
      href: "https://www.twitch.tv/dereal_ismael",
      icon: <Twitch size={35} className="hover:text-[#6441a5]" />,
      text: "Twitch",
    },
    {
      id: 2,
      href: "https://www.youtube.com/@licode30",
      icon: <Youtube size={35} className="hover:text-[#FF0000]" />,
      text: "Youtube",
    },
    {
      id: 3,
      href: "https://github.com/Lil-Code30",
      icon: <Github size={35} className="hover:text-[#6e7781]" />,
      text: "Github",
    },
    {
      id: 4,
      href: "https://www.linkedin.com/in/loko-ismael/",
      icon: <Linkedin size={35} className="hover:text-[#0a66c2]" />,
      text: "Linkedin",
    },
    {
      id: 5,
      href: "https://x.com/dereal_ismael",
      icon: <Twitter size={35} className="hover:text-[#1DA1F2]" />,
      text: "Twitter",
    },
  ];
  return (
    <>
      <section className="flex items-center justify-between flex-col-reverse md:flex-row mt-3">
        <article className="w-full flex gap-5 items-center justify-center py-5 mt-5 md:mt-0 md:py-0">
          {socialLinks.map((socialLink) => (
            <SocialLinkCard key={socialLink.id} socialLink={socialLink} />
          ))}
        </article>
        <article className="w-full">
          <h3 className="mb- text-center">Get In Touch with me</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:cursor-pointer hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </article>
      </section>
    </>
  );
}

export default Contact;
