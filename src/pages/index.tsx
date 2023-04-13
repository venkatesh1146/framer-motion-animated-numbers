import AnimatedRollingNumber from '@/RollingNumbers';
import { motion } from 'framer-motion';


const zoomOut = {
    hidden: {
        transform: "scale(0.5)",
        opacity: 0,
       
    },
    visible: {
        transform: "scale(1)",
        opacity: 1,
        transition: {
            duration: 0.2
        }
    },
    exit: {
        transform: "scale(0.5)",
        opacity: 0,
        transition: {
            duration: 0.1
        }
    }
};

export default function Home() {
  return (
    <div style={{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <motion.div
        style={{
        border:"1px solid white",
        height:"300px",
        width:"300px",
        display:"flex",justifyContent:"center",alignItems:"center"
        }}
        variants={ zoomOut}
        initial="hidden"
        animate="visible"
        exit="exit">
      </motion.div>
          <AnimatedRollingNumber amount={45678} />
    </div>
  )
}
