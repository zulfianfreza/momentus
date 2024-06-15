import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import { LIST_FONT_TEXT, LIST_FONT_TITLE } from '@/constant/font.constant';
import { cn } from '@/lib/utils';

export default function FontPage() {
  return (
    <div className=" w-full p-5">
      <HeadingConfigurationSection title="Font" />

      <p>Title</p>
      <div className=" mt-4 grid grid-cols-3 gap-2">
        {LIST_FONT_TITLE.map((font) => (
          <div
            key={font.slug}
            className={cn(
              ' flex min-h-20 w-full items-center justify-center rounded-lg border text-lg',
              font.font.className,
            )}
          >
            {font.title}
          </div>
        ))}
      </div>
      <div className=" mt-4 grid grid-cols-3 gap-2">
        {LIST_FONT_TEXT.map((font) => (
          <div
            key={font.slug}
            className={cn(
              ' flex min-h-20 w-full items-center justify-center rounded-lg border text-lg',
              font.font.className,
            )}
          >
            {font.title}
          </div>
        ))}
      </div>
    </div>
  );
}
