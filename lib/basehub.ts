import { basehub } from "basehub";
import {
  QueryGenqlSelection,
  SkillsGenqlSelection,
  CertificationsGenqlSelection,
  PostsItemGenqlSelection,
} from "basehub-types";

// BaseHub client with type safety
export const client = basehub({
  token: process.env.BASEHUB_TOKEN!,
});

const skillsQuery: SkillsGenqlSelection = {
  infrastructure: {
    icon: true,
    _title: true,
    list: {
      items: {
        _title: true,
      },
    },
  },
  frameworks: {
    icon: true,
    _title: true,
    list: {
      items: {
        _title: true,
      },
    },
  },
  databases: {
    icon: true,
    _title: true,
    list: {
      items: {
        _title: true,
      },
    },
  },
  programmingLanguages: {
    icon: true,
    _title: true,
    list: {
      items: {
        _title: true,
      },
    },
  },
};

const certificationsQuery: CertificationsGenqlSelection = {
  list: {
    _title: true,
    items: {
      _title: true,
      id: true,
      level: true,
      provider: true,
      icon: true,
      logo: true,
      category: true,
      issueDate: true,
      verifyUrl: true,
      certificateFile: true,
      description: true,
      color: true,
      featured: true,
    },
  },
};

export const blogPostMetaQuery: PostsItemGenqlSelection = {
  _title: true,
  _slug: true,
  _id: true,
  excerpt: true,
  publishDate: true,
  tags: {
    _title: true,
    slug: true,
  },
  authors: {
    name: true,
    profilePicture: {
      url: true,
    },
  },
};

export const homepageQueries: QueryGenqlSelection[] = [
  {
    hero: {
      headline: true,
      subHeadline: true,
      heroImage: {
        on_BlockImage: {
          url: true,
        },
      },
    },
    skills: skillsQuery,
    certifications: certificationsQuery,
    blog: {
      posts: {
        __args: {
          first: 3,
          orderBy: "_sys_createdAt__DESC", // Fallback if publishDate__DESC is not in Enum
        },
        items: blogPostMetaQuery,
      },
    },
  },
];

export const blogListQueries: QueryGenqlSelection[] = [
  {
    blog: {
      posts: {
        __args: {
          orderBy: "_sys_createdAt__DESC",
        },
        items: blogPostMetaQuery,
      },
    },
  },
];

export const getBlogPostQuery = (slug: string): QueryGenqlSelection[] => [
  {
    blog: {
      posts: {
        __args: {
          filter: {
            _slug: { eq: slug },
          },
          first: 1,
        },
        items: {
          ...blogPostMetaQuery,
          contentMarkdown: {
            code: true,
          },
        },
      },
    },
  },
];
