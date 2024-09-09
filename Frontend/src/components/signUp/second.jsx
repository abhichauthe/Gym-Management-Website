import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './signUp.module.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Second() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleView = () => {
    setShowLogin(!showLogin);
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww" className="img-fluid" alt="" />
        </MDBCol>
        <MDBCol col='4' md='6'>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">{showLogin ? 'Login' : 'Sign Up'}</p>
            <MDBBtn className="btn btn-link" onClick={toggleView}>
              {showLogin ? <span style={{ color: 'white' }}>Sign Up</span> : <span style={{ color: 'white' }}>Login</span>}
            </MDBBtn>
          </div>
          <div className="divider d-flex align-items-center my-4"></div>
          <MDBInput wrapperClass='mb-4' label='Name' id='formControlLg' type='text' size="lg" />
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />
          {showLogin || (
            <MDBInput
              wrapperClass='mb-4'
              label='Confirm Password'
              id='formControlLg'
              type='password'
              size="lg"
            />
          )}
          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>
              {showLogin ? 'Login' : 'Sign Up'}
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Second;


