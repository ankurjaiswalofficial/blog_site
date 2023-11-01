import React from "react";
import ImageTypoStack from "./image_typo_stack";

export default function ExtraBlogCard(props) {
    return (
        <div className="w-full h-fit flex flex-col justify-center items-center gap-4">
            <h4 className="w-full text-sm text-black font-semibold uppercase text-center border-b-2 p-2 border-slate-100">
                {props.description}
            </h4>
            {props.image ? (
                <figure className="w-full mx-1 h-auto flex justify-center items-center">
                    <img
                        src={props.image.src}
                        alt={props.image.alt}
                        className="w-auto h-auto rounded-xl"
                    />
                </figure>
            ) : null}
            {props.smallerText ? (
                <h3 className="w-10/12 text-sm font-bold text-black uppercase text-center">
                    {props.smallerText}
                </h3>
            ) : null}
            {props.largerText ? (
                <h3 className="w-10/12 text-sm font-bold text-black uppercase text-center">
                    {props.largerText}
                </h3>
            ) : null}
            {props.card_para ? (
                <p className="w-11/12 text-center font-bold text-sm">
                    {props.card_para}
                </p>
            ) : null}
            {props.social ? (
                <div className="w-full h-fit flex flex-row flex-nowrap justify-center items-center gap-3 py-6 ">
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
            ) : null}
            {props.social_large ? (
                <div className="w-full h-fit flex flex-row flex-nowrap justify-center items-center gap-3 py-2 ">
                    <button className="rounded-full p-3 px-4 bg-slate-800">
                        <i className="bi bi-instagram text-2xl text-white"></i>
                    </button>
                    <button className="rounded-full p-3 px-4 bg-slate-800">
                        <i className="bi bi-twitter text-2xl text-white"></i>
                    </button>
                    <button className="rounded-full p-3 px-4 bg-slate-800">
                        <i className="bi bi-github text-2xl text-white"></i>
                    </button>
                    <button className="rounded-full p-3 px-4 bg-slate-800">
                        <i className="bi bi-google text-2xl text-white"></i>
                    </button>
                </div>
            ) : null}
            {props.footer_image ? (
                <figure className="w-full h-auto flex justify-center align-center">
                    <img
                        src={props.footer_image.src}
                        alt={props.footer_image.alt}
                        className="h-16 w-auto rounded-xl"
                    />
                </figure>
            ) : null}
            {props.footer_link ? (
                <a
                    href={props.footer_link.href}
                    className="text-cerisered-600 uppercase text-sm font-semibold underline underline-offset-8"
                >
                    {props.footer_link.text}
                </a>
            ) : null}
            {props.post_stack ? (
                <div className="w-full flex flex-col gap-2">
                    {props.post_stack.map((val, index) => {
                        return (
                            <ImageTypoStack
                                key={String(index) + "image_typo_stack"}
                                image={val.image}
                                text={val.text}
                                href={val.link}
                            />
                        );
                    })}
                </div>
            ) : null}
            {props.stats_stack ? (
                <div className="w-full flex flex-col justify-center items-center">
                    {props.stats_stack.map((val, index) => {
                        return (
                            <div
                                className="w-full flex flex-row justify-between px-4 my-1"
                                key={String(index) + "_stats_stack"}
                            >
                                <h3 className="text-sm font-bold capitalize text-black">
                                    {val.name}
                                </h3>
                                <h4 className="text-xs font-bold text-slate-500">
                                    {"["}
                                    {val.value}
                                    {"]"}
                                </h4>
                            </div>
                        );
                    })}
                </div>
            ) : null}
            {props.subscription ? (
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
            ) : null}
        </div>
    );
}
