import React from "react";

export default function NewsLetter() {
    return (
        <div className="w-full flex flex-row flex-wrap justify-center items-center gap-3 bg-gray-100 p-2 py-4 rounded-xl">
            <div className="w-fit flex flex-row flex-wrap justify-center items-center gap-3">
                <h3 className="text-xl font-medium w-[18rem] p-4 text-start whitespace-wrap">
                    Join our newletter for latest updates!
                </h3>
                <input
                    className="w-[18rem] text-sm font-semibold p-4 border-[0.1rem] border-slate-200 rounded-xl"
                    type="text"
                    name="name"
                    id="newsletter_name"
                    placeholder="Your Name..."
                />
            </div>
            <div className="w-auto max-w-[48.75rem] flex flex-grow flex-row flex-wrap justify-center items-center gap-3">
                <input
                    className="w-[18rem] text-sm font-semibold p-4 border-[0.1rem] border-slate-200 rounded-xl"
                    type="email"
                    name="email"
                    id="newsletter_name"
                    placeholder="Your email address..."
                />
                <input
                    className="max-w-[18rem] sm:w-[18rem] flex-grow text-sm font-semibold p-4 px-8 rounded-xl uppercase bg-cerisered-600 text-white"
                    type="button"
                    value="sign up"
                />
            </div>
        </div>
    );
}
