'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed left-0 top-0 right-0 z-50 h-1 bg-blue-700"
      style={{
        scaleX: scaleX,
        transformOrigin: '0%'
      }}
    />
  )
}
