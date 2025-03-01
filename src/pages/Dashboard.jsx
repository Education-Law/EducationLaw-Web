import React from 'react'
import Button from '../component/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faStar, faUser, faClock } from "@fortawesome/free-solid-svg-icons";


const Dashboard = () => {
    return (
        <div>
            <div className='m-10 my-40'>
                <div className='flex justify-center items-center gap-50'>
                    <div>
                        <h1 className='mb-10 text-3xl text-red-500'>Belajar Hukum dengan Mudah & Fleksibel !</h1>
                        <p className='mb-10 text-sm'>Dapatkan akses ke berbagai materi hukum dari para ahli, kapan saja dan di mana saja.</p>
                        <Button>Mulai Belajar!</Button>
                    </div>
                    <div className='h-80 w-60 bg-red-500 rounded-lg'></div>
                </div>
            </div>

            <div className='m-10 p-10 py-20 bg-[#888888] rounded-lg'>
                <h1 className='mb-20 text-3xl text-red-500 text-center'>Kenapa Harus Belajar di EducationLaw</h1>
                <div className='flex justify-center items-cemter gap-50'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex gap-10 items-center'>
                            <div className='h-20 w-20 bg-gray-500 rounded-full'></div>
                            <div>
                                <h4 className='mb-2 font-bold text-lg'>Belajar dari Ahli</h4>
                                <p className='text-sm'>Kursus dibuat oleh pengacara dan akademisi berpengalaman</p>
                            </div>
                        </div>
                        <div className='flex gap-10 items-center'>
                            <div className='h-20 w-20 bg-gray-500 rounded-full'></div>
                            <div>
                                <h4 className='mb-2 font-bold text-lg'>Bersertifikat</h4>
                                <p className='text-sm'>Dapatkan sertifikat setelah menyelesaikan kursus</p>
                            </div>
                        </div>
                        <div className='flex gap-10 items-center'>
                            <div className='h-20 w-20 bg-gray-500 rounded-full'></div>
                            <div>
                                <h4 className='mb-2 font-bold text-lg'>Akses Materi Lengkap</h4>
                                <p className='text-sm'>Video, dokumen, dan latihan soal.</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-80 w-60 bg-gray-500 rounded-lg'></div>
                </div>
            </div>

            <div className='mx-60 my-20'>
                <div className='mb-20 flex flex-col justify-end'>
                    <h1 className='mb-4 text-3xl text-red-500'>Pelajari Berbagai Bidang Hukum</h1>
                    <div className='flex gap-5'>
                        <div className='w-100 h-4 bg-red-500 border-none rounded-lg'></div>
                        <div className='w-25 h-4 border border-2 border-red-500 rounded-lg'></div>
                        <div className='w-10 h-4 border border-2 border-red-500 rounded-lg'></div>
                    </div>
                </div>
                <div className="flex items-center gap-40">
                    <div>
                        <div className='mb-10 flex gap-20'>
                            <div className='p-4 flex flex-col justify-center items-center border border-2 border-gray-400 rounded-lg'>
                                <div className='mb-4 h-10 w-10 bg-gray-500 rounded-lg'></div>
                                <h4 className='text-lg text-gray-500'>Hukum Pidana</h4>
                            </div>
                            <div className='p-4 flex flex-col justify-center items-center border border-2 border-gray-400 rounded-lg'>
                                <div className='mb-4 h-10 w-10 bg-gray-500 rounded-lg'></div>
                                <h4 className='text-lg text-gray-500'>Hukum Pidana</h4>
                            </div>
                            <div className='p-4 flex flex-col justify-center items-center border border-2 border-gray-400 rounded-lg'>
                                <div className='mb-4 h-10 w-10 bg-gray-500 rounded-lg'></div>
                                <h4 className='text-lg text-gray-500'>Hukum Pidana</h4>
                            </div>
                        </div>
                        <div className='flex gap-20'>
                            <div className='p-4 flex flex-col justify-center items-center border border-2 border-gray-400 rounded-lg'>
                                <div className='mb-4 h-10 w-10 bg-gray-500 rounded-lg'></div>
                                <h4 className='text-lg text-gray-500'>Hukum Pidana</h4>
                            </div>
                            <div className='p-4 flex flex-col justify-center items-center border border-2 border-gray-400 rounded-lg'>
                                <div className='mb-4 h-10 w-10 bg-gray-500 rounded-lg'></div>
                                <h4 className='text-lg text-gray-500'>Hukum Pidana</h4>
                            </div>
                            <div className='p-4 flex flex-col justify-center items-center border border-2 border-gray-400 rounded-lg'>
                                <div className='mb-4 h-10 w-10 bg-gray-500 rounded-lg'></div>
                                <h4 className='text-lg text-gray-500'>Hukum Pidana</h4>
                            </div>
                        </div>
                    </div>
                    <button className='px-10 py-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 flex items-center justify-center'>
                        <FontAwesomeIcon icon={faChevronRight} size="3x" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard