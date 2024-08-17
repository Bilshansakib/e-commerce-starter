import { useEffect, useRef, useState } from "react";
import ProductCard from "../../components/shared/ProductCard";
import ReactPaginate from "react-paginate";
import "../../components/shared/pagination.css";
import { Helmet } from "react-helmet-async";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState([0, 9999]);
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");
  // pagination state
  const [limit, setlimit] = useState(8);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

  useEffect(() => {
    currentPage.current = 1;
    const fetchProduct = async () => {
      try {
        const queryParams = new URLSearchParams();

        if (searchTerm) queryParams.append("search", searchTerm);
        if (category) queryParams.append("category", category);
        if (brand) queryParams.append("brand", brand);
        if (priceRange[0] !== 0) queryParams.append("minPrice", priceRange[0]);
        if (priceRange[1] !== 1000)
          queryParams.append("maxPrice", priceRange[1]);
        if (price) queryParams.append("price", price);
        if (sort) queryParams.append("sort", sort);
        const url = await fetch(
          `https://e-commerce-stater-server.vercel.app/api/products?${queryParams}`
          // `https://e-commerce-stater-server.vercel.app/PaginatedProducts?${queryParams}?page=${currentPage}&limit=${limit}`
        );

        const data = await url.json();
        console.log(data);
        currentPage.current = 1;

        // getPaginationProducts(data)
        setProducts(data);
      } catch (error) {
        console.log("failed to fetch product:", error);
      }
    };
    fetchProduct();
    // getPaginationProducts()
  }, [searchTerm, category, brand, priceRange, price, sort]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleOrder = (e) => {
    setBrand(e.target.value);
  };
  // const handlePrice = (e) => {
  //   setPrice(e.target.value);
  // };
  // Price range functionality
  const handlePriceRange = (e, type) => {
    const newPrice = [...priceRange];
    if (type === "min") {
      newPrice[0] = e.target.value;
    } else {
      newPrice[1] = e.target.value;
    }
    setPriceRange(newPrice);
  };
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  // pagination
  async function handlePageClick(e) {
    console.log(e);
    currentPage.current = e.selected + 1;
    getPaginationProducts();
  }
  function changeLimit() {
    currentPage.current = 1;
    getPaginationProducts();
  }
  async function getPaginationProducts() {
    const url = await fetch(
      `https://e-commerce-stater-server.vercel.app/PaginatedProducts?page=${currentPage.current}&limit=${limit}`,
      {
        method: "GET",
      }
    );

    const data = await url.json();
    console.log(data, "product data");
    setPageCount(data.pageCount);
    setProducts(data.result);
    console.log(data.result);
  }

  return (
    <div>
      <Helmet>
        <title>Product Hub | Home</title>
      </Helmet>
      <h1 className="flex text-center items-center justify-center animate-bounce pt-4">This website is under construction......</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center pt-2 pb-4 ">
        <input
          type="text"
          className=" my-2 p-2 border animate-pulse border-gray-300 rounded mr-2 "
          placeholder="search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {/* <input
          type="text"
          className="p-2 w-60 border border-gray-300 rounded mr-2"
          placeholder="search price"
          value={price}
          onChange={handlePrice}
        /> */}
        <div className="flex justify-center items-center my-2">
          <select
            className="p-2 w-60 border border-gray-300 rounded mr-2 justify-center text-center"
            value={category}
            onChange={handleCategory}
          >
            <option value="">Category ...</option>
            <option value="Electronics">Electronics</option>
            <option value="Computers">Computers</option>
            <option value="Accessories">Accessories</option>
            <option value="Audio">Audio</option>
            <option value="Photography">Photography</option>
            <option value="Wearables">Wearables</option>
            <option value="Gaming">Gaming</option>
            <option value="Tablets">Tablets</option>
            <option value="Smart Home">Smart Home</option>
            <option value="Health">Health</option>
            <option value="Home Appliances">Home Appliances</option>
          </select>
        </div>
        <div className="flex justify-center items-center my-2">
          <select
            className="p-2 w-60 border border-gray-300 rounded mr-2 "
            value={brand}
            onChange={handleOrder}
          >
            <option value="">Brand Name ...</option>
            <option value="SoundWave">SoundWave</option>
            <option value="VisionX">VisionX</option>
            <option value="GamerPro">GamerPro</option>
            <option value="FlexFit">FlexFit</option>
            <option value="HydroFlow">HydroFlow</option>
            <option value="FitPulse">FitPulse</option>
            <option value="KitchenPro">KitchenPro</option>
            <option value="ChargeIt">ChargeIt</option>
            <option value="SnapShot">SnapShot</option>
            <option value="TechGuru">TechGuru</option>
            <option value="CleanHome">CleanHome</option>
            <option value="UrbanStyle">UrbanStyle</option>
            <option value="BrewMaster">BrewMaster</option>
          </select>
        </div>
        <div className="flex justify-center items-center">
          <input
            type="number"
            className="p-2 w-20 h-3/4 border border-gray-300 rounded ml-2"
            placeholder="min price"
            value={priceRange[0]}
            onChange={(e) => handlePriceRange(e, "min")}
          />

          <p className="ml-2">To</p>

          <input
            type="text"
            className="p-2 w-20 h-3/4 border border-gray-300 rounded ml-2"
            placeholder="min price"
            value={priceRange[1]}
            onChange={(e) => handlePriceRange(e, "max")}
          />
          <select
            className="p-2 bordder border-gray-300 rounded mx-2 border"
            value={sort}
            onChange={handleSort}
          >
            <option value="">Price Order</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className=" lg:flex w-full  gap-2 my-2">
        <div className="w-full">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName="pagination  gap-4 justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          forcePage={currentPage.current - 1}
        />
        </div>

        <div className="flex items-center">
          <input
            className="p-2 my-2 border animate-pulse border-gray-300 rounded mr-2"
            type="text"
            onChange={(e) => setlimit(e.target.value)}
            placeholder="Please set limit to check"
          />
          <button type="submit" className="btn" onClick={changeLimit}>
            Set Limit
          </button>
        </div>
      </div>
      <div className="border-2 flex justify-center items-center p-4">
        <ProductCard products={products}></ProductCard>
      </div>
    </div>
  );
};

export default ProductPage;
