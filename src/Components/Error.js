import React from "react"
import { useNavigate,Link } from "react-router-dom";

export default function Error(){

    const navigate=useNavigate()

    return(

        <>
            <div>Error 404</div>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </>
    )
}