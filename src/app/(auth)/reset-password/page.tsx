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
import React, { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { FcGoogle } from 'react-icons/fc';
import { LuArrowLeft, LuEye, LuEyeOff, LuLock } from 'react-icons/lu';
import { cn } from '@/lib/utils';

const loginSchema = z.object({
  password: z.string(),
  confirmationPassword: z.string(),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function ForgotPasswordPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const toggleConfirmPassword = useCallback(() => {
    setShowConfirmPassword((prev) => !prev);
  }, []);

  const form = useForm<LoginSchema>({
    defaultValues: {
      password: '',
      confirmationPassword: '',
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
            <h1 className=" text-lg font-medium">Reset Password</h1>
            <p className=" text-sm text-neutral-500">
              Buat password baru untuk akun Anda agar dapat masuk kembali.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(actualSubmit)}
              className=" mt-8 space-y-2"
            >
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className=" space-y-1">
                    <FormLabel>Password Baru</FormLabel>
                    <FormControl>
                      <div className=" relative">
                        <LuLock className=" absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                        <LuEye
                          onClick={togglePassword}
                          className={cn(
                            ' absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-neutral-500',
                            { hidden: !showPassword },
                          )}
                        />
                        <LuEyeOff
                          onClick={togglePassword}
                          className={cn(
                            ' absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-neutral-500',
                            { hidden: showPassword },
                          )}
                        />
                        <Input
                          {...field}
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Password Baru"
                          className=" px-10"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmationPassword"
                render={({ field }) => (
                  <FormItem className=" space-y-1">
                    <FormLabel>Konfirmasi Password Baru</FormLabel>
                    <FormControl>
                      <div className=" relative">
                        <LuLock className=" absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                        <LuEye
                          onClick={toggleConfirmPassword}
                          className={cn(
                            ' absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-neutral-500',
                            { hidden: !showConfirmPassword },
                          )}
                        />
                        <LuEyeOff
                          onClick={toggleConfirmPassword}
                          className={cn(
                            ' absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-neutral-500',
                            { hidden: showConfirmPassword },
                          )}
                        />
                        <Input
                          {...field}
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Konfirmasi Password Baru"
                          className=" px-10"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <Button className=" mt-4">Reset Password</Button>
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
