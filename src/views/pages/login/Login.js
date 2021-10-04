import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CModalTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'

const Login = () => {
  const [username, updateUsername] = useState('')
  const [password, updatePassword] = useState('')
  const [loginIncorrecto, setLoginIncorrecto] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const closeModalHandler = (e) => {
    setLoginIncorrecto(false)
  }
  const onChangeUsernameHandler = (e) => {
    updateUsername(e.target.value)
  }
  const onChangePasswordHandler = (e) => {
    updatePassword(e.target.value)
  }
  const onFormSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'https://test.elecsis.co/auth/',
      data: {
        user: username,
        pass: password,
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Content-Type': 'application/json',
        'x-requested-with': '',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      },
    })
      .then(function (response) {
        const token = response.data
        if (response.data === 'Usuario no válido') {
          setLoginIncorrecto(true)
        } else {
          history.replace('/dashboard')
          dispatch({ type: 'token', token: token })
        }
      })
      .catch(function (error) {
        throw new Error(error)
      })
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={onFormSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        value={username}
                        onChange={(e) => onChangeUsernameHandler(e)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => onChangePasswordHandler(e)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
        {loginIncorrecto ? (
          <CModal
            className="show d-block position-static"
            backdrop={false}
            keyboard={false}
            portal={false}
            visible
          >
            <CModalHeader>
              <CModalTitle>Invalid credentials</CModalTitle>
            </CModalHeader>

            <CModalBody>
              Your credentials are incorrect or have expired. please try again or reset your
              password.
            </CModalBody>

            <CModalFooter>
              <CButton color="secondary" onClick={closeModalHandler}>
                Close
              </CButton>
            </CModalFooter>
          </CModal>
        ) : null}
      </CContainer>
    </div>
  )
}

export default Login
