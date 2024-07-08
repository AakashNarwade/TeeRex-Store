/* eslint-disable react-hooks/exhaustive-deps */
import { FaSearch } from "react-icons/fa";
import Filter from "../components/Filter";
import { FaFilter } from "react-icons/fa";
import {
  getAllProducts,
  handleColorChange,
  handleFilterByPrice,
  handleFilterByType,
  handleFilterGender,
} from "../utils/helper";
import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import ResponsiveFilter from "../components/ResponsiveFilter";
function Products() {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useState("");
  const [showResponsiveFilter, setShowResponsiveFilter] = useState(false);

  //filter by color
  const filterByColorHandler = (e) => {
    const res = handleColorChange(e);
    setProductList(res);
  };

  //Filter by Gender
  const filterByGenderHandler = (e) => {
    const res = handleFilterGender(e);
    setProductList(res);
  };

  //Filter by Price
  const filterByPriceHandler = (e) => {
    const res = handleFilterByPrice(e);
    setProductList(res);
  };

  //Filter by Type
  const filterByTypeHandler = (e) => {
    const res = handleFilterByType(e);
    setProductList(res);
  };

  //on search
  const searchHandler = (e) => {
    e.preventDefault();
    let queryString = query.split(" ");

    if (queryString.length > 1) {
      let newQuery = queryString
        .map((q) => q[0].charAt(0).toUpperCase() + q.slice(1))
        .join(" ");
      const m = productList.filter((p) => p.name === newQuery);
      setProductList(m);
    } else {
      let singleQueryString = query.charAt(0).toUpperCase() + query.slice(1);
      const n = productList.filter(
        (p) =>
          p.color === singleQueryString ||
          p.name === singleQueryString ||
          p.type === singleQueryString
      );
      setProductList(n);
    }
  };

  useEffect(() => {
    getAllProducts().then((res) => {
      setProductList(res);
    });
  }, []);
  return (
    <div>
      <form onSubmit={searchHandler}>
        <div className="">
          <div className="flex justify-center items-center">
            <input
              className="p-3 my-2 w-1/4 border-b border-black focus:outline-none"
              type="text"
              placeholder="Search ..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="bg-slate-100" type="submit">
              <FaSearch size={20} />
            </button>
            <div className="ml-4 block md:hidden lg:hidden">
              <FaFilter
                onClick={() => {
                  setShowResponsiveFilter((prev) => !prev); // Toggle showResponsiveFilter state
                }}
              />
            </div>
          </div>
          {showResponsiveFilter && (
            <div className="flex  md:hidden flex-row-reverse mr-4  ml-10  ">
              <div className="bg-slate-100 w-[30%]">
                <ResponsiveFilter
                  handleColorChange={filterByColorHandler}
                  handleFilterGender={filterByGenderHandler}
                  handleFilterByPrice={filterByPriceHandler}
                  handleFilterByType={filterByTypeHandler}
                />
              </div>
            </div>
          )}
        </div>
      </form>
      <div className="grid  md:gap-5 grid-cols-6 h-full ">
        <div className="hidden md:col-span-1 md:block p-3 h-full md:border-r-4 shadow-lg  ">
          <Filter
            handleColorChange={filterByColorHandler}
            handleFilterGender={filterByGenderHandler}
            handleFilterByPrice={filterByPriceHandler}
            handleFilterByType={filterByTypeHandler}
          />
        </div>
        <div className="col-span-5 p-3 h-full border-r border-black">
          <div className="grid grid-cols-3 gap-5 ">
            {productList?.length > 0 ? (
              productList.map((el) => <ProductItem key={el.id} el={el} />)
            ) : (
              <h2 className="text-3xl font-bold text-center ">
                No Matches Found
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
