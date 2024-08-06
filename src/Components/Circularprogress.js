import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Circularprogress = ({ value }) => {
  return (
    <div className='mt-2' style={{ width: '100px', height: '100px' }}>
      <CircularProgressbar
        value={value}
        text={`${value}% ` }
        styles={buildStyles({
          textColor: '#fff',
          pathColor: '#3572EF',
          trailColor: '#4b4b6e',
        })}
      />
    </div>
  )
}

export default Circularprogress
