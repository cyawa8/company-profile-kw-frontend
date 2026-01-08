"use client";

import { useState } from "react";
import { Input, Spin, Tag, message } from "antd";
import Button from "@/app/_components/Button";
import { checkBill } from "@/_lib/api";
import Image from "next/image";
import Breadcrumbs from "@/app/_components/Breadcrumbs";

const STATUS_COLORS = {
  proses: "blue",
  pending: "orange",
  lunas: "green",
  selesai: "purple",
};

export default function CekTagihanPage() {
  const [billNumber, setBillNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleCheck = async () => {
    if (!billNumber) {
      message.warning("Masukkan nomor tagihan");
      return;
    }

    setLoading(true);
    setData(null);

    try {
      const res = await checkBill(billNumber);
      setData(res);
    } catch (err) {
      message.error(err.message);
    } finally {
      setLoading(false);
    }
  };


  
  return (
    <div className="min-h-screen bg-[#f6f8fc] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs/>
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-2xl font-bold mb-2">
            Cek Status Tagihan
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Masukkan nomor tagihan Anda untuk melihat detail dan status pembayaran.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              size="large"
              placeholder="Contoh: TAG-2025-001"
              value={billNumber}
              onChange={(e) => setBillNumber(e.target.value)}
            />
            <Button
              variation="primary"
              size="large"
              disabled={loading}
              onClick={handleCheck}
            >
              {loading ? "Mencari..." : "Cek Tagihan"}
            </Button>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center mt-10">
            <Spin />
          </div>
        )}

        {data && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mt-8 space-y-4">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h3 className="text-lg font-semibold">
                Detail Tagihan
              </h3>
              <Tag color={STATUS_COLORS[data.status]}>
                {data.status.toUpperCase()}
              </Tag>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <Info label="Nomor Tagihan" value={data.bill_number} />
              <Info label="Nama Tertagih" value={data.debtor_name} />
              <Info label="Jenis Instansi" value={data.institution_type} />
              <Info label="Jenis Tagihan" value={data.bill_type} />
              <Info label="Jumlah tertagih" value={data.contact} />
              <Info label="Email" value={data.email || "-"} />
              <Info label="Metode Pembayaran" value={data.payment_method || "-"} />
              <Info label="Tanggal Tagihan" value={data.bill_date || "-"} />
            </div>

            {data.description && (
              <div className="pt-4 border-t text-sm">
                <p className="font-medium">Keterangan</p>
                <p className="text-gray-600 mt-1">
                  {data.description}
                </p>
              </div>
            )}

            {/* {(data.attachment_file || data.attachment_image) && (
              <div className="pt-4 border-t space-y-2">
                {data.attachment_file && (
                  <a
                    href={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${data.attachment_file}`}
                    target="_blank"
                    className="text-blue-600 underline text-sm block"
                  >
                    📄 Download Dokumen Tagihan
                  </a>
                )}


{data?.attachment_image && (
  <Image
    src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${data.attachment_image}`}
    alt="Foto Tagihan"
    width={400}
    height={300}
    className="rounded-lg border object-contain"
  />
)}

              </div>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
}

const Info = ({ label, value }) => (
  <div>
    <p className="text-gray-500">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);
