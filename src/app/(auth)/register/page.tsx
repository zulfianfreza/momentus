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
import { LuEye, LuEyeOff, LuLock, LuMail, LuUser2 } from 'react-icons/lu';
import { cn } from '@/lib/utils';

const loginSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const form = useForm<LoginSchema>({
    defaultValues: {
      name: '',
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
        <div className=" bg-primary-100 h-full w-full rounded-xl"></div>
      </div>
      <div className=" flex min-h-screen w-1/2 flex-col items-center justify-center">
        <div className=" flex w-full max-w-md flex-col bg-white">
          <div className="">
            <h1 className=" text-lg font-medium">Gabung Sekarang</h1>
            <p className=" text-sm text-neutral-500">
              Daftar sekarang untuk mulai membuat dan mengelola undangan
              pernikahan Anda.
            </p>
          </div>

          <Button
            variant="outline"
            className=" mt-8 h-12 rounded-full"
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
              className=" space-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className=" space-y-1">
                    <FormLabel>Nama</FormLabel>
                    <FormControl>
                      <div className=" relative">
                        <LuUser2 className=" absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                        <Input
                          {...field}
                          placeholder="Nama"
                          className=" h-12 pl-10"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
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
                          className=" h-12 pl-10"
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
                          className=" h-12 px-10"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <Button className=" mt-4 h-12 rounded-full">Daftar</Button>
          <p className=" mt-4 text-center text-sm">
            Sudah punya akun?{' '}
            <Link
              href="/login"
              className=" font-medium text-primary"
            >
              Masuk Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
