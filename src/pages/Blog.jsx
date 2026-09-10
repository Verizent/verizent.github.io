import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../data/blog';

export default function Blog() {
  useEffect(() => { document.title = 'Writing — Michael Richard'; }, []);
  return <div className="page-shell blog-page">
    <header className="blog-header"><p className="eyebrow">The notebook / Writing</p><h1>Thinking <em>out loud.</em></h1><p>Notes on software, things I’m learning, and the questions that keep me curious.</p></header>
    <div>{getBlogPosts().map(post => <Link className="post-preview" key={post.slug} to={`/blog/${post.slug}`}><time dateTime={post.publishedAt}>{post.publishedAt}</time><div><h2>{post.title}</h2><p>{post.summary}</p></div><span aria-hidden="true">↗</span></Link>)}</div>
  </div>;
}
