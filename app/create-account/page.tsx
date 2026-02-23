"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Building2,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  UserRoundPlus,
  Zap,
} from "lucide-react";

type FieldName =
  | "fullName"
  | "email"
  | "university"
  | "faculty"
  | "password"
  | "confirmPassword";

type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  university: "",
  faculty: "",
  password: "",
  confirmPassword: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const strongPasswordRegex = /^(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

function validateField(field: FieldName, values: FormValues): string | undefined {
  const value = values[field].trim();

  switch (field) {
    case "fullName":
      if (!value) {
        return "Full name is required.";
      }
      if (value.length < 3) {
        return "Full name must be at least 3 characters.";
      }
      return undefined;
    case "email":
      if (!value) {
        return "Email address is required.";
      }
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address.";
      }
      return undefined;
    case "university":
      if (!value) {
        return "University is required.";
      }
      return undefined;
    case "faculty":
      if (!value) {
        return "Faculty / Department is required.";
      }
      return undefined;
    case "password":
      if (!values.password) {
        return "Password is required.";
      }
      if (values.password.length < 8) {
        return "Password must be at least 8 characters.";
      }
      if (!strongPasswordRegex.test(values.password)) {
        return "Password must include at least one number and one special character.";
      }
      return undefined;
    case "confirmPassword":
      if (!values.confirmPassword) {
        return "Please confirm your password.";
      }
      if (values.confirmPassword !== values.password) {
        return "Passwords do not match.";
      }
      return undefined;
    default:
      return undefined;
  }
}

function validateForm(values: FormValues): FormErrors {
  const fields: FieldName[] = [
    "fullName",
    "email",
    "university",
    "faculty",
    "password",
    "confirmPassword",
  ];

  return fields.reduce<FormErrors>((acc, field) => {
    const error = validateField(field, values);
    if (error) {
      acc[field] = error;
    }
    return acc;
  }, {});
}

