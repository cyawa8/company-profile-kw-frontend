import Breadcrumbs from "../_components/Breadcrumbs";
import Container from "../_components/Container";
import H1 from "../_components/H1";

export default function Privasi(){
    return(
        <Container>
            <Breadcrumbs />
            
            <H1>Kebijakan Privasi</H1>
            <div className="prose max-w-none text-base text-gray-800 mb-8">
                <p>
                    PT Kinerja Inovasi Wira Indonesia (“kami”) sangat menghargai privasi dan perlindungan data pribadi pengguna (“Anda”). Kami berkomitmen menjaga informasi pribadi yang Anda berikan saat menggunakan layanan kami.
                </p>
                <h2 className="font-bold mt-6 mb-2 text-2xl">Informasi yang Kami Kumpulkan</h2>
                <ul className="list-disc pl-6">
                    <li>
                        <b>Informasi Pribadi:</b> Seperti nama, email, nomor telepon, dan alamat yang Anda berikan melalui formulir kontak atau pendaftaran.
                    </li>
                    <li>
                        <b>Data Otomatis:</b> Seperti alamat IP, jenis perangkat, browser, dan data kunjungan yang dikumpulkan secara otomatis melalui cookie dan teknologi pelacakan lainnya.
                    </li>
                </ul>
                <h2 className="font-bold mt-6 mb-2 text-2xl">Penggunaan Informasi</h2>
                <p>
                    Data Anda digunakan untuk:
                </p>
                <ul className="list-disc pl-6">
                    <li>Memproses permintaan dan pertanyaan Anda.</li>
                    <li>Meningkatkan layanan dan pengalaman pengguna.</li>
                    <li>Mengirim informasi terkait produk, layanan, atau promosi jika Anda memberikan persetujuan.</li>
                </ul>
                <h2 className="font-bold mt-6 mb-2 text-2xl">Perlindungan Data</h2>
                <p>
                    Kami mengambil langkah-langkah keamanan teknis dan organisasi untuk melindungi data Anda dari akses tidak sah, perubahan, atau penyalahgunaan.
                </p>
                <h2 className="font-bold mt-6 mb-2 text-2xl">Berbagi Informasi</h2>
                <p>
                    Kami tidak akan membagikan data pribadi Anda kepada pihak ketiga tanpa izin, kecuali diwajibkan oleh hukum atau untuk kepentingan pemrosesan layanan yang Anda minta.
                </p>
                <h2 className="font-bold mt-6 mb-2 text-2xl">Hak Pengguna</h2>
                <p>
                    Anda berhak meminta akses, koreksi, atau penghapusan data pribadi Anda dengan menghubungi kami melalui halaman kontak.
                </p>
                <h2 className="font-bold mt-6 mb-2 text-2xl">Perubahan Kebijakan Privasi</h2>
                <p>
                    Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan akan dipublikasikan di halaman ini.
                </p>
                <p>
                    Jika Anda memiliki pertanyaan atau membutuhkan klarifikasi terkait kebijakan privasi, silakan hubungi kami melalui halaman kontak.
                </p>
            </div>
        </Container>
    );
}
