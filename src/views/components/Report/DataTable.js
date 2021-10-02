import React from 'react'
import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const DataTable = (props) => {
  DataTable.propTypes = {
    data: PropTypes.array,
  }
  const $ = require('jquery')
  $.DataTable = require('datatables.net')
  const tableRef = useRef()
  useEffect(() => {
    const $table = $(tableRef.current)
    $table.DataTable({
      data: props.data,
      columns: [{ data: 'userId' }, { data: 'id' }, { data: 'data' }, { data: 'body' }],
      paging: true,
    })
  }, [])

  console.log(props.data)

  return <table ref={tableRef}></table>
}

export default DataTable
