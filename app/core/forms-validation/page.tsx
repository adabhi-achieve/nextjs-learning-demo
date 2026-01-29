"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema for validation
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18 years old").max(100),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof formSchema>;

export default function FormsValidationPage() {
  const [simpleForm, setSimpleForm] = useState({
    name: "",
    email: "",
  });
  const [simpleErrors, setSimpleErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // React Hook Form with Zod
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Simple form validation
  const validateSimpleForm = () => {
    const errors: Record<string, string> = {};
    if (!simpleForm.name) errors.name = "Name is required";
    if (!simpleForm.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(simpleForm.email)) {
      errors.email = "Email is invalid";
    }
    return errors;
  };

  const handleSimpleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateSimpleForm();
    if (Object.keys(errors).length > 0) {
      setSimpleErrors(errors);
    } else {
      setSimpleErrors({});
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  // Advanced form submission
  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Forms & Validation
        </h1>

        <div className="space-y-6">
          {/* Simple Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              1. Simple Form with Manual Validation
            </h2>
            <form onSubmit={handleSimpleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={simpleForm.name}
                  onChange={(e) => setSimpleForm({ ...simpleForm, name: e.target.value })}
                  className={`w-full px-3 py-2 border rounded ${
                    simpleErrors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {simpleErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{simpleErrors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={simpleForm.email}
                  onChange={(e) => setSimpleForm({ ...simpleForm, email: e.target.value })}
                  className={`w-full px-3 py-2 border rounded ${
                    simpleErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {simpleErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{simpleErrors.email}</p>
                )}
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Submit
              </button>
              {submitted && (
                <p className="text-green-600">Form submitted successfully!</p>
              )}
            </form>
          </div>

          {/* Advanced Form with React Hook Form + Zod */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              2. Advanced Form with React Hook Form + Zod
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  {...register("name")}
                  className={`w-full px-3 py-2 border rounded ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className={`w-full px-3 py-2 border rounded ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Age</label>
                <input
                  type="number"
                  {...register("age", { valueAsNumber: true })}
                  className={`w-full px-3 py-2 border rounded ${
                    errors.age ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.age && (
                  <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  {...register("password")}
                  className={`w-full px-3 py-2 border rounded ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Confirm Password</label>
                <input
                  type="password"
                  {...register("confirmPassword")}
                  className={`w-full px-3 py-2 border rounded ${
                    errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Validation Types */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Validation Types
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Required:</strong> Field must not be empty</li>
                <li><strong>Email:</strong> Must be a valid email format</li>
                <li><strong>Min/Max Length:</strong> String length constraints</li>
                <li><strong>Number Range:</strong> Numeric value constraints</li>
                <li><strong>Custom:</strong> Custom validation logic (e.g., password match)</li>
                <li><strong>Pattern:</strong> Regex pattern matching</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
