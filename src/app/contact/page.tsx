"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setIsSubmitted(true);

        // Reset form after submission
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
            <h1 className="text-4xl font-bold mb-4 text-amber-500">Contact Me</h1>
            <p className="text-lg mb-8 text-white">Feel free to reach out!</p>
            {isSubmitted && (
                <p className="text-green-500 mb-4">Thank you! Your message has been sent.</p>
            )}
            <form className="w-full max-w-md mb-12" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-white mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-white mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors"
                >
                    Send
                </button>
            </form>

            {/* Discover Me Section */}
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-amber-500 mb-4 text-center">Discover Me</h2>
                <div className="flex flex-col gap-4">
                    <a
                        href="https://wa.me/6282324801277"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-white hover:text-amber-500 transition"
                    >
                        <FaPhoneAlt className="text-2xl" />
                        <span>+6282324801277</span>
                    </a>
                    <a
                        href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=baguzt.abduh@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-white hover:text-amber-500 transition"
                    >
                        <FaEnvelope className="text-2xl" />
                        <span>baguzt.abduh@gmail.com</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bagus-moehamad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-white hover:text-amber-500 transition"
                    >
                        <FaLinkedin className="text-2xl" />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="https://www.instagram.com/bagusmoehamad/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-white hover:text-amber-500 transition"
                    >
                        <FaInstagram className="text-2xl" />
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </main>
    );
}