import React from "react";

export default function UpdateCard() {
    return (
        <div className="w-full h-auto flex flex-row flex-wrap sm:flex-nowrap gap-5 justify-evenly items-center">
            {["My Story", "Recents", "Mastery", "Develop"].map((e, index) => {
                return (
                    <div className="relative w-auto h-auto sm:max-w-[28rem] rounded-xl">
                        <img
                            src="/img/update_card.png"
                            alt="Update Card Background Image"
                            className="rounded-xl shadow-lg"
                        />
                        <a
                            className="absolute w-full h-full top-0 left-0 flex justify-center items-center rounded-xl"
                            href="#flower1"
                        >
                            <h4 className="text-md font-medium capitalize px-8 py-4 bg-white w-fit  rounded-xl whitespace-nowrap text-ellipsis shadow-lg">
                                {e}
                            </h4>
                        </a>
                    </div>
                );
            })}
        </div>
    );
}
