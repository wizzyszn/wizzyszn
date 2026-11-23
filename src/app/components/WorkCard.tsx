import { motion, useMotionValue, useSpring } from 'motion/react'
import { useRef, useState } from 'react'
import { Link } from 'react-router'

import type { Project } from '../../data/site'
import { cx } from '../lib/cx'

export function WorkCard({ project, index = 0 }: { project: Project; index?: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [hover, setHover] = useState(false)
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        ref={ref}
        to={`/work/${project.slug}`}
        className="group relative block"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={(e) => {
          const rect = ref.current?.getBoundingClientRect()
          if (!rect) return
          x.set(e.clientX - rect.left)
          y.set(e.clientY - rect.top)
        }}
      >
        <div
          className={cx('relative aspect-[16/10] overflow-hidden rounded-image sm:aspect-[16/9]')}
          style={{ background: project.tint }}
        >
          <div className="absolute inset-0 p-4 sm:p-6 lg:p-8">
            <img
              src={project.cover}
              alt={project.title}
              loading="lazy"
              className="size-full object-contain drop-shadow-[0_18px_38px_rgba(0,0,0,0.28)] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
            />
          </div>
          <motion.span
            aria-hidden
            style={{ x, y }}
            className={cx(
              'pointer-events-none absolute left-0 top-0 hidden -translate-x-1/2 -translate-y-1/2 items-center rounded-[14px] bg-fg px-4 py-2.5 text-[13px] font-medium text-bg transition-[opacity,scale] duration-300 md:flex',
              hover ? 'scale-100 opacity-100' : 'scale-75 opacity-0',
            )}
          >
            View project
          </motion.span>
        </div>
        <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <h3 className="font-display text-[clamp(30px,3.4vw,46px)]">{project.title}</h3>
          <p className="shrink-0 text-[13.5px] text-muted">
            {project.category}
            <span className="ml-3 tabular-nums text-faint">{project.year}</span>
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
