export interface Project {
  title: string
  description: string
  screenshot: string
  banner: string
  technologies: Technology[]
  disableBlog?: boolean
}

export enum Technology {
  Docker,
  GoogleCloudPlatform,
  Gulp,
  Netlify,
  NodeJS,
  Nunjucks,
  PHP,
  ReactJS,
  SASS,
  Shopify,
  Twig,
  TypeScript,
  VueJS,
  Webpack,
  Wordpress,
}
