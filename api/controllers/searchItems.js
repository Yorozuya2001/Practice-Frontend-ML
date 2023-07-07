const searchItems = async (query) => {
  let response =
    await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}
`);
  let data = await response.json();
  let info = {
    query: data.query,
    results: cutResults(data.results, 5),
    values: data.filters.length ? data.filters : null,
  };
  console.log(info);
  return info;
};

const cutResults = (results, num) => {
  if (!results.length) return null;

  results = results.splice(0, num);
  results = results.map((result) => {
    return {
      title: result.title,
      link: result.permalink,
      price: result.price,
      state: result.address.state_name,
      city: result.address.city_name,
      freeShipping: result.shipping.free_shipping,
    };
  });
  return results;
};

module.exports = searchItems;
