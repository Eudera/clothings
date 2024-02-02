import Cart from "./cart";

const Search = ({ searchterm }) => {
  const handleSearchValue = (e) => {
    const value = e.target.value;
    console.log(value);
  };
  return (
    <div className="flex  mt-[10px] items-center  gap-2">
      <div className="w-[90%] relative">
        <input
          className="jjj"
          type="search "
          placeholder="Search product here"
          onChange={handleSearchValue}
        />
        <i className="fa-solid fa-magnifying-glass iconss"></i>
      </div>

      <Cart />
    </div>
  );
};

export default Search;
