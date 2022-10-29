import React,{useEffect,useState} from 'react'

function UseState() {
    const[count,setcount]=useState(0);
    const[count2,setcount2]=useState(1);
    useEffect(()=>{
      setcount2(()=>count*2)
        
      },[count])
    console.warn("useeffect is working")
  return (
    <div>
      <button onClick={()=>setcount(count+1)}>COUNT {count}</button>
      {/* <button onClick={()=>setcount2(count2+1)}>Update {count2}</button> */}
      <p>update {count2}</p>

    </div>
  )
}

export default UseState

