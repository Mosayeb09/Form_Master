import { useState } from "react";

const StateFullForm = () => {
    const [email,setEmail] =useState(null);
    const [password,setPassword] =useState(null);
    const handlesubmit = e  =>{
        e.preventDefault();
        console.log(email);
        console.log(password);

    }
    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        // console.log(e.target.value);
        setPassword(e.target.value);
    }


    return (
        <div>
             <form onSubmit={handlesubmit}>
            <input type="text" name="name" id="" />
            <br />
            <input
                onChange={handleEmailChange}
            type="email" name="email" id="" />
            <br />
            <input
            onChange={handlePasswordChange}
            type="password" name="password" id="" />
            <br />
            <input type="submit" value="Submit" />
           </form>
        </div>
        
    );
};

export default StateFullForm;