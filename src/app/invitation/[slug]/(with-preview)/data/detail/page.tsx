"use client";

import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
import InputItem from "@/components/common/input-item";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format, setHours, setMinutes } from "date-fns";
import { InfoCircle, Information } from "iconsax-react";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePage() {
  const [date, setDate] = useState<Date>();
  const [showAkadDate, setShowAkadDate] = useState<boolean>(false);

  const [startDate, setStartDate] = useState<Date | null>(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div className=" p-5 w-full">
      <HeadingConfigurationSection
        title="Detail Acara"
        subtitle="Tambahkan informasi penting seperti tanggal dan lokasi pernikahan Anda untuk memudahkan para tamu."
      />

      <div className=" mt-8">
        <h1 className=" font-medium text-lg">Akad</h1>
        <div className="flex flex-col gap-4 mt-4">
          <InputItem>
            <Label>Tanggal Akad</Label>
            <div className=" w-full flex flex-col">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                filterTime={filterPassedTime}
                dateFormat="MMMM d, yyyy h:mm aa"
                className=" w-full h-12 rounded-xl text-sm border px-3"
              />
            </div>
          </InputItem>
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
