import React from "react";
import Search from "./Search";
import IconButton from "../elements/IconButton";
import BrandLogo from "./BrandLogo";
import UserButton from "./UserButton";

export default function Header() {
    return (
        <div className="static top-0 left-0 w-full h-20 bg-white flex flex-row justify-between items-center p-8 shadow-md shadow-slate-100">
            <div className="more_tools flex flex-row justify-center items-center gap-8">
                <BrandLogo />,
                <Search />
            </div>
            <div className="more_tools flex flex-row justify-center items-center gap-8">
                <IconButton iconName={"search"} href={"/search"} className="min-[512px]:hidden" />
                <IconButton
                    iconName={"pencil-square"}
                    href={"/write"}
                    text={"Write"}
                />
                <IconButton iconName={"bell"} href={"/notifications"} />
                <UserButton />
            </div>
        </div>
    );
}
