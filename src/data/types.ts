export interface FAQ {
  question: string;
  answer: string;
}

export interface ContentPage {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  paragraphs: string[];
  faqs: FAQ[];
  relatedLinks?: { href: string; label: string }[];
}

export interface GuidePage extends ContentPage {
  aboutServiceId?: string;
  sections: { heading: string; content: string }[];
  datePublished: string;
  dateModified: string;
  /** Optional featured image path under /public */
  image?: string;
  imageAlt?: string;
}
