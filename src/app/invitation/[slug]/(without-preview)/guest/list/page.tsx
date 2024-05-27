import HeadingConfigurationSection from "@/components/common/heading-configuration-section";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Send, Share, Trash } from "iconsax-react";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";
import { PiShare, PiShareNetwork } from "react-icons/pi";

export default function SettingPage() {
  const DUMMY_VISITOR = [
    {
      id: 1,
      recipient_name: "Adam Berriz",
      recipient_whatsapp: "082229872",
      recipient_address: "Jl. Venus",
      created_at: "2024-05-25T17:06:38+00:00",
      recipient_greeting: "Yth",
    },
  ];
  return (
    <div className=" p-5 w-full">
      <HeadingConfigurationSection
        title="Daftar Tamu"
        subtitle="Tambahkan dan kelola daftar tamu Anda untuk memastikan semua orang yang spesial hadir di hari istimewa Anda."
      />

      <div className=" mt-4">
        <div className="flex justify-between">
          <Button>Tambah Tamu</Button>
          <div className="flex gap-2">
            <Button>Export</Button>
            <Button className="" variant="success">
              Import
            </Button>
          </div>
        </div>
        <div className=" mt-2 border rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className=" bg-neutral-100">
                <TableHead>No.</TableHead>
                <TableHead>Nama Tamu</TableHead>
                <TableHead>Nomor Hp.</TableHead>
                <TableHead>Alamat</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {DUMMY_VISITOR.map((visitor, i) => (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{visitor.recipient_name}</TableCell>
                  <TableCell>{visitor.recipient_whatsapp}</TableCell>
                  <TableCell>{visitor.recipient_address}</TableCell>
                  {/* <TableCell className=" text-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="ghost">
                        <HiMiniEllipsisHorizontal size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" side="bottom">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuItem>Hapus</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell> */}
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="destructive" size="icon-sm">
                        <Trash size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
