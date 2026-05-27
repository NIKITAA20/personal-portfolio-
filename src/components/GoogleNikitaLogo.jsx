import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './GoogleNikitaLogo.css';

const LETTERS = [
  { char: 'N', color: '#4285F4' },
  { char: 'i', color: '#EA4335', dot: true },
  { char: 'k', color: '#FBBC05' },
  { char: 'i', color: '#4285F4', dot: true },
  { char: 't', color: '#34A853' },
  { char: 'a', color: '#EA4335' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.2,
    rotate: -18,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 14,
      mass: 0.8,
    },
  },
};

const GoogleNikitaLogo = ({
  size = 'large',
  showSubtitle = false,
  animated = false,
  className = '',
}) => {
  const [idleReady, setIdleReady] = useState(!animated);

  return (
    <div className={`google-nikita-logo ${size} ${className}`}>
      <motion.h1
        className={`logo-wordmark ${idleReady ? 'logo-wordmark--idle' : ''}`}
        aria-label="Nikita"
        variants={animated ? containerVariants : undefined}
        initial={animated ? 'hidden' : false}
        animate={animated ? 'visible' : false}
        onAnimationComplete={() => animated && setIdleReady(true)}
      >
        {LETTERS.map((letter, i) => (
          <motion.span
            key={`${letter.char}-${i}`}
            className={`logo-letter ${letter.dot ? 'logo-letter--i' : ''}`}
            style={{ '--letter-color': letter.color, color: letter.color }}
            variants={animated ? letterVariants : undefined}
            whileHover={{
              scale: 1.18,
              y: -10,
              rotate: [0, -4, 4, 0],
              transition: { duration: 0.35 },
            }}
            whileTap={{ scale: 0.92 }}
          >
            {letter.dot ? (
              <>
                <span className="logo-i-body">{letter.char}</span>
                <span className="logo-i-dot" style={{ background: letter.color }} />
              </>
            ) : (
              letter.char
            )}
          </motion.span>
        ))}
        <span className="logo-shine" aria-hidden="true" />
      </motion.h1>

      {showSubtitle && (
        <motion.p
          className="logo-subtitle"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: animated ? 0.75 : 0.2, duration: 0.5, ease: 'easeOut' }}
        >
          Data Analyst · Full-Stack Developer
        </motion.p>
      )}
    </div>
  );
};

export default GoogleNikitaLogo;
