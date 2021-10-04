import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import DataTable from './DataTable'

const Report = () => {
  const [data, setData] = useState()
  const [isDataTableDisplayed, setIsDataTableDisplayed] = useState(false)
  const token = useSelector((state) => state.token)
  useEffect(() => {
    axios({
      method: 'POST',
      url: 'https://test.elecsis.co/data/',
      data: {
        token: token,
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Content-Type': 'application/json',
        'x-requested-with': 'XMLHttpRequest',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      },
    })
      .then(function (response) {
        setData(response.data)
        setIsDataTableDisplayed(true)
      })
      .catch(function (error) {
        throw new Error(error)
      })
  }, [token])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>Line Chart</CCardHeader>
          <CCardBody>{isDataTableDisplayed ? <DataTable data={data} /> : null}</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Report
