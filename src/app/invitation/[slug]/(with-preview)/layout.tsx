import Preview from "@/components/common/preview";

export default function WithPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" pl-14 lg:pl-[72px] w-full flex h-screen">
      <div className="w-[624px] h-screen flex left-14 lg:left-[72px] bg-white pt-14 lg:pt-[72px]">
        <div className=" overflow-y-auto w-full">{children}</div>
      </div>
      <Preview />
    </div>
  );
}
