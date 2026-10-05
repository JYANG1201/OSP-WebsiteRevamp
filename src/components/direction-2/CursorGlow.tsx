import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

/**
 * SIGNAL · cursor-reactive radial glow
 * ─────────────────────────────────────────────────────────────
 * A weighted, lagging warm bloom that tints whatever it passes
 * over (hero, glass panels, logo grid) plus the OSP mark, sized
 * small, that tracks almost 1:1. Two speeds = the "premium,
 * controlled" read rather than a novelty cursor.
 *
 * Disabled for touch-only pointers and prefers-reduced-motion.
 */
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const intent = useMotionValue(0);

  // Heavy, buttery bloom — deliberately trails the pointer.
  const bloomX = useSpring(x, { stiffness: 42, damping: 22, mass: 1.15 });
  const bloomY = useSpring(y, { stiffness: 42, damping: 22, mass: 1.15 });

  // Reticle — quick but not instant.
  const dotX = useSpring(x, { stiffness: 480, damping: 34, mass: 0.35 });
  const dotY = useSpring(y, { stiffness: 480, damping: 34, mass: 0.35 });

  const bloomScale = useSpring(useTransform(intent, [0, 1], [1, 1.35]), {
    stiffness: 90,
    damping: 20,
  });
  const dotScale = useSpring(useTransform(intent, [0, 1], [1, 1.6]), {
    stiffness: 260,
    damping: 22,
  });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const INTERACTIVE = 'a, button, [data-tilt], [data-glow-target], input, summary';

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const target = e.target as Element | null;
      intent.set(target && target.closest?.(INTERACTIVE) ? 1 : 0);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    document.addEventListener('pointerenter', onEnter);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('pointerenter', onEnter);
    };
  }, [enabled, visible, x, y, intent]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        pointerEvents: 'none',
        overflow: 'hidden',
        /* the blend lives on the wrapper — the wrapper is its own
           stacking context, so blending children would isolate them
           from the page and the tint would never land */
        mixBlendMode: 'screen',
      }}
    >
      {/* wide warm bloom */}
      <motion.div
        style={{
          position: 'absolute',
          left: bloomX,
          top: bloomY,
          x: '-50%',
          y: '-50%',
          scale: bloomScale,
          width: 620,
          height: 620,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,107,53,0.15) 0%, rgba(255,169,77,0.07) 34%, rgba(255,107,53,0.02) 58%, transparent 72%)',
          filter: 'blur(14px)',
        }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* tighter core so surfaces pick up a defined highlight */}
      <motion.div
        style={{
          position: 'absolute',
          left: bloomX,
          top: bloomY,
          x: '-50%',
          y: '-50%',
          width: 190,
          height: 190,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,169,77,0.12) 0%, rgba(255,107,53,0.05) 45%, transparent 70%)',
        }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.55 }}
      />

      {/* OSP mark — the actual logo mark, replaces the earlier wrong icon */}
      <motion.div
        style={{
          position: 'absolute',
          left: dotX,
          top: dotY,
          x: '-50%',
          y: '-50%',
          scale: dotScale,
          width: 16,
          height: 16,
          filter: 'drop-shadow(0 0 8px rgba(255,107,53,0.65))',
        }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/images/logo/osp-logo2-white.png"
          alt=""
          width={16}
          height={16}
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </motion.div>
    </div>
  );
}
