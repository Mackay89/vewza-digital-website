const posts = [
  { title: "5 SEO Tips Every South African SME Should Know", category: "SEO Tips", excerpt: "Simple, high-impact SEO changes that help local businesses show up in search results.", date: "July 2026" },
  { title: "How AI Is Changing Small Business Marketing", category: "AI for Business", excerpt: "A look at how AI tools are helping SMEs compete with bigger budgets.", date: "July 2026" },
  { title: "Building a Brand Identity That Actually Connects", category: "Branding Strategies", excerpt: "Why logo design is only the starting point of a strong brand.", date: "June 2026" },
  { title: "Website Design Trends to Watch This Year", category: "Website Design Trends", excerpt: "From minimalism to motion — what's shaping modern web design.", date: "June 2026" },
  { title: "Getting Started with Digital Marketing on a Small Budget", category: "Digital Marketing", excerpt: "Practical steps for startups looking to grow their reach without overspending.", date: "May 2026" },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-[#0d0a2b] via-[#160f45] to-[#2a1263] px-6 py-20 text-center text-white">
        <span className="inline-block rounded-full bg-purple-500/20 px-4 py-1 text-xs font-semibold tracking-wide text-purple-200">
          BLOG
        </span>
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Insights & Ideas</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Practical advice on SEO, branding, AI, and digital marketing for growing businesses.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-lg transition">
              <span className="text-xs font-semibold uppercase tracking-wide text-purple-600">{post.category}</span>
              <h2 className="mt-2 text-lg font-bold">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <p className="mt-4 text-xs text-slate-400">{post.date}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
