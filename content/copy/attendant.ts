/**
 * Scene 11 — "The Attendant" (AI assistant), the static presence.
 *
 * The invitation line is canonical (Storyboard Scene 11). The suggested
 * questions are the Script's — "the kind a hiring manager actually has" —
 * answerable from the film's own content, so the attendant never needs to
 * promise knowledge it won't have.
 *
 * The ask field and the streaming endpoint arrive with the Attendant
 * feature milestone (Architecture §11 + Amendment 4); until then the
 * presence waits, exactly as scripted: "It waits. It does not bounce,
 * badge, or beg."
 */

export const attendantScene = {
  srHeading: "The attendant",
  /** Canonical. Also the scene's visible spoken line. */
  line: "Ask me anything about Raheel's work.",
  suggestedLabel: "Questions it can answer",
  suggested: [
    "What did he build on SalHub?",
    "How does he use AI in production work?",
    "What is his frontend stack?",
  ],
} as const;
