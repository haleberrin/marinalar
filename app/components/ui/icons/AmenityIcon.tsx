import { Icon } from "@iconify/react"
import { MarinaAmenity } from "@/types/marina"
import { amenityIcons } from "@/lib/marina-ui/amenities"

type Props = {
  type: MarinaAmenity
}

export function AmenityIcon({ type }: Props) {
  return <Icon icon={amenityIcons[type]} width={22} />
}