export const blogPosts = [
  {
    slug: "hello-world",
    title: "Hello World",
    publishedAt: "2025-12-15",
    summary: "This is my first blog post. Welcome to my personal website!",
    content: `
      <p>
        Welcome to my blog! This is where I'll be sharing my thoughts.
      </p>
      
      <h2>What to Expect</h2>
      
      <p>I'll be writing about:</p>
      
      <p>ANYTHING!</p>
      
      <br/>
      
      <p>Stay tuned for more content!</p>
    `
  },
];

export function getBlogPosts() {
  return [...blogPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export function getPost(slug) {
  return blogPosts.find(post => post.slug === slug);
}
