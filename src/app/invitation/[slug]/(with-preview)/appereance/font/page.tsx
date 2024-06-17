import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LIST_FONT_TEXT, LIST_FONT_TITLE } from '@/constant/font.constant';
import { cn } from '@/lib/utils';

export default function FontPage() {
  // tabs menu
  const TABS_MENU = [
    {
      label: 'Title',
      value: 'title',
    },
    {
      label: 'Text',
      value: 'text',
    },
  ];

  return (
    <div className=" w-full p-5">
      <HeadingConfigurationSection title="Font" />
      <Tabs
        defaultValue="title"
        className=" mt-4 w-full"
      >
        <TabsList className=" my-0 w-full justify-start rounded-none border-b bg-transparent px-0">
          {TABS_MENU.map((menu) => (
            <TabsTrigger
              key={menu.value}
              value={menu.value}
              className=" h-10 rounded-none border-b-2 border-transparent px-2.5 data-[state=active]:border-pink-600"
            >
              {menu.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className=" mt-4">
          <TabsContent value="title">
            <div className="grid grid-cols-3 gap-2">
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
          </TabsContent>
          <TabsContent value="text">
            <div className="grid grid-cols-3 gap-2">
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
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
