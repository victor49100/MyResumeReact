import {useState} from "react";


const action=(e)=>{
    console.log("bonjour")
}

const [age,setAge] = useState()

function Button(props) {
    return (
        <>
            <button onClick={action}>
                Click on me
            </button>
        </>
    )
}


export default Button;

