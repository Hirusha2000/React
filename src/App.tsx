import { Button } from "@chakra-ui/react";
import Alert from "./Alert";
import { useState } from "react";


interface Person{
  firstName:string;
  lastName:string;
}

function App(){

 
  const[person,setPerson]=useState({firstName:'Hirusha',lastName:'Geeganage'} as Person)


return (
<div>

{person.firstName} {person.lastName}
</div>
)
}
export default App; 