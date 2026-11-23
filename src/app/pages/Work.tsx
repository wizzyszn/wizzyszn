import { motion } from 'motion/react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router'

import { bySlug, projects } from '../../data/site'
import { Lines, Reveal } from '../components/motion'

const ease = [0.22, 1, 0.36, 1] as const

export function Work() {
  const { slug } = useParams()
  const project = slug ? bySlug(slug) : undefined
  if (!project) return <Navigate to="/" replace />
  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Link to="/#work" className="inline-flex h-9 items-center gap-1.5 text-[14px] text-muted transition-colors hover:text-fg">
        <ArrowLeft className="size-4" />
        All work
      </Link>

      <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <Lines as="h1" className="font-display text-[clamp(56px,10vw,150px)]" lines={[project.title]} />
        <Reveal delay={0.2} className="max-w-md text-pretty text-[17px] leading-relaxed text-muted lg:pb-4">
          {project.summary}
        </Reveal>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease }}
        className="mt-12 overflow-hidden rounded-[32px]"
        style={{ background: project.tint }}
      >
        <img
          src={project.cover}
          alt={project.title}
          className="mx-auto block h-auto max-h-[82vh] w-auto max-w-full object-contain p-3 sm:p-8 lg:p-10"
        />
      </motion.div>

      {project.facts && (
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
          {project.facts.map((fact) => (
            <Reveal key={fact.label}>
              <p className="font-display text-[clamp(30px,4vw,46px)] leading-none">{fact.value}</p>
              <p className="mt-2 max-w-[180px] text-[13px] leading-snug text-muted">{fact.label}</p>
            </Reveal>
          ))}
        </div>
      )}

      <div className="mt-16 grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-24">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 text-[14px] lg:grid-cols-1">
            {[
              ['Client', project.client],
              ['Year', project.year],
              ['Role', project.role.join(', ')],
              ['Delivered', project.deliverables.join(', ')],
            ].map(([label, value]) => (
              <div key={label} className="border-t border-line pt-3">
                <dt className="text-muted">{label}</dt>
                <dd className="mt-1 text-fg">{value}</dd>
              </div>
            ))}
            {project.link && (
              <div className="border-t border-line pt-3">
                <a href={project.link} className="link-draw inline-flex items-center gap-1 font-medium">
                  Visit the site
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            )}
          </dl>
        </Reveal>
        <div className="max-w-2xl">
          {project.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className={`text-pretty leading-relaxed text-fg/90 ${i === 0 ? 'font-display text-[28px] leading-[1.2] sm:text-[36px]' : 'mt-6 text-[17px] text-muted'}`}>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {project.highlights && (
        <div className="mt-24 border-t border-line pt-10">
          <p className="text-[14px] text-muted">How it is built</p>
          <ul className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {project.highlights.map((item, i) => (
              <li key={i} className="border-t border-line pt-4">
                <Reveal delay={i * 0.04}>
                  <p className="flex gap-4 text-[15px] leading-relaxed text-fg/90">
                    <span className="mt-[3px] shrink-0 text-[12px] tabular-nums text-muted">0{i + 1}</span>
                    <span>{item}</span>
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.shots && (
        <div className="mt-16 flex flex-col gap-6">
          {project.shots.map((shot, i) => (
            <Reveal key={shot} delay={i * 0.05}>
              <div className="image-frame rounded-image border border-line" style={{ background: project.tint }}>
                <img src={shot} alt={`${project.title} screen ${i + 1}`} className="mx-auto block max-h-[86vh] w-auto max-w-full" loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>
      )}

      <Link to={`/work/${next.slug}`} className="group mt-32 block border-t border-line pt-10">
        <p className="text-[14px] text-muted">Next project</p>
        <div className="mt-3 flex items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(44px,8vw,120px)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">{next.title}</h2>
          <span className="image-frame hidden aspect-[16/9] w-[300px] shrink-0 rounded-[20px] sm:block" style={{ background: next.tint }}>
            <img src={next.cover} alt="" className="size-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
          </span>
        </div>
      </Link>
    </article>
  )
}
