// Everything about you lives here. The pages read from this file.

export const site = {
  name: 'Olubayo Wisdom',
  role: 'Software engineer and platform builder',
  location: 'Lagos',
  timezone: 'Africa/Lagos',
  email: 'wisdomolubayoadedoyin@yahoo.com',
  available: true,
  intro:
    'I build products and the platforms they run on: applications from the first screen to the last service, AI features, and the AWS infrastructure, delivery pipelines and observability that keep them reliable.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/wizzyszn' },
    { label: 'X', href: 'https://x.com/WisdomOlubayo' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wisdom-olubayo-32413031a/' },
    { label: 'Instagram', href: 'https://www.instagram.com/olubayowisdom/' },
  ],
  marquee: [
    'Platform engineering on AWS',
    'Infrastructure as code',
    'CI/CD and observability',
    'Backend architecture',
    'Product engineering',
    'AI automation',
    'React and TypeScript',
    'Go and NestJS',
  ],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover: string
  shots?: string[]
  tint: string
  summary: string
  role: string[]
  deliverables: string[]
  link?: string
  facts?: { value: string; label: string }[]
  highlights?: string[]
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'telemex',
    title: 'Telemex',
    client: 'Telemex',
    category: 'Healthcare platform',
    year: '2026',
    cover: '/images/telemex-cover.webp',
    shots: [
      '/images/telemex-front-desk.webp',
      '/images/telemex-diagnosis.webp',
      '/images/telemex-lab-reception.webp',
      '/images/telemex-results-entry.webp',
      '/images/telemex-cashier.webp',
      '/images/telemex-admin-finance.webp',
      '/images/telemex-launch-film.webp',
    ],
    tint: '#e7ebdf',
    summary:
      'A white label hospital management platform: the clinical record, the laboratory bench and the financial trail in one system, running on an AWS environment and pipelines I built to deploy themselves.',
    role: ['Platform engineering', 'Infrastructure as code', 'Backend architecture', 'Product engineering'],
    deliverables: [
      'Terraform AWS environment',
      'Keyless CI/CD on GitHub OIDC',
      'Go and PostgreSQL API',
      'React clinical app',
      'HL7 and ASTM analyzer gateway',
      'Operations runbooks',
    ],
    link: 'https://telemex.com.ng',
    facts: [
      { value: '526', label: 'API endpoints on one Go service' },
      { value: '67', label: 'PostgreSQL migrations applied in order' },
      { value: '35', label: 'AWS resources under Terraform' },
      { value: '7', label: 'CI and CD pipelines across the repos' },
    ],
    highlights: [
      'One Terraform configuration for the whole environment: compute, network, IAM, storage, logs, alarms and a budget, so a broken demo can be rebuilt from an empty account instead of repaired by hand.',
      'Deployments with no long lived AWS keys: GitHub Actions assumes a separate IAM role per repository over OIDC, builds an arm64 image with buildx, pushes it to ECR, and the host restarts through SSM.',
      'Analyzer integration written for hospital reality: HL7 over MLLP and ASTM over TCP, durable spooling when the network drops, outbound HTTPS only, and a shared Go protocol module with golden fixtures.',
      'Observability and cost control from the first day: CloudWatch logs per service, SNS alarms on status checks, CPU, disk and memory, an AWS Budget, and a daily database backup to S3 with a restore runbook.',
      'Safety built into the API rather than bolted on: one response envelope with request IDs on every endpoint, role based access for admins, doctors and patients, and slow query logging that never writes patient data.',
      'A marketing site that carries the product: a static build with its own deploy, a platform page that walks the clinical flow, a packages matrix, and a governance page that states plainly what the platform does not claim.',
    ],
    body: [
      'Telemex is the operating layer of a hospital: the clinical record, the department work and the financial trail in one system, so a laboratory result, a prescription and an invoice all point at the same patient.',
      'The product covers the whole visit. Registration and front desk, nursing triage, scheduling, consultation with diagnosis and plan, investigation orders, laboratory reception and result entry, cashier billing and receipts, and a patient portal at the end. It ships as Hospital and Laboratory packages, with pharmacy, inpatient and radiology on the roadmap, and each hospital runs its own white label configuration.',
      'The platform is the part I am proudest of. The environment is Terraform from an empty account: one EC2 host in eu-west-2 with an Elastic IP, a locked down security group, an encrypted gp3 root volume, a versioned S3 bucket for build artifacts with server side encryption and a lifecycle policy, an ECR repository, CloudWatch log groups for the API, Caddy and Postgres, SNS alarms for failed status checks, CPU, disk and memory, and an AWS Budget so the account cannot surprise anyone. Caddy handles TLS, SPA fallback and the API reverse proxy, the API ships as a distroless container, and Postgres keeps its data in a volume with TLS on the wire.',
      'Deployment has no human step. Every repository runs CI, and the API and clinic repositories deploy from main through GitHub Actions authenticating with OIDC into per repository IAM roles: the API is cross compiled for arm64 and pushed to ECR with buildx caching, the clinic is built and uploaded to S3, and the host pulls the artifact and restarts through SSM. Backups run on a cron and a smoke test checks the deployed host rather than a local build.',
      'Hospitals do not buy software alone, they buy the machine that prints the result. The analyzer gateway runs inside the laboratory, speaks HL7 and ASTM, spools results durably when the connection drops, and holds a single outbound HTTPS dependency. The hospital network never accepts an inbound connection from the cloud, and the parsers live in a shared module so the gateway and the cloud are tested against identical bytes.',
      'The rest is the unglamorous work that makes a hospital system trustworthy: 67 PostgreSQL migrations applied in order, an auditable clinical trail across departments, package provisioning per hospital, and runbooks for backup and recovery, support incidents, payment operations, security remediation and onboarding handover.',
    ],
    size: 'large',
  },
  {
    slug: 'autopilot',
    title: 'Autopilot',
    client: 'Autopilot, on Monnify',
    category: 'Fintech product',
    year: '2025',
    cover: '/images/autopilot.png',
    shots: [
      '/images/autopilot-home.webp',
      '/images/autopilot-bills.webp',
      '/images/autopilot-priority.webp',
      '/images/autopilot-history.webp',
      '/images/autopilot-profile.webp',
      '/images/autopilot-onboarding.webp',
      '/images/autopilot-brand.webp',
    ],
    tint: '#eee2d3',
    summary:
      'A Nigerian bill payment product that puts electricity, cable, airtime, data and subscriptions on autopilot from one smart wallet.',
    role: ['Product engineering', 'Frontend', 'Payments integration'],
    deliverables: ['Mobile and web app', 'Monnify wallet', 'Automated payment engine', 'Biometric security'],
    link: 'https://autopilot-monnify.netlify.app/',
    body: [
      'Autopilot started from a small, specific frustration: bills in Nigeria arrive on different days from different providers, and missing one costs you. The product asks you to fund one wallet once, then get out of the way.',
      'I built the payment engine so every bill carries an amount, a due date and a priority. When funds are limited, the most important payment clears first instead of whichever one happens to be next in the queue. Each payment produces a receipt, and the balance updates instantly through a dedicated Monnify reserved account.',
      'Security had to be invisible: Face ID or a fingerprint to open the app, a transaction PIN to pay, encrypted storage underneath, and the same rails banks use, provided by Monnify. Autopilot is live with more than 9,000 users and is trusted by Monnify as a partner.',
    ],
    size: 'large',
  },
  {
    slug: 'prodily',
    title: 'Prodily',
    client: 'Prodily',
    category: 'Product platform',
    year: '2025',
    cover: '/images/prodily-cover.webp',
    shots: ['/images/prodily-team.webp', '/images/prodily-admin.webp', '/images/prodily-overview.webp'],
    tint: '#dde3ee',
    summary:
      'Frontend architecture for a productivity and culture platform with four roles: HR managers, team leads, members and admins.',
    role: ['Frontend architecture', 'React and TypeScript', 'Product analytics'],
    deliverables: ['HR and team lead dashboards', 'Task and meeting workflows', 'Time tracking', 'HR analytics'],
    link: 'https://www.prodily.tech/',
    body: [
      'Prodily gives HR managers, team leads, members and admins four different views of the same company: onboarding, tasks, meetings, wellbeing, payroll and performance.',
      'I led the frontend architecture and delivery. The dashboards brought team performance, mood analytics, flight risk monitoring, payroll summaries, meetings and task progress into six decision views, work that used to live in spreadsheets, and cut manual reporting effort by an estimated 40%.',
      'Task assignment, meeting scheduling and time tracking followed, with clock sessions that survive a reload, plus pause, resume, overlap checks and a summary at clock out. The useful part was never the features on their own but making four roles share one coherent data model.',
    ],
    size: 'small',
  },
  {
    slug: 'platline',
    title: 'Platline',
    client: 'Platline Sports',
    category: 'Sports analytics',
    year: '2025',
    cover: '/images/platline.png',
    shots: [
      '/images/platline-overview.webp',
      '/images/platline-prop.webp',
      '/images/platline-player.webp',
      '/images/platline-matchup.webp',
    ],
    tint: '#dfe1eb',
    summary:
      'A sports analytics and subscription platform with 126 routes across 25 modules, a million data points a day and a full React dashboard.',
    role: ['Backend architecture', 'NestJS and TypeScript', 'React dashboard'],
    deliverables: ['126 REST routes', 'Odds and props pipeline', 'Stripe subscriptions', 'Affiliate system'],
    link: 'https://www.platlinesports.com',
    body: [
      'Platline needed to turn a firehose of MLB data into something a paying subscriber could read in seconds: odds, player props, projections and performance, refreshed daily.',
      'I built the TypeScript and NestJS backend as 126 routes across 25 modules, plus the React dashboard for odds, props, subscriptions, admins and affiliates. A Redis caching layer brought analytics latency from around two seconds down to 200ms.',
      'The platform syncs more than a million MLB data points a day at 97.8% accuracy and handles Stripe subscriptions and affiliate commissions, supporting $5k+ in monthly recurring revenue at the time.',
    ],
    size: 'small',
  },
  {
    slug: 'matchlock',
    title: 'Matchlock',
    client: 'Solana and TxLINE hackathon',
    category: 'On chain product',
    year: '2025',
    cover: '/images/matclock.png',
    tint: '#e4e0e8',
    summary:
      'Sports wagering between two people on Solana: escrow held on chain, settlement through an oracle, no house and no spread.',
    role: ['Anchor program', 'Go backend', 'React frontend'],
    deliverables: ['Anchor escrow program', 'CPI settlement', 'Go keeper and API', 'React 19 app'],
    link: 'https://matchlock-u1ww.onrender.com/',
    body: [
      'Matchlock is deliberately small: two people, one match, opposite outcomes. One escrow account on chain, settlement through the TxLINE oracle program, and the winner pays the Solana fee to claim. There is no house and no funny business.',
      'I wrote the Anchor program in Rust: escrow, CPI settlement, and a pause switch that can stop new bets without ever trapping funds. I also wrote the Go backend (Gin, GORM, Redis and the Solana SDK) that acts as keeper and API.',
      'The frontend is React 19 on Vite with TypeScript, Tailwind and Base UI. It was built for the Solana and TxLINE hackathon, which meant shipping something two strangers could actually use from start to finish in the time available.',
    ],
    size: 'large',
  },
  {
    slug: 'wattlens',
    title: 'Wattlens',
    client: 'Wattlens',
    category: 'Energy analytics',
    year: '2026',
    cover: '/images/wattlens.png',
    shots: [
      '/images/wattlens-dashboard.webp',
      '/images/wattlens-data-quality.webp',
      '/images/wattlens-voltage.webp',
    ],
    tint: '#e3e8da',
    summary:
      'A cloud platform that turns messy energy CSVs into clean insights, live charts and reports a client can read, all in under five minutes.',
    role: ['Product engineering', 'Data pipelines', 'AI features'],
    deliverables: ['CSV cleaning pipeline', 'Interactive charting', 'Plain language analysis', 'PDF and HOMER/PVsyst exports'],
    link: 'https://www.wattlens.com',
    body: [
      'Renewable energy consultants spend their days inside load profiles that arrive as enormous, inconsistent CSVs. Wattlens takes the file, works out its structure, cleans it and draws the charts in under five minutes, with no Excel expertise required.',
      'The interesting engineering was making the pipeline forgiving: guessing what each column means, handling gaps and timezone drift, and keeping the original data traceable so a report can be defended to a client.',
      'On top of that sits a layer that answers questions about trends, peak load and efficiency in plain language, polished PDF reports you can produce in one click, and exports shaped for HOMER and PVsyst feasibility studies. It is used by developers, auditors and ESG teams.',
    ],
    size: 'large',
  },
  {
    slug: 'godin',
    title: 'Godin Organizer',
    client: 'Godin Organizer, concept',
    category: 'Brand website',
    year: '2026',
    cover: '/images/godin-cover.webp',
    shots: ['/images/godin-about.webp', '/images/godin-approach.webp', '/images/godin-portfolio.webp'],
    tint: '#efe7da',
    summary:
      'A five page Indonesian language site for a wedding and event organizer in West Java, built to turn a quiet Instagram following into a conversation about a real date.',
    role: ['Design', 'Build', 'Content', 'SEO'],
    deliverables: ['Five page static site', 'Indonesian copy system', 'Editorial photography direction', 'WhatsApp and enquiry flow', 'Local search structured data'],
    link: 'https://godin-kappa.vercel.app/',
    facts: [
      { value: '5', label: 'Pages, each with its own purpose' },
      { value: '3', label: 'Regencies the studio covers' },
      { value: '4', label: 'Service groups, mapped from the brand' },
      { value: '5', label: 'Structured data types for local search' },
    ],
    highlights: [
      'One source of truth for the business: the WhatsApp number, social handles and contact behaviour live in a single configuration object, so the owner can change a number without touching the markup on five pages.',
      'Tailwind v4 tokens for colour, type and spacing compiled into one minified stylesheet, with the design decisions written down in the README for whoever maintains the site next.',
      'Motion with a floor: GSAP timelines and Lenis smooth scroll, a skip link, and a full stop under prefers-reduced-motion, with every section readable and every link working without animation.',
      'Local search treated as part of the build: Indonesian titles and descriptions per page, Open Graph and Twitter cards, LocalBusiness, WebSite, BreadcrumbList, FAQPage and ContactPage structured data, plus robots.txt and sitemap.xml.',
      'Honest by construction: stock photography is labelled as concept imagery on the page, the enquiry form is described as a demonstration until a backend is connected, and the README lists what the owner must confirm before launch.',
    ],
    body: [
      'Godin Organizer plans weddings across Cirebon, Majalengka and Kuningan, and its reputation lives on Instagram. The site had to take that casual scrolling and turn it into a conversation about a specific date, a venue and a budget.',
      'The work started with the brand language that was already there. Planner, eksekusi, finalisasi became the spine of the site: a three stage method, four service groups, and a portfolio built from details rather than a wall of albums. Every page is written in Indonesian, in the voice of a team that listens before it sells, and no page claims a number of events, an award or a testimonial the business cannot prove.',
      'Visually it is warm and editorial: cream paper, ink typography, full height photography and a restrained serif for the emotional lines. The images share one colour treatment so a set of concept photographs reads as a single collection, and the pages say plainly that the owner’s own documentation will replace them.',
      'Under the surface it is five hand written static pages with a Tailwind v4 build. GSAP, ScrollTrigger and Lenis are kept in the repository instead of loaded from a CDN, so the site depends on almost nothing outside itself. Each page carries its own title, description, share card and structured data, and the contact route is a validated form beside a WhatsApp link configured in one place.',
    ],
    size: 'small',
  },
  {
    slug: 'tona',
    title: 'Toña',
    client: 'Toña Bakery & Café, concept',
    category: 'Brand website',
    year: '2026',
    cover: '/images/tona-cover.webp',
    shots: ['/images/tona-story.webp', '/images/tona-food.webp', '/images/tona-menu.webp'],
    tint: '#f2e9d7',
    summary:
      'A bakery and café concept for a small shop on Dunbar Street in Vancouver, designed from the room’s own cobalt blue and tangerine rather than a bakery template.',
    role: ['Design', 'Build', 'Content'],
    deliverables: ['Design system and tokens', 'Two page static site', 'Editorial layout and typography', 'Responsive image pipeline', 'Search and share metadata'],
    link: 'https://tona-orcin.vercel.app/',
    facts: [
      { value: '2', label: 'Pages, written as a publication' },
      { value: '8', label: 'Colour tokens from the shop itself' },
      { value: '4', label: 'Typefaces, each with one job' },
      { value: '4', label: 'Responsive widths for every photograph' },
    ],
    highlights: [
      'A design system before a page: colour, type and spacing live as tokens in the stylesheet, with fluid clamp scales for the display sizes so headings size themselves to the viewport instead of snapping at breakpoints.',
      'An editorial grid that refuses repetition: seven five splits, offset columns, full width colour bands and numbered section eyebrows, so each section earns its own structure rather than repeating a card grid.',
      'Assets treated as part of the engineering: self hosted woff2 fonts, four WebP widths per photograph with srcset and sizes, the hero preloaded through imagesrcset, and everything below the fold loaded lazily.',
      'Content with a paper trail: only facts from public sources are stated, the README records every source and the open questions, the seasonal block is labelled as an archive rather than a current offer, and the single inquiry link is configurable for whichever ordering platform the owners pick.',
      'A review mode built in: adding ?still to any URL, or setting prefers-reduced-motion, renders the site with all motion disabled, which makes screenshots, print and accessibility review honest instead of lucky.',
    ],
    body: [
      'Toña is a small Venezuelan bakery on Dunbar Street in Vancouver, and the concept had to feel like the room: a tangerine ceiling, electric blue cushions, and a pastry case that changes with the season.',
      'The palette comes from the shop rather than from a bakery template. Cobalt blue and flame orange lead, warm paper replaces the usual beige, and butter yellow appears only as a functional signal for focus rings and the open status. Type does the emotional work: Bricolage Grotesque set very tight and very large, Instrument Serif italic for one or two words per section, DM Sans for body copy, and Space Mono for the printed tag voice of hours, labels and prices.',
      'The layout is a twelve column editorial grid, deliberately uneven: seven five splits, offset columns, full width colour bands between sections, and a numbered eyebrow on each one so the page reads like a printed publication. Every section has its own structure, which is harder to build than a card grid and makes the shop feel like a place instead of a listing.',
      'The copy is written around what a person actually searches for: bakery Dunbar, Vancouver, concha, cachito, kouign amann, plus the address and an open status computed live in the shop’s timezone. The menu keeps prices at the counter because none are published, the seasonal block is clearly an archive, and every inquiry points to Instagram because that is the only contact channel the business publishes.',
      'It ships as two static pages built with Vite and Tailwind, with GSAP and Lenis for the motion that remains. With ?still or prefers-reduced-motion the site renders completely without animation, because no content is allowed to depend on a script to become visible.',
    ],
    size: 'small',
  },
  {
    slug: 'downlow',
    title: 'DownLow Chicken',
    client: 'DownLow Chicken, concept',
    category: 'Brand website',
    year: '2026',
    cover: '/images/downlow-cover.webp',
    shots: [
      '/images/downlow-menu.webp',
      '/images/downlow-heat.webp',
      '/images/downlow-story.webp',
      '/images/downlow-locations.webp',
    ],
    tint: '#f6efdf',
    summary:
      'A six page rebuild of a Vancouver hot chicken brand, carrying the restaurant’s own poster energy and sending every order to the systems that already take it.',
    role: ['Design', 'Build', 'Content', 'Accessibility'],
    deliverables: ['Six page static site', 'Design system and tokens', 'Interactive heat picker', 'Location aware ordering flow', 'Verified menu and catering copy'],
    link: 'https://downlow.vercel.app/',
    facts: [
      { value: '6', label: 'Pages sharing one design system' },
      { value: '5', label: 'Kitchens across two cities' },
      { value: '1', label: 'Order dialog for every channel' },
      { value: '0', label: 'Backend, accounts or stored data' },
    ],
    highlights: [
      'A small build plugin injects the header, footer, order dialog and locations dataset at build time, so every page arrives as complete HTML with one design system and no client side rendering of primary content.',
      'Accessibility built into the interactions rather than added later: a skip link, landmarks, one heading per page, native details and dialog elements, heat buttons that report their pressed state, and contrast raised to AA on the small mono labels.',
      'Motion that can be switched off: GSAP and Lenis handle the entrances, the heat scale fill and the ordering dialog, and everything stops under prefers-reduced-motion. Without JavaScript every section stays visible and every link still works.',
      'Performance as a budget: one stylesheet and one JavaScript bundle, self hosted fonts with swap, lazy images below the fold, and a preloaded hero with high fetch priority.',
      'Business logic preserved instead of imitated: ordering hands off to the restaurant’s own Square, store or Uber Eats page, catering points at the official form, and until an endpoint is configured the inquiry builder prepares a copyable message instead of pretending to send one.',
    ],
    body: [
      'DownLow Chicken made its name on Commercial Drive with hot chicken that does not whisper, and the official site was doing the opposite. The concept rebuilds the experience around that volume: the menu, the heat ladder, the story and the five kitchens.',
      'The design system is sampled from the brand itself. Gold comes from the badge, chili red from the logo mark, warm paper replaces white, and a pickle green is reserved for the open status dot. Anton carries the poster headlines, Archivo the interface, Space Mono the addresses and receipt details, and a single serif italic supplies the wink.',
      'Every surface is a flat two pixel border with a hard offset shadow: no rounded corners, no glass, no gradients. Menu items are set as receipt lines, the heat ladder is a real control rather than decoration, the limited run is presented as an archived collaboration with its real dates, and the empty slot for the next drop says plainly that nothing is announced.',
      'The commercial routes are kept, not simulated. Order now opens a native dialog built from the verified locations, remembers the choice, and hands off to the restaurant’s own ordering page. Locations group by city with an open status computed in local time, and the two kitchens with no online ordering say so instead of hiding it. Catering opens the official form and, until an endpoint is set, prepares a copyable inquiry.',
      'Six static pages share one design system, built with Vite, Tailwind and a small plugin that assembles the shared partials at build time. The delivered HTML is complete before the browser runs a line of JavaScript, which keeps the brand loud on a slow phone in a noisy kitchen.',
    ],
    size: 'small',
  },
  {
    slug: 'fries-n-spice',
    title: "Fries n' Spice",
    client: "Fries n' Spice, Yaba",
    category: 'Brand website',
    year: '2024',
    cover: '/images/fries-n-spice.png',
    tint: '#f1e1d2',
    summary:
      'A site built to turn visitors into orders for a Yaba breakfast and food tray business, with every order routed straight to WhatsApp.',
    role: ['Design', 'Build', 'Content'],
    deliverables: ['Brand site', 'Menu structure', 'WhatsApp order flow', 'Reviews and gallery'],
    link: 'https://spice-yaba-bites.base44.app/',
    body: [
      "Fries n' Spice sells breakfasts, loaded fries and event food trays in Yaba, and most of its customers already live in WhatsApp. The site's job was to make the food irresistible in the first screen, then get out of the way.",
      'I structured the menu into breakfast platters, pancakes and waffles, loaded fries, trays and combos, each with a straight line to a customised order. Catering enquiries, reviews and a gallery carry the proof: more than 3,000 meals sold, more than 1,000 guests catered and five years in Yaba.',
      'Every call to action opens WhatsApp with the order prefilled, because a full checkout would have been one step too many for this audience.',
    ],
    size: 'small',
  },
  {
    slug: 'top-token-trader',
    title: 'Top Token Trader',
    client: 'Independent client',
    category: 'Data visualisation',
    year: '2024',
    cover: '/images/top-token-trader.png',
    shots: ['/images/token-whale.webp', '/images/token-clusters.webp', '/images/token-network.webp'],
    tint: '#dfe0f0',
    summary:
      'An interactive crypto analytics tool that maps the top token traders with a live D3 bubble map and a Telegram Web App.',
    role: ['Frontend', 'D3.js', 'Data integration'],
    deliverables: ['D3 bubble map', 'Telegram Web App', 'Web dashboard', 'Alchemy API integration'],
    link: 'https://bubblemapsviz.onrender.com/',
    body: [
      'A client wanted to see who was actually trading a token, not just where the price went. The result is a bubble map where each wallet is a circle sized by activity, explorable across chains and custom time frames.',
      'I built it with React and D3.js on live Alchemy data, then packaged the same experience as a Telegram Web App so it can be opened inside a chat. The hard part was keeping thousands of circles legible and responsive while the data refreshed.',
    ],
    size: 'small',
  },
  {
    slug: 'ekomass',
    title: 'Ekomass',
    client: 'Ekomass',
    category: 'Marketplace backend',
    year: '2025',
    cover: '/images/ekomass.png',
    tint: '#e8e3d7',
    summary:
      'A marketplace backend for manufacturers, suppliers and buyers, covering onboarding, catalog, ordering, escrow, referrals and production batches.',
    role: ['Backend architecture', 'Go and Gin', 'PostgreSQL'],
    deliverables: ['50+ REST endpoints', '20+ domain entities', 'Escrow and order transactions', 'Cached FX conversion'],
    body: [
      'Ekomass connects manufacturers, suppliers and buyers, which means every workflow has at least two sides and usually a payment in the middle.',
      'I architected more than fifty REST endpoints across onboarding, catalog, marketplace feed, ordering, escrow, referrals, production batches and identity, backed by more than twenty entities with indexes, constraints and audit trails.',
      'Order creation is transactional, reserving inventory and escrow together so a half finished order cannot hold stock hostage. Naira to dollar conversion is cached with fallback rates and an expiry, so a flaky exchange rate provider degrades the experience instead of breaking checkout.',
    ],
    size: 'small',
  },
  {
    slug: 'carelexa',
    title: 'Carelexa',
    client: 'Carelexa',
    category: 'Healthcare PWA',
    year: '2024',
    cover: '/images/carelexa.png',
    tint: '#dde8e5',
    summary:
      'Frontend architecture for a healthcare PWA with several roles, spanning bookings, records, video consultations and admin.',
    role: ['Frontend architecture', 'React and TypeScript', 'Video integration'],
    deliverables: ['40+ protected routes', 'Doctor workspaces', 'Availability management', 'Daily.co video calls'],
    body: [
      'Carelexa serves patients, doctors and admins from one installable app, with more than forty protected routes covering bookings, schedules, records, consultations and back office flows.',
      'I maintained the frontend architecture and built the doctor consultation workspaces, including availability management and tokenised Daily.co video rooms with controls inside the call. Booking friction dropped by an estimated 40 to 50% once the flow was reworked.',
      'The constraint that shaped everything was trust: someone booking a consultation is already anxious, so the interface had to load fast, survive a patchy connection and never lose a booking that was half completed.',
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const platform = [
  {
    title: 'AWS foundations',
    body:
      'Accounts, networking, IAM and environments arranged so a small team can ship without stepping on each other, and so production is never somebody’s laptop.',
  },
  {
    title: 'Infrastructure as code',
    body:
      'Terraform or CDK covering the whole stack, reviewed like application code, so an environment can be rebuilt instead of repaired by hand.',
  },
  {
    title: 'Container delivery',
    body:
      'ECS and Kubernetes workloads behind real pipelines: build, test, scan, deploy and roll back, with no manual runbook in between.',
  },
  {
    title: 'Reliability and cost',
    body:
      'Logs, metrics, alerts, backups and budgets wired in from the start, so you can see what is slow, what is failing and what is quietly costing money.',
  },
]

export const services = [
  {
    title: 'Platform engineering on AWS',
    body:
      'AWS foundations a product team can grow into: accounts, networking and IAM, infrastructure as code with Terraform or CDK, container workloads on ECS or Kubernetes, CI/CD, secrets, observability and cost controls. Built to be handed over, not held hostage.',
  },
  {
    title: 'Product engineering',
    body:
      'Web applications and SaaS products taken from idea to production: the data model, the interface, and the unglamorous pieces that make them real, such as auth, payments, notifications and real time updates.',
  },
  {
    title: 'Backend and APIs',
    body:
      'Go, Node and NestJS services, schemas and integrations designed for the questions that arrive later: concurrency, retries, payments that succeed while the network fails, traffic that suddenly triples.',
  },
  {
    title: 'AI automation',
    body:
      'LLM features, agent flows and n8n pipelines wired into how a product actually runs, with guardrails and a human still holding the decisions that matter. Not a novelty layer.',
  },
  {
    title: 'Frontend engineering',
    body:
      'React and TypeScript interfaces, design systems and dashboards that stay fast under real data, and Figma turned into something the team can maintain after launch.',
  },
]

export const testimonials = [
  {
    quote:
      'Anyone can generate a function. The engineering starts when you have to decide what that function should actually do.',
    name: 'Olubayo Wisdom',
    role: 'On the work',
  },
  {
    quote:
      'I do not treat AI as a novelty layer. It goes where it removes real work, with a human still holding the decisions that matter.',
    name: 'Olubayo Wisdom',
    role: 'On automation',
  },
  {
    quote:
      'Understand the problem, make the tradeoffs clear, and build something that still works when the requirements change six months from now.',
    name: 'Olubayo Wisdom',
    role: 'On building software',
  },
]

export const experience = [
  {
    period: 'Now',
    title: 'Platform engineering on AWS',
    detail: 'Infrastructure as code, container platforms, delivery pipelines and observability for product teams',
  },
  {
    period: '2026',
    title: 'Telemex, platform and product engineering',
    detail: 'White label hospital platform: Go and PostgreSQL API, React clinical app, Terraform AWS environment, analyzer gateway and pipelines',
  },
  { period: 'Now', title: 'Founder, Reslve', detail: 'Building and shipping the product end to end' },
  {
    period: 'Recent',
    title: 'Independent software engineer',
    detail: 'Products and cloud foundations for startups across fintech, health, energy and crypto',
  },
  {
    period: 'Earlier',
    title: 'Freelance product engineer',
    detail: 'Frontend architecture and delivery for SaaS platforms with several roles',
  },
]
