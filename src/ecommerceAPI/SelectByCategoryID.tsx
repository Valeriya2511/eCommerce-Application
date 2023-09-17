export const SelectByCategoryID = async (categoryID: string, token: string) => {
  const data = await fetch(
    `https://api.australia-southeast1.gcp.commercetools.com/ecommerce-application_1/product-projections/search?filter=categories.id:"${categoryID}"`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  const dataJson = await data.json();
  return await dataJson.results;
};
