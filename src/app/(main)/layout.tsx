import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full">
      <div className=" fixed right-4 bottom-20">
        <Link
          href="https://wa.me/"
          target="_blank"
          className=" h-12 relative aspect-square rounded-full bg-green-500 flex justify-center items-center"
        >
          <div className=" w-2.5 aspect-square rounded-full bg-pink-600 absolute top-[2px] right-[2px]" />
          <SiWhatsapp className=" text-white" size={24} />
        </Link>
      </div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
