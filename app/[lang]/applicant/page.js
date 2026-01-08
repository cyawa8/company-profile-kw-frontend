"use client";

import { Form, Input, Select } from "antd";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Button from "@/app/_components/Button";
import toast from "react-hot-toast";
import { createApplicant, getServicesClient } from "@/_lib/api";

const COPY = {
  id: {
    title: "Formulir Solusi Pinjaman KIWI",
    submit: "Kirim Permohonan",
    submitting: "Mengirim...",
    loadError: "Gagal memuat data jenis permohonan.",

    form: {
      fullName: "Nama Lengkap",
      fullNamePh: "Masukkan nama lengkap Anda",
      email: "Email",
      emailPh: "contoh@email.com",
      contact: "Nomor Kontak",
      contactPh: "Contoh: 08123456789",
      loan: "Nomor Pinjaman",
      loanPh: "Masukkan nomor pinjaman / kontrak",
      service: "Jenis Permohonan",
      servicePh: "Pilih jenis permohonan",
      message: "Pesan",
      messagePh: "Jelaskan situasi Anda dan bantuan yang dibutuhkan...",
    },

    validation: {
      required: "Wajib diisi",
      emailInvalid: "Format email tidak valid",
    },

    quickContact: "Kontak Cepat",
    hours: "Jam Operasional",
    note:
      "Catatan: Untuk keperluan mendesak di luar jam operasional, silakan kirim email atau WhatsApp. Tim kami akan merespons pada hari kerja berikutnya.",

    schedule: {
      weekday: "Senin – Jumat",
      saturday: "Sabtu",
      sunday: "Minggu & Hari Libur",
      closed: "Tutup",
    },
  },

  en: {
    title: "KIWI Loan Resolution Form",
    submit: "Submit Request",
    submitting: "Submitting...",
    loadError: "Failed to load request types.",

    form: {
      fullName: "Full Name",
      fullNamePh: "Enter your full name",
      email: "Email",
      emailPh: "example@email.com",
      contact: "Contact Number",
      contactPh: "Example: +628123456789",
      loan: "Loan Number",
      loanPh: "Enter loan / contract number",
      service: "Request Type",
      servicePh: "Select request type",
      message: "Message",
      messagePh: "Describe your situation and the assistance you need...",
    },

    validation: {
      required: "This field is required",
      emailInvalid: "Invalid email format",
    },

    quickContact: "Quick Contact",
    hours: "Operating Hours",
    note:
      "Note: For urgent matters outside operating hours, please send an email or WhatsApp. Our team will respond on the next business day.",

    schedule: {
      weekday: "Monday – Friday",
      saturday: "Saturday",
      sunday: "Sunday & Public Holidays",
      closed: "Closed",
    },
  },
};

export default function ApplicantFormPage() {
  const [form] = Form.useForm();
  const { lang } = useParams();
  const t = COPY[lang] || COPY.id;

  const { data: services = [], isError } = useQuery({
    queryKey: ["servicesclient"],
    queryFn: getServicesClient,
  });

  const { mutate: submitApplicant, isLoading } = useMutation({
    mutationFn: createApplicant,
    onSuccess: () => {
      toast.success(lang === "en" ? "Request submitted successfully" : "Permohonan berhasil dikirim");
      form.resetFields();
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <div className="min-h-screen bg-[#f6f8fc] py-14 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* FORM */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-bold mb-6">{t.title}</h2>

          <Form form={form} layout="vertical" onFinish={submitApplicant}>
            <Form.Item
              label={t.form.fullName}
              name="full_name"
              rules={[{ required: true, message: t.validation.required }]}
            >
              <Input placeholder={t.form.fullNamePh} />
            </Form.Item>

            <Form.Item
              label={t.form.email}
              name="email"
              rules={[
                { required: true, message: t.validation.required },
                { type: "email", message: t.validation.emailInvalid },
              ]}
            >
              <Input placeholder={t.form.emailPh} />
            </Form.Item>

            <Form.Item
              label={t.form.contact}
              name="contact_number"
              rules={[{ required: true, message: t.validation.required }]}
            >
              <Input placeholder={t.form.contactPh} />
            </Form.Item>

            <Form.Item
              label={t.form.loan}
              name="loan_number"
              rules={[{ required: true, message: t.validation.required }]}
            >
              <Input placeholder={t.form.loanPh} />
            </Form.Item>

            <Form.Item
              label={t.form.service}
              name="service_id"
              rules={[{ required: true, message: t.validation.required }]}
            >
              <Select
                placeholder={t.form.servicePh}
                options={services.map((s) => ({
                  label: s.name,
                  value: s.id,
                }))}
              />
            </Form.Item>

            <Form.Item
              label={t.form.message}
              name="message"
              rules={[{ required: true, message: t.validation.required }]}
            >
              <Input.TextArea rows={4} placeholder={t.form.messagePh} />
            </Form.Item>

            <Button type="submit" variation="primary" disabled={isLoading}>
              {isLoading ? t.submitting : t.submit}
            </Button>
          </Form>

          {isError && (
            <p className="text-red-500 mt-4 text-sm">{t.loadError}</p>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-5">{t.quickContact}</h3>
            <ul className="space-y-3 text-sm">
              <li>📱 WhatsApp: +62 811 8888 999</li>
              <li>📧 Email: cs@kiwi.co.id</li>
              <li>📞 Phone: +62 21 509 288 27</li>
              <li>📍 Jakarta, Indonesia</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">
              {t.hours}
            </h3>

            <ul className="space-y-2 text-sm text-blue-700">
              <li><b>{t.schedule.weekday}:</b> 08:00 – 17:00 WIB</li>
              <li><b>{t.schedule.saturday}:</b> 08:00 – 12:00 WIB</li>
              <li><b>{t.schedule.sunday}:</b> {t.schedule.closed}</li>
            </ul>

            <p className="text-xs text-blue-600 mt-4 leading-relaxed">
              {t.note}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
