import React from 'react';
import moment from 'moment';

const videoLength = ({time}) => {
  const videoLlengthInSeconds = moment()
  ?.startOf("day")
  ?.seconds(time)
  ?.format("H:mm:ss");
  return (
    <span className='absolute bottom-2 bg-black py-1 px-2 text-white text-xs rounded-md'>
      {videoLlengthInSeconds}
    </span>
  )
}

export default videoLength