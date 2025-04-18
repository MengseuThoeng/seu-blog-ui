"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginResponseUser } from "@/types/User";

import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function LoginPage() {
    const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // clear the form values
    form.reset();

    const url = `http://localhost:8080/api/v1/auth/login?username=${values.username}&password=${values.password}`;
    try {
        const res = await fetch(url, {
          method: "POST",
        });
    
        if (!res.ok) throw new Error("Login failed");
    
        const user: LoginResponseUser = await res.json();
    
        // ✅ Store to localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // ✅ Store to sessionStorage
        sessionStorage.setItem("user", JSON.stringify(user));
        
    
        console.log("User stored in localStorage:", user);

        // router.push("/");
        window.location.href="/" // Redirect to home page after login

      } catch (err) {
        console.error("Login error:", err);
      }
    

    console.log(values);
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    Required *
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
