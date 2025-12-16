export const blogPosts = [
  {
    slug: "hello-world",
    title: "Hello World",
    publishedAt: "2025-12-15",
    summary: "This is my first blog post. Welcome to my personal website!",
    content: `
      <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        Welcome to my blog! This is where I'll be sharing my thoughts.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 mt-5">What to Expect</h2>
      
      <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">I'll be writing about:</p>
      
      <p class="font-bold">ANYTHING!</p>
      
      <br/>
      
      <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">Stay tuned for more content!</p>
    `
  },
];

export function getBlogPosts() {
  return blogPosts.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export function getPost(slug) {
  return blogPosts.find(post => post.slug === slug);
}
