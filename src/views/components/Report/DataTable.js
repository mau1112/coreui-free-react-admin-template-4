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
      columns: [{ data: 'userId' }, { data: 'id' }, { data: 'title' }, { data: 'body' }],
      paging: true,
    })
  }, [])

  console.log(props.data)

  return (
    <table ref={tableRef}>
      <thead>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
    </table>
  )
}

export default DataTable
