import { Marina } from "@/types/marina"
import { getCityById } from "@/lib/cities"
import Link from "next/link"

export default function MarinaCard({ marina }: { marina: Marina }) {
    const city = getCityById(marina.cityId);
  
    return (
      <Link href={`/marinas/${marina.slug}`} className="border rounded-xl">
        <img src={marina.media.coverImage} className="h-48 w-full object-cover" />
  
        <div className="p-4">
          <h3>{marina.name}</h3>
  
          {/* SAFE fallback */}
          <p className="text-sm text-gray-500">
            {city ? city.name : marina.cityId}
          </p>
  
          <div className="flex gap-2 mt-3 flex-wrap">
            {marina.amenities.slice(0, 4).map((a) => (
              <span key={a} className="text-xs bg-gray-100 px-2 py-1 rounded">
                {a}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }