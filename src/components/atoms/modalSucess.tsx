"use client";

import type { ReactNode } from "react";
import OpenButton from "../atoms/openBtn";
import { motion } from "motion/react"

type ModalSuccessProps = {
  open: boolean;
  onClose?: () => void;
  title?: string;
  message?: string;
  children?: ReactNode;
};

export default function ModalSuccess({
  open,
  onClose,
  title = "success",
  message = "Message sent successfully.",
  children,
}: ModalSuccessProps) {
  if (!open) return null;

  return (
    <motion.div
            initial={{ opacity: 0, scale: 0.90 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            exit={{
                opacity: 0, scale: 0.90, x: -30,
            }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-[2px]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-window border border-border-muted bg-window text-text-main shadow-window"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="px-6 py-6 text-center">
          <h2 className="text-xl font-bold text-text-heading">{title}</h2>

          <p className="mt-4 text-sm font-medium leading-relaxed text-text-muted">
            {message}
          </p>

          {children && <div className="mt-5 w-full">{children}</div>}

          <div className="mt-6 flex justify-center">
            <OpenButton
              type="button"
              onClick={onClose}
              aria-label="close modal"
              className="inline-flex w-full items-center justify-center rounded-md border border-border-muted 
              bg-button-bg px-6 py-2 text-sm font-bold text-text-main transition">
            Close
            </OpenButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
