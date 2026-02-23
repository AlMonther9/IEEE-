import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
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

          <LoginForm />

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
