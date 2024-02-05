function List(){


const cities=[
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


    return(
        <>
                  <h1>List</h1>

<ul className="list-group">
{
cities.map((city,index) => <li className="list-group-item" key={index}>{city}</li>)
}
</ul>
        </>
  
);
}
export default List;