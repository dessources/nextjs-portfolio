# Sanity.io Setup Guide for Portfolio

## **Phase 1: Sanity Studio Setup**

### 1.1 Install Sanity CLI globally
```bash
npm install -g @sanity/cli
```

### 1.2 Initialize Sanity project
```bash
sanity init
```
- Create new Sanity project or connect to existing
- Choose dataset name (e.g., "production")
- Select project template or start from scratch

### 1.3 Install additional Sanity dependencies
```bash
pnpm install sanity @sanity/vision
```

## **Phase 2: Content Schema Design**

### 2.1 Project Schema (`schemas/project.ts`)
```typescript
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'highlights',
      title: 'Key Highlights',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Full Stack', value: 'fullstack'},
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Systems', value: 'systems'},
          {title: 'Business', value: 'business'}
        ]
      }
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Production', value: 'production'},
          {title: 'In Development', value: 'development'},
          {title: 'Planned', value: 'planned'}
        ]
      }
    },
    {
      name: 'url',
      title: 'Live URL',
      type: 'url'
    },
    {
      name: 'github',
      title: 'GitHub URL',
      type: 'url'
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
}
```

### 2.2 Skill Schema (`schemas/skill.ts`)
```typescript
export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Programming Languages', value: 'languages'},
          {title: 'Frameworks & Tools', value: 'frameworks'},
          {title: 'Data & Systems', value: 'data'},
          {title: 'Infrastructure & DevOps', value: 'infrastructure'}
        ]
      }
    },
    {
      name: 'level',
      title: 'Proficiency Level (1-100)',
      type: 'number',
      validation: Rule => Rule.min(1).max(100)
    },
    {
      name: 'learning',
      title: 'Currently Learning',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name or custom icon identifier'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    }
  ]
}
```

### 2.3 Experience Schema (`schemas/experience.ts`)
```typescript
export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Position/Course Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'company',
      title: 'Company/Institution',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Work Experience', value: 'work'},
          {title: 'Education', value: 'education'},
          {title: 'Course', value: 'course'}
        ]
      }
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date'
    },
    {
      name: 'current',
      title: 'Currently Active',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}]
    }
  ]
}
```

### 2.4 Site Settings Schema (`schemas/siteSettings.ts`)
```typescript
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text'
    },
    {
      name: 'author',
      title: 'Author Information',
      type: 'object',
      fields: [
        {name: 'name', title: 'Name', type: 'string'},
        {name: 'email', title: 'Email', type: 'string'},
        {name: 'phone', title: 'Phone', type: 'string'},
        {name: 'location', title: 'Location', type: 'string'},
        {name: 'timezone', title: 'Timezone', type: 'string'}
      ]
    },
    {
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        {name: 'github', title: 'GitHub URL', type: 'url'},
        {name: 'linkedin', title: 'LinkedIn URL', type: 'url'},
        {name: 'email', title: 'Email', type: 'string'}
      ]
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {name: 'ogImage', title: 'OG Image', type: 'image'},
        {name: 'twitterHandle', title: 'Twitter Handle', type: 'string'}
      ]
    }
  ]
}
```

## **Phase 3: Sanity Configuration**

### 3.1 Create Sanity config (`sanity.config.ts`)
```typescript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: undefined, // Hide navbar for embedded studio
    },
  },
})
```

### 3.2 Environment variables (`.env.local`)
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
SANITY_API_WRITE_TOKEN=your_write_token
SANITY_REVALIDATE_SECRET=your_revalidate_secret
```

### 3.3 Sanity client configuration (`lib/sanity.ts`)
```typescript
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_READ_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const queries = {
  projects: `*[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    image,
    technologies,
    highlights,
    category,
    status,
    url,
    github,
    featured,
    order
  }`,
  
  projectBySlug: `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    image,
    technologies,
    highlights,
    category,
    status,
    url,
    github,
    featured
  }`,

  skills: `*[_type == "skill"] | order(category asc, order asc) {
    _id,
    name,
    category,
    level,
    learning,
    icon,
    order
  }`,

  siteSettings: `*[_type == "siteSettings"][0] {
    title,
    description,
    author,
    social,
    seo
  }`
}
```

### 3.4 TypeScript types (`types/sanity.ts`)
```typescript
export interface Project {
  _id: string
  title: string
  slug: { current: string }
  description: string
  image?: any
  technologies: string[]
  highlights: string[]
  category: 'fullstack' | 'frontend' | 'backend' | 'systems' | 'business'
  status: 'production' | 'development' | 'planned'
  url?: string
  github?: string
  featured: boolean
  order: number
}

export interface Skill {
  _id: string
  name: string
  category: 'languages' | 'frameworks' | 'data' | 'infrastructure'
  level: number
  learning: boolean
  icon?: string
  order: number
}

export interface SiteSettings {
  title: string
  description: string
  author: {
    name: string
    email: string
    phone: string
    location: string
    timezone: string
  }
  social: {
    github: string
    linkedin: string
    email: string
  }
  seo: {
    ogImage?: any
    twitterHandle?: string
  }
}
```

## **Phase 4: Studio Customization**

### 4.1 Schema index (`schemas/index.ts`)
```typescript
import project from './project'
import skill from './skill'
import experience from './experience'
import siteSettings from './siteSettings'

