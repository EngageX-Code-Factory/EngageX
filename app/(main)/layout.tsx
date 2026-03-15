import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EngageX',
  description: 'Exclusive access to top-tier university clubs.',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-white bg-[#0f0c29] min-h-screen">
      {children}
    </div>
  );
}