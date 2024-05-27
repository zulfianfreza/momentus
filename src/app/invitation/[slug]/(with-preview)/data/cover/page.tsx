import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
import InputItem from "@/components/common/input-item";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CoverPage() {
  return (
    <div className=" p-6 w-full">
      <HeadingConfigurationSection
        title="Cover"
        subtitle="Pilih desain sampul yang indah untuk memulai undangan pernikahan Anda dengan kesan pertama yang menawan."
      />

      <div className=" mt-4">
        <div className="flex flex-col gap-6">
          <div className=" flex flex-col gap-6">
            <InputItem>
              <Label>Judul Cover</Label>
              <Input placeholder="" value="The Wedding of" />
            </InputItem>
            <InputItem>
              <Label>Nama Panggilan Pengantin Pria</Label>
              <Input placeholder="" value="Timothy" />
            </InputItem>
            <InputItem>
              <Label>Nama Panggilan Pengantin Wanita</Label>
              <Input placeholder="" value="Adelia" />
            </InputItem>
            <InputItem>
              <Label>Cover Style</Label>
              <select name="" id="" className=" border h-12 rounded-lg">
                <option value=""></option>
              </select>
            </InputItem>
          </div>
        </div>
      </div>
    </div>
  );
}
