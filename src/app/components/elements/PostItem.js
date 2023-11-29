"use client";
import Link from "next/link";
import React, { useState } from "react";
import Tag from "./Tag";
import IconButton from "./IconButton";
import Image from "next/image";
import { ReadTime } from "../utils/ReadTime";

function PostItem({
    author = { name: "", src: "" },
    post = {
        postId: "",
        date: "",
        priority: false,
        href: "",
        title: "",
        description: "",
        tags: [],
        wordCount: 0,
        image: null,
        publication: null,
    },
    ...props
}) {
    const [showShortMenu, setShowShortMenu] = useState(false);
    const handleBookMark = () => {
        const url = "";
    };
    const handleShowLess = () => {
        const url = "";
    };
    const handleReport = () => {
        const url = "";
    };
    const handleMutePublication = () => {
        const url = "";
    };
    const handleMuteAuthor = () => {
        const url = "";
    };
    return (
        <div className="max-w-[680px] w-full flex flex-col justify-center items-center gap-2 px-4">
            <div className="flex flex-row justify-start items-center w-full text-sm">
                <IconButton iconName={"person"} />
                <IconButton text={author.name} textClass="pr-0" />
                {post.publication ? (
                    <>
                        &nbsp; in &nbsp;
                        <IconButton
                            text={post.publication.name}
                            textClass="pl-0 capitalize"
                        />
                    </>
                ) : null}
                <IconButton
                    text={post.date}
                    textClass="pl-0 text-slate-500"
                />
                {post.priority ? (
                    <IconButton
                        text="⭐ Member Only"
                        textSize="text-sm"
                        textClass="pl-0 text-slate-500"
                    />
                ) : null}
            </div>
            <div className="flex flex-row flex-nowrap justify-between items-start w-full gap-6">
                <div className="flex flex-col justify-start items-start w-10/12 break-words gap-2">
                    <Link
                        href={post.href}
                        className="flex flex-col justify-start items-start w-full"
                    >
                        <h2 className="text-lg font-extrabold capitalize whitespace-normal break-words">
                            {post.title}
                        </h2>
                        <p className="text-sm whitespace-normal break-words">
                            {post.description}
                        </p>
                    </Link>
                    <div className="w-full flex flex-row justify-between items-center mt-4">
                        <div className="flex flex-row flex-nowrap gap-2">
                            {post.tags.map((e, index) => (
                                <Tag
                                    key={String(index) + "_PITB"}
                                    tagName={e}
                                />
                            ))}
                            <IconButton
                                text={String(ReadTime(post.wordCount) + " min read")}
                                textClass="pl-0"
                            />
                        </div>
                        <div className="flex flex-row flex-nowrap gap-4 mr-4">
                            <IconButton
                                onClick={() => handleBookMark()}
                                btnType="button"
                                iconName="bookmark-plus"
                                iconClass="text-xl"
                                textClass="pl-0"
                            />
                            <IconButton
                                onClick={() => handleShowLess()}
                                btnType="button"
                                iconName="dash-circle"
                                iconClass="text-xl"
                                textClass="pl-0"
                            />
                            <div class="relative flex justify-center items-center">
                                <IconButton
                                    onClick={() =>
                                        setShowShortMenu(!showShortMenu)
                                    }
                                    btnType="button"
                                    iconName="three-dots"
                                    iconClass="text-xl"
                                    textClass="pl-0"
                                />
                                <div
                                    onMouseLeave={() =>
                                        setShowShortMenu(!showShortMenu)
                                    }
                                    class={`${
                                        showShortMenu ? "" : "hidden"
                                    } absolute top-4 left-4 flex flex-col justify-start items-start gap-2 w-fit h-fit bg-white shadow-xl shadow-slate-200 rounded-lg p-4 border`}
                                >
                                    <IconButton
                                        onClick={handleMuteAuthor()}
                                        text="Mute this author"
                                        btnType="button"
                                        textClass="p-1"
                                    />
                                    {post.publication ? (
                                        <IconButton
                                            onClick={handleMutePublication()}
                                            text="Mute this publication"
                                            btnType="button"
                                            textClass="p-1"
                                        />
                                    ) : null}
                                    <IconButton
                                        onClick={handleReport()}
                                        text="Report"
                                        btnType="button"
                                        textClass="p-1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {post.image != null ? (
                    <Image
                        width={32 * 16}
                        height={32 * 9}
                        className="w-3/12 max-w-[7rem] max-h-28 aspect-square rounded-md"
                        src={post.image.src}
                        alt={post.image.alt}
                    />
                ) : null}
            </div>
        </div>
    );
}

export default PostItem;
