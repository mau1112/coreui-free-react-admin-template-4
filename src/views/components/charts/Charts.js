import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import { Line } from 'react-chartjs-2'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Charts = () => {
  const [data, setData] = useState()
  const token = useSelector((state) => state.token)
  useEffect(() => {
    axios({
      method: 'POST',
      url: 'http://test.elecsis.co/graph/',
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
          <CCardBody>
            <Line data={data} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Charts
