import React from "react";
import NewsLetter from "./newsletter";
import UpdateCard from "./update_Card";
import ThemeToggler from "../themeToggler";
import MainSection from "./main_section";
import NewsLetterUpdates from "./newsletter_updates";
import BreadCrumb from "./breadcrumb";

export default function Madin() {
    return (
        <main className="container p-4 md:px-16 h-fit flex flex-col gap-8 justify-center items-center">
            <BreadCrumb
                breadcrumbs={[
                    { text: "Javascript", href: "#javascript" },
                    { text: "Next JS", href: "#next_javascript" },
                ]}
            />
            <UpdateCard />
            <MainSection />
            <NewsLetterUpdates />
            <ThemeToggler />
        </main>
    );
}
