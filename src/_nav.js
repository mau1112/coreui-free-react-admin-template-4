import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilChartPie } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Features',
  },
  {
    component: CNavItem,
    name: 'Chart',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Report',
    to: '/report',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
]

export default _nav
