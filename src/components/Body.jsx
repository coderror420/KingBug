import RestaurantCard, { withpromotedlabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./shimmer";
import useonlinestatus from "../utils/useonlinestatus";
import { Link } from "react-router-dom";
// import UserContext from "../utils/userContext";

const Body = () => {
  //Local state variable - super powerful variable
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  const RestaurantCardPromoted = withpromotedlabel(RestaurantCard);
  console.log(listOfRestaurants);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6294119&lng=77.2846924&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();

    //optional chaining
    setListofRestaurants(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  //whenever state variable changes, react triggers a reconciliation cycle( re-renders the component)

  const onlinestatus = useonlinestatus();
  if (onlinestatus === false) {
    return (
      <h1>
        Looks like you're Offline! Please check your internet connection or try
        again later
      </h1>
    );
  }

  // const { loggedInUser,setUserName } = useContext(UserContext);
  return FilteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-0 m-0 box-border">
      <div className="flex items-center">
        <div className="m-1 p-1">
          <input
            type="text"
            className="border border-solid-black p-1"
            placeholder="Search your tongue"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
              const filteredrestaurants = listOfRestaurants.filter(
                (res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  res.info.cuisines
                    .join(", ")
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredrestaurants);
            }}
          />
          <button
            className="px-2 py-1 h-8 rounded-xs bg-orange-400 m-2 text-white hover:bg-orange-500"
            onClick={() => {
              const filteredrestaurants = listOfRestaurants.filter(
                (res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  res.info.cuisines
                    .join(", ")
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setListofRestaurants(filteredrestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-2 py-1 h-8 rounded-xs bg-green-600 m-2 text-white hover:bg-green-700 "
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4;
            });
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated ⭐
        </button>
        <div>
          {/* <input
            type="text"
            className="border border-solid-black p-1 w-60"
            placeholder="Umm something is cooking 👀"
            value={loggedInUser}  
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          /> */}
        </div>
      </div>
      <div className="flex flex-wrap m-0">
        {/* if the restaurant is promoted then add a promoted label to it */}
        {FilteredRestaurants.map((Restaurant) => (
          <Link
            key={Restaurant.info.id}
            to={"restaurant/" + Restaurant.info.id}
          >
            {Restaurant.info.avgRating > 4.3 ? (
              <RestaurantCardPromoted resData={Restaurant} />
            ) : (
              <RestaurantCard resData={Restaurant} />
            )}
          </Link>
        ))}
        {FilteredRestaurants.map((Restaurant) => (
          <Link
            key={Restaurant.info.id}
            to={"restaurant/" + Restaurant.info.id}
          >
            {Restaurant.info.avgRating > 4.3 ? (
              <RestaurantCardPromoted resData={Restaurant} />
            ) : (
              <RestaurantCard resData={Restaurant} />
            )}
          </Link>
        ))}
        {FilteredRestaurants.map((Restaurant) => (
          <Link
            key={Restaurant.info.id}
            to={"restaurant/" + Restaurant.info.id}
          >
            {Restaurant.info.avgRating > 4.3 ? (
              <RestaurantCardPromoted resData={Restaurant} />
            ) : (
              <RestaurantCard resData={Restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
