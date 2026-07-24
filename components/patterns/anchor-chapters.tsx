"use client";

import Link from "next/link";
import type { Route } from "next";
import { useEffect, useRef, useState } from "react";
import { anchor as copy } from "@/content/copy/sidebar";

/**
 * The chapter list (`docs/v2/04-sidebar.md` §4).
 *
 * Client, for one reason only: the active chapter is a function of scroll
 * position (§4.3). The links themselves are real anchors that work with no JS
 * — this component never gates their existence, only which one is lit.
 *
 * Detection is an IntersectionObserver over a thin band across the middle of
 * the viewport, so "active" means *the chapter you are reading*, and the
 * signal fires on boundary crossings rather than on every scroll frame
 * (04 §9.3, 10 §17.5). Only the present is lit; passed and upcoming chapters
 * sit at the same rest weight, because direction is the spine's job (§4.3).
 */
export function AnchorChapters() {
  const [active, setActive] = useState<string | null>(null);
  const visible = useRef(new Set<string>());

  useEffect(() => {
    const sections = copy.chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.current.add(entry.target.id);
          else visible.current.delete(entry.target.id);
        }
        /* Document order wins when the band spans a seam, so the active
           chapter advances predictably instead of flickering between two. */
        const next = copy.chapters.find((chapter) =>
          visible.current.has(chapter.id),
        );
        setActive(next?.id ?? null);
      },
      /* A reading band, not the whole viewport: the section under the
         visitor's attention is the active one. */
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label={copy.chaptersLabel} className="anchor-nav">
      <ul className="anchor-chapters">
        {copy.chapters.map((chapter) => {
          const current = chapter.id === active;
          return (
            <li key={chapter.id}>
              <Link
                href={`/#${chapter.id}` as Route}
                className="anchor-chapter light-response"
                aria-current={current ? "true" : undefined}
              >
                {/* The Sol tick that marks the present chapter (§4.3). */}
                <span aria-hidden="true" className="anchor-tick" />
                <span className="anchor-chapter-label">{chapter.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
