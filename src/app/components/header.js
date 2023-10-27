import React from "react";

export default function Header() {
    return (
        <div className="static top-0 left-0 w-full h-28 bg-white flex flex-row justify-between items-center p-8 shadow-md shadow-slate-100">
            <div className="menu_icon">
                <i className="bi bi-list text-4xl"></i>
            </div>
            <figure className="brand_logo">
                <span className="text-4xl">
                    JAGUAR
                </span>
            </figure>
            <div className="more_tools flex flex-row gap-4">
                <div className="cart_icon">
                    <i className="bi bi-bag text-2xl"></i>
                </div>
                <div className="search_icon">
                    <i className="bi bi-search text-2xl"></i>
                </div>
            </div>
        </div>
    );
}
