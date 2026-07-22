/**
 * The three worlds — registry only (Storyboard Scenes 7–9).
 *
 * Names and order are canonical: "SalHub. StrangerUs. ZH.com.sg." The full
 * project modules (salhub.ts, strangerus.ts, zh.ts) conform to schema.ts and
 * arrive when the real briefs and screenshots are supplied — story content
 * is never invented (the site's own rule: no fiction in the facts).
 */

export const worlds = [
  { id: "salhub", name: "SalHub", number: "01" },
  { id: "strangerus", name: "StrangerUs", number: "02" },
  { id: "zh", name: "ZH.com.sg", number: "03" },
] as const;

export type WorldId = (typeof worlds)[number]["id"];
