import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Transition ({ children }) {
  const { asPath } = useRouter();

  return(
  <div className='framerWrapper'>
    <AnimatePresence
      initial={false} 
      mode='wait'
    >
      <motion.div 
        key={ asPath } 
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
      >
        { children }
      </motion.div>
      
    </AnimatePresence>
  </div>
  );
}