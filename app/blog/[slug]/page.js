export default function BlogPostPage({ params }) {
  return (
    <main className="p-6">
      <h1>Blog Page</h1>
      <h2>post: {params.slug}</h2>
    </main>
  );
}
