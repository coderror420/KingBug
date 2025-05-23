import { useEffect, useState } from "react";
const User=(props)=>{
    const [count,setcount] = useState(0);
    useEffect({

    },[]);
    async function getUserInfo(){
        const data= await fetch("https://corsproxy.io/?https://api.github.com/users/USERNAME");
        
    }
    return(
        <div className="user-card">
            <h1>Count = {count}</h1>
            <button onClick={()=>setcount(count+1)}>Increment</button>
            <h2>{props.name}</h2>
            <h3>Location: Dehradun</h3>
            <h4>Contact: @akshaymarch7</h4>
        </div>
    )
}
export default User;