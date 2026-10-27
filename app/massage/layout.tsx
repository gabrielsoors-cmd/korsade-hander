import { SiteHeader } from "@/components/SiteHeader";

export default function MassageLayout({ children }: LayoutProps<"/massage">) {
  return (
    <>
      <SiteHeader variant="massage" />
      <main id="innehall" className="flex-1">
        {children}
      </main>
    </>
  );
}
