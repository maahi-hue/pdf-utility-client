import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} PDFFixBD &nbsp;·&nbsp;
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </p>
      <p style={{ marginTop: "0.4rem", fontSize: "0.8rem" }}>
        Files are deleted immediately after processing. We never store your documents.
      </p>
    </footer>
  );
}
