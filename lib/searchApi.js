import _ from 'lodash';

export const requestSearch = _.memoize(async term => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/documents?populate=*&filters[$or][0][title][$containsi]=${term}&filters[$or][1][author][$contains]=${term}`)
  if (res.status !== 200) return [];
  const documentsArray = await res.json();
  return documentsArray;
})