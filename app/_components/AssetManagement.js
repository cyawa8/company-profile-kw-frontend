"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { Select, Input } from "antd";
import Image from "next/image";
import { useAssetManagement } from "@/app/pages/hooks/useAssetManagement";
import Spinner from "./Spinner";
import Link from "next/link";
import PaginationControl from "./Pagination";
import Button from "./Button";
import dayjs from "dayjs";
import NoData from "./NoData";
import { AnimatedDiv } from "./AnimatedDiv";

const TEXT = {
  id: {
    title: "Daftar Aset",
    desc: "Lihat daftar aset lelang kami.",
    prov: "Pilih Provinsi",
    regency: "Pilih Kabupaten",
    city: "Filter Kota",
    type: "Pilih Tipe",
    search: "Cari Aset",
    reset: "Reset Filter",
    lelangDone: "Lelang Selesai",
    lelangAt: "Lelang:",
    lihat: "Lihat Selengkapnya",
    noImage: "Tidak ada gambar"
  },
  en: {
    title: "Asset List",
    desc: "See our auctioned asset list.",
    prov: "Select Province",
    regency: "Select Regency",
    city: "Filter City",
    type: "Select Type",
    search: "Search Asset",
    reset: "Reset Filter",
    lelangDone: "Auction Closed",
    lelangAt: "Auction:",
    lihat: "See Details",
    noImage: "No Image"
  }
};

