"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import EyeOffIcon from "@/components/icons/eye-off-icon";
import EyeIcon from "@/components/icons/eye-icon";

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .regex(/[A-Z]/, "Password must contain at least 1 uppercase character")
      .regex(/[a-z]/, "Password must contain at least 1 lowercase character")
      .regex(/[0-9]/, "Password must contain at least 1 number")
      .regex(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>]/,
        "Password must contain at least 1 special character (!@#$%^&*()_-+={[}]|:;\"'<,>.)"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type PasswordFormData = z.infer<typeof passwordSchema>;

export function PasswordEntryForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = useCallback(
    (data: PasswordFormData) => {
      console.log(data);
      toast.success("Password successfully created!", {
        description: "Your password meets all requirements.",
      });
      form.reset();
    },
    [form]
  );

  const onError = useCallback(() => {
    toast.error("Password validation failed!");
  }, []);

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Password</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="flex flex-col w-full gap-6"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className="pr-10"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex={-1}
                      aria-label={
                        showPassword
                          ? "Hide password for password field"
                          : "Show password for password field"
                      } // Unique label
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="confirmPassword">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      className="pr-10"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      tabIndex={-1}
                      aria-label={
                        showConfirmPassword
                          ? "Hide password for confirm password field"
                          : "Show password for confirm password field"
                      } // Unique label
                    >
                      {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Validating..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
