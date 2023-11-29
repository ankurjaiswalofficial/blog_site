import React from "react";
import IconButton from "../elements/IconButton";

function PrimaryMainHeader() {
    const interestList = [
        {
            text: "For you",
            href: "/"
        },
        {
            text: "Following",
            href: "/me/following"
        },
    ]
    return (
        <div className="relative w-full flex flex-row flex-nowrap justify-between items-center bg-white border-b border-slate-100 overflow-hidden">
            <IconButton iconName={"plus"} iconSize="text-3xl" iconClass="p-4" href="/me/following/suggestions" />
            <IconButton text={"For you"} iconSize="text-3xl" textClass="p-4 border-b border-black" href="/" />
            <IconButton text={"Following"} iconSize="text-3xl" textClass="p-4 border-b border-black" href="/me/following" />
            {interestList.map((ele, index) => {
                <IconButton key={String(index) + "_PMHB"} text={ele.text} href={ele.href} textClass="p-4 border-b border-black" />
            })}
            <IconButton iconName={"chevron-left"} className="absolute left-0 bg-white" iconClass="p-4 px-6" />
            <IconButton iconName={"chevron-right"} className="absolute right-0 bg-white" iconClass="p-4 px-6" />
        </div>
    );
}

export default PrimaryMainHeader;
