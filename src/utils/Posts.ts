export const sortByDate = (posts: any) => {
  return posts.sort(
    (a: any, b: any) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};
