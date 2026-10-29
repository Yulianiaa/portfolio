"use client";

import { useEffect } from "react";
import { basePath } from "@/lib/basePath";

/** 0–1, relative to the source file. release.ogg peaks at −11.1 dB; 0.11 (−18.9 dB) puts the click at about −30 dB. */
const VOLUME = 0.11;

const INTERACTIVE = 'a[href], button:not(:disabled), [role="tab"], summary';

/**
 * Plays a short "release" click on every interactive element, site-wide.
 * Web Audio instead of <audio>: no start latency, and rapid clicks can overlap.
 */
export function ClickSound() {
  useEffect(() => {
    // Mouse/trackpad only: on phones and tablets the tap is already felt, and people often browse in silence.
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    // Ogg Opus isn't reliably supported in Safari, so fall back to AAC there.
    const src = new Audio().canPlayType('audio/ogg; codecs="opus"')
      ? "/assets/sounds/release.ogg"
      : "/assets/sounds/release.m4a";
    const data = fetch(`${basePath}${src}`).then((r) => r.arrayBuffer());
    data.catch(() => {}); // a missing sound must never surface as an error

    // The AudioContext is created on the first pointerdown (a user gesture), so the browser
    // doesn't block it; decoding finishes long before the matching click fires.
    let ctx: AudioContext | null = null;
    let buffer: Promise<AudioBuffer> | null = null;
    let output: GainNode | null = null;

    function prepare() {
      if (ctx) return;
      ctx = new AudioContext();
      output = ctx.createGain();
      output.gain.value = VOLUME;
      output.connect(ctx.destination);
      buffer = data.then((b) => ctx!.decodeAudioData(b));
    }

    function play(e: MouseEvent) {
      if (!(e.target instanceof Element) || !e.target.closest(INTERACTIVE)) return;
      // Checked per click, so toggling the system setting applies without a reload.
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      prepare();
      if (ctx!.state === "suspended") ctx!.resume();
      buffer!
        .then((b) => {
          const source = ctx!.createBufferSource();
          source.buffer = b;
          source.connect(output!);
          source.start();
        })
        .catch(() => {});
    }

    // Capture phase: still plays when a component stops propagation or navigates away.
    document.addEventListener("pointerdown", prepare, { capture: true, once: true });
    document.addEventListener("click", play, true);
    return () => {
      document.removeEventListener("pointerdown", prepare, true);
      document.removeEventListener("click", play, true);
      ctx?.close();
    };
  }, []);

  return null;
}
