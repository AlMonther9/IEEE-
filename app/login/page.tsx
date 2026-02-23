"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, LogIn, Lock, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

type LoginValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type LoginErrors = Partial<Record<"email" | "password", string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateLogin(values: LoginValues): LoginErrors {
  const errors: LoginErrors = {};

  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  }

  return errors;
}

export default function LoginPage() {
  const [values, setValues] = useState<LoginValues>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<"email" | "password", boolean>>>({});
  const [submitMessage, setSubmitMessage] = useState("");

  const errors = useMemo(() => validateLogin(values), [values]);
  const isValid = Object.keys(errors).length === 0;

  const shouldShowError = (field: "email" | "password") => touched[field] || submitAttempted;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);

    if (!isValid) {
      return;
    }

    setSubmitMessage("Credentials are valid. Ready for backend login integration.");
  };

  return (
    <section className="relative -mt-24 min-h-screen overflow-hidden bg-gradient-main px-4 py-24 sm:px-6 sm:py-16 lg:px-10">
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

      <div className="relative pt-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-6xl items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-7 text-center">
            <Image
              src="/logo.svg"
              alt="IEEE SVU SB"
              width={86}
              height={32}
              className="mx-auto mb-4 h-24 w-auto opacity-90"
            />
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Welcome Back
            </h1>
            <p className="mt-3 text-base text-slate-300 sm:text-lg">Sign in to access your IEEE account</p>
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
                  value={values.email}
                  onChange={(event) => {
                    setSubmitMessage("");
                    setValues((prev) => ({ ...prev, email: event.target.value }));
                  }}
                  onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                  placeholder="Email address"
                  autoComplete="email"
                  aria-invalid={Boolean(shouldShowError("email") && errors.email)}
                  startIcon={<Mail className="h-5 w-5" />}
                  className="mt-2"
                />
                {shouldShowError("email") && errors.email && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={(event) => {
                    setSubmitMessage("");
                    setValues((prev) => ({ ...prev, password: event.target.value }));
                  }}
                  onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
                  placeholder="Password"
                  autoComplete="current-password"
                  aria-invalid={Boolean(shouldShowError("password") && errors.password)}
                  startIcon={<Lock className="h-5 w-5" />}
                  endIcon={
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="rounded-md p-1 text-primary-blue/80 transition hover:text-primary-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/70"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  }
                  className="mt-2"
                />
                {shouldShowError("password") && errors.password && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={values.rememberMe}
                    onCheckedChange={(checked) =>
                      setValues((prev) => ({ ...prev, rememberMe: checked as boolean }))
                    }
                    className="h-5 w-5 cursor-pointer rounded border-2 border-slate-500 data-[state=checked]:bg-primary-yellow data-[state=checked]:border-primary-yellow data-[state=checked]:text-black focus-visible:ring-primary-yellow/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080f25]"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="cursor-pointer text-sm text-slate-300 transition hover:text-white"
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  href="/reset-password"
                  className="text-sm text-sky-300 transition hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className="mt-5 cursor-pointer inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-yellow-cta px-6 text-lg font-bold text-slate-900 shadow-lg transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-65"
              >
                <LogIn className="h-5 w-5" />
                Sign In
              </button>

              {submitMessage && (
                <p className="mt-3 text-center text-sm text-emerald-300">{submitMessage}</p>
              )}
            </form>
          </div>

          <p className="mt-6 text-center text-base text-slate-300">
            Don&apos;t have an account?{" "}
            <Link
              href="/create-account"
              className="font-semibold text-primary-yellow transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
