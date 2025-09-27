import React from "react";
import { useParams } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "The Future of Web Development in 2023",
    date: "April 5, 2022",
    image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c",
    content: [
      "Explore the emerging trends and technologies that are shaping the future of web development this year.",
      "From AI-driven frameworks to no-code tools, the possibilities are endless.",
      "Developers must stay updated to remain competitive in the evolving tech landscape.",
    ],
  },
  {
    id: 2,
    title: "5 Strategies for Growing Your Online Business",
    date: "April 8, 2022",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content: [
      "Learn proven strategies to scale your online business and reach new customers effectively.",
      "Focus on customer engagement, automation, and building long-term relationships.",
      "With the right tools and mindset, growth is inevitable.",
    ],
  },
];

const Blogpost = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) return <h2 className="text-center mt-10">Blog not found</h2>;

  return (
    <div className="bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="py-8">
          <h1 className="text-3xl text-orange-500 font-bold mb-2">{blog.title}</h1>
          <p className="text-gray-200 text-sm">
            Published on <time>{blog.date}</time>
          </p>
        </div>

        <img src={blog.image} alt={blog.title} className="w-full h-auto mb-8" />

        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto text-white">
          {blog.content.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blogpost;