export const schemaTypes = [project, skill, experience, siteSettings]
```

### 4.2 Studio structure (`schemas/structure.ts`)
```typescript
import type {StructureResolver} from 'sanity/desk'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      S.listItem()
        .title('Projects')
        .child(
          S.documentTypeList('project')
            .title('Projects')
        ),
      S.listItem()
        .title('Skills')
        .child(
          S.documentTypeList('skill')
            .title('Skills')
        ),
      S.listItem()
        .title('Experience')
        .child(
          S.documentTypeList('experience')
            .title('Experience')
        ),
    ])
```

## **Phase 5: Next.js Integration**

### 5.1 Data fetching utilities (`lib/sanity-queries.ts`)
```typescript
import { client, queries } from './sanity'
import type { Project, Skill, SiteSettings } from '@/types/sanity'

export async function getProjects(): Promise<Project[]> {
  return await client.fetch(queries.projects)
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return await client.fetch(`${queries.projects}[featured == true]`)
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  return await client.fetch(queries.projectBySlug, { slug })
}

export async function getSkills(): Promise<Skill[]> {
  return await client.fetch(queries.skills)
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return await client.fetch(queries.siteSettings)
}

// Revalidation
export async function revalidateProject(slug: string) {
  const revalidateUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?secret=${process.env.SANITY_REVALIDATE_SECRET}&slug=${slug}`
  await fetch(revalidateUrl, { method: 'POST' })
}
```

### 5.2 API route for revalidation (`app/api/revalidate/route.ts`)
```typescript
import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const path = request.nextUrl.searchParams.get('path')
  const tag = request.nextUrl.searchParams.get('tag')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    if (path) {
      revalidatePath(path)
    }
    if (tag) {
      revalidateTag(tag)
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
```

## **Phase 6: Component Updates**

### 6.1 Update Projects Section
```typescript
// Update components/projects-section.tsx
import { getProjects } from '@/lib/sanity-queries'
import { urlFor } from '@/lib/sanity'

export async function ProjectsSection() {
  const projects = await getProjects()

  return (
    <section className="py-24">
      {/* ... */}
      {projects.map((project) => (
        <Card key={project._id}>
          {project.image && (
            <Image
              src={urlFor(project.image).width(600).height(300).url()}
              alt={project.title}
              width={600}
              height={300}
            />
          )}
          {/* ... rest of component */}
        </Card>
      ))}
    </section>
  )
}
```

## **Phase 7: Scripts and Migration**

### 7.1 Content migration script (`scripts/migrate-to-sanity.ts`)
```typescript
import { client } from '../lib/sanity'
import { PROJECTS_DATA, SKILLS_DATA } from '../lib/constants'

async function migrateProjects() {
  for (const project of PROJECTS_DATA) {
    await client.create({
      _type: 'project',
      title: project.title,
      slug: { current: project.id },
      description: project.description,
      technologies: project.technologies,
      category: project.category,
      url: project.url,
      github: project.githubUrl,
      featured: project.featured,
    })
  }
}

async function migrateSkills() {
  for (const skill of SKILLS_DATA) {
    await client.create({
      _type: 'skill',
      name: skill.name,
      category: skill.category,
      level: skill.level * 20, // Convert 1-5 to 1-100
      icon: skill.icon,
    })
  }
}

// Run migration
migrateProjects().then(() => console.log('Projects migrated'))
migrateSkills().then(() => console.log('Skills migrated'))
```

## **Implementation Timeline**

### **Day 1: Basic Setup (2-3 hours)**
- [ ] Install Sanity CLI and dependencies
- [ ] Initialize Sanity project
- [ ] Create basic schemas
- [ ] Set up environment variables

### **Day 2: Schema Design (1-2 hours)**
- [ ] Finalize content schemas
- [ ] Create schema relationships
- [ ] Set up validation rules
- [ ] Configure Studio structure

### **Day 3: Integration (3-4 hours)**
- [ ] Set up Sanity client
- [ ] Create data fetching utilities
- [ ] Update components to use Sanity data
- [ ] Implement image optimization

### **Day 4: Content Migration (1-2 hours)**
- [ ] Create migration scripts
- [ ] Move static data to Sanity
- [ ] Test data fetching
- [ ] Verify component functionality

### **Day 5: Advanced Features (2-3 hours)**
- [ ] Set up webhooks and revalidation
- [ ] Implement live preview
- [ ] Add search functionality
- [ ] Configure production deployment

## **Benefits After Implementation**

✅ **Real-time content management** - Update portfolio without code changes  
✅ **Image optimization** - Automatic image processing and CDN delivery  
✅ **Type safety** - Fully typed data structures  
✅ **Performance** - ISR with automatic revalidation  
✅ **Collaboration** - Multiple people can manage content  
✅ **Version control** - Track content changes over time  
✅ **Rich content** - Support for structured text and media  
✅ **Scalability** - Easy to add new content types

## **Next Steps When Ready**

1. **Start with Phase 1** - Basic Sanity setup
2. **Design your schemas** - Based on your current data structure
3. **Set up the development workflow** - Local studio + Next.js integration
4. **Migrate content gradually** - Start with projects, then skills
5. **Deploy and configure production** - Sanity Studio + webhook integration

This guide will serve as your complete reference when you're ready to transform your static portfolio into a dynamic, content-managed site!