import { motion } from 'framer-motion'
import React from 'react'
import { Outlet } from 'react-router-dom'

const pageVariants= {
    initial:{
        opacity: 0,
        x: "-100vw"
    },
    in:{
        opacity: 1,
        x: 0
    },
    out:{
        opacity: 0,
        x: "100vw"
    }
}

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
}

const AnimatedLayout = () => {
  return (
    <motion.div initial="intial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
        <Outlet/>
        </motion.div>
  )
}

export default AnimatedLayout