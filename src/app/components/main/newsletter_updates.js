import React from "react";

export default function NewsLetterUpdates() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-4 bg-gray-100 p-2 py-4 rounded-xl">
            <h4 className="w-full text-sm text-cerisered-600 font-bold uppercase text-center p-2">
                Weekly Updates
            </h4>
            <h3 className="sm:text-4xl text-3xl font-medium w-[24rem] pt-4 text-center whitespace-wrap">
                Join our newletter for latest updates!
            </h3>
            <p className="w-[20rem] text-sm text-slate-600 text-center p-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, nihil.
            </p>
            <div className="sm:w-[36rem] flex flex-grow flex-row flex-wrap justify-center items-center sm:gap-6 gap-4">
                <input
                    className="w-full sm:w-7/12 text-sm font-semibold p-4 border-[0.1rem] border-slate-200 rounded-xl"
                    type="email"
                    name="email"
                    id="newsletter_name"
                    placeholder="Your Email..."
                />
                <input
                    className="flex-grow text-sm font-semibold p-4 px-8 rounded-xl uppercase bg-cerisered-600 text-white"
                    type="button"
                    value="sign up"
                />
            </div>
            <p className="w-full text-center text-sm font-semibold text-cerisered-700">This field is required.</p>
        </div>
    );
}
