import CityCard from '@/app/components/ui/cards/CityCard';
import {CityWithCount} from "@/types/city-with-count"

  
  interface RegionCitiesProps {
    cities: CityWithCount[];
  }
  

const RegionCities = ({cities}:RegionCitiesProps) => {
  return (
    <section className="bg-[#F8FAFC] px-[8%] py-20 lg:px-[12%]">
    <div className="mb-12">
    <h2 className="font-cormorant-garamont text-5xl font-bold tracking-tight text-darknavy">
  Bölgedeki <span className="text-primary">Şehirler</span>
</h2>

        <p className="mt-4 max-w-2xl text-darknavy/70">
            Bu bölgedeki şehirleri keşfedin ve size en uygun marinaları inceleyin.
        </p>
    </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {
            cities.map((city)=>(
                <CityCard
                key={city.id}
                city={city}
                marinaCount={city.marinaCount}
              />
            ))
        }
      </div>
    </section>
  )
}

export default RegionCities
