let data;
// getting all the products
export const getAllProducts = async () => {
  try {
    const res = await fetch(
      `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
    );
    data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

//filter handler color change
export const handleColorChange = (e) => {
  const { checked, value } = e.target;

  if (checked) {
    const match = data.filter((el) => el.color === value);
    return match;
    // setProductList(match);
  } else {
    // setProductList(filterData);
    return data;
  }
};

//filter by gender
export const handleFilterGender = (e) => {
  const { checked, value } = e.target;

  if (checked) {
    const match = data.filter((el) => el.gender === value);
    return match;
  } else {
    // setProductList(filterData);
    return data;
  }
};

//filter by price
export const handleFilterByPrice = (e) => {
  const { checked, value } = e.target;
  if (checked) {
    let prices = value.trim().split("-");
    if (prices.length > 1) {
      let match = data.filter(
        (el) => el.price >= prices[0] && el.price <= prices[1]
      );
      // setProductList(match);
      return match;
    } else {
      let match = data.filter((el) => el.price >= 401);
      return match;
    }
  } else {
    return data;
  }
};

//filter by type
export const handleFilterByType = (e) => {
  const { checked, value } = e.target;
  if (checked) {
    let match = data.filter((el) => el.type === value);
    return match;
  } else {
    return data;
  }
};
