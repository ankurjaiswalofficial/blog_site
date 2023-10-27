import React from "react";
import ExtraBlogCard from "./main/extra_blog_card";

export default function Footer() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-4 pb-6">
            <div className="w-full flex flex-row justify-center flex-wrap gap-4">
                <div class="w-[24rem] flex flex-col justify-center items-center">
                    <h4 class="text-sm uppercase font-bold">Follow Me On</h4>
                    <div className="w-[15rem] h-fit flex flex-row flex-nowrap justify-center items-center gap-3 py-6 ">
                        <button className="rounded-full p-1 px-2 bg-cerisered-600">
                            <i className="bi bi-instagram text-white"></i>
                        </button>
                        <button className="rounded-full p-1 px-2 bg-cerisered-600">
                            <i className="bi bi-twitter text-white"></i>
                        </button>
                        <button className="rounded-full p-1 px-2 bg-cerisered-600">
                            <i className="bi bi-github text-white"></i>
                        </button>
                        <button className="rounded-full p-1 px-2 bg-cerisered-600">
                            <i className="bi bi-google text-white"></i>
                        </button>
                    </div>
                </div>
                <div className="max-w-[24rem] flex flex-col justify-center items-center gap-4">
                    <figure className="">
                        <span className="text-4xl">JAGUAR</span>
                    </figure>
                    <p className="w-9/12 text-sm font-bold text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Obcaecati voluptate.
                    </p>
                </div>
                <div className="w-10/12 max-w-[24rem] flex flex-row flex-wrap justify-center items-center gap-4 p-2 py-4 rounded-xl">
                    <h3 className="w-full text-sm uppercase font-bold text-center">
                        Join my newsletter
                    </h3>
                    <div className="max-w-[24rem] flex flex-grow flex-row flex-wrap justify-center items-center gap-4">
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
                    <p className="w-full text-center text-sm font-semibold text-cerisered-700">
                        This field is required.
                    </p>
                </div>
            </div>
            <div className="w-11/12 flex flex-row flex-nowrap justify-center items-center gap-3">
                <a
                    href="#privacy_policy"
                    className="text-slate-800 text-sm font-bold capitalize"
                >
                    Privacy Policy
                </a>
                <a
                    href="#terms_of_use"
                    className="text-slate-800 text-sm font-bold capitalize"
                >
                    Terms Of Use
                </a>
                <a
                    href="#cookie_policy"
                    className="text-slate-800 text-sm font-bold capitalize"
                >
                    Cookie Policy
                </a>
            </div>
            <h4 className="text-sm font-bold text-center">
                2023. All rights reserved.
            </h4>
        </div>
    );
}
