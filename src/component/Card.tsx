type CardProps={
title:string
onClick: ()=>void

}

export function  Card({title,onClick}:CardProps){
    return (
<button onClick={onClick}> {title}</button>
    
)}