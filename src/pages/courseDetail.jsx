import React, { useState } from 'react';
import { FaStar, FaChevronDown, FaChevronRight, FaUsers } from 'react-icons/fa';

const CourseDetail = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100">
      <main className="container mx-auto mb-8">
      <section className="bg-gray-300 py-10 px-20 rounded-b rounded- shadow-md mx-10">
          <div className="bg-white p-6 rounded-lg shadow-md flex">
            <div className="w-2/5">
              <iframe
                width="100%"
                height="250"
                src=""
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-3/5 pl-6">
              <h1 className="text-2xl font-bold text-rose-800">Dasar Hukum</h1>
              <div className="flex items-center mt-2">
                <span className="text-red-600">
                  <FaStar /> 4.8
                </span>
                <span className="mx-2">|</span>
                <span>
                  Level: <span className="font-bold">Pemula</span>
                </span>
                <span className="mx-2">|</span>
                <span>
                  Durasi: <span className="font-bold">20 Jam</span>
                </span>
              </div>
              <div className="mt-2">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">Kategori</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">Hukum</span>
              </div>
              <p className="mt-4 text-gray-700">
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum...
              </p>
              <div className="mt-4 text-2xl font-bold text-gray-800">Rp100.000</div>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full mt-4">Daftar</button>
              <div className="flex items-center mt-4">
                <FaUsers className="text-red-600" />
                <span className="ml-2">186 pendaftar</span>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default CourseDetail;