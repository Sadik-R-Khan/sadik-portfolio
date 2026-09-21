import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function ImageModal({ isOpen, onClose, imageSrc, imageTitle }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 md:p-10 bg-slate-900/80 dark:bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={imageTitle || "Image preview"}
    >
      <div 
        className="relative max-w-5xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900">
          <h3 className="font-semibold text-slate-800 dark:text-white text-xs sm:text-base truncate pr-2">
            {imageTitle || "Project Preview"}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-1.5 sm:p-4 bg-slate-100/50 dark:bg-slate-950 flex items-center justify-center max-h-[85vh] overflow-auto">
          <img 
            src={imageSrc} 
            alt={imageTitle || "Project screenshot"} 
            className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
