"use client";

import * as z from "zod";
import { CardWrapper } from "../auth/card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "../ui/form";
// import { FormError } from "../form-error";
// import { FormSuccess } from "../form-success";
import { LoginSchema } from "@/schemas";
import { Button } from "../ui/button";
import { login } from "../../../actions/login";
import { useTransition, useState } from "react";
import { FormError } from "../form-error";
import { FormSucess } from "../form-success";
export const LoginForm = () => {
  //This code initializes a form using the useForm hook, applying a validation schema (LoginSchema) with Zod and setting default values for the email and password fields.

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //The useTransition hook in React allows you to manage transitions between UI states by marking updates as "transitions"

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const onSubmit = (values) => {
    
    setError('');
    setSuccess('');
    
    startTransition(() => {
      login(values).then((data) => {
        if (data?.error) {
            form.reset();
            setError(data?.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data?.success);
          }
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="john.doe@example.com"
                      type="email"
                    />
                  </FormControl>
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
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="*********"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSucess message={success} />
          <Button type="submit" disabled={isPending} className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
