import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cate } from "./cate";
import jsonData from "./product.json";

const CategoryPage = () => {
  const { id } = useParams();
  const [categoryItem, setCategoryItem] = useState([]);

  useEffect(() => {
    const checkItem = cate.filter((item) => item.id === id);

    setCategoryItem(checkItem);
  }, [id]);

  if (categoryItem.length === 0) {
    return <div>No product found</div>;
  }

  return (
    <div>
      {categoryItem.map((item) => {
        const mathingId = jsonData.filter((product) => product.id === id);
        return (
          <div key={item.id}>
            {mathingId && (
              <>
                <p>{mathingId.desc}</p>
                <p>{mathingId.number}</p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPage;
