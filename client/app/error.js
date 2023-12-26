'use client'

export default function Error({error,reset}){
    console.log(error);
    return (
        <div>
            <h2>Something went wrong!</h2>
            <p>{error.status}</p>
            <button onClick={()=>reset()}>Try again</button>
        </div>
    )
}       