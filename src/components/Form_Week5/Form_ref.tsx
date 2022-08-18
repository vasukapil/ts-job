import React, { useRef, useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Form_ref: React.FC = () => {
  const inputRef = useRef<any>('React Test');
  const [value, setValue] = useState<string>("React Test");
  const [searchParams]=useSearchParams()


  
  useEffect(() => {
     
      if(searchParams.get('q'))
      {
        setValue(String(new URLSearchParams(new URL(window.location.href).search).get('q')));
        console.log(searchParams.get('q'))
      }
    
     
}, []);

  function handleClick() {
    console.log(inputRef.current?.value);
  }
  return (
    <div>
      <input type="text" disabled value={value} ref={inputRef} />

      <button onClick={()=>handleClick()}>Submit and fetch in Console</button>
    </div>
  );
};

export default Form_ref;

