import { useAnimation, motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type Props = {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
  durationValue?: number;
  className?: string;
};
const RevealAnimation = ({ children, width = 'fit-content', durationValue, className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]); // eslint-disable-line

  return (
    <div ref={ref} className={className} style={{ width, position: 'relative', overflow: 'hidden' }}>
      <motion.div
        animate={mainControls}
        initial='hidden'
        transition={{ duration: durationValue || '1', delay: 0.25 }}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
          },
          hidden: {
            opacity: 0,
            y: 75,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealAnimation;
