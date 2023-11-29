import React from "react";
import PostItem from "../elements/PostItem";

function PrimaryMainBody({ postItems, ...props }) {
    return (
        <div className="w-[680px] flex flex-col gap-6 justify-center items-center">
            {postItems.map((e, index) => (
                <div
                    key={String(index) + "_PIPMB"}
                    className="w-full flex flex-col gap-6 justify-center items-center"
                >
                    <PostItem author={e.author} post={e.post} />
                    <hr className="w-11/12" />
                </div>
            ))}
        </div>
    );
}

export default PrimaryMainBody;
