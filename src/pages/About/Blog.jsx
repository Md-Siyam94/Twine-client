import React from 'react';

const Blog = () => {
    const blogPosts = [
  {
    id: 1,
    title: 'The Art of Sustainable Fashion',
    excerpt: 'Exploring how conscious choices in fabric and design create lasting impact on our planet and wardrobe.',
    image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'November 15, 2025',
    category: 'Sustainability'
  },
  {
    id: 2,
    title: 'Weaving Stories into Fabric',
    excerpt: 'Every thread tells a story. Discover the craftsmanship behind our signature collection.',
    image: 'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'November 10, 2025',
    category: 'Craftsmanship'
  },
  {
    id: 3,
    title: 'Minimalism Meets Elegance',
    excerpt: 'How less becomes more in the world of contemporary fashion design and timeless style.',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'November 5, 2025',
    category: 'Design'
  },
  {
    id: 4,
    title: 'Behind the Seams',
    excerpt: 'Meet the artisans who bring our vision to life, one stitch at a time.',
    image: 'https://images.pexels.com/photos/3738388/pexels-photo-3738388.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'October 28, 2025',
    category: 'People'
  },
  {
    id: 5,
    title: 'Colors of the Season',
    excerpt: 'A curated palette inspired by nature, architecture, and the poetry of everyday moments.',
    image: 'https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'October 20, 2025',
    category: 'Trends'
  },
  {
    id: 6,
    title: 'From Sketch to Runway',
    excerpt: 'Journey through the creative process that transforms inspiration into wearable art.',
    image: 'https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: 'October 12, 2025',
    category: 'Process'
  }
];
    return (
        <div>
            <section>
                <div className="relative h-[85vh]  bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <h1 className="text-6xl md:text-8xl   mb-6 animate-fadeIn">
                            TWINE STORIES
                        </h1>
                        <p className="text-xl md:text-2xl  text-gray-700 tracking-wide mb-8">
                            Where threads meet narratives, and style becomes storytelling
                        </p>
                        <div className="h-px w-24 bg-gray-800 mx-auto"></div>
                    </div>
                </div>
            </section>
            {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-4">LATEST STORIES</h2>
                    <p className="text-gray-600 tracking-wide">Insights, inspiration, and the art of thoughtful design</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        // <BlogCard key={post.id} post={post} />
                        <div></div>
                    ))}
                </div>
            </section> */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-4">
                        STAY CONNECTED
                    </h2>
                    <p className="text-gray-600 tracking-wide mb-8">
                        Subscribe to receive our latest stories, exclusive collections, and thoughtful insights.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="YOUR EMAIL ADDRESS"
                            className="flex-1 px-6 py-4 border border-gray-300 focus:border-gray-900 focus:outline-none text-sm tracking-wider"
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 tracking-wider text-sm"
                        >
                            <span>SUBSCRIBE</span>
                            {/* <Send className="w-4 h-4" /> */}
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Blog;