import React from "react";
import PrimaryMainHeader from "./PrimaryMainHeader";
import PrimaryMainBody from "./PrimaryMainBody";

function PrimaryMain() {
    return (
        <div className="w-full flex flex-col justify-start items-center gap-4">
            <PrimaryMainHeader />
            <PrimaryMainBody
                postItems={[
                    {
                        author: { name: "John Doe", src: "/@john_doe" },
                        post: {
                            date: "Apr 25",
                            href: "#/new_Blog",
                            wordCount: 750,
                            title: "Mastering the Art of Problem Solving",
                            description:
                                "Exploring various problem-solving techniques and strategies to enhance your skills.",
                            postId: "abc123xyz456",
                            priority: true,
                            tags: ["Problem Solving", "Skills", "Learning"],
                            image: {
                                src: "/img/generated_image_1.jpeg",
                                alt: "Problem Solving Techniques",
                            },
                            publication: {
                                name: "Skillful Minds",
                                href: "/@skillful_minds",
                            },
                        },
                    },
                    {
                        author: { name: "Jane Smith", src: "/@jane_smith" },
                        post: {
                            date: "May 10",
                            href: "#/coding_Blog",
                            wordCount: 600,
                            title: "The Evolution of Coding Languages",
                            description:
                                "Tracing the evolution of programming languages from their inception to the modern era.",
                            postId: "def456ghi789",
                            priority: false,
                            tags: [
                                "Coding",
                                "Programming Languages",
                                "History",
                            ],
                            image: {
                                src: "/img/generated_image_1.jpeg",
                                alt: "Evolution of Coding Languages",
                            },
                            publication: {
                                name: "Code Chronicles",
                                href: "/@code_chronicles",
                            },
                        },
                    },
                    {
                        author: { name: "Alex Johnson", src: "/@alex_johnson" },
                        post: {
                            date: "Jun 5",
                            href: "#/tech_Blog",
                            wordCount: 900,
                            title: "Future Tech Trends: What's Next?",
                            description:
                                "Exploring emerging technologies that will shape the future landscape of innovation.",
                            postId: "ghi789jkl012",
                            priority: true,
                            tags: ["Technology", "Innovation", "Future Trends"],
                            image: {
                                src: "/img/generated_image_2.jpeg",
                                alt: "Future Technology Trends",
                            },
                            publication: {
                                name: "Tech Insight",
                                href: "/@tech_insight",
                            },
                        },
                    },
                    {
                        author: { name: "Ella Brown", src: "/@ella_brown" },
                        post: {
                            date: "Jul 15",
                            href: "#/design_Blog",
                            wordCount: 550,
                            title: "The Power of Design Thinking",
                            description:
                                "Unleashing the potential of design thinking in problem-solving and innovation.",
                            postId: "mno345pqr678",
                            priority: true,
                            tags: ["Design", "Innovation", "Creativity"],
                            image: {
                                src: "/img/generated_image_3.jpeg",
                                alt: "Design Thinking Process",
                            },
                            publication: {
                                name: "Design Matters",
                                href: "/@design_matters",
                            },
                        },
                    },
                    {
                        author: {
                            name: "Michael Adams",
                            src: "/@michael_adams",
                        },
                        post: {
                            date: "Aug 20",
                            href: "#/entrepreneurship_Blog",
                            wordCount: 700,
                            title: "Journey of an Entrepreneur",
                            description:
                                "Insights into the challenges and victories of building a successful startup.",
                            postId: "pqr678stu901",
                            priority: false,
                            tags: [
                                "Entrepreneurship",
                                "Startups",
                                "Success Stories",
                            ],
                            image: {
                                src: "/img/generated_image_4.png",
                                alt: "Entrepreneurship Journey",
                            },
                            publication: {
                                name: "Startup Stories",
                                href: "/@startup_stories",
                            },
                        },
                    },
                    {
                        author: { name: "Sophia Lee", src: "/@sophia_lee" },
                        post: {
                            date: "Sep 8",
                            href: "#/health_Blog",
                            wordCount: 480,
                            title: "The Mind-Body Connection",
                            description:
                                "Exploring the intricate relationship between mental health and physical well-being.",
                            postId: "stu901vwx234",
                            priority: true,
                            tags: ["Health", "Wellness", "Mindfulness"],
                            image: {
                                src: "/img/generated_image_6.png",
                                alt: "Mind-Body Relationship",
                            },
                            publication: {
                                name: "Healthy Living",
                                href: "/@healthy_living",
                            },
                        },
                    },
                    {
                        author: {
                            name: "Oliver Garcia",
                            src: "/@oliver_garcia",
                        },
                        post: {
                            date: "Oct 12",
                            href: "#/science_Blog",
                            wordCount: 620,
                            title: "Unraveling Mysteries of the Universe",
                            description:
                                "Delving into the latest discoveries and theories in astrophysics and cosmology.",
                            postId: "vwx234yzab567",
                            priority: false,
                            tags: ["Science", "Astrophysics", "Cosmology"],
                            image: {
                                src: "/img/generated_image_7.jpeg",
                                alt: "Universe Mysteries",
                            },
                            publication: {
                                name: "Cosmic Insights",
                                href: "/@cosmic_insights",
                            },
                        },
                    },
                    {
                        author: { name: "Liam Cooper", src: "/@liam_cooper" },
                        post: {
                            date: "Nov 3",
                            href: "#/travel_Blog",
                            wordCount: 580,
                            title: "Exploring Offbeat Destinations",
                            description:
                                "Discovering hidden gems and unique experiences in lesser-known travel destinations.",
                            postId: "yzab567cde890",
                            priority: true,
                            tags: ["Travel", "Adventure", "Offbeat"],
                            image: {
                                src: "/img/generated_image_8.jpeg",
                                alt: "Offbeat Travel Destinations",
                            },
                            publication: {
                                name: "Wanderlust Chronicles",
                                href: "/@wanderlust_chronicles",
                            },
                        },
                    },
                    {
                        author: { name: "Emma Turner", src: "/@emma_turner" },
                        post: {
                            date: "Dec 7",
                            href: "#/food_Blog",
                            wordCount: 530,
                            title: "Culinary Adventures Around the World",
                            description:
                                "Embarking on a gastronomic journey exploring diverse cuisines worldwide.",
                            postId: "cde890fgh123",
                            priority: false,
                            tags: ["Food", "Cuisine", "Travel"],
                            image: {
                                src: "/img/generated_image_9.jpeg",
                                alt: "Culinary Adventures",
                            },
                            publication: {
                                name: "Foodie Finds",
                                href: "/@foodie_finds",
                            },
                        },
                    },
                    {
                        author: { name: "Noah Bennett", src: "/@noah_bennett" },
                        post: {
                            date: "Jan 15",
                            href: "#/music_Blog",
                            wordCount: 670,
                            title: "The Rhythm of Music: Exploring Genres",
                            description:
                                "Diving into the diverse world of music genres and their cultural impact.",
                            postId: "fgh123ijk456",
                            priority: true,
                            tags: ["Music", "Genres", "Culture"],
                            image: {
                                src: "/img/generated_image_10.jpeg",
                                alt: "Music Genres",
                            },
                            publication: {
                                name: "Melodic Musings",
                                href: "/@melodic_musings",
                            },
                        },
                    },
                ]}
            />
        </div>
    );
}

export default PrimaryMain;
