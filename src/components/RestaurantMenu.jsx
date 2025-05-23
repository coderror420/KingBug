import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { API_DATA } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./Restaurantcategory";

const RestaurantMenu = () => {
    
    const {resId} = useParams();
    const resInfo= useRestaurantMenu(resId);
    const [showindex,setshowindex]=useState(null);
    if(resInfo===null){
        return <Shimmer />;
    }

    const {name,cuisines,cloudinaryImageId,costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info;
    
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
  (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
) || [];

  console.log(categories);
    return (
        <div className="text-center">
                <h1 className="font-bold my-10 text-2xl">{name}</h1>
                <p className="font-bold text-lg">{cuisines.join(", ") } - {costForTwoMessage}</p>
                {categories?.map((category , index)=>(
                    <RestaurantCategory key= {category?.card?.card?.title} data={category.card.card} 
                    showitem={index===showindex ? true :false} setshowindex={()=>showindex===index?setshowindex(null):setshowindex(index)}/>
                ))
                
                }
                
                
        </div>
    );};
export default RestaurantMenu;