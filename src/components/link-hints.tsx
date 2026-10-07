import { useEffect } from "react";

const keys = "asdghjklqwertyuiop";

/** Press `f` to label every link with a key, then press that key to follow it. Escape cancels. */
export function LinkHints() {
  useEffect(() => {
    let hinted: Array<HTMLAnchorElement> = [];

    const clear = () => {
      for (const link of hinted) delete link.dataset.hint;
      hinted = [];
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.target instanceof HTMLElement && event.target.isContentEditable) return;
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)
        return;

      if (hinted.length === 0) {
        if (event.key !== "f") return;
        hinted = Array.from(document.querySelectorAll<HTMLAnchorElement>("main a[href]")).slice(
          0,
          keys.length,
        );
        hinted.forEach((link, index) => (link.dataset.hint = keys[index]));
        return;
      }

      event.preventDefault();
      const target = hinted.find((link) => link.dataset.hint === event.key.toLowerCase());
      clear();
      target?.click();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      clear();
    };
  }, []);

  return null;
}
