import {
  Anchor,
  BadgeCheck,
  CalendarDays,
  Ship,
  CircleAlert,
} from "lucide-react";

import { Marina } from "@/types/marina";
import MarinaCard from "../../ui/marina/MarinaCard";
import SectionTitle from "../../ui/marina/SectionTitle";

interface Props {
  marina: Marina;
}

export default function MarinaSummary({ marina }: Props) {
  const hasSummary =
    marina.openingYear ||
    marina.capacity?.maxBoatLength ||
    marina.capacity?.seaBerth ||
    marina.blueFlag ||
    marina.customsClearance;

  if (!hasSummary) return null;

  return (
    <MarinaCard dark className="p-6">
      <SectionTitle light>
        Marina Bilgi Özeti
      </SectionTitle>

      <div className="mt-6 grid grid-cols-2 gap-4">

        {marina.openingYear && (
          <div className="rounded-2xl bg-white/10 p-4">
            <CalendarDays
              size={22}
              className="text-white/70"
            />

            <p className="mt-4 text-xs uppercase tracking-wider text-white/50">
              Açılış Yılı
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              {marina.openingYear}
            </p>
          </div>
        )}

        {marina.capacity?.maxBoatLength && (
          <div className="rounded-2xl bg-white/10 p-4">
            <Ship
              size={22}
              className="text-white/70"
            />

            <p className="mt-4 text-xs uppercase tracking-wider text-white/50">
              Maksimum Tekne
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              {marina.capacity.maxBoatLength} m
            </p>
          </div>
        )}

        {marina.capacity?.seaBerth && (
          <div className="rounded-2xl bg-white/10 p-4">
            <Anchor
              size={22}
              className="text-white/70"
            />

            <p className="mt-4 text-xs uppercase tracking-wider text-white/50">
              Deniz Kapasitesi
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              {marina.capacity.seaBerth} Tekne
            </p>
          </div>
        )}

        <div className="rounded-2xl bg-white/10 p-4">
          {marina.blueFlag ? (
            <BadgeCheck
              size={22}
              className="text-primary"
            />
          ) : (
            <CircleAlert
              size={22}
              className="text-white/50"
            />
          )}

          <p className="mt-4 text-xs uppercase tracking-wider text-white/50">
            Çevre Sertifikası
          </p>

          <p className="mt-1 text-lg font-semibold text-white">
            {marina.blueFlag
              ? "Mavi Bayrak"
              : "Bulunmuyor"}
          </p>
        </div>

        <div className="col-span-2 rounded-2xl bg-white/10 p-4">
          {marina.customsClearance ? (
            <BadgeCheck
              size={22}
              className="text-primary"
            />
          ) : (
            <CircleAlert
              size={22}
              className="text-white/50"
            />
          )}

          <p className="mt-4 text-xs uppercase tracking-wider text-white/50">
            Gümrük İşlemleri
          </p>

          <p className="mt-1 text-lg font-semibold text-white">
            {marina.customsClearance
              ? "Mevcut"
              : "Yok"}
          </p>
        </div>

      </div>
    </MarinaCard>
  );
}