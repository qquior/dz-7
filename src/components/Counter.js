import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakerapi.it/api/v1/products?_quantity=1');
        setProducts(response.data.data);
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Список товаров</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>Название товара: {product.name}</h3>
          <p>Цена товара: {product.price}</p>
          <p>Описание товара: {product.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
