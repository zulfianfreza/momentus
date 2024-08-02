export default function WithoutPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex h-screen w-full pl-[72px]">
      <div className=" left-[88px] flex h-screen w-full p-2 pt-14 lg:left-[88px] lg:pt-[80px]">
        <div className=" h-full w-full overflow-y-auto rounded-xl bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
