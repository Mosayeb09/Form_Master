



const ReuseableForm = ({formTitle,handleForm,children, submitBtnText = 'Submit' }) => {
    
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name :e.target.name.value,
            email :e.target.email.value,
            password :e.target.password.value,
        }
        handleForm(data);
    } 

    
    return (
        <div>
            {children}
            <br />

            <form onSubmit={handleLocalSubmit}>
            <input type="text" name="name" id="" />
            <br />
            <input type="email" name="email" id="" />
            <br />
            <input type="password" name="password" id="" />
            <br />
            <br />
            <input type="submit" value={submitBtnText} />
           </form>
        </div>
    );
};

export default ReuseableForm;