import React from "react";

/// https://dummyjson.com/products?limit=100

const Product = ({ product }) => {
  const { id, title, description } = product;
  const [mount, setMount] = React.useState(false);

  React.useLayoutEffect(() => {
    console.log("mount");

    setTimeout(() => setMount(true), 50);
  }, [product]);

  return (
    <div
      className={`mx-4 my-8 transition-all duration-300 ${
        mount ? "opacity-100" : "opacity-0"
      } `}
    >
      <div className="flex gap-4 font-extrabold">
        <span>{id}</span>
        <h1>{title}</h1>
      </div>
      <p> - {description}</p>
    </div>
  );
};

const Products = () => {
  const DATA_LIMIT = 10;
  const [productsData, setProductsData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetch(
        "https://dummyjson.com/products?limit=100"
      ).then((products) => products.json());
      setProductsData(products.products);
    };
    fetchProducts();
  }, []);

  const startingIndex = DATA_LIMIT * currentPage - DATA_LIMIT;
  const lastIndex = startingIndex + DATA_LIMIT;
  const data = productsData.slice(startingIndex, lastIndex);

  return (
    <>
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <div className="flex gap-4 items-center justify-center my-8">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={startingIndex === 0}
          className={`px-2 py-1 bg-slate-100 text-black font-semibold border hover:bg-slate-200 hover:border-slate-200 rounded-md transition-colors duration-300 ${
            startingIndex === 0 ? "opacity-50" : ""
          }`}
        >
          Previous
        </button>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              key={page}
              className={`px-2 py-1 bg-slate-100 text-black font-semibold border hover:bg-slate-200 hover:border-slate-200 rounded-md transition-all duration-300 ${
                page === currentPage ? "opacity-100" : "opacity-50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={lastIndex === productsData.length}
          className={`px-2 py-1 bg-slate-100 text-black font-semibold border hover:bg-slate-200 hover:border-slate-200 rounded-md transition-colors duration-300 ${
            lastIndex === productsData.length ? "opacity-50" : ""
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Products;
