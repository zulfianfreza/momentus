'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useAuthRegister } from '@/services/hooks/use-auth.service';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { LuEye, LuEyeOff, LuLock, LuMail, LuUser2 } from 'react-icons/lu';
import { z } from 'zod';

const registerSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name cannot be longer than 50 characters' })
    .regex(/^[a-zA-Z\s]+$/, {
      message: 'Name can only contain letters and spaces',
    }),
  email: z.string().email({ message: 'Must be a valid email' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(32, { message: 'Password cannot be longer than 32 characters' })
    .regex(/[a-z]/, {
      message: 'Password must contain at least one lowercase letter',
    })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
    .regex(/[@$!%*?&]/, {
      message: 'Password must contain at least one special character (@$!%*?&)',
    }),
});

type RegisterSchema = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  // hooks
  const router = useRouter();

  // state
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const { mutate: register, isPending } = useAuthRegister();

  const actualSubmit: SubmitHandler<RegisterSchema> = useCallback(
    (values) => {
      register(values, {
        onSuccess: () => {
          router.replace('/invitation');
        },
      });
    },
    [register, router],
  );

  return (
    <div className="">
      <div className=" fixed right-0 h-screen w-1/2 p-2 pl-0">
        <div className=" h-full w-full rounded-xl bg-primary-100"></div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(actualSubmit)}
          className=" space-y-4"
        >
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
              <div className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                className=" mt-4 h-12 rounded-full"
                disabled={isPending}
              >
                Daftar
              </Button>
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
        </form>
      </Form>
    </div>
  );
}
