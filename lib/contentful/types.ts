import { Document } from '@contentful/rich-text-types';
import { Asset, Entry, EntrySkeletonType } from 'contentful';

// Contentful field types
export interface ContentfulAuthorFields {
  name: string;
  role?: string;
  bio?: string;
  image?: Asset;
}

export interface ContentfulCategoryFields {
  name: string;
  slug: string;
  description?: string;
}

export interface ContentfulTagFields {
  name: string;
  slug: string;
}

export interface ContentfulBlogPostFields {
  title: string;
  slug: string;
  content: Document;
  excerpt: string;
  featuredImage: Asset;
  featuredImageAlt: string;
  publishDate: string;
  updatedDate?: string;
  seoTitle?: string;
  seoDescription?: string;
  readingTime?: number;
  keyTakeaway1?: string;
  keyTakeaway2?: string;
  keyTakeaway3?: string;
  keyTakeaway4?: string;
  keyTakeaway5?: string;
  category?: Entry<EntrySkeletonType<ContentfulCategoryFields>>;
  tags?: Entry<EntrySkeletonType<ContentfulTagFields>>;
  author?: Entry<EntrySkeletonType<ContentfulAuthorFields>>;
}

// Entry skeleton types for Contentful SDK
export type ContentfulAuthorSkeleton = EntrySkeletonType<ContentfulAuthorFields, 'author'>;
export type ContentfulCategorySkeleton = EntrySkeletonType<ContentfulCategoryFields, 'category'>;
export type ContentfulTagSkeleton = EntrySkeletonType<ContentfulTagFields, 'tag'>;
export type ContentfulBlogPostSkeleton = EntrySkeletonType<ContentfulBlogPostFields, 'blogPost'>;
