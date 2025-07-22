import Breadcrumbs from "../_components/Breadcrumbs";
import Container from "../_components/Container";
import H1 from "../_components/H1";

export default function LegalTerms(){
    return(
        <Container>
            <Breadcrumbs />
            <H1>Ketentuan Hukum</H1>
            <div className="prose max-w-none text-base text-gray-800 mb-8">
                <p>
                    Selamat datang di situs PT Kinerja Inovasi Wira Indonesia (“kami”). Dengan mengakses dan menggunakan layanan ini, Anda setuju untuk terikat dengan ketentuan hukum berikut. Mohon baca dengan seksama sebelum menggunakan situs kami.
                </p>
                <h2 className="font-bold mt-6 mb-2 text-2xl">1. Hak Cipta & Kekayaan Intelektual</h2>
                <p>
                    Seluruh konten, logo, desain, teks, gambar, dan elemen lain yang terdapat pada situs ini merupakan milik PT Kinerja Inovasi Wira Indonesia, kecuali dinyatakan lain. Dilarang menyalin, mendistribusikan, memodifikasi, atau menggunakan konten tanpa izin tertulis.
                </p>
                <h2 className="font-bold mt-6 mb-2 text-2xl">2. Penggunaan Situs</h2>
                <p>
                    Anda setuju untuk menggunakan situs ini hanya untuk tujuan yang sah dan tidak melanggar hukum yang berlaku. Anda dilarang menggunakan situs ini untuk tindakan penipuan, pencemaran nama baik, penyebaran malware, atau aktivitas merugikan lainnya.
                </p>
                <h2 className="font-bold mt-6 mb-2 text-2xl">3. Tautan ke Pihak Ketiga</h2>
                <p>
                    Situs ini dapat mengandung tautan ke situs pihak ketiga yang di luar kendali kami. Kami tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik situs pihak ketiga tersebut. Kami menyarankan Anda untuk membaca ketentuan dan kebijakan situs tersebut secara terpisah.
                </p>
                <h2 className="font-bold mt-6 mb-2 text-2xl">4. Batasan Tanggung Jawab</h2>
                <p>
                    PT Kinerja Inovasi Wira Indonesia tidak bertanggung jawab atas kerugian atau kerusakan yang timbul akibat penggunaan atau ketidakmampuan menggunakan situs dan layanan kami, baik secara langsung maupun tidak langsung.
                </p>
                <h2 className="font-bold mt-6 mb-2 text-2xl">5. Perubahan Ketentuan</h2>
                <p>
                    Kami berhak mengubah, menambah, atau mengurangi ketentuan ini kapan saja tanpa pemberitahuan sebelumnya. Setiap perubahan akan diumumkan di halaman ini dan berlaku segera setelah dipublikasikan. Penggunaan situs setelah perubahan berarti Anda menyetujui ketentuan yang baru.
                </p>
                <h2 className="font-bold mt-6 mb-2 text-2xl">6. Hukum yang Berlaku</h2>
                <p>
                    Ketentuan ini tunduk pada hukum Republik Indonesia. Setiap sengketa yang timbul akibat penggunaan situs ini akan diselesaikan secara musyawarah atau melalui jalur hukum sesuai peraturan yang berlaku di Indonesia.
                </p>
                <p>
                    Jika Anda memiliki pertanyaan terkait ketentuan hukum ini, silakan hubungi kami melalui halaman kontak.
                </p>
            </div>
        </Container>
    );
}
