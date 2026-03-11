import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BLOG_POSTS } from "./blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // Set page title for SEO
  useEffect(() => {
    if (post) document.title = post.title + " | PDFFixBD";
    return () => { document.title = "PDF Compress BD"; };
  }, [post]);

  if (!post) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <h2>Article not found.</h2>
        <button
          onClick={() => navigate("/blog")}
          style={{ marginTop: "1rem", padding: "0.5rem 1.5rem", cursor: "pointer" }}
        >
          ← Back to Blog
        </button>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <button
        onClick={() => navigate("/blog")}
        style={{
          background: "none", border: "none", color: "#1c7293",
          cursor: "pointer", fontSize: "0.9rem", marginBottom: "1rem", padding: 0
        }}
      >
        ← All Articles
      </button>
      <h1>{post.title}</h1>
      {post.content}
    </article>
  );
}
