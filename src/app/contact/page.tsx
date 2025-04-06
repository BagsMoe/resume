"use client";

import { useState } from "react";

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

        // Optionally, you can integrate an API call here to send the form data
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
            <h1 className="text-4xl font-bold mb-4 text-amber-500">Contact Me</h1>
            <p className="text-lg mb-8 text-white">Feel free to reach out!</p>
            {isSubmitted && (
                <p className="text-green-500 mb-4">Thank you! Your message has been sent.</p>
            )}
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
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
        </main>
    );
}