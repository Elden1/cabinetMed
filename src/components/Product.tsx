import React from "react";

import config from "../config/index.json";
import Schedule from "./dailySchedule";
import Divider from "./Divider";

const Product = () => {
  const { product } = config;

  return (
    <section className={`bg-background`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6`}>
            <Schedule />
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6 round"
              src={product.imgSrc}
              alt={product.imgTitle}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
