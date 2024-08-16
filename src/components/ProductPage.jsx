import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const [products, setproduts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");
  useEffect(() => {
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
        const url = await fetch(`http://localhost:9000/api/products?${queryParams}`);
        
        const data = await url.json();
        console.log(data);
        setproduts(data);
      } catch (error) {
        console.log("failed to fetch product:", error);
      }
    };
    fetchProduct();
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
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  
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
  return (
    <div>
        <div className="flex justify-center">
      <input
        type="text"
        className="p-2 w-60 border border-gray-300 rounded mr-2"
        placeholder="search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <input
        type="text"
        className="p-2 w-60 border border-gray-300 rounded mr-2"
        placeholder="search price"
        value={price}
        onChange={handlePrice}
      />
      <select
        className="p-2 w-60 border border-gray-300 rounded mr-2"
        value={category}
        onChange={handleCategory}
      >
         <option value="">Category</option>
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
      <select
        className="p-2 w-60 border border-gray-300 rounded mr-2"
        value={brand}
        onChange={handleOrder}
      >
         <option value="">Brand Name</option>
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
      <div className="flex border">
        <input
          type="number"
          className="p-2 w-20 h-3/4 border border-gray-300 rounded ml-2"
          placeholder="min price"
          value={priceRange[0]}
          onChange={(e) => handlePriceRange(e, "min")}
        />
        <div>
          <p>To</p>
        </div>
        <input
          type="text"
          className="p-2 w-20 h-3/4 border border-gray-300 rounded ml-2"
          placeholder="min price"
          value={priceRange[1]}
          onChange={(e) => handlePriceRange(e, "max")}
        />
        <select
          className="p-2 bordder border-gray-300 rounded mx-2"
          value={sort}
          onChange={handleSort}
        >
          <option value=""></option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    </div >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
    {
        products.map(data => <>
    
        <ProductCard key={data._id} products={products}></ProductCard>
    
        </>)
    }
    </div>
    </div>
  );
};

export default ProductPage;
