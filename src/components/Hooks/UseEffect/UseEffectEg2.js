import React, { useEffect, useState } from "react";

export default function UseEffectEg2() {
  const [productList, setProductList] = useState([]);

  async function fetchAllProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (result && result.products) setProductList(result.products);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <h1>UseEffect Eg 2</h1>

      <ul>
        {productList.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
