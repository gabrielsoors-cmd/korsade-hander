import { TreatmentPage, treatmentMetadata } from "@/components/TreatmentPage";

export const metadata = treatmentMetadata("avslappnande-massage");

export default function Page() {
  return <TreatmentPage slug="avslappnande-massage" />;
}
