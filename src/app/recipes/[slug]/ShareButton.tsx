"use client";

import { Share2 } from "lucide-react";

export const ShareButton = () => {
  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    const toast = document.createElement("div");
    toast.className =
      "fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg transition-opacity";
    toast.textContent = "Link copied!";
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 rounded-full bg-gray-700/50 px-3 py-1.5 text-sm text-gray-300 transition-colors duration-150 hover:bg-gray-700"
    >
      <Share2 className="h-4 w-4" />
      Share
    </button>
  );
};
