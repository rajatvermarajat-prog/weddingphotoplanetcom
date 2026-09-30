import { internalBlogDb } from "./internal/clients";
import { createReadOnlyDelegate } from "./read-only-delegate";

export const blogReadDb = Object.freeze({
  blogCategory: createReadOnlyDelegate(internalBlogDb.blogCategory),
  blogComment: createReadOnlyDelegate(internalBlogDb.blogComment),
  blogMedia: createReadOnlyDelegate(internalBlogDb.blogMedia),
  blogPost: createReadOnlyDelegate(internalBlogDb.blogPost),
  blogPostCategory: createReadOnlyDelegate(internalBlogDb.blogPostCategory),
  blogPostTag: createReadOnlyDelegate(internalBlogDb.blogPostTag),
  blogSetting: createReadOnlyDelegate(internalBlogDb.blogSetting),
  blogTag: createReadOnlyDelegate(internalBlogDb.blogTag),
  blogUser: createReadOnlyDelegate(internalBlogDb.blogUser),
});
