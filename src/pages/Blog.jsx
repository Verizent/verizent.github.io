import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getBlogPosts } from '../data/blog';

export default function Blog() {
  const posts = getBlogPosts();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <div className="mx-auto w-full max-w-2xl space-y-8 px-6 py-12 sm:py-24">
      <section id="blog" data-aos="fade-up">
        <div className="space-y-12 w-full py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 text-sm">
                Blog
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                Latest Posts
              </h2>
              <p className="text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My thoughts on software development and technology
              </p>
            </div>
          </div>
          <div className="max-w-[800px] mx-auto space-y-4">
            {posts.map((post, idx) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-black hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.publishedAt}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {post.summary}
                  </p>
                  <span className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
