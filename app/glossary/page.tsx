import PageHero from "@/app/components/ui/PageHero/PageHero";
import { glossary } from "@/lib/glossary";
import GlossaryClient from "./GlossaryClient";

export default function GlossaryPage() {
  return (
    <>
      <PageHero
        title="Denizcilik Sözlüğü"
        description="Denizcilik, yatçılık ve marina dünyasında kullanılan önemli terimleri keşfedin."
        image="/images/events/events-hero.jpg"
      />

      <section className="px-[8%] py-24 lg:px-[12%]">
        <div className="mx-auto max-w-7xl">
          <GlossaryClient groups={glossary} />
        </div>
      </section>
    </>
  );
}