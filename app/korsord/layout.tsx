import { SiteHeader } from "@/components/SiteHeader";

export default function KorsordLayout({ children }: LayoutProps<"/korsord">) {
  return (
    <>
      <SiteHeader variant="korsord" />
      <main id="innehall" className="flex-1">
        {children}
      </main>
    </>
  );
}
