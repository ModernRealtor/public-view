import React from "react"
import { Link } from "gatsby"

export function InternalLink({ tag, to, className, label, children }) {
  let linkLabel = label || `Internal link to ${to}`
  return (
    <Link
      to={to}
      className={className || ""}
      aria-label={linkLabel}
      title={linkLabel}
      onClick={() => {
        typeof window?.gtag !== "undefined" &&
          window.gtag("event", "click", {
            type: "internal",
            location: to,
            tag,
          })
      }}
    >
      {children}
    </Link>
  )
}

export function ExternalLink({ tag, href, className, label, children }) {
  let linkLabel = label || `External link to ${href}`
  return (
    <a
      href={href}
      className={className || ""}
      aria-label={linkLabel}
      title={linkLabel}
      onClick={() => {
        typeof window !== "undefined" &&
          window.gtag("event", "click", {
            type: "external",
            location: href,
            tag,
          })
      }}
    >
      {children}
    </a>
  )
}
