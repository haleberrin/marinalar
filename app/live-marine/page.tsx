import PageHero from "@/app/components/ui/PageHero/PageHero";
import LiveMarineClient from "./LiveMarineClient";

export default function LiveMarinePage() {
  return (
    <>
      <PageHero
        title="Canlı Deniz Trafiği"
        description="Türkiye kıyılarındaki deniz trafiğini, gemileri ve deniz haritalarını canlı olarak takip edin."
        image="/images/events/events-hero.jpg"
      />

      <LiveMarineClient />
    </>
  );
}