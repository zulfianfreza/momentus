import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GalleryPage() {
  const TABS_MENU = [
    {
      label: "Konfigurasi",
      value: "configuration",
    },
    {
      label: "Photo",
      value: "photo",
    },
  ];
  return (
    <div className=" p-6 w-full">
      <HeadingConfigurationSection
        title="Gallery"
        subtitle="Tambahkan foto-foto spesial untuk membagikan momen berharga dalam perjalanan cinta kalian."
      />
      <Tabs defaultValue="configuration" className=" w-full mt-4">
        <TabsList className=" bg-transparent border-b rounded-none px-0 my-0 w-full justify-start gap-4">
          {TABS_MENU.map((menu) => (
            <TabsTrigger
              key={menu.value}
              value={menu.value}
              className=" px-0 border-b-2 border-transparent data-[state=active]:border-pink-600 rounded-none h-10"
            >
              {menu.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className=" mt-4">
          <TabsContent value="configuration">
            <div className=" space-y-2">
              <Label>Gallery Style</Label>
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="grid" id="r1" />
                  <Label htmlFor="r1">Grid</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="slider" id="r2" />
                  <Label htmlFor="r2">Slider</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="slideshow" id="r2" />
                  <Label htmlFor="r2">Slideshow</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="slideshow-with-thumbnail" id="r3" />
                  <Label htmlFor="r3">Slideshow with Thumbnail</Label>
                </div>
              </RadioGroup>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
