"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type RegionOption = {
  id: string;
  name: string;
};

type CityOption = {
  id: string;
  name: string;
  regionId: string;
};

type DistrictOption = {
  id: string;
  name: string;
  cityId: string;
};

type MarinaFormData = {
  id: string;

  name: string;
  slug: string;
  summary: string;
  description: string;

  rating: number | null;

  regionId: string;
  cityId: string;
  districtId: string;

  latitude: number;
  longitude: number;

  coverImage: string;

  seaBerth: number;
  landBerth: number | null;
  maxBoatLength: number;
  depth: string;

  phone: string | null;
  email: string | null;
  website: string | null;
  vhfChannel: string | null;

  openingYear: number | null;

  nearestAirport: string | null;
  airportDistance: number | null;

  blueFlag: boolean;
  petFriendly: boolean;
  customsClearance: boolean;
  charterAvailable: boolean;
  winterStorageAvailable: boolean;
};

type RelationOption = {
  id: string;
  title: string;
};

interface MarinaEditFormProps {
  marina: MarinaFormData;

  regions: RegionOption[];
  cities: CityOption[];
  districts: DistrictOption[];

  categories: RelationOption[];
  amenities: RelationOption[];
  facilities: RelationOption[];

  selectedCategoryIds: string[];
  selectedAmenityIds: string[];
  selectedFacilityIds: string[];
}

export default function MarinaEditForm({
  marina,
  regions,
  cities,
  districts,

  categories,
  amenities,
  facilities,

  selectedCategoryIds,
  selectedAmenityIds,
  selectedFacilityIds,
}: MarinaEditFormProps) {
  const router = useRouter();

  const [regionId, setRegionId] =
    useState(marina.regionId);

  const [cityId, setCityId] =
    useState(marina.cityId);

  const [districtId, setDistrictId] =
    useState(marina.districtId);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const filteredCities = useMemo(
    () =>
      cities.filter(
        (city) =>
          city.regionId === regionId
      ),
    [cities, regionId]
  );

  const filteredDistricts = useMemo(
    () =>
      districts.filter(
        (district) =>
          district.cityId === cityId
      ),
    [districts, cityId]
  );

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const formData =
      new FormData(event.currentTarget);

    const response = await fetch(
      `/api/admin/marinas/${marina.id}`,
      {
        method: "PATCH",
        body: formData,
      }
    );

    const data =
      await response.json();

    setLoading(false);

    if (!response.ok) {
      setError(
        data.error ??
          "Marina güncellenemedi."
      );

      return;
    }

    router.push("/admin/marinas");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        space-y-8
        rounded-[28px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
      "
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Input
          name="name"
          label="Marina Adı"
          defaultValue={marina.name}
          required
        />

        <Input
          name="slug"
          label="Slug"
          defaultValue={marina.slug}
          required
        />

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-darknavy">
            Özet
          </label>

          <textarea
            name="summary"
            defaultValue={marina.summary}
            required
            rows={3}
            className="
              w-full
              rounded-2xl
              border
              border-slate-200
              px-4
              py-3
              outline-none
              focus:border-primary
            "
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-darknavy">
            Açıklama
          </label>

          <textarea
            name="description"
            defaultValue={marina.description}
            required
            rows={6}
            className="
              w-full
              rounded-2xl
              border
              border-slate-200
              px-4
              py-3
              outline-none
              focus:border-primary
            "
          />
        </div>

        <Input
          name="rating"
          label="Puan"
          type="number"
          step="0.1"
          defaultValue={
            marina.rating ?? ""
          }
        />

        <Input
          name="coverImage"
          label="Kapak Görseli"
          defaultValue={
            marina.coverImage
          }
          required
        />

        <Select
          label="Bölge"
          name="regionId"
          value={regionId}
          onChange={(value) => {
            setRegionId(value);
            setCityId("");
            setDistrictId("");
          }}
          options={regions}
          required
        />

        <Select
          label="Şehir"
          name="cityId"
          value={cityId}
          onChange={(value) => {
            setCityId(value);
            setDistrictId("");
          }}
          options={filteredCities}
          disabled={!regionId}
          required
        />

        <Select
          label="İlçe"
          name="districtId"
          value={districtId}
          onChange={setDistrictId}
          options={filteredDistricts}
          disabled={!cityId}
          required
        />

        <Input
          name="latitude"
          label="Latitude"
          type="number"
          step="any"
          defaultValue={
            marina.latitude
          }
          required
        />

        <Input
          name="longitude"
          label="Longitude"
          type="number"
          step="any"
          defaultValue={
            marina.longitude
          }
          required
        />

        <Input
          name="seaBerth"
          label="Deniz Bağlama"
          type="number"
          defaultValue={
            marina.seaBerth
          }
          required
        />

        <Input
          name="landBerth"
          label="Kara Bağlama"
          type="number"
          defaultValue={
            marina.landBerth ?? ""
          }
        />

        <Input
          name="maxBoatLength"
          label="Maksimum Tekne Uzunluğu"
          type="number"
          defaultValue={
            marina.maxBoatLength
          }
          required
        />

        <Input
          name="depth"
          label="Derinlik"
          defaultValue={marina.depth}
          required
        />

        <Input
          name="phone"
          label="Telefon"
          defaultValue={
            marina.phone ?? ""
          }
        />

        <Input
          name="email"
          label="Email"
          type="email"
          defaultValue={
            marina.email ?? ""
          }
        />

        <Input
          name="website"
          label="Website"
          defaultValue={
            marina.website ?? ""
          }
        />

        <Input
          name="vhfChannel"
          label="VHF Kanalı"
          defaultValue={
            marina.vhfChannel ?? ""
          }
        />

        <Input
          name="openingYear"
          label="Açılış Yılı"
          type="number"
          defaultValue={
            marina.openingYear ?? ""
          }
        />

        <Input
          name="nearestAirport"
          label="En Yakın Havalimanı"
          defaultValue={
            marina.nearestAirport ?? ""
          }
        />

        <Input
          name="airportDistance"
          label="Havalimanı Mesafesi (km)"
          type="number"
          defaultValue={
            marina.airportDistance ??
            ""
          }
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <Checkbox
          name="blueFlag"
          label="Mavi Bayrak"
          defaultChecked={
            marina.blueFlag
          }
        />

        <Checkbox
          name="petFriendly"
          label="Evcil Hayvan Dostu"
          defaultChecked={
            marina.petFriendly
          }
        />

        <Checkbox
          name="customsClearance"
          label="Gümrük İşlemleri"
          defaultChecked={
            marina.customsClearance
          }
        />

        <Checkbox
          name="charterAvailable"
          label="Charter"
          defaultChecked={
            marina.charterAvailable
          }
        />

        <Checkbox
          name="winterStorageAvailable"
          label="Kışlama"
          defaultChecked={
            marina.winterStorageAvailable
          }
        />
      </div>
      <RelationSection
  title="Kategoriler"
  name="categoryIds"
  options={categories}
  selectedIds={selectedCategoryIds}
/>

<RelationSection
  title="Hizmetler"
  name="amenityIds"
  options={amenities}
  selectedIds={selectedAmenityIds}
/>

<RelationSection
  title="Tesisler"
  name="facilityIds"
  options={facilities}
  selectedIds={selectedFacilityIds}
/>

      {error && (
        <div className="
          rounded-2xl
          border
          border-red-200
          bg-red-50
          px-4
          py-3
          text-sm
          text-red-600
        ">
          {error}
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="
            rounded-2xl
            bg-primary
            px-6
            py-3
            font-semibold
            text-white
            disabled:opacity-50
          "
        >
          {loading
            ? "Güncelleniyor..."
            : "Değişiklikleri Kaydet"}
        </button>
      </div>
    </form>
  );
}

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-darknavy">
        {label}
      </label>

      <input
        {...props}
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          px-4
          py-3
          outline-none
          focus:border-primary
        "
      />
    </div>
  );
}

