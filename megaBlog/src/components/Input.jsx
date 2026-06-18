import { useId } from "react";

function Input({ lable, type = "text", className = "", ref, ...props }) {
  const id = useId;
  return(
   <div className="w-full">
   {lable && <lable className='inline-block mb-1 pl-1' htmlFor={id}>
{lable}
   </lable>}
   <input 
    id={id}
    ref={ref}
    type={type}
    {...props}
    className={`${className} px-3 py-2 rounded-lg bg-white text-black 
          outline-none focus:bg-gray-50 duration-200 
          border border-gray-200 w-full`}

   />

   </div>)
}

export default Input;
