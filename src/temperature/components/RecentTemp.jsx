import React, { useEffect } from 'react'

const RecentTemp = () => {
  // 최신 온도
  const [nowTemp, setNowTemp] = useState(0);

  useEffect(()=>{
    
  },[nowTemp]);

  return (
    {nowTemp}
  )
}

export default RecentTemp