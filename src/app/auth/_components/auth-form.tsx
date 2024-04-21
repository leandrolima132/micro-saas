"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit((data) => {});
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Sign in</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email to receive a magic link.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              required
              type="email"
              {...form.register("email")}
            />
          </div>
          <Button className="w-full" type="submit">
            Send magic link
          </Button>
        </form>
      </div>
    </div>
  );
}
