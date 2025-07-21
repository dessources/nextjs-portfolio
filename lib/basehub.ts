import { basehub } from 'basehub'

// BaseHub client with type safety
export const client = basehub({
  token: process.env.BASEHUB_TOKEN!,
})

// Query fragments for reusable field selections
export const projectFragment = {
  _sys: {
    id: true,
    slug: true,
  },
  title: true,
  description: true,
  image: true,
  technologies: true,
  highlights: true,
  category: true,
  status: true,
  url: true,
  github: true,
  featured: true,
  order: true,
} as const

export const skillFragment = {
  _sys: {
    id: true,
    slug: true,
  },
  name: true,
  category: true,
  level: true,
  learning: true,
  icon: true,
  order: true,
} as const

export const siteSettingsFragment = {
  title: true,
  description: true,
  author: {
    name: true,
    email: true,
    phone: true,
    location: true,
    timezone: true,
  },
  social: {
    github: true,
    linkedin: true,
    email: true,
  },
  seo: {
    ogImage: true,
    twitterHandle: true,
  },
} as const

// Type-safe query functions
export async function getProjects() {
  const { projects } = await client.query({
    projects: {
      __args: {
        orderBy: 'order',
      },
      items: projectFragment,
    },
  })
  
  return projects.items
}

export async function getFeaturedProjects() {
  const { projects } = await client.query({
    projects: {
      __args: {
        orderBy: 'order',
        filter: {
          featured: {
            eq: true,
          },
        },
      },
      items: projectFragment,
    },
  })
  
  return projects.items
}

export async function getProjectBySlug(slug: string) {
  const { projects } = await client.query({
    projects: {
      __args: {
        filter: {
          _sys: {
            slug: {
              eq: slug,
            },
          },
        },
        first: 1,
      },
      items: projectFragment,
    },
  })
  
  return projects.items[0] || null
}

export async function getSkills() {
  const { skills } = await client.query({
    skills: {
      __args: {
        orderBy: 'category',
      },
      items: skillFragment,
    },
  })
  
  return skills.items
}

export async function getSiteSettings() {
  const { siteSettings } = await client.query({
    siteSettings: siteSettingsFragment,
  })
  
  return siteSettings
}

// Types derived from BaseHub
export type Project = Awaited<ReturnType<typeof getProjects>>[0]
export type Skill = Awaited<ReturnType<typeof getSkills>>[0]
export type SiteSettings = Awaited<ReturnType<typeof getSiteSettings>>