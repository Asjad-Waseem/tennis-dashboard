"use client";

import { useEffect } from "react";
import Image from "next/image";
import { colors } from "@/lib/theme";
import type { ProSubscriptionModalProps } from "./types";

export default function ProSubscriptionModal({
  isOpen,
  onClose,
}: ProSubscriptionModalProps): React.ReactElement {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return <></>;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative z-10 w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 cursor-pointer rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          aria-label="Close modal"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Lock Icon */}
        <div className="mb-6 flex justify-center">
          <div className="relative -mt-12">
            <Image
              src="/feature.svg"
              alt="Pro Lock Icon"
              width={180}
              height={180}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Upgrade to <span style={{ color: colors.primary.blue }}>PRO</span>
          </h2>
          <p className="mb-6 text-gray-600">
            Unlock premium features and get access to exclusive content,
            advanced statistics, and more.
          </p>

          {/* Features List */}
          <div className="mb-8 space-y-3 text-left">
            {[
              "Access to all match categories",
              "Advanced statistics and analytics",
              "Exclusive video content",
              "Priority customer support",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${colors.primary.blue}1A` }}>
                  <svg
                    className="h-3 w-3"
                    style={{ color: colors.primary.blue }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full cursor-pointer rounded-2xl px-6 py-4 text-base font-semibold text-white transition-all hover:shadow-lg"
            style={{ backgroundColor: colors.primary.blue }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.primary.blueDark;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.primary.blue;
            }}
          >
            Subscribe to PRO
          </button>
        </div>
      </div>
    </div>
  );
}

