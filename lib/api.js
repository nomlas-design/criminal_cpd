export default function useFetch(baseUrl) {

  function get(url) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url)
        .then(response => response.json())
        .then(data => {
          if (!data) {
            return reject(data);
          }
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  return { get };
}