export default function CreateAccountPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validationErrors = useMemo(() => validateForm(values), [values]);
  const isFormValid = Object.keys(validationErrors).length === 0;

  const shouldShowError = (field: FieldName) => touched[field] || submitAttempted;

  const handleChange =
    (field: FieldName) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value;
      setSubmitMessage("");
      setValues((prev) => ({
        ...prev,
        [field]: nextValue,
      }));
    };

  const handleBlur = (field: FieldName) => () => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);

    if (!isFormValid) {
      return;
    }

    setSubmitMessage("All validations passed. Ready for backend integration.");
  };

  const inputWrapperBaseClass =
    "mt-2 flex h-14 items-center gap-3 rounded-2xl border border-white/15 bg-gradient-input px-4 transition focus-within:border-primary-blue/60 focus-within:ring-1 focus-within:ring-primary-blue/30";
  const inputClass =
    "h-full w-full bg-transparent text-base text-white placeholder:text-slate-400 focus:outline-none";
  const iconClass = "h-5 w-5 shrink-0 text-primary-blue/70";

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-gradient-main px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
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
        <div className="relative w-full max-w-md">
          <div className="mb-7 text-center">
            <span className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-yellow-cta text-slate-900 shadow-lg sm:h-20 sm:w-20">
              <Zap className="h-8 w-8 fill-current" />
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Create Account
            </h1>
            <p className="mt-3 text-lg text-slate-300 sm:text-xl">
              Join the IEEE student community
            </p>
          </div>

          <div className="rounded-3xl border border-white/30 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <form onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="fullName" className="text-sm font-medium text-transparent">
                  Full Name
                </label>
                <div
                  className={`${inputWrapperBaseClass} ${
                    shouldShowError("fullName") && validationErrors.fullName
                      ? "border-red-400/90"
                      : "border-white/12"
                  }`}
                >
                  <User className={iconClass} />
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={values.fullName}
                    onChange={handleChange("fullName")}
                    onBlur={handleBlur("fullName")}
                    placeholder="Full Name"
                    className={inputClass}
                    autoComplete="name"
                    aria-invalid={Boolean(shouldShowError("fullName") && validationErrors.fullName)}
                  />
                </div>
                {shouldShowError("fullName") && validationErrors.fullName && (
                  <p className="mt-1.5 text-sm text-red-400">{validationErrors.fullName}</p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="text-sm font-medium text-transparent">
                  Email Address
                </label>
                <div
                  className={`${inputWrapperBaseClass} ${
                    shouldShowError("email") && validationErrors.email
                      ? "border-red-400/90"
                      : "border-white/12"
                  }`}
                >
                  <Mail className={iconClass} />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    onBlur={handleBlur("email")}
                    placeholder="Email address"
                    className={inputClass}
                    autoComplete="email"
                    aria-invalid={Boolean(shouldShowError("email") && validationErrors.email)}
                  />
                </div>
                {shouldShowError("email") && validationErrors.email && (
                  <p className="mt-1.5 text-sm text-red-400">{validationErrors.email}</p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="university" className="text-sm font-medium text-transparent">
                  University
                </label>
                <div
                  className={`${inputWrapperBaseClass} ${
                    shouldShowError("university") && validationErrors.university
                      ? "border-red-400/90"
                      : "border-white/12"
                  }`}
                >
                  <Building2 className={iconClass} />
                  <input
                    id="university"
                    name="university"
                    type="text"
                    value={values.university}
                    onChange={handleChange("university")}
                    onBlur={handleBlur("university")}
                    placeholder="University"
                    className={inputClass}
                    autoComplete="organization"
                    aria-invalid={Boolean(
                      shouldShowError("university") && validationErrors.university,
                    )}
                  />
                </div>
                {shouldShowError("university") && validationErrors.university && (
                  <p className="mt-1.5 text-sm text-red-400">{validationErrors.university}</p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="faculty" className="text-sm font-medium text-transparent">
                  Faculty / Department
                </label>
                <div
                  className={`${inputWrapperBaseClass} ${
                    shouldShowError("faculty") && validationErrors.faculty
                      ? "border-red-400/90"
                      : "border-white/12"
                  }`}
                >
                  <BookOpen className={iconClass} />
                  <input
                    id="faculty"
                    name="faculty"
                    type="text"
                    value={values.faculty}
                    onChange={handleChange("faculty")}
                    onBlur={handleBlur("faculty")}
                    placeholder="Faculty / Department"
                    className={inputClass}
                    autoComplete="organization-title"
                    aria-invalid={Boolean(shouldShowError("faculty") && validationErrors.faculty)}
                  />
                </div>
                {shouldShowError("faculty") && validationErrors.faculty && (
                  <p className="mt-1.5 text-sm text-red-400">{validationErrors.faculty}</p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="password" className="text-sm font-medium text-transparent">
                  Password
                </label>
                <div
                  className={`${inputWrapperBaseClass} ${
                    shouldShowError("password") && validationErrors.password
                      ? "border-red-400/90"
                      : "border-white/12"
                  }`}
                >
                  <Lock className={iconClass} />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    onBlur={handleBlur("password")}
                    placeholder="Password (min. 8 characters)"
                    className={inputClass}
                    autoComplete="new-password"
                    aria-invalid={Boolean(shouldShowError("password") && validationErrors.password)}
                  />
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
                </div>
                {shouldShowError("password") && validationErrors.password && (
                  <p className="mt-1.5 text-sm text-red-400">{validationErrors.password}</p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-transparent">
                  Confirm Password
                </label>
                <div
                  className={`${inputWrapperBaseClass} ${
                    shouldShowError("confirmPassword") && validationErrors.confirmPassword
                      ? "border-red-400/90"
                      : "border-white/12"
                  }`}
                >
                  <Lock className={iconClass} />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={values.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    placeholder="Confirm Password"
                    className={inputClass}
                    autoComplete="new-password"
                    aria-invalid={Boolean(
                      shouldShowError("confirmPassword") && validationErrors.confirmPassword,
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="rounded-md p-1 text-primary-blue/80 transition hover:text-primary-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/70"
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {shouldShowError("confirmPassword") && validationErrors.confirmPassword && (
                  <p className="mt-1.5 text-sm text-red-400">{validationErrors.confirmPassword}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className="mt-5 inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-yellow-cta px-6 text-xl font-bold text-slate-900 shadow-lg transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-65"
              >
                <UserRoundPlus className="h-6 w-6" />
                Create Account
              </button>

              {submitMessage && (
                <p className="mt-3 text-center text-sm text-emerald-300">{submitMessage}</p>
              )}
            </form>
          </div>

          <p className="mt-8 text-center text-lg text-slate-300">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary-yellow transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
