import React,{useState,useEffect,useContext} from 'react'





function Heading(props) {

console.log(props.heading)





const show=()=>{
  let arr=[]
if(props.heading.length>0){
 

 
    
    arr= props.heading.map(val=>{
      return(
        <div style={{display:"flex",cursor:"pointer"}}
        onClick={()=>{props.cnt(val.urlToImage,val.description,val.title,val.star)}}
        
        >
  
          <div>
            <img style={{width:"100px",height:"100px"}} 
             src={val.urlToImage}
            />
          </div>
      <div style={{border:"1px solid black"}}>{val.title}
      <div>
      <span><strong>Date :-{val.publishedAt}</strong></span></div>
      <span className="fa fa-star checked" style={{color:"red"}}
     
     
      ></span>
      </div>
     
  
      </div>
     
      )
      
  })

  


return arr;


}

}
 return (
  
        <>
        {/* {props.heading.length?
         <>
          {props.heading.map(val=>{
              return(
                <div style={{display:"flex",cursor:"pointer"}}
                onClick={()=>{props.cnt(val.urlToImage,val.description,val.title)}}
                
                >

                  <div>
                    <img style={{width:"100px",height:"100px"}} 
                     src={val.urlToImage}
                    />
                  </div>
              <div style={{border:"1px solid black"}}>{val.title}
              <div>
              <span><strong>Date :-{val.publishedAt}</strong></span></div>
              </div>
             

              </div>
             
              )
          })}
          </>:

          <>
          <h1>not fornd</h1>
           </>
        } */}
    {show()}
      </>
        
   
  );
}


export default Heading;
