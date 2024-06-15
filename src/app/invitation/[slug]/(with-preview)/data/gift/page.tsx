import HeadingConfigurationSection from '@/components/common/heading-configuration-section';
import CustomBreadcrumb from '@/components/custom/custom-breadcrumb';

export default function GiftPage() {
  return (
    <div className=" w-full p-5">
      <CustomBreadcrumb items={[{ label: 'Data' }, { label: 'Hadiah' }]} />
      <HeadingConfigurationSection
        className=" mt-4"
        title="Hadiah"
      />
    </div>
  );
}
