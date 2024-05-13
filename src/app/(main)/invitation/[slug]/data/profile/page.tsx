import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function ProfilePage() {
  return (
    <div className=" p-6 w-full">
      <h1 className=" text-neutral-900 text-xl font-medium">Profil</h1>

      <Accordion
        type="single"
        collapsible
        defaultValue="configuration"
        className=" flex flex-col gap-2 mt-4"
      >
        <AccordionItem value="configuration" className=" border rounded-lg">
          <AccordionTrigger className=" h-12 px-4">
            Konfigurasi
          </AccordionTrigger>
          <AccordionContent className=" border-t p-4">
            <div className=" flex flex-col">
              <div className=" flex flex-col space-y-2">
                <Label>Urutkan Pengantin Pria Terlebih Dahulu</Label>
                <Switch />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="groom" className=" border rounded-lg">
          <AccordionTrigger className=" h-12 px-4">
            Pengantin Pria
          </AccordionTrigger>
          <AccordionContent className=" border-t p-4">
            <div className=" flex flex-col gap-6">
              <div className=" space-y-2">
                <Label>Username Instagram</Label>
                <div className=" relative rounded-lg overflow-hidden">
                  <div className=" w-12 aspect-square bg-neutral-100 flex justify-center items-center absolute top-0 left-0">
                    @
                  </div>
                  <Input placeholder="adam.berriz" className=" pl-14" />
                </div>
              </div>

              <div className=" space-y-2">
                <Label>Nama Pria</Label>
                <Input placeholder="Adam Berriz PhD" />
              </div>

              <div className=" space-y-2">
                <Label>Anak ke</Label>
                <Input placeholder="Pertama/Kedua/Terakhir/Bungsu/Tunggal" />
              </div>

              <div className=" space-y-2">
                <Label>Nama Ayah</Label>
                <Input placeholder="John Doe" />
              </div>

              <div className=" space-y-2">
                <Label>Nama Ibu</Label>
                <Input placeholder="Maria Anne" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="bride" className=" border rounded-lg">
          <AccordionTrigger className=" h-12 px-4">
            Pengantin Wanita
          </AccordionTrigger>
          <AccordionContent className=" border-t p-4">
            <div className=" flex flex-col gap-6">
              <div className=" space-y-2">
                <Label>Username Instagram</Label>
                <div className=" relative rounded-lg overflow-hidden">
                  <div className=" w-12 aspect-square bg-neutral-100 flex justify-center items-center absolute top-0 left-0">
                    @
                  </div>
                  <Input placeholder="adam.berriz" className=" pl-14" />
                </div>
              </div>

              <div className=" space-y-2">
                <Label>Nama Wanita</Label>
                <Input placeholder="Adam Berriz PhD" />
              </div>

              <div className=" space-y-2">
                <Label>Anak ke</Label>
                <Input placeholder="Pertama/Kedua/Terakhir/Bungsu/Tunggal" />
              </div>

              <div className=" space-y-2">
                <Label>Nama Ayah</Label>
                <Input placeholder="John Doe" />
              </div>

              <div className=" space-y-2">
                <Label>Nama Ibu</Label>
                <Input placeholder="Maria Anne" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* begin: configuration */}

      {/* end: configuration */}

      {/* begin: groom */}

      {/* end: groom */}

      {/* begin: bride */}

      {/* end: bride */}
    </div>
  );
}