function Select({
  label,
  options,
  value,
  onChange,
  ...props
}: {
  label: string;

  options: {
    id: string;
    name: string;
  }[];

  value: string;

  onChange: (
    value: string
  ) => void;
} & Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "value" | "onChange"
>) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-darknavy">
        {label}
      </label>

      <select
        {...props}
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value
          )
        }
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          px-4
          py-3
          outline-none
          focus:border-primary
          disabled:bg-slate-100
        "
      >
        <option value="">
          Seçin
        </option>

        {options.map(
          (option) => (
            <option
              key={option.id}
              value={option.id}
            >
              {option.name}
            </option>
          )
        )}
      </select>
    </div>
  );
}

function Checkbox({
  name,
  label,
  defaultChecked,
}: {
  name: string;
  label: string;
  defaultChecked: boolean;
}) {
  return (
    <label className="
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-slate-200
      p-4
    ">
      <input
        type="checkbox"
        name={name}
        defaultChecked={
          defaultChecked
        }
        className="h-4 w-4"
      />

      <span className="text-sm font-semibold text-darknavy">
        {label}
      </span>
    </label>
  );
}

function RelationSection({
  title,
  name,
  options,
  selectedIds,
}: {
  title: string;
  name: string;
  options: RelationOption[];
  selectedIds: string[];
}) {
  return (
    <div>
      <h3 className="mb-4 font-cormorant-garamont text-3xl font-bold text-darknavy">
        {title}
      </h3>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              p-4
            "
          >
            <input
              type="checkbox"
              name={name}
              value={option.id}
              defaultChecked={selectedIds.includes(
                option.id
              )}
              className="h-4 w-4"
            />

            <span className="text-sm font-semibold text-darknavy">
              {option.title}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}