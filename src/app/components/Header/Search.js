import React from "react";

function Search() {
    return (
        <div className="">
            <div className="w-80 border pl-3 border-slate-100 rounded-full flex flex-row flex-nowrap justify-center items-center bg-gray-100 bg-opacity-40">
                <i className="bi bi-search text-2xl mt-1"></i>
                <input
                    type="text"
                    placeholder="Search"
                    className="text-lg text-black placeholder:text-black w-full h-full p-4 rounded-full outline-none border-none bg-transparent"
                ></input>
            </div>
        </div>
    );
}

export default Search;
