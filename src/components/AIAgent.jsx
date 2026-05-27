import React from 'react';
import { motion } from 'framer-motion';
import './AIAgent.css';

const AIAgent = ({ state = 'idle', size = 'md' }) => {
  const isThinking = state === 'thinking';
  const isSpeaking = state === 'speaking';

  return (
    <div className={`ai-agent ${size}`} aria-hidden="true">
      <motion.div
        className="agent-orbit"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="agent-orbit agent-orbit--reverse"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="agent-core"
        animate={{
          y: [0, -5, 0],
          scale: isThinking ? [1, 1.04, 1] : [1, 1.02, 1],
        }}
        transition={{
          duration: isThinking ? 1.2 : 2.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="agent-face">
          <motion.span
            className="agent-eye agent-eye--left"
            animate={{ scaleY: isSpeaking ? [1, 0.15, 1] : [1, 1, 0.12, 1] }}
            transition={{
              duration: isSpeaking ? 0.35 : 3.5,
              repeat: Infinity,
              repeatDelay: isSpeaking ? 0.1 : 2,
            }}
          />
          <motion.span
            className="agent-eye agent-eye--right"
            animate={{ scaleY: isSpeaking ? [1, 0.15, 1] : [1, 1, 0.12, 1] }}
            transition={{
              duration: isSpeaking ? 0.35 : 3.5,
              repeat: Infinity,
              repeatDelay: isSpeaking ? 0.15 : 2.2,
            }}
          />
          <motion.span
            className="agent-smile"
            animate={{ scaleX: isSpeaking ? [1, 1.15, 1] : 1 }}
            transition={{ duration: 0.4, repeat: isSpeaking ? Infinity : 0 }}
          />
        </div>

        {isThinking && (
          <div className="agent-thought-dots">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      <motion.div
        className="agent-glow"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default AIAgent;
