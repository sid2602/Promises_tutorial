export const getData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => data.json())
      .then((json) => resolve(json))
      .catch((err) => reject(err));
  });
};
