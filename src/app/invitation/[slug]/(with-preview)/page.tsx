import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  PiAddressBook,
  PiAddressBookTabs,
  PiHandsPraying,
} from "react-icons/pi";
import { TbMoodCheck } from "react-icons/tb";

export default function DashboardPage() {
  return (
    <div className=" p-5 w-full">
      <div className="">
        <HeadingConfigurationSection title="Dashboard" />

        <div className=" mt-4 grid grid-cols-3 gap-4">
          <div className=" w-full p-4 border items-start rounded-xl shadow-sm flex flex-col gap-4">
            <div className=" bg-pink-100 h-10 w-10 rounded-xl flex items-center justify-center">
              <PiAddressBookTabs className=" text-pink-600" size={24} />
            </div>
            <div className="">
              <p className=" text-neutral-500 text-sm">Jumlah Tamu</p>
              <h1 className=" font-bold text-2xl">1160</h1>
            </div>
          </div>
          <div className=" w-full p-4 border items-start rounded-xl shadow-sm flex flex-col gap-2">
            <div className=" bg-blue-100 h-10 w-10 rounded-xl flex items-center justify-center">
              <TbMoodCheck className=" text-blue-600" size={24} />
            </div>
            <p className=" text-neutral-500 text-sm">Jumlah Kehadiran</p>
            <h1 className=" font-bold text-2xl">780</h1>
          </div>
          <div className=" w-full p-4 border items-start rounded-xl shadow-sm flex flex-col gap-2">
            <div className=" bg-green-100 h-10 w-10 rounded-xl flex items-center justify-center">
              <PiHandsPraying className=" text-green-600" size={24} />
            </div>
            <p className=" text-neutral-500 text-sm">Jumlah Ucapan & Doa</p>
            <h1 className=" font-bold text-2xl">268</h1>
          </div>
        </div>
      </div>

      <div className=" mt-4">
        <HeadingConfigurationSection title="Do'a & Ucapan" />
        <div className=" border rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className=" bg-neutral-100">
                <TableHead>No.</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Kehadiran</TableHead>
                <TableHead>Do&apos;a & Ucapan</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>1.</TableCell>
                <TableCell>Adam Suseno</TableCell>
                <TableCell>
                  <Badge>Hadir</Badge>
                </TableCell>
                <TableCell>Samawa</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
