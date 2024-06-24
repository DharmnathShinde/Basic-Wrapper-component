import { ComponentPropsWithoutRef } from "react";

type forbutton={
 element:"button";   
}&ComponentPropsWithoutRef<"button">

type foracnhor={
    element:"anchor"
}&ComponentPropsWithoutRef<"a">

export default function Button(props:foracnhor|forbutton){
  if (props.element=="button"){
    return <button></button>
}
else
return <a>

</a>
}