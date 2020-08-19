// simulation of window.fetch
async function fetch(url) {
  let temp = 4;
  if (!url || !url.length) return Promise.reject(new Error(`Invalid URL ${url}.`));
  if (/7836/.test(url)) temp = 42.12;
  if (/783e/.test(url)) temp = 42.1;
  if (/7833/.test(url)) temp = 42;
  return {
    json: () => ({ temp }),
  };
}

async function getTemperature(urls) {
  try {
    const res = await fetch(urls[0]);
    const json = await res.json();
    return json.temp;
  } catch (error) {
    return Promise.reject(error);
  }
  // return new Promise((resolve, reject) => {
  //   fetch(urls[0])
  //     .then((res) => res.json())
  //     .then((json) => resolve(json.temp))
  //     .catch(reject);
  // });
}

module.exports = getTemperature;
