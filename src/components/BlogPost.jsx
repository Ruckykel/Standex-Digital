import React from 'react';

const BlogPost = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Xscale: The Ultimate Game-Changer for Data Management – Smarter, Simpler, and Cost-Effective',
      excerpt: 'With flexible subscriptions, and seamless integration Xscale enables businesses to take control of their data and cut unnecessary expenses.',
      image: '/xscale-blog-image.jpg',
      date: 'March 10, 2025',
      readTime: '4 minutes'
    },
    {
      id: 2,
      title: 'Power BI License Changes Coming April 2025: What You Need to Know',
      excerpt: 'Big changes are coming to Power BI licensing from April 1, 2025, with price increases for Power BI Pro and Premium Per User. At...',
      image: '/power-bi-license-changes.jpg',
      date: 'March 3, 2025',
      readTime: '3 minutes'
    },
    {
      id: 3,
      title: 'Understanding Power Automate Licensing Options',
      excerpt: 'Discover the different Power Automate licensing options and find the best plan for your organisation. From the Free plan to advanced Per Flow and...',
      image: '/power-automate-licensing.jpg',
      date: 'January 27, 2025',
      readTime: '4 minutes'
    }
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Recent Blog Posts</h2>
      <p className="text-center text-lg mb-12 text-gray-700">
        Stay Informed: Discover the Latest on Microsoft Power Platform and More in Our Recent Blog Posts
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex flex-col h-full group relative cursor-pointer">
            <a href={`/blog/${post.id}`} className="absolute inset-0 z-10" aria-label={post.title}></a>
            {/* Blog Image */}
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              {post.id === 3 && (
                <div className="absolute top-0 right-0 bottom-0 left-0 flex items-start justify-end p-6">
                  <div className="text-white text-right">
                    <h3 className="font-bold text-xl leading-tight">Understanding<br />Power Automate<br />Licensing Options</h3>
                  </div>
                </div>
              )}
            </div>
            
            {/* Date and Read Time */}
            <div className="flex justify-between text-gray-600 text-sm mb-2">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-3 relative z-20">
              <a href={`/blog/${post.id}`} className="group-hover:text-blue-700 group-hover:underline decoration-2 transition-colors">
                {post.title}
              </a>
            </h3>
            
            {/* Excerpt */}
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
          </div>
        ))}
      </div>
      
      {/* View All Button */}
      <div className="flex justify-center">
        <a 
          href="#" 
          className="inline-flex items-center bg-[#002642] text-white py-3 px-6 rounded hover:bg-[#003a6c] transition-colors"
        >
          View All Blog Posts
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogPost;