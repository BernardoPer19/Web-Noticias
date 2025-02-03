"use client";
import React from "react";

interface ArticleProps {
  article: {
    title: string;
  };
}

function CompartirBtn({ article }: ArticleProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        url: window.location.href,
      });
    } else {
      alert("Tu navegador no soporta compartir.");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
    >
      📢 Compartir
    </button>
  );
}

export default CompartirBtn;
