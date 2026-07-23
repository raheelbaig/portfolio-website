/**
 * The three worlds — registry (Storyboard Scenes 7–9).
 *
 * Order is canonical. World Three is New ZhengHe (NZH) per the supplied
 * brief (NZH.md) — the Storyboard's earlier working name "ZH.com.sg"
 * referred to this product.
 */

export const worlds = [
  { id: "salhub", name: "SalHub", number: "01" },
  { id: "strangerus", name: "StrangerUs", number: "02" },
  { id: "nzh", name: "New ZhengHe", number: "03" },
] as const;

export type WorldId = (typeof worlds)[number]["id"];
