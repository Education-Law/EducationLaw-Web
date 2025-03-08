import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faList } from "@fortawesome/free-solid-svg-icons";

const QuizEssay = () => {
    const questions = [
        {
            question: "Jelaskan apa yang dimaksud dengan hukum?",
        },
        {
            question: "Mengapa yurisprudensi dianggap sebagai salah satu sumber hukum?",
        }
    ];

    const [essayAnswers, setEssayAnswers] = useState({});

    const handleEssayChange = (index, value) => {
        setEssayAnswers({ ...essayAnswers, [index]: value });
    };

    return (
        <div className="mx-40 my-10 p-8 bg-white rounded-lg border border-gray-300 relative">
            <button className="fixed top-1/2 right-10 transform -translate-y-1/2 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition duration-300">
                <FontAwesomeIcon icon={faList} size="lg" />
            </button>

            <div className='mb-6'>
                <h1 className="text-3xl font-bold text-red-600 mb-4">Essay Quiz</h1>
                <hr className="h-1 bg-red-500 border-none mb-4" />
                <p className='text-gray-400 text-xs'>
                    “Setiap soal dalam quiz ini merupakan pertanyaan essay. Harap tuliskan jawaban Anda dengan jelas dan lengkap.”
                </p>
            </div>

            <div>
                <form>
                    {questions.map((q, index) => (
                        <div key={index} className="mb-6 flex items-start gap-6">
                            <div className="text-xl flex items-center justify-center text-4xl font-bold text-red-500">
                                {index + 1}.
                            </div>

                            <div className="w-full">
                                <p className="font-semibold">{q.question}</p>
                                <textarea
                                    className="mt-2 w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    rows="4"
                                    placeholder="Tulis jawaban Anda di sini..."
                                    value={essayAnswers[index] || ""}
                                    onChange={(e) => handleEssayChange(index, e.target.value)}
                                />
                            </div>
                        </div>
                    ))}
                </form>
            </div>

            <div className='flex justify-end gap-10'>
                <button className='px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 flex items-center justify-center'>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};

export default QuizEssay;
