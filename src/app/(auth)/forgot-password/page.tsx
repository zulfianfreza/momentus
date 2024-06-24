'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { FcGoogle } from 'react-icons/fc';
import { LuArrowLeft, LuMail } from 'react-icons/lu';

const loginSchema = z.object({
  email: z.string().email(),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function ForgotPasswordPage() {
  const form = useForm<LoginSchema>({
    defaultValues: {
      email: '',
    },
  });

  const actualSubmit: SubmitHandler<LoginSchema> = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <div className="">
      <div className=" fixed right-0 h-screen w-1/2 p-2 pl-0">
        <div className=" h-full w-full rounded-xl bg-pink-100"></div>
      </div>
      <div className=" flex min-h-screen w-1/2 flex-col items-center justify-center">
        <div className=" flex w-full max-w-sm flex-col bg-white">
          <div className="">
            <h1 className=" text-lg font-medium">Lupa Password?</h1>
            <p className=" text-sm text-neutral-500">
              Jangan khawatir, kami akan mengirimkan instruksi untuk reset
              password ke email Anda.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(actualSubmit)}
              className=" mt-8 space-y-2"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className=" space-y-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className=" relative">
                        <LuMail className=" absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                        <Input
                          {...field}
                          placeholder="Email"
                          className=" pl-10"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <Button className=" mt-4">Request Reset Password</Button>
          <div className=" mx-auto mt-4">
            <Link
              href="/login"
              className=" flex items-center gap-2 text-sm text-neutral-500"
            >
              <LuArrowLeft />
              Kembali ke halaman login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
