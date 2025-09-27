import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, image, category, title, content, date, authorImg, author }) => {
  const words = content.split(" ");
  const preview = words.slice(0, 20).join(" ");

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-6">
        <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {preview}...{" "}
          <Link
            to={`/blog/${id}`}
            className="text-orange-600 font-semibold hover:underline"
          >
            Read More
          </Link>
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-3">{date}</span>
          <div className="flex items-center">
            <img
              src={authorImg}
              alt={author}
              className="w-6 h-6 rounded-full mr-2 object-cover"
            />
            {author}
          </div>
        </div>
      </div>
    </article>
  );
};

export default function Blog() {
  const blogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Technology",
      title: "The Future of Web Development in 2023",
      content:
        "Explore the emerging trends and technologies that are shaping the future of web development this year. From AI-driven frameworks to no-code tools, the possibilities are endless. Developers must stay updated.",
      date: "June 15, 2023",
      authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      author: "Sarah Johnson",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      category: "Business",
      title: "5 Strategies for Growing Your Online Business",
      content:
        "Learn proven strategies to scale your online business and reach new customers effectively. Marketing, customer engagement, automation, and scaling are the cornerstones of success in digital business.",
      date: "June 10, 2023",
      authorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      author: "Michael Chen",
    },
  ];

  return (
    <div className="bg-black">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-orange-600">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Discover our latest insights, stories, and updates to help you stay
            informed and inspired.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </section>
    </div>
  );
}
