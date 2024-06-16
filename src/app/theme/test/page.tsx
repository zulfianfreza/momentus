'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import React from 'react';

export default function TestPageage() {
  const [show, setShow] = React.useState(true);
  const menuVars: Variants = {
    initial: {
      translateY: '0%',
    },
    animate: {
      translateY: '0%',
      transition: {
        duration: 1,
        ease: 'circIn',
      },
    },
    exit: {
      translateY: '-100%',
      transition: {
        duration: 1,
        ease: 'circIn',
      },
    },
  };
  return (
    <div className=" flex h-screen w-full items-center justify-center">
      <AnimatePresence>
        <motion.div
          className=" fixed flex h-screen w-full origin-top flex-col items-center justify-center bg-purple-600"
          variants={menuVars}
          initial="initial"
          animate={show ? 'animate' : 'exit'}
        >
          <Button onClick={() => setShow((prev) => !prev)}>Open</Button>
        </motion.div>
      </AnimatePresence>
      <Button onClick={() => setShow((prev) => !prev)}>Open</Button>
    </div>
  );
}
