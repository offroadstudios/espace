import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/varients';
import { useLocation } from 'react-router-dom';
import bgpart1 from './../../asset/interview1/bgpart1.png';
import bgpart2 from './../../asset/interview1/bgpart2.png';

const Interview1 = () => {
  const intervewRef = useRef(null);
  const { pathname } = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (pathname === '/interview1') {
      intervewRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <div ref={intervewRef}>
      <motion.section
        variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.1 }}
        className="section bg-dark h-full"
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row justify-center h-full">
            {/* Image part 1 */}
            <motion.div
              variants={fadeIn('up')}
              className={`lg:h-auto lg:w-1/2 ${isExpanded ? 'h-screen w-screen' : 'h-auto'}`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <img src={bgpart1} alt="Background Part 1" className="object-contain w-full" />
            </motion.div>
            {/* Image part 2 */}
            <motion.div
              variants={fadeIn('up')}
              className={`lg:h-auto lg:w-1/2 ${isExpanded ? 'h-screen w-screen' : 'h-auto'}`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <img src={bgpart2} alt="Background Part 2" className="object-contain w-full" />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Interview1;
