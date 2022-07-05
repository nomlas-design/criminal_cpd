export const requestQuery = async query => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/${query}`)
  if (res.status !== 200) return [];
  const queryArray = await res.json();
  return queryArray;
}