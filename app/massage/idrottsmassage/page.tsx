import { TreatmentPage, treatmentMetadata } from "@/components/TreatmentPage";

export const metadata = treatmentMetadata("idrottsmassage");

export default function Page() {
  return <TreatmentPage slug="idrottsmassage" />;
}
