"use client";

import { useMemo, useState } from "react";
import { Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email: string): string | undefined {
    const value = email.trim();

    if (!value) {
        return "Email address is required.";
    }

    if (!emailRegex.test(value)) {
        return "Please enter a valid email address.";
    }

    return undefined;
}

export default function ResetPasswordForm() {
    const [email, setEmail] = useState("");
    const [submitAttempted, setSubmitAttempted] = useState(false);
    const [touched, setTouched] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const emailError = useMemo(() => validateEmail(email), [email]);
    const isValid = !emailError;
    const shouldShowError = touched || submitAttempted;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitAttempted(true);

        if (emailError) {
            return;
        }

        setSuccessMessage("Reset link sent successfully. Please check your email.");
    };

    return (
        <div className="rounded-3xl border border-white/30 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                    <label htmlFor="email" className="sr-only">
                        Email Address
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(event) => {
                            setSuccessMessage("");
                            setEmail(event.target.value);
                        }}
                        onBlur={() => setTouched(true)}
                        placeholder="Enter your email address"
                        autoComplete="email"
                        aria-invalid={Boolean(shouldShowError && emailError)}
                        startIcon={<Mail className="h-5 w-5" />}
                        className="mt-2"
                    />
                    {shouldShowError && emailError && (
                        <p className="mt-1.5 text-sm text-red-400">{emailError}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={!isValid}
                    className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-yellow-cta px-6 text-base font-bold text-slate-900 shadow-lg transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-65"
                >
                    <Send className="h-5 w-5" />
                    Send Reset Link
                </button>

                {successMessage && (
                    <p className="mt-3 text-center text-sm text-emerald-300">{successMessage}</p>
                )}
            </form>
        </div>
    );
}
