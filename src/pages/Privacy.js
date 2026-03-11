export default function Privacy() {
  return (
    <article className="blog-post">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>What We Collect</h2>
      <p>
        We collect only the PDF file you upload for the purpose of compression.
        We do not collect your name, email, or any personal information.
        We do not require registration or login.
      </p>

      <h2>How We Use Your File</h2>
      <p>
        Your uploaded PDF is processed on our server using Ghostscript compression.
        The compressed file is sent back to you as a download.
        Both the original and compressed files are permanently deleted from our server
        immediately after your download begins.
      </p>

      <h2>Cookies & Analytics</h2>
      <p>
        We may use Google Analytics to understand how visitors use our site. This collects
        anonymous usage data such as page views and browser type. No personally identifiable
        information is collected. We may also display Google AdSense advertisements, which
        use cookies to show relevant ads.
      </p>

      <h2>Third Parties</h2>
      <p>
        We do not sell, share, or transfer your data to any third parties.
        Your uploaded documents are never shared with anyone.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about this privacy policy, please contact us at:
        contact@yoursite.com
      </p>
    </article>
  );
}
