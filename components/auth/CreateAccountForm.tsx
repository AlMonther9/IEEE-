"use client";

import { useMemo, useState } from "react";
import {
    BookOpen,
    Building2,
    Eye,
    EyeOff,
    Lock,
    Mail,
    User,
    UserRoundPlus,
} from "lucide-react";
import { Input } from "@/components/ui/input";

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

export default function CreateAccountForm() {
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

    return (
        <div className="rounded-3xl border border-white/30 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                    <label htmlFor="fullName" className="sr-only">
                        Full Name
                    </label>
                    <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={values.fullName}
                        onChange={handleChange("fullName")}
                        onBlur={handleBlur("fullName")}
                        placeholder="Full Name"
                        autoComplete="name"
                        aria-invalid={Boolean(shouldShowError("fullName") && validationErrors.fullName)}
                        startIcon={<User className="h-5 w-5" />}
                        className="mt-2"
                    />
                    {shouldShowError("fullName") && validationErrors.fullName && (
                        <p className="mt-1.5 text-sm text-red-400">{validationErrors.fullName}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="sr-only">
                        Email Address
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange("email")}
                        onBlur={handleBlur("email")}
                        placeholder="Email address"
                        autoComplete="email"
                        aria-invalid={Boolean(shouldShowError("email") && validationErrors.email)}
                        startIcon={<Mail className="h-5 w-5" />}
                        className="mt-2"
                    />
                    {shouldShowError("email") && validationErrors.email && (
                        <p className="mt-1.5 text-sm text-red-400">{validationErrors.email}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="university" className="sr-only">
                        University
                    </label>
                    <Input
                        id="university"
                        name="university"
                        type="text"
                        value={values.university}
                        onChange={handleChange("university")}
                        onBlur={handleBlur("university")}
                        placeholder="University"
                        autoComplete="organization"
                        aria-invalid={Boolean(shouldShowError("university") && validationErrors.university)}
                        startIcon={<Building2 className="h-5 w-5" />}
                        className="mt-2"
                    />
                    {shouldShowError("university") && validationErrors.university && (
                        <p className="mt-1.5 text-sm text-red-400">{validationErrors.university}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="faculty" className="sr-only">
                        Faculty / Department
                    </label>
                    <Input
                        id="faculty"
                        name="faculty"
                        type="text"
                        value={values.faculty}
                        onChange={handleChange("faculty")}
                        onBlur={handleBlur("faculty")}
                        placeholder="Faculty / Department"
                        autoComplete="organization-title"
                        aria-invalid={Boolean(shouldShowError("faculty") && validationErrors.faculty)}
                        startIcon={<BookOpen className="h-5 w-5" />}
                        className="mt-2"
                    />
                    {shouldShowError("faculty") && validationErrors.faculty && (
                        <p className="mt-1.5 text-sm text-red-400">{validationErrors.faculty}</p>
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
                        onChange={handleChange("password")}
                        onBlur={handleBlur("password")}
                        placeholder="Password (min. 8 characters)"
                        autoComplete="new-password"
                        aria-invalid={Boolean(shouldShowError("password") && validationErrors.password)}
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
                    {shouldShowError("password") && validationErrors.password && (
                        <p className="mt-1.5 text-sm text-red-400">{validationErrors.password}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="sr-only">
                        Confirm Password
                    </label>
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={values.confirmPassword}
                        onChange={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                        aria-invalid={Boolean(shouldShowError("confirmPassword") && validationErrors.confirmPassword)}
                        startIcon={<Lock className="h-5 w-5" />}
                        endIcon={
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
                        }
                        className="mt-2"
                    />
                    {shouldShowError("confirmPassword") && validationErrors.confirmPassword && (
                        <p className="mt-1.5 text-sm text-red-400">{validationErrors.confirmPassword}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={!isFormValid}
                    className="mt-5 inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-yellow-cta px-6 text-lg font-bold text-slate-900 shadow-lg transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-65"
                >
                    <UserRoundPlus className="h-5 w-5" />
                    Create Account
                </button>

                {submitMessage && (
                    <p className="mt-3 text-center text-sm text-emerald-300">{submitMessage}</p>
                )}
            </form>
        </div>
    );
}
