import LegacyFormBridge from '@/components/LegacyFormBridge';

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LegacyFormBridge />
      {children}
    </>
  );
}
