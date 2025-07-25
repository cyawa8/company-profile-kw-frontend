"use client";

import Image from "next/image";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
import dayjs from "dayjs";

const TEXT = {
  id: {
    lelangDone: "Lelang Selesai",
    pelaksanaan: "Pelaksanaan",
    tglDibuat: "Tanggal Dibuat",
    tglLelang: "Pelaksanaan Lelang",
    prov: "Provinsi",
    state: "Kabupaten",
    city: "Kota",
    type: "Tipe",
    land: "Luas Tanah",
    building: "Luas Bangunan",
    noImage: "Tidak ada gambar",
  },
  en: {
    lelangDone: "Auction Closed",
    pelaksanaan: "Implementation",
    tglDibuat: "Created Date",
    tglLelang: "Auction Date",
    prov: "Province",
    state: "Regency",
    city: "City",
    type: "Type",
    land: "Land Area",
    building: "Building Area",
    noImage: "No Image",
  }
};

export default function AssetDetail({ asset, lang = "id" }) {
  const t = TEXT[lang] || TEXT.id;
  const carouselRef = useRef();
  if (!asset) return null;

  const dateImpl = asset.date_implementation ? dayjs(asset.date_implementation) : null;
  const today = dayjs();
  const isPast = dateImpl && dateImpl.isBefore(today, "day");

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 flex-shrink-0 relative">
        <div className="relative">
          <div className={`absolute z-20 top-3 left-3 px-4 py-1 rounded-xl font-bold text-xs flex items-center gap-1
            ${isPast
              ? "bg-gray-400 text-white"
              : "bg-amber-500 text-white animate-pulse"}
            shadow-md`}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="mr-1">
              <path
                d="M6 2v2M18 2v2M3 7h18M4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {isPast ? (
              <>
                {t.lelangDone}
              </>
            ) : (
              <>
                {t.pelaksanaan}: {dateImpl ? dateImpl.format("DD MMM YYYY") : "-"}
              </>
            )}
          </div>
          {asset.photos?.length > 0 ? (
            <Carousel
              ref={carouselRef}
              dots
              autoplay
              autoplaySpeed={3000}
              className="rounded-xl overflow-hidden"
              effect="scrollx"
            >
              {asset.photos.map(img => (
                <div key={img.id} className="relative w-full aspect-[4/3] bg-gray-100">
                  <Image
                    src={`https://api.kiwi.co.id/storage/${img.image}`}
                    alt={asset.asset_number}
                    fill
                    className={`object-cover ${isPast ? "opacity-70 grayscale" : ""}`}
                  />
                </div>
              ))}
            </Carousel>
          ) : (
            <div className="bg-gray-200 w-full aspect-[4/3] flex items-center justify-center rounded-xl">
              {t.noImage}
            </div>
          )}
          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary-500 p-1 rounded-full shadow"
            onClick={() => carouselRef.current?.prev()}
            type="button"
            aria-label="Previous"
          >
            <LeftOutlined />
          </button>
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary-500 p-1 rounded-full shadow"
            onClick={() => carouselRef.current?.next()}
            type="button"
            aria-label="Next"
          >
            <RightOutlined />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-2">{asset.asset_number}</h1>
        <div className="mb-4 text-gray-500">{asset.address}</div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex">
            <span className="w-32 font-semibold">{t.tglDibuat}</span>
            <span className="mx-2">:</span>
            <span className="flex-1">{asset.date_created ? dayjs(asset.date_created).format("DD MMM YYYY") : "-"}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold">{t.tglLelang}</span>
            <span className="mx-2">:</span>
            <span className="flex-1">{asset.date_implementation ? dayjs(asset.date_implementation).format("DD MMM YYYY") : "-"}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold">{t.prov}</span>
            <span className="mx-2">:</span>
            <span className="flex-1">{asset.province}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold">{t.state}</span>
            <span className="mx-2">:</span>
            <span className="flex-1">{asset.regency}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold">{t.city}</span>
            <span className="mx-2">:</span>
            <span className="flex-1">{asset.region}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold">{t.type}</span>
            <span className="mx-2">:</span>
            <span className="flex-1">{asset.type?.name || "-"}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold">{t.land}</span>
            <span className="mx-2">:</span>
            <span className="flex-1">{asset.land_area}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold">{t.building}</span>
            <span className="mx-2">:</span>
            <span className="flex-1">{asset.building_area}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
