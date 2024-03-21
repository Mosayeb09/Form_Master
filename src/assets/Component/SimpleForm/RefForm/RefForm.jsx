import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameref = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
     
    const handleSubmit= e =>{
        e.preventDefault();
        console.log(nameref.current.value);
        console.log(emailRef.current.value);
        console.log(phoneRef.current.value);
    }
    useEffect(()=>{
        nameref.current.focus();
        },[])
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                ref={nameref}
            type="text" name="name" id="" />
            <br />
            <input 
                ref={emailRef}
            type="email" name="email" id="" />
            <br />
            <input 
                ref={phoneRef}
            type="text" name="phone" id="" />
            <br />
            <input type="submit" value="Submit" />
           </form>
        </div>
    );
};

export default RefForm;