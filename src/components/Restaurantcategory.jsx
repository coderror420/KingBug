import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory=({data,showitem , setshowindex})=>{
  
    const handleclick=()=>{
      setshowindex();
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-white py-0 ">
            <div className="flex justify-between" onClick={handleclick}>
                <span className="font-semibold text-lg px-3 ">{data.title } ({data.itemCards.length})</span>
                <span className=" font-semibold text-2xl px-3">{showitem?"-":"+"}</span>
            </div>
              { showitem && <ItemList items={data.itemCards}/>}  
                <hr className="border-t-1 border-gray-300 my-4 mx-4" />
            
            </div>
           
          
        </div>
    )

}
export  default RestaurantCategory;