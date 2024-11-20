'use client';

import React, { useState, useEffect } from 'react';
// useInView hook
import { useInView } from 'react-intersection-observer';
// react circular
import { CircularProgressbar } from 'react-circular-progressbar';
// react circular styles
import 'react-circular-progressbar/dist/styles.css';
// import motion
import { motion } from 'framer-motion';
// import fadeIn
import { fadeIn } from '../variants';

const Skills = () => {
  // destructure useInView hook
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  // full body tattoo state
  const [fullBody, setFullBody] = useState(0);
  // safely piercing state
  const [piercing, setPiercing] = useState(0);
  // safely piercing state
  const [fullColor, setFullColor] = useState(0);
  // temporary tattoo state
  const [temporary, setTemporary] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 100) {
          setFullBody(fullBody + 1);
        }
        if (piercing < 500) {
          setPiercing(piercing + 1);
        }
        if (fullColor < 75) {
          setFullColor(fullColor + 1);
        }
        if (temporary < 95) {
          setTemporary(temporary + 1);
        }
      }, 50);
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }
  }, [inView, fullBody, piercing, fullColor, temporary]);

  // circular progress bar styles
  const styles = {
    path: {
      stroke: '#111111',
    },
    trail: { stroke: '#eeeeee' },
    text: { fill: '#111111', fontSize: '24px' },
  };

  return (
    <motion.section
      ref={ref}
      className='section font-primary'
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[50px]  justify-between items-center gap-y-12'>
          {/* circular item */}
          <div className='w-[150px] lg:w-[210px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              value={fullBody}
              styles={styles}
              text={`${fullBody}%`}
            />
            {/* text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Full Body Tattoo
            </div>
          </div>
          <div className='w-[150px] lg:w-[210px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              value={piercing}
              styles={styles}
              text={`${piercing}%`}
            />
            {/* text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Safely Piercing
            </div>
          </div>
          <div className='w-[150px] lg:w-[210px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              value={fullColor}
              styles={styles}
              text={`${fullColor}%`}
            />
            {/* text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Full Color Tattoo
            </div>
          </div>
          <div className='w-[150px] lg:w-[210px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              value={temporary}
              styles={styles}
              text={`${temporary}%`}
            />
            {/* text */}
            <div className='uppercase font-light tracking-[1.2px] text-center'>
              Temporary Tattoo
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
