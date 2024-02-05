import { useState } from "react";

interface Props{
    cities:string[];
    heading:string;
}

function List({cities,heading}:Props){




 const [selectedIndex ,setSelectedIndex]=useState<number>()



    return(
        <>
 <h1>{heading}</h1>

{cities.length==0 && <h1>No Items in the Array</h1>}

<ul className="list-group">
{
cities.map((city,index) => 
<li className={selectedIndex===index ? "list-group-item active" :"list-group-item "}
 key={index} 
 onClick={()=>setSelectedIndex(index)}
>{city}</li>)
}
</ul>
        </>
  
);
}
export default List;