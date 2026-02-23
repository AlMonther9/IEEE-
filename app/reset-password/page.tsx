"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, KeyRound, Mail, Send } from "lucide-react";
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

export default function ResetPasswordPage() {
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
    <section className="relative -mt-24 isolate min-h-screen overflow-hidden bg-gradient-main px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-8 top-8 h-72 w-72 rounded-full bg-primary-blue/20 blur-3xl" />
        <div className="absolute bottom-8 right-8 h-72 w-72 rounded-full bg-primary-yellow/10 blur-3xl" />
        <Image
          src="/Frame.svg"
          alt=""
          aria-hidden="true"
          width={173}
          height={173}
          className="absolute left-10 top-24 hidden opacity-75 lg:block"
        />
        <Image
          src="/Frame%20(1).svg"
          alt=""
          aria-hidden="true"
          width={162}
          height={162}
          className="absolute bottom-20 right-10 hidden opacity-80 lg:block"
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl items-center justify-center">
        <div className="w-full max-w-md">
          <Link
            href="/login"
            className="mb-7 inline-flex items-center gap-2 text-sm text-white transition hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Login
          </Link>

          <div className="mb-7 text-center">
            <span className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-blue-cta text-white shadow-lg sm:h-20 sm:w-20">
              <KeyRound className="h-8 w-8" />
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Reset Password
            </h1>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Enter your email and we&apos;ll send you a link to reset your password
            </p>
          </div>

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
        </div>
      </div>
    </section>
  );
}
