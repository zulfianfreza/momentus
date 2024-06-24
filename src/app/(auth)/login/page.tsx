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
import React, { useCallback, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineLockClosed } from 'react-icons/hi2';
import { LuEye, LuEyeOff, LuLock, LuMail } from 'react-icons/lu';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const form = useForm<LoginSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const actualSubmit: SubmitHandler<LoginSchema> = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <div className="">
      <div className=" fixed right-0 h-screen w-1/2 p-2 pl-0">
        <div className=" h-full w-full overflow-hidden rounded-xl bg-[url(/images/bg-3d-abstract.jpg)] bg-cover bg-center"></div>
      </div>
      <div className=" flex min-h-screen w-1/2 flex-col items-center justify-center">
        <div className=" flex w-full max-w-sm flex-col bg-white">
          <div className="">
            <h1 className=" text-lg font-medium">Welcome Back 👋</h1>
            <p className=" text-sm text-neutral-500">
              Masuk untuk melanjutkan dan mengelola undangan pernikahan anda.
            </p>
          </div>

          <Button
            variant="outline"
            className=" mt-8"
          >
            <FcGoogle />
            Masuk dengan Google
          </Button>
          <div className=" my-4 flex items-center justify-center gap-2">
            <hr className=" flex-1" />
            <span className=" text-sm">or</span>
            <hr className=" flex-1" />
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(actualSubmit)}
              className=" space-y-2"
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className=" space-y-1">
                    <FormLabel>Password</FormLabel>
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
                          placeholder="password"
                          className=" px-10"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <div className="my-4 flex justify-between">
            <div className="flex items-center gap-1">
              <Checkbox />
              <Label className=" text-xs font-normal">Remember me</Label>
            </div>
            <Link
              href="/forgot-password"
              className=" text-xs font-medium underline"
            >
              Forgot Password?
            </Link>
          </div>
          <Button>Masuk</Button>
          <p className=" mt-4 text-center text-sm">
            Belum punya akun?{' '}
            <Link
              href="/register"
              className=" font-medium text-pink-600"
            >
              Buat Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
