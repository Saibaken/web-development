import React from 'react'
import {Link} from 'react-router-dom'

export default function SideLink(props) {
  return (
    <li className='side-link'>
      <Link to={props.link} className="side-link-text">
        {props.text}
      </Link>
    </li>
  )
}
