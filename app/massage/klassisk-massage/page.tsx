import { TreatmentPage, treatmentMetadata } from "@/components/TreatmentPage";

export const metadata = treatmentMetadata("klassisk-massage");

export default function Page() {
  return <TreatmentPage slug="klassisk-massage" />;
}
