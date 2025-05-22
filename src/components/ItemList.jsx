import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartitems = useSelector((store) => store.cart.items);

  const getItemCount = (id) => {
    const found = cartitems.find((i) => i.card.info.id === id);
    return found ? found.count : 0;
  };
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className=" flex-col justify-between py-4">
      {items.map((item) => (
        <div className="" key={item.card.info.id}>
          <div className="flex flex-row justify-between w-full bg-white px-5 py-4  text-left">
            <div className="flex-col w-3/4">
              <span className=" ">{item.card.info.name} </span>
              <br />
              <span>
                {" "}
                Rs.
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>

              <p className="text-xs text-gray-500 text-justify">
                {item.card.info.description}
              </p>
            </div>

            <div className="w-1/5 relative ">
              {getItemCount(item.card.info.id) === 0 ? (
                <button
                  className="absolute w-15 text-center font-bold  bg-white rounded
                         text-green-600   border-1  border-green-600 my-20 mx-8 z-10"
                  onClick={() => handleAddItem(item)}
                >
                  ADD +
                </button>
              ) : (
                <div className="absolute flex items-center bg-white rounded border border-green-600 my-20 mx-3 z-10">
                  <button
                    className="px-3 py-1 font-bold text-green-600"
                    onClick={() => handleRemoveItem(item.card.info.id)}
                  >
                    −
                  </button>
                  <span className="px-3 font-bold text-green-600">
                    {getItemCount(item.card.info.id)}
                  </span>
                  <button
                    className="px-3 py-1 font-bold text-green-600"
                    onClick={() => handleAddItem(item)}
                  >
                    +
                  </button>
                </div>
              )}

              <img
                className="rounded-md w-full min-w-[100px] max-h-[100px]"
                src={CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
          <hr class="border-t-1 border-gray-300 my-4 mx-4" />
        </div>
      ))}
    </div>
  );
};
export default ItemList;
// {item.card.info.isVeg===1?"🟩":"🔴"}
