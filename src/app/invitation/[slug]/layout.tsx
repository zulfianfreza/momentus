import ConfigurationHeader from '@/components/layout/configuration-header';
import ConfigurationSidebar from '@/components/layout/configuration-sidebar';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Configuration - Invitation by Majoola',
};

export default function InvitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className={cn(
          ' h-screen w-full overflow-hidden bg-slate-50 text-neutral-900',
        )}
      >
        <ConfigurationHeader />
        <ConfigurationSidebar />
        {children}
      </div>
    </>
  );
}
