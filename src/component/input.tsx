type inputpro={
   id:string;
   label:string;

}

export default function input({id,label}:inputpro){
 return(
  <form action="">
  <label  htmlFor={id}>{label}</label>
  <input id={id} type="text" />
  </form>    
)   
}