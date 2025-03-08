import React from 'react';
import VideoPlayer from '../component/VideoPlayer';

const Module = () => {
    return (
        <div className='my-10 mx-40 p-10 border border-2 border-gray-300 rounded-lg'>
            <h1 className='text-2xl mb-3 text-red-500'>Dasar Hukum</h1>
            <hr className='h-1 mb-6 border-none bg-red-500 w-full' />

            {/* Video Player */}
            <VideoPlayer videoId="AXbPwELoXSk" />

            {/* Materi Pembelajaran */}
            <div className='mt-6 text-gray-800'>
                <h2 className='text-xl font-semibold mb-2'>1. Pengertian Hukum</h2>
                <p className='mb-4'>
                    Hukum adalah seperangkat aturan yang mengatur kehidupan bermasyarakat, dibuat dan ditegakkan oleh pemerintah atau lembaga yang berwenang.
                </p>

                <h2 className='text-xl font-semibold mb-2'>2. Sumber Hukum</h2>
                <ul className='list-disc list-inside mb-4'>
                    <li><strong>Undang-Undang:</strong> Peraturan tertulis yang dibuat oleh pemerintah.</li>
                    <li><strong>Kebiasaan:</strong> Norma yang diterima oleh masyarakat.</li>
                    <li><strong>Yurisprudensi:</strong> Keputusan hakim yang menjadi acuan.</li>
                    <li><strong>Traktat:</strong> Perjanjian hukum antara negara.</li>
                    <li><strong>Doktrin:</strong> Pendapat ahli hukum yang dijadikan referensi.</li>
                </ul>

                <h2 className='text-xl font-semibold mb-2'>3. Prinsip-Prinsip Hukum</h2>
                <p className='mb-4'>
                    Beberapa prinsip utama dalam hukum antara lain:
                </p>
                <ul className='list-decimal list-inside mb-4'>
                    <li><strong>Legalitas:</strong> Tidak ada hukuman tanpa dasar hukum.</li>
                    <li><strong>Keadilan:</strong> Hukum harus adil bagi semua.</li>
                    <li><strong>Kepastian Hukum:</strong> Aturan harus jelas dan bisa diterapkan.</li>
                    <li><strong>Kemanusiaan:</strong> Hukum harus menghormati hak asasi manusia.</li>
                </ul>

                <h2 className='text-xl font-semibold mb-2'>4. Contoh Penerapan Hukum</h2>
                <p className='mb-4'>
                    Hukum berlaku dalam kehidupan sehari-hari, seperti:
                </p>
                <ul className='list-disc list-inside'>
                    <li>Pengendara wajib memakai helm sesuai <strong>UU No. 22 Tahun 2009</strong>.</li>
                    <li>Kontrak kerja diatur dalam <strong>Undang-Undang Ketenagakerjaan</strong>.</li>
                    <li>Hak dan kewajiban warga negara diatur dalam <strong>Undang-Undang Dasar 1945</strong>.</li>
                </ul>

                <h2 className='text-xl font-semibold mt-6'>Kesimpulan</h2>
                <p className='mb-4'>
                    Memahami dasar hukum membantu masyarakat menjalankan hak dan kewajibannya sesuai aturan yang berlaku.
                </p>
            </div>
        </div>
    );
};

export default Module;
