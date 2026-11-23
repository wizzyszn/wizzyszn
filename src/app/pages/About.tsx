import { ArrowUpRight } from 'lucide-react'

import { experience, platform, site } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'

export function About() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Lines as="h1" className="font-display text-balance text-[clamp(44px,7.5vw,112px)]" lines={['Software engineer,', 'product thinker']} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <Reveal>
          <Parallax src="/images/portrait.jpg" alt={site.name} className="aspect-[4/5] w-full max-w-[320px] rounded-image" strength={6} />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="link-draw inline-flex items-center gap-1 text-muted hover:text-fg">
                  {s.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <div>
          <Reveal className="text-pretty text-[19px] leading-relaxed sm:text-[22px]">
            <p>
              Most people think software engineering is about writing code. It is not. The hard part is understanding the problem, making the right technical decisions, and building something that still works when the product, users and requirements change.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-muted">
            <p>
              I help founders, startups and growing businesses turn ideas and complex requirements into reliable web applications and SaaS products. I have shipped production systems for fintech, healthcare, manufacturing, energy, sports and crypto, sometimes as the only engineer and sometimes inside a team.
            </p>
            <p>
              I like short feedback loops, real users, and launching things before they are perfect. I dislike decks about decks, and treating AI as a layer you bolt on after the thinking. When I am not working I am usually reading about systems design or arguing about type safety.
            </p>
            <p>
              Lately the work has leaned into platform engineering, particularly on AWS: account and network foundations, Terraform and CDK, ECS and Kubernetes, CI/CD, observability, secrets and cost. The aim is the same as always: a team that can ship on a Friday afternoon without holding its breath.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="text-[14px] text-muted">Platform engineering</h2>
            <ul className="mt-4 grid gap-x-8 gap-y-6 border-t border-line pt-5 sm:grid-cols-2">
              {platform.map((p) => (
                <li key={p.title}>
                  <p className="text-[16px] font-medium">{p.title}</p>
                  <p className="mt-1 text-pretty text-[14.5px] leading-relaxed text-muted">{p.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="text-[14px] text-muted">Experience</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {experience.map((e) => (
                <li key={e.title} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.2} className="mt-16 grid grid-cols-3 gap-6">
            {[
              ['20+', 'projects delivered'],
              ['6', 'industries'],
              ['9', 'case studies here'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-[52px] leading-none sm:text-[72px]">{value}</p>
                <p className="mt-2 text-[14px] text-muted">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </article>
  )
}
