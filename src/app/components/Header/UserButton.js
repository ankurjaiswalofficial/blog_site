"use client";
import React, { useContext } from "react";
import IconButton from "../elements/IconButton";
import { UserBoxContext_ } from "../contexts/UserBoxContext";

function UserButton() {
    const mainButton = [
        {
            iconName: "person",
            href: "/profile",
            text: "Profile",
        },
        {
            iconName: "tag",
            href: "/me/lists",
            text: "Library",
        },
        {
            iconName: "card-text",
            href: "/me/stories",
            text: "Stories",
        },
        {
            iconName: "bar-chart",
            href: "/me/stats",
            text: "Stats",
        },
    ];
    const valueButton = [
        {
            iconName: "gear",
            href: "/me/settings",
            text: "Settings",
        },
        {
            iconName: "arrow-clockwise",
            href: "/me/refine",
            text: "Refine Recommendations",
        },
        {
            iconName: "journal-bookmark",
            href: "/me/publications",
            text: "Manage Publications",
        },
        {
            iconName: "patch-question",
            href: "/me/help",
            text: "Help",
        },
    ];
    const show = useContext(UserBoxContext_);
    return (
        <div className="relative">
            <i
                className="bi bi-person text-4xl font-medium"
                onClick={() => show.setShowUserBox(!show.showUserBox)}
            ></i>
            <div
                className={`${
                    show.showUserBox ? "" : "hidden"
                } absolute z-50 top-12 right-0 w-72 flex flex-col justify-start items-center px-4 rounded-md shadow-lg shadow-gray-400 bg-white border border-slate-200 overflow-y-auto max-h-[80vh] min-h-[2rem]`}
            >
                <div className="flex flex-col justify-start items-start gap-2 p-4 py-6 w-full border-b ">
                    {mainButton.map((ele, index) => {
                        return (
                            <IconButton
                                iconName={ele.iconName}
                                href={ele.href}
                                text={ele.text}
                                key={String(index) + "_IBFUMB"}
                                className="w-full gap-2"
                            />
                        );
                    })}
                </div>
                <div className="flex flex-col justify-start items-start gap-2 p-4 py-6 w-full border-b ">
                    {valueButton.map((ele, index) => {
                        return (
                            <IconButton
                                href={ele.href}
                                text={ele.text}
                                key={String(index) + "_IBFUVB"}
                                textClass="pt-3 pl-0"
                                className="w-full gap-2"
                            />
                        );
                    })}
                </div>
                <div className="flex flex-col justify-start items-start gap-2 p-4 py-6 w-full ">
                    <IconButton
                        href={"/signout"}
                        text={
                            <>
                                Sign Out
                                <br />
                                user...........@gmail.com
                            </>
                        }
                        textClass="pl-0"
                        className="w-full gap-2"
                    />
                </div>
            </div>
        </div>
    );
}

export default UserButton;
