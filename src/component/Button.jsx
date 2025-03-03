import React from "react";

const Button = ({ children, onClick, className, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-5 py-2 bg-red-500 rounded-md font-bold text-white transition-all duration-300 hover:bg-red-600 active:scale-95 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
