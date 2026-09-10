import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPost } from '../data/blog';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  useEffect(() => { document.title = `${post?.title || 'Post not found'} — Michael Richard`; }, [post]);
  if (!post) return <div className="page-shell not-found"><p className="eyebrow">The notebook</p><h1>Post not found.</h1><Link className="text-link" to="/blog">← Back to writing</Link></div>;
  return <article className="page-shell article-page"><Link className="text-link" to="/blog">← Back to writing</Link><header className="article-header"><p className="eyebrow">The notebook</p><h1>{post.title}</h1><time dateTime={post.publishedAt}>{post.publishedAt}</time></header><div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }}/></article>;
}
