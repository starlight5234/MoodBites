import React from 'react'

import prevIcon from '../../../Assets/icons/prev.png'

const PrevArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <img className={className}
    style={{ ...style}}
    onClick={onClick} src={prevIcon} alt=''/>
  )
}

export default PrevArrow