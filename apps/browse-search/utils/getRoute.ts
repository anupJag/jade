export const getRouteParams = (pathname, query, paramsToAdd = {}) => {
  const slugArr = pathname.match(/\[\.*(.+)\]/); // our urls are of the form /s/[search-slug], /p/[product-slug]

  let asPath = '';

  let updatedQuery = { ...query, ...paramsToAdd };

  if (slugArr) {
    const slugKey = slugArr[1];
    const slugValue =
      updatedQuery[slugKey] instanceof Array
        ? updatedQuery[slugKey].join('/')
        : updatedQuery[slugKey];

    delete updatedQuery[slugKey]; // remove slugKey from query if available

    asPath = pathname.replace(/\[.*\]/, slugValue as string);

    return { asPath, updatedQuery };
  }

  return { asPath: pathname, updatedQuery };
};
