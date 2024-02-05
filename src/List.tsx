import { useState } from "react";

function List(){


let cities=[
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Perth",
    "Adelaide",
    "Gold Coast",
    "Canberra",
    "NewCastle",
    "Hobart",
    "Darwin"
]

 const [selectedIndex ,setSelectedIndex]=useState<number>()



    return(
        <>
 <h1>List</h1>

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