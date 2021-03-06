import React from 'react'


export const Person = ({
  full, large, margin, small
}) => {
  let COLOR
  if (large) {
    COLOR = '#1b606b'
  }
  if (!large) {
    COLOR = '#3c2c63'
  }
  if (!large && small) {
    COLOR = '#665e7d'
  }
  // const emptyColor = large ? '#1b606b' : '#3c2c63'
  const fullColor = large ? '#17FF4D' : '#95ee9d'
  const width = large ? '2.2rem' : '1.375rem'
  const height = large ? '2.2rem' : '1.375rem'
  const style = {
    fill: full > 0 ? fullColor : COLOR
  }
  const styleSize = {
    width: small ? '0.8rem' : width,
    height: small ? '0.8rem' : height,
    margin
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22 22" style={styleSize}>
      <g className="b" transform="translate(-0.414 -0.001)">
        <g transform="translate(0.47 0.025)">
          <path className="a" style={style} d="M40.143,21.5a6.88,6.88,0,0,0-5.03-3.72,1.783,1.783,0,0,0-1.133.228,5.951,5.951,0,0,1-6.753-.018,1.531,1.531,0,0,0-1.194-.23,6.987,6.987,0,0,0-5.023,3.816.8.8,0,0,0,.049.9,11.218,11.218,0,0,0,19.024,0A.84.84,0,0,0,40.143,21.5Z" transform="translate(-20.894 -6.007)" />
          <path className="a" style={style} d="M31.27,14.987a5.638,5.638,0,1,0-5.521-5.763A5.648,5.648,0,0,0,31.27,14.987Z" transform="translate(-21.689 -3.713)" />
        </g>
      </g>
    </svg>
  )
}

export default Person
