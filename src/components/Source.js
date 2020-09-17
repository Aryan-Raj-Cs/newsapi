import React,{useState,useEffect,useContext} from 'react'





function Source(props) {
const [showt,setShowt] = useState(false)
const heading=(name)=>{
    props.mheading(name)
}



const show=()=>{
    
//     if(showt==false ) {  
//     let arr=props.name.map((val,idx)=>{
//         if(idx<=3)  
//     return(
//     <div style={{border:"1px solid black",padding:"5px",cursor:"pointer" ,borderRadius:"10px" ,margin:"5px"}} className="hv"
//     onClick={()=>{heading(val)}}
    
//     ><strong>{val}</strong></div>
//     )
// })
// arr.push(<div style={{cursor:"pointer"}}    
// onClick={showall}
// ><strong>Full list of sources....</strong></div>)
// return arr;
//     }


    if(showt==true || showt==false) {  
        let arr=props.name.map((val,idx)=>{
              
        return(
        <div style={{border:"1px solid black",padding:"5px",cursor:"pointer",borderRadius:"10px" ,margin:"5px"}} className="hv"
        onClick={()=>{heading(val)}}
        
        ><strong>{val}</strong></div>
        )
    })
   
    return arr;
        }
}

const showall=()=>{
   setShowt(true)
    
    }

 return (
  
        <>
          
          {/* {props.name.map(val=>{
             
              return(
              <div style={{border:"1px solid black",padding:"5px",cursor:"pointer"}}
              onClick={()=>{heading(val)}}
              
              >{val}</div>
              )
          })} */}

          {show()}
         
         
      </>
        
   
  );
}


export default Source;
