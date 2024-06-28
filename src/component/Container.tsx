import {type ReactNode, type ElementType, ComponentPropsWithoutRef } from "react"

type ContainerProps<T extends ElementType> ={  //if we just use the T then it is not specifed the specific type for thst we need to use <T Element type > so we get the element type which we want 
    as?:T;
    children:ReactNode;
}& ComponentPropsWithoutRef<T>;

//in the blow function we use the Container<> for converting the non generic to generic type 
//in the abhove I used the 
export default function Container<C extends ElementType>({as,children,...props}:ContainerProps<C>){
  const Component =as || 'div';
return <Component{...props}>{children}</Component>
}