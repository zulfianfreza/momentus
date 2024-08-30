'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { COOKIE_KEY, ENV } from '@/constant/common.constant';
import { cn } from '@/lib/utils';
import { useAuthLogin } from '@/services/hooks/use-auth.service';
import { authGoogleRedirect } from '@/services/http/auth.service';
import { setCookie } from '@/utils/cookie';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Danger } from 'iconsax-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { LuEye, LuEyeOff, LuLock, LuMail } from 'react-icons/lu';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginForm() {
  // hooks

  const router = useRouter();

  // state
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'julianreza@gmail.com',
      password: 'a',
    },
  });

  const { mutate: login, isPending } = useAuthLogin();

  const actualSubmit: SubmitHandler<LoginSchema> = useCallback(
    (values) => {
      login(values, {
        onSuccess: (res) => {
          setCookie(COOKIE_KEY.ACCESS_TOKEN, res.data.access_token);
          router.replace('/invitation');
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            setError(error.response?.data?.message);
          }
        },
      });
    },
    [login, router],
  );
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(actualSubmit)}
        className=" space-y-2"
      >
        <div className=" flex min-h-screen w-1/2 flex-col items-center justify-center">
          <div className=" flex w-full max-w-md flex-col bg-white">
            <div className="">
              <h1 className=" text-lg font-medium">Welcome Back 👋</h1>
              <p className=" text-sm text-neutral-500">
                Masuk untuk melanjutkan dan mengelola undangan pernikahan anda.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              {error && (
                <Alert variant="destructive">
                  <Danger
                    size={16}
                    className=" text-red-500"
                  />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button
                variant="outline"
                className=" h-12 rounded-full"
                type="button"
                onClick={() => {
                  router.push(`${ENV.API_URL}/auth/google`);
                }}
              >
                <FcGoogle />
                Masuk dengan Google
              </Button>
            </div>

            <div className=" my-4 flex items-center justify-center gap-2">
              <hr className=" flex-1" />
              <span className=" text-sm">or</span>
              <hr className=" flex-1" />
            </div>
            <div className="flex flex-col gap-4">
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="my-4 flex justify-between">
              <div className="flex items-center gap-1">
                <Checkbox />
                <Label className=" text-sm font-normal">Remember me</Label>
              </div>
              <Link
                href="/forgot-password"
                className=" text-sm font-medium underline"
              >
                Forgot Password?
              </Link>
            </div>
            <Button
              className=" h-12 rounded-full"
              type="submit"
              disabled={isPending}
            >
              Masuk
            </Button>
            <p className=" mt-4 text-center text-sm">
              Belum punya akun?{' '}
              <Link
                href="/register"
                className=" font-medium text-primary"
              >
                Buat Sekarang
              </Link>
            </p>
          </div>
        </div>
      </form>
    </Form>
  );
}
