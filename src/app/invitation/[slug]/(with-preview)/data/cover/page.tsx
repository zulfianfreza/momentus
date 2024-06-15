import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import InputItem from '@/components/common/input-item';
import CustomBreadcrumb from '@/components/custom/custom-breadcrumb';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function CoverPage() {
  return (
    <div className=" w-full p-6">
      <CustomBreadcrumb items={[{ label: 'Data' }, { label: 'Sampul' }]} />
      <HeadingConfigurationSection
        className=" mt-4"
        title="Cover"
        subtitle="Pilih desain sampul yang indah untuk memulai undangan pernikahan Anda dengan kesan pertama yang menawan."
      />

      <div className=" mt-4">
        <div className="flex flex-col gap-6">
          <div className=" flex flex-col gap-6">
            <InputItem>
              <Label>Judul Cover</Label>
              <Input
                placeholder=""
                value="The Wedding of"
              />
            </InputItem>
            <InputItem>
              <Label>Nama Panggilan Pengantin Pria</Label>
              <Input
                placeholder=""
                value="Timothy"
              />
            </InputItem>
            <InputItem>
              <Label>Nama Panggilan Pengantin Wanita</Label>
              <Input
                placeholder=""
                value="Adelia"
              />
            </InputItem>
            <InputItem>
              <Label>Cover Style</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Cover Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="style-1">Style 1</SelectItem>
                  <SelectItem value="style-2">Style 2</SelectItem>
                  <SelectItem value="style-3">Style 3</SelectItem>
                </SelectContent>
              </Select>
            </InputItem>
          </div>
        </div>
      </div>
    </div>
  );
}
