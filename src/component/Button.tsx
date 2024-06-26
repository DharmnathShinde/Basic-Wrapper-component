import { ComponentPropsWithoutRef } from "react";
type forbutton = ComponentPropsWithoutRef<"button">&{
  href?:never
}

type foracnhor = ComponentPropsWithoutRef<"a">&{
 href?:string
}

function isAnchorProps(props: foracnhor | forbutton):props is foracnhor{
  return 'href' in props;
}

export default function Button(props: foracnhor | forbutton) {
  // const {element,...otherProps}=props
  if (isAnchorProps(props)) 
    {return <a {...props}></a>}
  else
  return <button {...props}></button>
}
