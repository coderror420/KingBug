import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({resData}) => {
    const deliveryTime = resData?.info?.sla?.deliveryTime;
    const {name, cuisines, avgRating, cloudinaryImageId}= resData?.info;
    return (
      <div className="my-1 p-1 mx-1 w-50 h-100 text-sm rounded-md bg-gray-100 hover:bg-gray-200" >
        <img className="rounded-md" src={CDN_URL+cloudinaryImageId} />
        <h4 className="font-bold py-1 text-l" >{name}</h4>
        <h6>{cuisines.join(", ")}</h6>
        <h5>{avgRating+"⭐"}</h5>
        <h6>{deliveryTime + "mins"}</h6>
      </div>
    );
  };

  //higher order component
  export const withpromotedlabel = (RestaurantCard)=>{
    return (props)=>{
      return (
        <div className="relative"> 
        <label className="absolute w-23 text-center align-items bg-black rounded text-white py-0 z-10">Promoted</label>
        <RestaurantCard {...props}/>
        </div>
        
      )
    }
  }
  export default RestaurantCard;