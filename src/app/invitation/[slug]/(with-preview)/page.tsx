import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { People } from 'iconsax-react';
import Link from 'next/link';
import {
  PiAddressBook,
  PiAddressBookTabs,
  PiHandsPraying,
} from 'react-icons/pi';
import { TbMoodCheck } from 'react-icons/tb';

export default function DashboardPage() {
  return (
    <div className=" w-full p-5">
      <div className=" space-y-2">
        <HeadingConfigurationSection title="Dashboard" />

        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className=" flex w-full flex-col items-start gap-4 rounded-xl border p-4 shadow-sm">
            <div className=" flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100/80">
              <People
                className=" text-primary"
                size={24}
              />
            </div>
            <div className="">
              <p className=" text-sm text-neutral-500">Jumlah Tamu</p>
              <h1 className=" text-2xl font-bold">1160</h1>
            </div>
          </div>
          <div className=" flex w-full flex-col items-start gap-4 rounded-xl border p-4 shadow-sm">
            <div className=" flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100/80">
              <TbMoodCheck
                className=" text-blue-600"
                size={24}
              />
            </div>
            <div className="">
              <p className=" text-sm text-neutral-500">Jumlah Kehadiran</p>
              <h1 className=" text-2xl font-bold">780</h1>
            </div>
          </div>
          <div className=" flex w-full flex-col items-start gap-4 rounded-xl border p-4 shadow-sm">
            <div className=" flex h-10 w-10 items-center justify-center rounded-xl bg-green-100/80">
              <PiHandsPraying
                className=" text-green-600"
                size={24}
              />
            </div>
            <div className="">
              <p className=" text-sm text-neutral-500">Ucapan & Doa</p>
              <h1 className=" text-2xl font-bold">268</h1>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h1 className=" font-medium">Do&apos;a & Ucapan</h1>
          <Link
            href="/"
            className=" text-primary text-sm"
          >
            Lihat semua
          </Link>
        </div>
        <div className=" overflow-hidden rounded-xl border">
          <Table className=" whitespace-nowrap">
            <TableHeader>
              <TableRow className=" bg-neutral-100">
                <TableHead>No.</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Kehadiran</TableHead>
                <TableHead>Do&apos;a & Ucapan</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>1.</TableCell>
                <TableCell>Adam Suseno</TableCell>
                <TableCell>29 Mei 2024 16:20</TableCell>
                <TableCell>
                  <Badge
                    variant="success"
                    size="sm"
                  >
                    Hadir
                  </Badge>
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
