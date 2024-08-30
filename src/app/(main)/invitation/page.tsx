import Container from '@/components/common/container';
import { LuPlus } from 'react-icons/lu';

export default async function page() {
  return (
    <Container>
      <h1 className=" text-lg font-medium text-neutral-900">Daftar Undangan</h1>
      <div className=" mt-4 grid grid-cols-6">
        <div className=" flex aspect-[9/16] w-full flex-col items-center justify-center rounded-xl border">
          <LuPlus />
        </div>
      </div>
    </Container>
  );
}
