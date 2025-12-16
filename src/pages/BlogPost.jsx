import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getPost } from '../data/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 50,
    });
  }, []);

  if (!post) {
    return (
      <div className="mx-auto w-full max-w-2xl space-y-8 px-6 py-12 sm:py-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Post not found</h1>
          <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl space-y-8 px-6 py-12 sm:py-24">
      <article data-aos="fade-up">
        <Link 
          to="/blog" 
          className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
        >
          ← Back to blog
        </Link>
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
            {post.title}
          </h1>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {post.publishedAt}
          </time>
        </header>

        <div 
          className="prose prose-gray dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
