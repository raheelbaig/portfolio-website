import Link from "next/link";
import { deletedScene } from "@/content/copy/deleted-scene";

/**
 * "Deleted Scene" — static, dependency-free, the most reliable page in the
 * product (Architecture §3). Semantic structure only in this milestone; the
 * designed treatment (Depth Black, grain, Quiet Action) arrives with the
 * primitives.
 */
export default function NotFound() {
  return (
    <section aria-labelledby="deleted-scene-title">
      <h1 id="deleted-scene-title">{deletedScene.title}</h1>
      <p>{deletedScene.line}</p>
      <Link href="/">{deletedScene.action}</Link>
    </section>
  );
}
