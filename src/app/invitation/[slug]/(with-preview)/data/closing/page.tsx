import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import CustomBreadcrumb from '@/components/custom/custom-breadcrumb';

export default function CLosingPage() {
  return (
    <div className=" w-full p-5">
      <CustomBreadcrumb items={[{ label: 'Data' }, { label: 'Penutup' }]} />
      <HeadingConfigurationSection
        className=" mt-4"
        title="Love Story"
        subtitle="Bagikan perjalanan cinta Anda dari awal hingga hari istimewa ini dengan para tamu."
      />
    </div>
  );
}
