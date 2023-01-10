import React from "react";
import axios from "axios";
import Link from "next/link";

const Products = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Shop
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.map((product) => {
              const color = `bg-${product.attributes.color}-800`;
              return (
                <Link
                  href={`/product/${product.attributes.slug}`}
                  key={product.id}
                  className="xl:w-1/4 md:w-1/2 p-4"
                >
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={`//localhost:1337${
                        product.attributes.image.data &&
                        product.attributes.image.data.attributes.formats.small
                          .url
                      }`}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {product.attributes.title}
                    </h3>
                    <div className="hidden bg-red-700 bg-green-700 bg-yellow-700 bg-blue-700"></div>
                    <button
                      class={`border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none  ${color}`}
                    ></button>

                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {product.attributes.categories}
                    </h2>
                    <div className="leading-relaxed text-base min-h-[2rem]">
                      {product.attributes.description}
                    </div>
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Buy Now!
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    "http://localhost:1337/api/products?populate=*",
    {
      headers: {
        Authorization:
          "Bearer 505d4be965f1849c8f21ca08716e1229c24f198523cf860d3493bb9a8f031273f00279842fc3360427b98c88587b6610dfccc012f03c72f164b0e57eea68f111dccd86ff0941790fcb0a485125615dc97d902ef49e031df2d5fa2337e7b40c8195685952f81de78e1e69a28519e280e346f4980f4ddc10211dd7fc7ceb971731",
      },
    }
  );
  const products = data.data;
  return {
    props: { products },
  };
}
