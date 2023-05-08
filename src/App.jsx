import React from 'react';
import styles from "./style";
import { motion, useScroll, useSpring } from "framer-motion";


import {
  Navbar,
  Hero,
  Myself,
  Skills,
  Projects,
  Contact,
  Footer
} from "./components";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
<>
    <motion.div className="progress-bar" style={{ scaleX }} />
      <div className='back__image'>
        <div className=' w-full overflow-hidden '>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth} `}>
              <Navbar />
            </div>
          </div>

          <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />

            </div>

          </div>


          <div className={`${styles.paddingX} ${styles.flexStart} `}>
            <div className={`${styles.boxWidth}`}>
              <Myself />
              <Skills />
              <Projects />
              <Contact />
              <Footer />

            </div>

          </div>






        </div>

      </div>
    
</>
  )
}

export default App