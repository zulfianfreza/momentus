import { Variants } from 'framer-motion';

export type TCreateAnimationProps = {
  initial: number;
  to: number;
  duration: number;
};

export const createFlowerVariant = ({
  initial,
  to,
  duration,
}: TCreateAnimationProps) => {
  const animation: Variants = {
    animate: {
      rotate: [initial, to, initial],
      transition: {
        rotate: {
          duration,
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        },
      },
    },
  };

  return animation;
};
