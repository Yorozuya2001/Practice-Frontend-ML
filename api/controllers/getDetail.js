const getDetail = async (id) => {
  const result = await getData(`https://api.mercadolibre.com/items/${id}
`);
  const description = await getData(
    `https://api.mercadolibre.com/items/${id}/description`
  );

  let info = {
    condition: result.condition,
    id: result.id,
    title: result.title,
    price: {
      currency: result.currency_id,
      amount: result.price,
    },
    state: result.seller_address.state.name,
    city: result.seller_address.city.name,
    picture: result.pictures[0].secure_url,
    free_shipping: result.shipping.free_shipping,
    description: description.plain_text,
  };

  return info;
};

const getData = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  return data;
};

module.exports = getDetail;
