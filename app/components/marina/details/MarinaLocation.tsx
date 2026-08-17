import {
    MapPin,
    Navigation,
    Plane,
  } from "lucide-react";
  
  import { Marina } from "@/types/marina";
import MarinaCard from "../../ui/marina/MarinaCard";
  
  type MarinaLocationProps = {
    marina: Marina;
  };
  
  const MarinaLocation = ({ marina }: MarinaLocationProps) => {
    const mapsUrl = `https://www.google.com/maps?q=${marina.coordinates.lat},${marina.coordinates.lng}`;
  
    return (
      <MarinaCard dark className="p-6" >
        <div className="flex items-center justify-between mb-6">
          <h3
            className="
            text-xs
            uppercase
            tracking-[0.25em]
            font-cormorant-garamont
            text-white/70
            "
          >
            Konum
          </h3>
  
          <MapPin size={22} className="text-white/70" />
        </div>
  
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs text-white/50">
                Latitude
              </p>
  
              <p className="mt-2 font-semibold text-sm">
                {marina.coordinates.lat.toFixed(6)}
              </p>
            </div>
  
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-xs text-white/50">
                Longitude
              </p>
  
              <p className="mt-2 font-semibold text-sm">
                {marina.coordinates.lng.toFixed(6)}
              </p>
            </div>
          </div>
  
          {marina.nearestAirport && (
            <div
              className="
              flex
              items-center
              gap-4
              rounded-2xl
              bg-white/10
              p-4
              "
            >
              <div
                className="
                w-10
                h-10
                rounded-xl
                bg-white/10
                flex
                items-center
                justify-center
                "
              >
                <Plane size={20} />
              </div>
  
              <div>
                <p className="text-xs text-white/50">
                  En Yakın Havaalanı
                </p>
  
                <p className="text-sm font-semibold">
                  {marina.nearestAirport}
                </p>
  
                <p className="text-xs text-white/60 mt-1">
                  {marina.airportDistance} km uzaklıkta
                </p>
              </div>
            </div>
          )}
  
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-white
            text-darknavy
            py-3
            font-semibold
            hover:bg-white/90
            transition
            "
          >
            <Navigation size={18} />
            Haritada Aç
          </a>
        </div>
      </MarinaCard>
    );
  };
  
  export default MarinaLocation;