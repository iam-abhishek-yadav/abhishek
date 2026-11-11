"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="inline-flex max-w-full items-center gap-1 rounded-full border border-border bg-background/80 p-1.5 backdrop-blur">
      <a
        href={`mailto:${email}`}
        className="inline-flex min-w-0 items-center gap-2.5 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85 sm:px-6 sm:text-base"
      >
        <Mail className="h-4 w-4 shrink-0" strokeWidth={2} />
        <span className="truncate">{email}</span>
      </a>
      <button
        type="button"
        onClick={copy}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-label={copied ? "Email copied" : "Copy email address"}
      >
        {copied ? (
          <Check className="h-4 w-4 text-mark" strokeWidth={2} />
        ) : (
          <Copy className="h-4 w-4" strokeWidth={1.75} />
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email copied to clipboard" : ""}
      </span>
    </div>
  );
}
