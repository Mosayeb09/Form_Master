
import { data } from 'autoprefixer';
import './App.css'
import ReuseableForm from './assets/Component/ReuseableForm/ReuseableForm'
// import RefForm from './assets/Component/SimpleForm/RefForm/RefForm'
// import SimpleForm from './assets/Component/SimpleForm/SimpleForm'
// import StateFullForm from './assets/Component/StatefullForm/StateFullForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('sign up data', data);
} 
  const handleUpdateProfile = data => {
    console.log('Profile updated data', data);
} 
 

  return (
    <>
     
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      <ReuseableForm 
      formTitle={'Sign UP'} 
      handleForm={handleSignUpSubmit}>
        <div>
          <h2>SIgn UP</h2>
          <p>Please fill Up the Form</p>
        </div>

      </ReuseableForm>
      <ReuseableForm 
      formTitle={'Profile Updated'}
       submitBtnText='Updated'
        handleForm={handleUpdateProfile}>
          <div>
            <h2>Profile Update</h2>
            <p>Please fill Up the Form</p>
          </div>

       </ReuseableForm>
      
    </>
  )
}

export default App
