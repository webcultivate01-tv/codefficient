import React from 'react'

export default function Blog() {
  return (
     <div>
      <section class="max-w-7xl mx-auto px-6 py-16 ">
  {/* <!-- Blog Header --> */}
  <div class="text-center mb-12">
    <h2 class="text-4xl font-bold text-gray-800 mb-4">Latest Articles</h2>
    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
      Discover our latest insights, stories, and updates to help you stay informed and inspired.
    </p>
  </div>

  {/* <!-- Blog Posts Grid --> */}
  <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {/* <!-- Blog Post 1 --> */}
    <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1470&q=80" 
           alt="Technology blog" 
           class="w-full h-52 object-cover" />
      <div class="p-6">
        <span class="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Technology
        </span>
        <h3 class="text-xl font-bold text-gray-800 mb-2">
          The Future of Web Development in 2023
        </h3>
        <p class="text-gray-600 mb-4">
          Explore the emerging trends and technologies that are shaping the future of web development this year.
        </p>
        <div class="flex items-center text-sm text-gray-500">
          <span class="mr-3">June 15, 2023</span>
          <div class="flex items-center">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=688&q=80" 
                 alt="Sarah Johnson" 
                 class="w-6 h-6 rounded-full mr-2 object-cover" />
            Sarah Johnson
          </div>
        </div>
      </div>
    </article>
{/* 
    <!-- Blog Post 2 --> */}
    <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1470&q=80" 
           alt="Business blog" 
           class="w-full h-52 object-cover" />
      <div class="p-6">
        <span class="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Business
        </span>
        <h3 class="text-xl font-bold text-gray-800 mb-2">
          5 Strategies for Growing Your Online Business
        </h3>
        <p class="text-gray-600 mb-4">
          Learn proven strategies to scale your online business and reach new customers effectively.
        </p>
        <div class="flex items-center text-sm text-gray-500">
          <span class="mr-3">June 10, 2023</span>
          <div class="flex items-center">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=687&q=80" 
                 alt="Michael Chen" 
                 class="w-6 h-6 rounded-full mr-2 object-cover" />
            Michael Chen
          </div>
        </div>
      </div>
    </article>

    {/* <!-- Blog Post 3 --> */}
    <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=1470&q=80" 
           alt="Design blog" 
           class="w-full h-52 object-cover" />
      <div class="p-6">
        <span class="inline-block bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Design
        </span>
        <h3 class="text-xl font-bold text-gray-800 mb-2">
          UX Design Principles for Better Conversions
        </h3>
        <p class="text-gray-600 mb-4">
          How applying fundamental UX principles can significantly improve your website's conversion rates.
        </p>
        <div class="flex items-center text-sm text-gray-500">
          <span class="mr-3">June 5, 2023</span>
          <div class="flex items-center">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=761&q=80" 
                 alt="Emma Rodriguez" 
                 class="w-6 h-6 rounded-full mr-2 object-cover" />
            Emma Rodriguez
          </div>
        </div>
      </div>
    </article>
    <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1470&q=80" 
           alt="Technology blog" 
           class="w-full h-52 object-cover" />
      <div class="p-6">
        <span class="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Technology
        </span>
        <h3 class="text-xl font-bold text-gray-800 mb-2">
          The Future of Web Development in 2023
        </h3>
        <p class="text-gray-600 mb-4">
          Explore the emerging trends and technologies that are shaping the future of web development this year.
        </p>
        <div class="flex items-center text-sm text-gray-500">
          <span class="mr-3">June 15, 2023</span>
          <div class="flex items-center">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=688&q=80" 
                 alt="Sarah Johnson" 
                 class="w-6 h-6 rounded-full mr-2 object-cover" />
            Sarah Johnson
          </div>
        </div>
      </div>
    </article>
{/* 
    <!-- Blog Post 2 --> */}
    <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1470&q=80" 
           alt="Business blog" 
           class="w-full h-52 object-cover" />
      <div class="p-6">
        <span class="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Business
        </span>
        <h3 class="text-xl font-bold text-gray-800 mb-2">
          5 Strategies for Growing Your Online Business
        </h3>
        <p class="text-gray-600 mb-4">
          Learn proven strategies to scale your online business and reach new customers effectively.
        </p>
        <div class="flex items-center text-sm text-gray-500">
          <span class="mr-3">June 10, 2023</span>
          <div class="flex items-center">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=687&q=80" 
                 alt="Michael Chen" 
                 class="w-6 h-6 rounded-full mr-2 object-cover" />
            Michael Chen
          </div>
        </div>
      </div>
    </article>

    {/* <!-- Blog Post 3 --> */}
    <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=1470&q=80" 
           alt="Design blog" 
           class="w-full h-52 object-cover" />
      <div class="p-6">
        <span class="inline-block bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Design
        </span>
        <h3 class="text-xl font-bold text-gray-800 mb-2">
          UX Design Principles for Better Conversions
        </h3>
        <p class="text-gray-600 mb-4">
          How applying fundamental UX principles can significantly improve your website's conversion rates.
        </p>
        <div class="flex items-center text-sm text-gray-500">
          <span class="mr-3">June 5, 2023</span>
          <div class="flex items-center">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=761&q=80" 
                 alt="Emma Rodriguez" 
                 class="w-6 h-6 rounded-full mr-2 object-cover" />
            Emma Rodriguez
          </div>
        </div>
      </div>
    </article>
  </div>

  {/* <!-- View All Button --> */}
  <div class="text-center mt-12">
    <a href="#"
       class="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
      View All Articles
    </a>
  </div>
</section>

     </div>
  )
}
