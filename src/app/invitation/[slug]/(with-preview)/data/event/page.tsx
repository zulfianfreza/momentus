'use client';

import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import InputItem from '@/components/common/input-item';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { format, setHours, setMinutes } from 'date-fns';
import { InfoCircle, Information } from 'iconsax-react';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { id } from 'date-fns/locale';

export default function DatePage() {
  const [date, setDate] = useState<Date>();
  const [showAkadDate, setShowAkadDate] = useState<boolean>(false);

  const [startDate, setStartDate] = useState<Date | null>(
    setMinutes(new Date(), 0),
  );
  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div className=" w-full p-5">
      <HeadingConfigurationSection
        title="Informasi Acara"
        subtitle="Tambahkan informasi penting seperti tanggal dan lokasi pernikahan Anda untuk memudahkan para tamu."
      />

      <div className=" mt-4">
        <h1 className=" text-lg font-medium">Akad</h1>
        <div className="mt-4 flex flex-col gap-4">
          <InputItem>
            <Label>Judul</Label>
            <Input placeholder="Akad" />
          </InputItem>
          <div className="grid grid-cols-2 gap-4">
            <InputItem>
              <Label>Tanggal</Label>
              <div className=" flex w-full flex-col">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeCaption="Jam"
                  locale={id}
                  filterTime={filterPassedTime}
                  dateFormat="MMMM d, yyyy HH:mm"
                  timeFormat="HH:mm"
                  className=" h-12 w-full rounded-lg border px-3 text-sm focus-visible:outline-pink-600"
                />
              </div>
            </InputItem>
            <InputItem>
              <Label>Berakhir</Label>
              <div className=" flex w-full flex-col">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeCaption="Jam"
                  showTimeSelectOnly
                  timeFormat="HH:mm"
                  filterTime={filterPassedTime}
                  dateFormat="HH:mm"
                  className=" h-12 w-full rounded-lg border px-3 text-sm focus-visible:outline-pink-600"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label className=" text-xs font-normal text-neutral-500">
                  Tampilkan - Selesai
                </Label>
              </div>
            </InputItem>
          </div>
          <InputItem>
            <Label>Tempat Acara</Label>
            <Input value="GOR Kertajaya" />
          </InputItem>
          <InputItem>
            <Label>Alamat</Label>
            <Textarea value="GOR Kertajaya" />
          </InputItem>
          <InputItem>
            <Label className=" flex items-center gap-1">
              Google Maps URL <InfoCircle size={16} />
            </Label>
            <Textarea value="GOR Kertajaya" />
          </InputItem>
          <InputItem>
            <Label className=" flex items-center gap-1">
              Google Maps Embed <InfoCircle size={16} />
            </Label>
            <Textarea value="GOR Kertajaya" />
          </InputItem>
        </div>
      </div>
      <div className=" mt-4">
        <h1 className=" text-lg font-medium">Resepsi</h1>
        <div className="mt-4 flex flex-col gap-4">
          <InputItem>
            <Label>Sama dengan Akad</Label>
            <Switch />
          </InputItem>
          <InputItem>
            <Label>Judul</Label>
            <Input placeholder="Akad" />
          </InputItem>
          <div className="grid grid-cols-2 gap-4">
            <InputItem>
              <Label>Tanggal</Label>
              <div className=" flex w-full flex-col">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeCaption="Jam"
                  filterTime={filterPassedTime}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className=" h-12 w-full rounded-lg border px-3 text-sm focus-visible:outline-pink-600"
                />
              </div>
            </InputItem>
            <InputItem>
              <Label>Berakhir</Label>
              <div className=" flex w-full flex-col">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  timeCaption="Jam"
                  showTimeSelectOnly
                  timeFormat="HH:mm"
                  filterTime={filterPassedTime}
                  dateFormat="HH:mm"
                  className=" h-12 w-full rounded-lg border px-3 text-sm focus-visible:outline-pink-600"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label className=" text-xs font-normal text-neutral-500">
                  Tampilkan - Selesai
                </Label>
              </div>
            </InputItem>
          </div>
          <InputItem>
            <Label>Tempat Acara</Label>
            <Input value="GOR Kertajaya" />
          </InputItem>
          <InputItem>
            <Label>Alamat</Label>
            <Textarea value="GOR Kertajaya" />
          </InputItem>
          <InputItem>
            <Label className=" flex items-center gap-1">
              Google Maps URL <InfoCircle size={16} />
            </Label>
            <Textarea value="GOR Kertajaya" />
          </InputItem>
          <InputItem>
            <Label className=" flex items-center gap-1">
              Google Maps Embed <InfoCircle size={16} />
            </Label>
            <Textarea value="GOR Kertajaya" />
          </InputItem>
        </div>
      </div>
    </div>
  );
}
