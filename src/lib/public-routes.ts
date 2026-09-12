import { services, industries, development, cases, notes } from "./site-data";
// Detail identifiers share the navigation source; the inventory gate compares all loaders.
// Avoid importing every article body and service detail into the root browser bundle.
export const publicRoutes = [
  "/", "/about", "/contact", "/command-centre", "/seo-services", "/industries", "/development", "/cases", "/blog",
  ...services.map(item => `/seo-services/${item.slug}`),
  ...industries.map(item => `/industries/${item.slug}`),
  ...development.map(item => `/development/${item.slug}`),
  ...cases.map(item => `/cases/${item.slug}`),
  ...notes.map(item => `/blog/${item.slug}`),
];
