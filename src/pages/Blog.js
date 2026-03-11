import { useNavigate } from "react-router-dom";
import { BLOG_POSTS } from "./blogData";

export default function Blog() {
  const navigate = useNavigate();

  return (
    <div style={{ paddingBottom: "3rem" }}>
      <div className="hero" style={{ padding: "2rem 1rem" }}>
        <h1 style={{ fontSize: "1.8rem" }}>PDF Tips & Guides</h1>
        <p>Learn how to compress, resize, and prepare PDFs for job applications in Bangladesh.</p>
      </div>

      <h2 className="section-title">All Articles</h2>

      <div className="blog-grid">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.slug}
            className="blog-card"
            onClick={() => navigate(`/blog/${post.slug}`)}
          >
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <p style={{ marginTop: "0.75rem", color: "#1c7293", fontWeight: 600, fontSize: "0.88rem" }}>
              Read more →
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
