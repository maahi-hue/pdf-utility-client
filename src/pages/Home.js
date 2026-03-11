import { useState, useRef, useCallback } from "react";
import axios from "axios";

const SIZE_OPTIONS = [
  { label: "Under 100KB", value: "100kb" },
  { label: "Under 200KB", value: "200kb" },
  { label: "Under 500KB", value: "500kb" },
];

export default function Home() {
  const [file, setFile]           = useState(null);
  const [targetSize, setTarget]   = useState("200kb");
  const [status, setStatus]       = useState(null); // null | "loading" | "success" | "error"
  const [errorMsg, setErrorMsg]   = useState("");
  const [isDragOver, setDragOver] = useState(false);
  const fileInputRef              = useRef(null);

  // ── File selection ────────────────────────────────────────────────────
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) validateAndSet(selected);
  };

  const validateAndSet = (selected) => {
    if (selected.type !== "application/pdf") {
      setErrorMsg("Please upload a PDF file.");
      setStatus("error");
      return;
    }
    if (selected.size > 10 * 1024 * 1024) {
      setErrorMsg("File is too large. Max size is 10MB.");
      setStatus("error");
      return;
    }
    setFile(selected);
    setStatus(null);
    setErrorMsg("");
  };

  // ── Drag & Drop ───────────────────────────────────────────────────────
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) validateAndSet(dropped);
  }, []);

  const handleDragOver = (e) => { e.preventDefault(); setDragOver(true); };
  const handleDragLeave = () => setDragOver(false);

  // ── Submit ────────────────────────────────────────────────────────────
  const handleCompress = async () => {
    if (!file) return;

    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("targetSize", targetSize);

    try {
      const response = await axios.post("/api/compress", formData, {
        responseType: "blob", // We expect a file back
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Create a download link and trigger it automatically
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "compressed.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      setStatus("success");
    } catch (err) {
      const msg = err.response?.data?.error || "Compression failed. Please try again.";
      setErrorMsg(msg);
      setStatus("error");
    }
  };

  // ── Render ────────────────────────────────────────────────────────────
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1>Compress PDF <span>Instantly</span></h1>
        <p>
          Reduce your PDF to under 100KB, 200KB, or 500KB — perfect for
          job applications, BRAC, government forms, and more.
        </p>
      </section>

      {/* Tool */}
      <div className="tool-container">

        {/* Drop zone */}
        <div
          className={`dropzone ${isDragOver ? "active" : ""}`}
          onClick={() => fileInputRef.current.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div className="dropzone-icon">📄</div>
          <p><strong>Click to upload</strong> or drag & drop your PDF here</p>
          <p style={{ marginTop: "0.3rem", fontSize: "0.85rem", color: "#94a3b8" }}>
            PDF only · Max 10MB
          </p>
          <input
            type="file"
            accept="application/pdf"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>

        {/* File name display */}
        {file && (
          <div className="file-selected">
            <span>📎</span>
            <span>{file.name}</span>
            <span style={{ marginLeft: "auto", color: "#64748b" }}>
              ({(file.size / 1024).toFixed(1)} KB)
            </span>
          </div>
        )}

        {/* Size selector */}
        <div className="size-selector">
          <label>Compress to:</label>
          <div className="size-options">
            {SIZE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                className={`size-btn ${targetSize === opt.value ? "selected" : ""}`}
                onClick={() => setTarget(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          className="compress-btn"
          onClick={handleCompress}
          disabled={!file || status === "loading"}
        >
          {status === "loading" ? (
            <><span className="spinner" /> Compressing…</>
          ) : (
            "⚡ Compress PDF"
          )}
        </button>

        {/* Status messages */}
        {status === "success" && (
          <div className="status-box success">
            ✅ Done! Your compressed PDF download has started.
          </div>
        )}
        {status === "error" && (
          <div className="status-box error">
            ❌ {errorMsg}
          </div>
        )}
      </div>

      {/* Trust badges */}
      <div className="trust-badges">
        <div className="badge"><span className="badge-icon">🔒</span> Files deleted instantly</div>
        <div className="badge"><span className="badge-icon">⚡</span> Fast compression</div>
        <div className="badge"><span className="badge-icon">🆓</span> 100% free</div>
        <div className="badge"><span className="badge-icon">📱</span> Works on mobile</div>
      </div>
    </>
  );
}
