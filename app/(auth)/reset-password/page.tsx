import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, KeyRound } from "lucide-react";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
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

          <ResetPasswordForm />
        </div>
      </div>
    </section>
  );
}