export default function AssetManagement({ data }) {
  const { lang } = useParams();
  const t = TEXT[lang] || TEXT.id;

  const { data: assets, isLoading, error } = useAssetManagement();
  const [currentPage, setCurrentPage] = useState(1);
  const [filterProvince, setFilterProvince] = useState("");
  const [filterState, setFilterState] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");

  const pageSize = 20;

  const provinceOptions = useMemo(
    () =>
      [...new Set((assets || []).map((a) => a.province))]
        .filter((prov) => prov && prov !== "null" && prov !== "")
        .map((prov) => ({
          value: prov,
          label: prov,
        })),
    [assets]
  );

  const typeOptions = useMemo(
    () =>
      [...new Set((assets || []).map((a) => a.type?.name))]
        .filter((type) => type && type !== "null" && type !== "")
        .map((type) => ({
          value: type,
          label: type,
        })),
    [assets]
  );

  const stateOptions = useMemo(() => {
    let filtered = assets || [];
    if (filterProvince) filtered = filtered.filter((a) => a.province === filterProvince);
    return [...new Set(filtered.map((a) => a.regency))]
      .filter((reg) => reg && reg !== "null" && reg !== "")
      .map((reg) => ({
        value: reg,
        label: reg,
      }));
  }, [assets, filterProvince]);

  const cityOptions = useMemo(() => {
    let filtered = assets || [];
    if (filterProvince) filtered = filtered.filter((a) => a.province === filterProvince);
    if (filterState) filtered = filtered.filter((a) => a.regency === filterState);
    return [...new Set(filtered.map((a) => a.region))]
      .filter((city) => city && city !== "null" && city !== "")
      .map((city) => ({
        value: city,
        label: city,
      }));
  }, [assets, filterProvince, filterState]);

  const filteredAssets = useMemo(() => {
    let result = assets || [];
    if (filterProvince) result = result.filter((a) => a.province === filterProvince);
    if (filterState) result = result.filter((a) => a.regency === filterState);
    if (filterCity) result = result.filter((a) => a.region === filterCity);
    if (filterType) result = result.filter((a) => a.type?.name === filterType);
    if (search) {
      const low = search.toLowerCase();
      result = result.filter(
        (a) =>
          (a.asset_number && String(a.asset_number).toLowerCase().includes(low)) ||
          (a.address && a.address.toLowerCase().includes(low)) ||
          (a.region && a.region.toLowerCase().includes(low)) ||
          (a.province && a.province.toLowerCase().includes(low)) ||
          (a.regency && a.regency.toLowerCase().includes(low))
      );
    }
    return result;
  }, [assets, filterProvince, filterState, filterCity, filterType, search]);

  const sortedAssets = useMemo(() => {
    if (!filteredAssets) return [];

    return [...filteredAssets].sort((a, b) => {
      const aDone = a.date_implementation && dayjs(a.date_implementation).isBefore(dayjs(), "day");
      const bDone = b.date_implementation && dayjs(b.date_implementation).isBefore(dayjs(), "day");

      if (aDone === bDone) return 0;
      if (aDone) return 1;
      return -1;
    });
  }, [filteredAssets]);

  const paginatedData = useMemo(
    () => sortedAssets.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [sortedAssets, currentPage, pageSize]
  );

  function handleProvinceChange(value) {
    setFilterProvince(value || "");
    setFilterState("");
    setFilterCity("");
    setCurrentPage(1);
  }
  function handleStateChange(value) {
    setFilterState(value || "");
    setFilterCity("");
    setCurrentPage(1);
  }
  function handleCityChange(value) {
    setFilterCity(value || "");
    setCurrentPage(1);
  }
  function handleSearchChange(e) {
    setSearch(e.target.value);
    setCurrentPage(1);
  }

  function resetFilter() {
    setFilterProvince("");
    setFilterState("");
    setFilterCity("");
    setFilterType("");
    setSearch("");
    setCurrentPage(1);
  }

  if (isLoading) return <Spinner />;
  if (error) return <p className="text-red-500">Gagal memuat data aset.</p>;

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
      <p className="text-gray-600 mb-6">{t.desc}</p>

      <div className="flex flex-wrap gap-3 mb-8 items-center">
        <Select
          showSearch
          allowClear
          placeholder={t.prov}
          value={filterProvince || undefined}
          options={provinceOptions}
          onChange={handleProvinceChange}
          className="min-w-[160px]"
        />
        <Select
          showSearch
          allowClear
          placeholder={t.regency}
          value={filterState || undefined}
          options={stateOptions}
          onChange={handleStateChange}
          className="min-w-[160px]"
          disabled={!filterProvince}
        />
        <Select
          showSearch
          allowClear
          placeholder={t.city}
          value={filterCity || undefined}
          options={cityOptions}
          onChange={handleCityChange}
          className="min-w-[160px]"
          disabled={!filterState}
        />
        <Select
          showSearch
          allowClear
          placeholder={t.type}
          value={filterType || undefined}
          options={typeOptions}
          onChange={value => {
            setFilterType(value || "");
            setCurrentPage(1);
          }}
          className="min-w-[160px]"
        />

        <Input.Search
          allowClear
          placeholder={t.search}
          value={search}
          onChange={handleSearchChange}
          className="min-w-[180px]"
        />
        <Button variation="secondary" onClick={resetFilter} className="h-10">
          {t.reset}
        </Button>
      </div>

      {filteredAssets.length === 0 ? (
        <NoData />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {paginatedData.map((item) => {
              const isLelangSelesai =
                item.date_implementation &&
                dayjs(item.date_implementation).isBefore(dayjs(), "day");

              return (
                <AnimatedDiv delay={0}
                  key={item.id}
                  className={`bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition flex flex-col
                    ${isLelangSelesai ? "opacity-60 pointer-events-none bg-gray-200" : ""}
                  `}
                >
                  <div className="relative w-full aspect-[4/3]">
                    {item.date_implementation && (
                      <div className="absolute top-3 left-3 z-10 bg-yellow-200 text-yellow-800 rounded-full px-3 py-1 flex items-center gap-1 font-semibold text-xs shadow">
                        <span className="mr-1">📌</span>
                        {isLelangSelesai ? t.lelangDone : `${t.lelangAt} ${dayjs(item.date_implementation).format("DD MMM YYYY")}`}
                      </div>
                    )}
                    {item.photos?.[0]?.image ? (
                      <Image
                        src={`https://api.kiwi.co.id/storage/${item.photos[0].image}`}
                        alt={item.asset_number}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 w-full h-full flex items-center justify-center">{t.noImage}</div>
                    )}
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between gap-2">
                    <div>
                      <h2 className="text-lg font-semibold">{item.asset_number}</h2>
                      <p className="text-sm text-gray-600">{item.address}</p>
                      <p className="text-sm text-gray-500">{item.region}</p>
                      <p className="text-xs text-gray-400">
                        {item.province} {item.regency ? `/ ${item.regency}` : ""}
                      </p>
                    </div>
                    <div className="mt-4 flex">
                      {/* pastikan lang di url */}
                      <Link href={`/${lang}/services/asset-management/${item.asset_number}`} className="w-full">
                        <Button
                          className="w-full"
                          variation="primary"
                          disabled={isLelangSelesai}
                        >
                          {t.lihat}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </AnimatedDiv>
              );
            })}
          </div>

          <AnimatedDiv delay={0} className="mt-8 flex justify-center">
            <PaginationControl
              current={currentPage}
              pageSize={pageSize}
              total={filteredAssets.length}
              onChange={setCurrentPage}
              showSizeChanger={false}
            />
          </AnimatedDiv>
        </>
      )}
    </>
  );
}
