const searchItems = async (query) => {
  let response =
    await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}
`);
  let data = await response.json();
  let info = {
    query: data.query,
    results: cutResults(data.results, 4),
    categories: data.filters.length ? data.filters : null,
  };

  return info;
};

const cutResults = (results, num) => {
  if (!results.length) return null;

  results = results.splice(0, num);
  results = results.map((result) => {
    return {
      author: {
        name: result.seller.nickname,
      },
      condition: result.condition,
      id: result.id,
      title: result.title,
      price: {
        currency: result.currency_id,
        amount: result.price,
      },
      state: result.address.state_name,
      city: result.address.city_name,
      picture: result.thumbnail,
      free_shipping: result.shipping.free_shipping,
    };
  });
  return results;
};

module.exports = searchItems;
