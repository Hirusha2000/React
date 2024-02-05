import { Button } from "@chakra-ui/react";
import Alert from "./Alert";
import { useState } from "react";



function App(){
const [isVisible,setIsVisible] = useState<boolean>(false )
const [count,setCount]=useState(0);

const onSubmit = ()=> {

setCount(count+1);
setIsVisible(false)

 console.log(count);
} 

return (
<div>
 {/* <Alert>Hello World</Alert> */}
 <Button  onClick={onSubmit}>ClickMe</Button>

</div>
)
}
export default App; 