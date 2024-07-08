/* eslint-disable react/prop-types */
function ResponsiveFilter({
  handleColorChange,
  handleFilterGender,
  handleFilterByPrice,
  handleFilterByType,
}) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 ">
        <div className="cursor-pointer">
          <h3 className="text-l font-bold">Colour</h3>
          <input
            type="checkbox"
            name="color"
            value="Red"
            onChange={handleColorChange}
          />{" "}
          <span>Red</span>
          <br />
          <input
            type="checkbox"
            name="color"
            value="Blue"
            onChange={handleColorChange}
          />{" "}
          <span>Blue</span>
          <br />
          <input
            type="checkbox"
            name="color"
            value="Green"
            onChange={handleColorChange}
          />{" "}
          <span>Green</span>
        </div>
        <div className="cursor-pointer">
          <h3 className="text-l font-bold">Gender</h3>
          <input
            type="checkbox"
            value="Men"
            onChange={handleFilterGender}
          />{" "}
          <span>Men</span>
          <br />
          <input
            type="checkbox"
            onChange={handleFilterGender}
            value="Women"
          />{" "}
          <span>Women</span>
        </div>
        <div className="cursor-pointer">
          <h3 className="text-l font-bold">Price</h3>
          <input
            type="checkbox"
            value="0-250"
            onChange={handleFilterByPrice}
          />{" "}
          <span>0 - Rs250</span>
          <br />
          <input
            type="checkbox"
            value="251-400"
            onChange={handleFilterByPrice}
          />{" "}
          <span>Rs251 - Rs400</span>
          <br />
          <input
            type="checkbox"
            value="450"
            onChange={handleFilterByPrice}
          />{" "}
          <span>Rs450</span>
        </div>
        <div className="cursor-pointer">
          <h3 className="text-l font-bold">Type</h3>
          <input
            type="checkbox"
            value="Polo"
            onChange={handleFilterByType}
          />{" "}
          <span>Polo</span>
          <br />
          <input
            type="checkbox"
            value="Hoodie"
            onChange={handleFilterByType}
          />{" "}
          <span>Hoodie</span>
          <br />
          <input
            type="checkbox"
            value="Basic"
            onChange={handleFilterByType}
          />{" "}
          <span>Basic</span>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveFilter;
