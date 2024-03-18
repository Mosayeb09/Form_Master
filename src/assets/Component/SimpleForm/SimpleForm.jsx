const SimpleForm = () => {
    const handleForm = e =>{
        e.preventDefault();
       
        console.log(e.target.name.value);
        
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log("Form Submitted")
    }
   
    return (
        <div>
           <form onSubmit={handleForm}>
            <input type="text" name="name" id="" />
            <br />
            <input type="email" name="email" id="" />
            <br />
            <input type="text" name="phone" id="" />
            <br />
            <input type="submit" value="Submit" />
           </form>
        </div>
    );
};

export default SimpleForm;