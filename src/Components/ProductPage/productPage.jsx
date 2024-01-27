import React from "react";
import ProductCard from "./ProductCard";


const ProductsPage = () => {
  const products = [
    { id: 1, title: "Продукт 1", description: "Описание" },
    { id: 2, title: "Продукт 2", description: "Описание" },
    { id: 3, title: "Продукт 3", description: "Описание" },
  ];

  return (
    <div>
      <h2>Продукты</h2>
      <div className='pageContainer'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;