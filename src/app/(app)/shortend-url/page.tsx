"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toast } from "sonner";

const ShorturlPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [generateQR, setGenerateQR] = useState(false);
  const [generated, setGenerated] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLongUrl(e.target.value);
    setError("");
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenerateQR(e.target.checked);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generated);
      toast.success("URL copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!longUrl) {
      setError("Please enter a URL");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: longUrl,
          shorturl: customUrl,
        }),
      });

      const data = await response.json();

      if (response.status === 409) {
        toast.error(
          "The custom URL is already in use. Please choose a different one.😭"
        );
        setLongUrl("");
        setCustomUrl("");
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${data.shortUrl}`);
      setLongUrl("");
      setCustomUrl("");
      toast.success(data.message);
    } catch (error) {
      console.error("Error shortening URL:", error);
      setError("An error occurred while shortening the URL");
      toast.error("An error occurred while shortening the URL");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 mt-10">
            <h1 className="text-4xl font-bold text-purple-900 mb-4">
              Shorten Your URL
            </h1>
            <p className="text-xl text-purple-600">
              Create short, memorable links in seconds
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="longUrl"
                  className="block text-sm font-medium text-purple-900 mb-2"
                >
                  Enter your long URL
                </label>
                <input
                  id="longUrl"
                  type="url"
                  value={longUrl}
                  onChange={handleUrlChange}
                  placeholder="https://example.com/very-long-url"
                  className="w-full p-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-purple-800"
                  required
                />
              </div>

              {/* Display error message */}
              {error && (
                <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700">
                  <p>{error}</p>
                </div>
              )}

              <div>
                <label
                  htmlFor="customUrl"
                  className="block text-sm font-medium text-purple-900 mb-2"
                >
                  Custom URL
                </label>
                <input
                  id="customUrl"
                  type="text"
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  placeholder="my-custom-url"
                  className="w-full p-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-purple-800"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="generateQR"
                  type="checkbox"
                  checked={generateQR}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-purple-600 border-purple-300 rounded focus:ring-purple-500"
                />
                <label
                  htmlFor="generateQR"
                  className="ml-2 text-sm text-purple-900"
                >
                  Generate QR code
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 transition-all duration-300 font-semibold disabled:opacity-50"
              >
                {isLoading ? "Shortening..." : "Shorten URL"}
              </button>
            </form>

            {generated && (
              <div className="mt-8 p-6 bg-purple-50 rounded-xl">
                <h3 className="text-lg font-semibold text-purple-900 mb-4">
                  Your shortened URL:
                </h3>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    value={generated}
                    readOnly
                    className="flex-1 p-3 bg-white border-2 border-purple-200 rounded-xl text-purple-800"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="p-3 text-purple-600 hover:text-purple-800"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                  </button>
                </div>

                {generateQR && (
                  <div className="mt-6 flex justify-center">
                    <QRCodeSVG value={generated} size={200} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShorturlPage;
