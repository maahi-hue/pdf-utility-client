/**
 * BLOG DATA
 *
 * Add new posts here. Each post is a JS object with:
 *  - slug    : URL path (e.g. "compress-pdf-200kb")
 *  - title   : Page title / card title
 *  - summary : Short description shown on the blog listing page
 *  - content : JSX rendered on the blog post page
 *
 * HOW TO ADD A NEW POST:
 *  1. Add a new object to the BLOG_POSTS array below
 *  2. Write your content using the helper components (H2, P, CTA)
 *  3. Deploy — that's it. No database needed.
 */

// ── Helper render components (inline to keep this one file) ──────────────────
export const H2 = ({ children }) => <h2>{children}</h2>;
export const P  = ({ children }) => <p>{children}</p>;

// ── Posts ────────────────────────────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    slug: "compress-pdf-under-200kb",
    title: "How to Compress PDF Under 200KB for Job Application in Bangladesh",
    summary: "Step-by-step guide to reduce your PDF size to under 200KB — required for most government and private job applications in Bangladesh.",
    content: (
      <>
        <P>
          Most job application portals in Bangladesh have a strict file size limit — usually 200KB or 300KB.
          If your PDF is too large, the form simply won't accept it. Here's how to fix that in seconds.
        </P>

        <H2>Why Do Job Portals Ask for Small PDFs?</H2>
        <P>
          Government portals and university systems in Bangladesh were often built years ago and have
          limited server storage. They set a size limit to prevent overload. The most common requirement
          is a PDF under 200KB, especially for CV or certificate uploads.
        </P>

        <H2>The Fastest Way to Compress Your PDF</H2>
        <P>
          The easiest method is to use our free online tool above. Just upload your PDF,
          select "Under 200KB", and click Compress. Your file is processed instantly and deleted
          from our servers right after — your documents stay private.
        </P>

        <div className="cta-box">
          <p>Try it now — free, no registration required</p>
          <a href="/">Compress My PDF →</a>
        </div>

        <H2>What If the File Is Still Too Large After Compression?</H2>
        <P>
          If your PDF is a scan (image inside PDF), it will be harder to compress. Try these steps:
        </P>
        <P>
          1. Reduce the scan resolution to 150 DPI before saving as PDF. 2. If you're scanning a
          single page certificate, use "grayscale" mode instead of color — this cuts size dramatically.
          3. Use "Under 100KB" option in our tool for the most aggressive compression.
        </P>

        <H2>Is It Safe to Compress My Documents?</H2>
        <P>
          Yes. Our tool uses Ghostscript, a trusted open-source PDF engine. Your file is processed
          on a secure server, never stored, and deleted the moment your download starts. No account
          needed, no data saved.
        </P>

        <H2>Summary</H2>
        <P>
          Compressing a PDF for a Bangladesh job application takes under 30 seconds with the right tool.
          Upload, select your target size, compress, and submit your application. That's it.
        </P>
      </>
    ),
  },

  {
    slug: "pdf-size-government-job-bangladesh",
    title: "PDF Size Requirements for Government Job Applications in Bangladesh",
    summary: "A complete guide to file size limits on BCS, BD Jobs, and other government portals — and how to meet them without losing quality.",
    content: (
      <>
        <P>
          Applying for a government job in Bangladesh (BCS, various ministry posts, bank jobs) almost
          always requires uploading documents as PDFs. Each portal has its own size limit, and submitting
          the wrong size means your application gets rejected before anyone even reads it.
        </P>

        <H2>Common PDF Size Limits by Portal</H2>
        <P>
          Most government and semi-government portals in Bangladesh ask for PDFs between 100KB and 500KB.
          Bank job applications (Sonali Bank, Janata Bank) typically allow up to 300KB per file.
          BCS applications via bpsc.gov.bd usually require photos and signatures under 100KB,
          and full CVs under 500KB.
        </P>

        <H2>What Documents You Typically Need to Upload</H2>
        <P>
          For a standard government job application you will likely need: a recent passport-size photo
          (JPEG, under 50KB), your CV or resume in PDF format (under 200KB–500KB), SSC and HSC
          certificates (individual PDFs, each under 300KB), and your National ID card (under 200KB).
        </P>

        <div className="cta-box">
          <p>Quickly reduce any of these files to the required size</p>
          <a href="/">Compress PDF Free →</a>
        </div>

        <H2>How to Check Your PDF Size Before Uploading</H2>
        <P>
          On Windows: right-click the PDF file → Properties → check the file size on the General tab.
          On mobile: go to Files app → tap and hold the PDF → Info or Details — the size is shown there.
          If the size is above the portal's limit, compress it first.
        </P>

        <H2>Does Compression Reduce Document Quality?</H2>
        <P>
          For text-heavy PDFs like CVs, compression reduces file size without visible quality loss.
          For scanned certificates, there is some reduction in image sharpness — but for official
          submission purposes, the text remains fully readable. If you need maximum quality, choose
          "Under 500KB" instead of "Under 100KB."
        </P>

        <H2>Quick Checklist Before You Submit</H2>
        <P>
          ✅ File is PDF format (not Word or image). ✅ Size is within the portal's limit.
          ✅ Text is readable after compression. ✅ File name has no spaces or special characters.
          ✅ You compressed each document separately, not combined.
        </P>
      </>
    ),
  },
];
