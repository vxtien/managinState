import { createContext, useContext, useState } from "react";

const NumberContext = createContext();

const ContextComponent=()=>{
    const [number, setNumber] = useState(0);
    const updateNumber=()=>{
        setNumber(Math.random())
    }
    return(
        <>
            <NumberContext.Provider
                value={{
                    number: number,
                    update: updateNumber
                }}
            >
                <NumberContext.Consumer>
                    {() => (
                        <>
                            <ShowNumber />
                            <UpdateNumber />
                        </>
                    )}
                </NumberContext.Consumer>
            </NumberContext.Provider>
        </>
    )
}
export default ContextComponent;

const UpdateNumber=()=>{
    const { update } = useContext(NumberContext)
    return(
        <button onClick={()=>{update()}}>
            Update Number
        </button>
    )
}

const ShowNumber=()=>{
    const { number } = useContext(NumberContext)
    return(
        <p>{number}</p>
    )
}


