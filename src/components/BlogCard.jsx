import React from 'react';

const BlogCard = ({post}) => {
    return (
        <div>
              <article className="group max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-slate-800 backdrop-blur">
          {post.category}
        </span>
      </div>

      <div className="space-y-3 p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
          {post.date}
        </p>
        <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          {post.excerpt}
        </p>
        <button className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800">
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </article>
        </div>
    );
};

export default BlogCard;