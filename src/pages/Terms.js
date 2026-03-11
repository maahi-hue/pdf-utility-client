export default function Terms() {
  return (
    <article className="blog-post">
      <h1>Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>Acceptance of Terms</h2>
      <p>
        By using PDFFixBD, you agree to these terms. If you do not agree, please do not use the service.
      </p>

      <h2>Service Description</h2>
      <p>
        PDFFixBD provides a free online PDF compression tool. The service is provided "as is"
        without warranties of any kind.
      </p>

      <h2>Acceptable Use</h2>
      <p>
        You may only upload files you own or have permission to process.
        Do not upload files containing illegal content.
        Do not attempt to abuse or overload the service.
      </p>

      <h2>File Handling</h2>
      <p>
        All uploaded files are deleted immediately after processing.
        We take no responsibility for files that fail to compress or are corrupted during processing.
        Always keep a backup of your original files.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        PDFFixBD is not liable for any loss of data or damages resulting from use of this service.
        Use at your own risk.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We reserve the right to update these terms at any time. Continued use of the service
        constitutes acceptance of updated terms.
      </p>
    </article>
  );
}
