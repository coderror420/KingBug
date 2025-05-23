import {useState,useEffect} from "react";
import { API_DATA } from "./constants";


const useRestaurantMenu=(resId)=>{
        const [resInfo,setResInfo]=useState(null);
        useEffect(()=>{
             fetchData();
        },[]);
        const fetchData=async ()=>{
            const data=await fetch(API_DATA + resId + "&catalog_qa=undefined&submitAction=ENTER");
            const json=await data.json();
            setResInfo(json.data);
        }
        return resInfo;
}
export default useRestaurantMenu;
