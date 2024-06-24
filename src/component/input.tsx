import { ComponentPropsWithoutRef } from "react";

type inputpro={
   id:string;
   label:string;
}&
ComponentPropsWithoutRef<'input'>;

export default function input({id,label,...props}:inputpro){
 return(
  <form action="">
  <label  htmlFor={id}>{label}</label>
  <input id={id} type="text" {...props} />
  </form>    
)   
}