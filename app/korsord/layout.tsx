import { SubsiteHeader } from "@/components/SubsiteHeader";

export default function KorsordLayout({ children }: LayoutProps<"/korsord">) {
  return (
    <div className="tema-korsord flex flex-1 flex-col">
      <SubsiteHeader variant="korsord" />
      <main id="innehall" className="flex-1">
        {children}
      </main>
    </div>
  );
}
