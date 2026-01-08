import { useState } from "react";
import Form from "@/app/_components/Form";
import Button from "@/app/_components/Button";
import toast from "react-hot-toast";

const TEXT = {
  id: {
    formTitle: "Form Permintaan Lelang",
    assetNumber: "Nomor Aset",
    name: "Nama",
    email: "Email",
    phone: "Nomor Telepon",
    desc: "Keterangan",
    submit: "Kirim Permintaan",
    sending: "Mengirim...",
    success: "Permintaan berhasil dikirim! Anda akan segera kami hubungi",
    fail: "Gagal mengirim permintaan."
  },
  en: {
    formTitle: "Auction Request Form",
    assetNumber: "Asset Number",
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    desc: "Description",
    submit: "Send Request",
    sending: "Sending...",
    success: "Request sent! We will contact you soon",
    fail: "Failed to send request."
  }
};

export default function AssetRequestForm({ asset, lang = "id" }) {
  const t = TEXT[lang] || TEXT.id;
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
      toast.success(t.success);
      setFormData({
        asset_number: asset.asset_number,
        name: "",
        email: "",
        phone: "",
        description: "",
      });
    } else {
      toast.error(t.fail);
    }
  };

  const fields = [
    { name: "asset_number", label: t.assetNumber, required: true, disabled: true },
    { name: "name", label: t.name, required: true },
    { name: "email", label: t.email, required: true, type: "email" },
    { name: "phone", label: t.phone, required: true },
    { name: "description", label: t.desc, type: "textarea", required: false },
  ];

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-3">{t.formTitle}</h2>
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
        {loading ? t.sending : t.submit}
      </Button>
    </div>
  );
}
