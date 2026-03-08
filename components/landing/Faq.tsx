"use client";

import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { faqData } from "@/data/faqData";

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggle = (id: number, index: number) => {
        const isOpening = openId !== id;
        setOpenId(isOpening ? id : null);

        if (isOpening) {
            // Wait for the CSS transition to reveal the height
            setTimeout(() => {
                itemRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }, 300);
        }
    };

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-[#02040A] to-[#061231] text-white py-20">
            <div className="max-w-3xl mx-auto px-4">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Frequently Asked{" "}
                    <span className="bg-gradient-header bg-clip-text text-transparent">
                        Questions
                    </span>
                </h2>

                <p className="text-center text-gray-400 mb-10">
                    Everything you need to know about joining and participating.
                </p>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={item.id}
                            ref={(el) => {
                                itemRefs.current[index] = el;
                            }}
                            className={`bg-[#061231] rounded-lg overflow-hidden border transition-colors duration-300 ${openId === item.id ? "border-primary-blue" : "border-transparent hover:border-primary-blue"
                                }`}
                        >
                            <button
                                onClick={() => toggle(item.id, index)}
                                className="w-full cursor-pointer text-left px-6 py-4 flex justify-between items-center hover:text-primary-blue transition"
                            >
                                {item.question}

                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 ${openId === item.id ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`px-6 transition-all duration-300 overflow-hidden ${openId === item.id
                                    ? "max-h-screen py-4 opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}>
                                <p className="text-gray-300 text-sm">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}