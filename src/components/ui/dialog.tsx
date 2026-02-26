"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { type HTMLAttributes, type MouseEvent, useEffect } from "react";

interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
}

export function Dialog({ open, onClose, className, children, ...props }: DialogProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      />
      <div
        className={cn(
          "relative z-50 w-full max-w-lg rounded-xl bg-white p-6 shadow-xl",
          className
        )}
        {...props}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-lg font-semibold text-gray-900", className)}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("mt-1 text-sm text-gray-500", className)} {...props} />
  );
}
