"use client";

import { useState } from "react";
import Form from "@/app/_components/Form";
import Button from "@/app/_components/Button";
import toast from "react-hot-toast";

export default function AssetRequestForm({ asset }) {
  const [formData, setFormData] = useState({
    asset_number: asset.asset_number,
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("http://localhost:8001/api/asset-requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        asset_id: asset.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        description: formData.description,
      }),
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Permintaan berhasil dikirim! Anda akan segera kami hubungi");
      setFormData({
        asset_number: asset.asset_number,
        name: "",
        email: "",
        phone: "",
        description: "",
      });
    } else {
      toast.error("Gagal mengirim permintaan.");
    }
  };

  const fields = [
    { name: "asset_number", label: "Asset Number", required: true, disabled: true },
    { name: "name", label: "Nama", required: true },
    { name: "email", label: "Email", required: true, type: "email" },
    { name: "phone", label: "Nomor Telepon", required: true },
    { name: "description", label: "Keterangan", type: "textarea", required: false },
  ];

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-3">Form Permintaan Lelang</h2>
      <Form
        fields={fields}
        onSubmit={handleRequestSubmit}
        formData={formData}
        setFormData={setFormData}
      />
        <Button
          type="submit"
          onClick={handleRequestSubmit}
          disabled={loading}
          variation="primary"
        >
          {loading ? "Mengirim..." : "Kirim Permintaan"}
        </Button>
    </div>
  );
}
