export default function WithoutPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" pl-14 w-full flex h-screen">
      <div className=" w-full h-screen flex left-14 lg:left-[72px] bg-white pt-14 lg:pt-[72px]">
        <div className=" overflow-y-auto w-full">{children}</div>
      </div>
    </div>
  );
}
