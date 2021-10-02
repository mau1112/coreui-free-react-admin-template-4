import React from 'react'
import { useRef } from 'react'
import PropTypes from 'prop-types'

const DataTable = (props) => {
  DataTable.propTypes = {
    data: PropTypes.array,
  }
  const tableRef = useRef()
  const $ = require('jquery')
  $.DataTable = require('datatables.net')
  const $table = $(tableRef.current)
  $table.DataTable({
    data: props.data,
    columns: [{ title: 'userId' }, { title: 'id' }, { title: 'title' }, { title: 'body' }],
    paging: true,
  })
  console.log(props.data)

  return <table ref={tableRef}></table>
}

export default DataTable
