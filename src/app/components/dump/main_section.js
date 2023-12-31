import React from "react";
import BlogCard from "./blog_card";
import ExtraBlogCard from "./extra_blog_card";

export default function MainSection() {
    return (
        <div className="relative w-full h-auto flex flex-row flex-wrap justify-center items-start gap-12">
            <div className="w-full flex flex-col justify-center items-center max-w-[55rem] flex-grow">
                <BlogCard
                    header={"Building Awesome Apps with Next.js"}
                    image={{
                        src: "/img/next_js_image.png",
                        alt: "Next JS Image",
                    }}
                    description={"lorem text sample for the test purpose only you damn shit"}
                    card_type={"JavaScript FrameWork"}
                />
                <BlogCard
                    header={"Unleashing the Power of React.js"}
                    image={{
                        src: "/img/react_js_image.png",
                        alt: "Next JS Image",
                    }}
                    description={"lorem text sample for the test purpose only you damn shit"}
                />
                <BlogCard
                    header={"JavaScript Mastery"}
                    image={{ src: "/img/js_image.png", alt: "Next JS Image" }}
                    description={"lorem text sample for the test purpose only you damn shit"}
                />
                <BlogCard
                    header={"HTML Essentials"}
                    image={{ src: "/img/html_image.jpg", alt: "Next JS Image" }}
                    description={"lorem text sample for the test purpose only you damn shit"}
                />
                <BlogCard
                    header={"CSS Mastery"}
                    image={{ src: "/img/css_image.png", alt: "Next JS Image" }}
                    description={"lorem text sample for the test purpose only you damn shit"}
                />
                <BlogCard
                    header={"Mastering Material-UI"}
                    image={{ src: "/img/mui_image.png", alt: "Next JS Image" }}
                    description={"lorem text sample for the test purpose only you damn shit"}
                />
                <BlogCard
                    header={"Unleashing the Power of Django"}
                    image={{
                        src: "/img/django_image.png",
                        alt: "Next JS Image",
                    }}
                    description={"lorem text sample for the test purpose only you damn shit"}
                />
                <div className="w-full h-fit flex flex-row flex-nowrap justify-center items-center gap-3 py-6 ">
                    <button className="rounded-full p-3 px-4">
                        <i className="bi bi-caret-left-fill font-bold text-black"></i>
                    </button>
                    <button className="rounded-full p-3 px-4 bg-cerisered-600">
                        <h6 className="font-bold text-white">1</h6>
                    </button>
                    <button className="rounded-full p-3 px-4">
                        <h6 className="font-bold text-black">2</h6>
                    </button>
                    <button className="rounded-full p-3 px-4">
                        <h6 className="font-bold text-black">...</h6>
                    </button>
                    <button className="rounded-full p-3 px-4">
                        <i className="bi bi-caret-right-fill font-bold text-black"></i>
                    </button>
                </div>
            </div>
            <div className="sticky top-0 sm:w-full sm:max-w-[18rem] flex flex-col justify-center items-start gap-5 mt-8">
                <ExtraBlogCard
                    description={"about me"}
                    image={{
                        src: "/img/ankur_jaiswal_1.jpg",
                        alt: "Owner Image",
                    }}
                    largerText={"Ankur Jaiswal"}
                    card_para={
                        "20yrs old, from India, Frontend Developer , 3yrs of experience with 20 plus projects"
                    }
                    footer_image={{
                        src: "/img/mui_image.png",
                        alt: "Flower 6 Image",
                    }}
                    social={true}
                />
                <ExtraBlogCard
                    description={"featured post"}
                    image={{ src: "/img/js_image.png", alt: "Flower 7 Image" }}
                    largerText={
                        "A Day in the life of a fashion Behind the scene"
                    }
                    card_para={
                        "She started her blog exactly six months later on She started her blog exactly six months later on She started her blog exactly six months later on...."
                    }
                    footer_link={{ href: "#notStarted", text: "Read More" }}
                />
                <ExtraBlogCard
                    description={"recent post"}
                    post_stack={[
                        {
                            image: {
                                src: "/img/next_js_image.png",
                                alt: "Next Js Image",
                            },
                            text: "lorem 30 random text of the post to bew create in future...",
                            href: "#random_recent_post",
                        },
                        {
                            image: {
                                src: "/img/react_js_image.png",
                                alt: "Flower 7 Image",
                            },
                            text: "lorem 30 random text of the post to bew create in future...",
                            href: "#random_recent_post",
                        },
                        {
                            image: {
                                src: "/img/html_image.jpg",
                                alt: "Flower 7 Image",
                            },
                            text: "lorem 30 random text of the post to bew create in future...",
                            href: "#random_recent_post",
                        },
                        {
                            image: {
                                src: "/img/mui_image.png",
                                alt: "Flower 7 Image",
                            },
                            text: "lorem 30 random text of the post to bew create in future...",
                            href: "#random_recent_post",
                        },
                    ]}
                />
                <ExtraBlogCard
                    description={"browse by category"}
                    stats_stack={[
                        { name: "Fashion", value: "3" },
                        { name: "Hollywood", value: "6" },
                        { name: "Life Style", value: "5" },
                    ]}
                />
                <ExtraBlogCard description={"follow me"} social_large={true} />
                <ExtraBlogCard
                    description={"get weekly updates"}
                    subscription={true}
                />
                <div className="w-full h-96 bg-cerisered-200 flex flex-col justify-center items-center gap-4 p-4 rounded-xl my-4 mt-8">
                    <i className="bi bi-cloud-arrow-down-fill text-slate-900 text-9xl"></i>
                    <p className="text-sm text-center font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore incidunt minus debitis vel fugit sit?
                    </p>
                    <input
                        className="w-10/12 h-fit text-sm font-semibold p-4 px-8 rounded-xl uppercase bg-cerisered-600 text-white"
                        type="button"
                        value="download now"
                    />
                </div>
            </div>
        </div>
    );
}
