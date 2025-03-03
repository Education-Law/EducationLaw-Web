import React from 'react';
import { FaChevronLeft, FaChevronRight, FaChevronDown} from 'react-icons/fa';
import Card from "../components/Card";

const Course = () => {
  return (
    <div>
        <div className="border border-gray-500 rounded-lg p-10 my-8 mx-20">
            <main className="container mx-auto py-8 px-6 border border-gray-300 rounded-lg bg-white">
                <div className="flex justify-between items-center mb-6 border-b-2 py-4 border-red-600">
                    <h1 className="text-3xl font-bold text-rose-800">Daftar Course</h1>
                    <input type="text" placeholder="Cari Course..." className="border border-gray-300 rounded-full px-4 py-2 w-full max-w-md" />
                </div>
                <Section title="Course Terbaru" />
                <Section title="Course Terpopuler" />
                <DifficultySection />
                <CategorySection />
            </main>
        </div>
    </div>
  );
};

const Section = ({ title }) => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-gray-200 text-gray-500 rounded-full p-2 mx-2">
          <FaChevronLeft />
        </button>
        <button className="bg-red-500 text-white rounded-full p-2 mx-2">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

const CourseCard = () => {
  return (
    <div>
      <Card />
    </div>
  );
};


export default Course;