import { shell } from "@/content/copy/shell";

/**
 * The film — one route, twelve scenes and a coda (Architecture §3).
 * Scene components mount here milestone by milestone; until then the
 * placeholder marks the stage.
 */
export default function FilmPage() {
  return <p>{shell.filmPlaceholder}</p>;
}
