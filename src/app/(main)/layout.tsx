import MainFooter from '@/components/layout/main-footer';
import MainHeader from '@/components/layout/main-header';
import { getMe } from '@/services/http/auth.service';
import Link from 'next/link';
import { SiWhatsapp } from 'react-icons/si';

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getMe();
  return (
    <div className=" w-full">
      <div className=" fixed bottom-20 right-4">
        <Link
          href="https://wa.me/"
          target="_blank"
          className=" relative flex aspect-square h-12 items-center justify-center rounded-full bg-green-500"
        >
          <div className=" absolute right-[2px] top-[2px] aspect-square w-2.5 rounded-full bg-primary" />
          <SiWhatsapp
            className=" text-white"
            size={24}
          />
        </Link>
      </div>
      <MainHeader user={user.data} />
      {children}
      <MainFooter />
    </div>
  );
}
