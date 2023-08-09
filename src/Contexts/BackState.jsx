import { useState } from "react";
import BackContext from "./BackContext";

const BackState = ({children})=>{
const [navigatedBack, setNavigatedBack]= useState(true)

return(
<BackContext.Provider value={{navigatedBack,setNavigatedBack}}>
{children}
</BackContext.Provider>
)
}

export default BackState;