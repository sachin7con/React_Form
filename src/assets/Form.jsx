// SGN
import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailError, setEmailError] = useState('Invalid Email provided');
  const [passwordError, setPasswordError] = useState('Password must be at least 8 characters');
  const [confirmPasswordError, setConfirmPasswordError] = useState('Passwords do not match');

  const [emailBorderColor, setEmailBorderColor] = useState('red');
  const [passwordBorderColor, setPasswordBorderColor] = useState('red');
  const [confirmPasswordBorderColor, setConfirmPasswordBorderColor] = useState('red');

    const isValidEmail = (email) => {
   // Simple email validation
      return /\S+@\S+\.\S+/.test(email);
    };

  const handleEmailChange = (e) => {
      const value = e.target.value;
      setEmail(value);
      setEmailBorderColor('blue');
      if(!isValidEmail(e.target.value)){
        setEmailError('Invalid Email provided');
      }else {
          setEmailBorderColor('green');
          setEmailError('');

      }


}

const handlePwdChange = (e) => {
  const value = e.target.value;
  setPassword(value);
  setPasswordBorderColor('blue');

    if(e.target.value.length < 8){
        setPasswordError('Password must be at least 8 characters');
    }else {
          setPasswordError('');
          setPasswordBorderColor('green');
    }

}
const handleConPwdChange = (e) => {
  const value = e.target.value;
  setConfirmPassword(value);
  setConfirmPasswordBorderColor('blue');

  if(e.target.value != password ){
      setConfirmPasswordError('Passwords do not match');

  }else {
        setConfirmPasswordError('');
        setConfirmPasswordBorderColor('green');
  }

}




  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && password && confirmPassword && password === confirmPassword  ){
      alert("Form submitted successfully!");
    }else {
      alert("Form can not be submitted");
    }
  }



  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
    <div id="form-container">
    <label><strong>Email:</strong></label><br />
      <input type="email"  onChange={handleEmailChange} style={{ borderColor: emailBorderColor, borderRadius: '5px' }}  />

      <p className="red" id="email-error">{emailError}</p>


      <div>
      <label><strong>Password:</strong></label><br />
        <input type="password" value={password} onChange={handlePwdChange} style={{ borderColor: passwordBorderColor, borderRadius: '5px'}} />

      <p className="red" id="password-error">{passwordError}</p>
      </div>
      <div>
      <label><strong>Confirm Password:</strong></label><br />
          <input type="password" style={{ borderColor: confirmPasswordBorderColor, borderRadius: '5px' }} value={confirmPassword} onChange={handleConPwdChange} />

      <p className="red" id="confirm-password-error">{confirmPasswordError}</p>
      </div>
      <button type="submit">Sign up</button>
      </div>
    </form>
    </div>
    </>
  )
}

export default Form
