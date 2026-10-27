import { SubsiteHeader } from "@/components/SubsiteHeader";

export default function MassageLayout({ children }: LayoutProps<"/massage">) {
  return (
    <div className="tema-massage flex flex-1 flex-col">
      <SubsiteHeader variant="massage" />
      <main id="innehall" className="flex-1">
        {children}
      </main>
    </div>
  );
}
