import React,{useState,useEffect,useContext} from 'react'





function Content(props) {


 return (
  
        <>
        {props.description.length?
         <>
        
                <div style={{cursor:"pointer"}}>
                <span className="fa fa-star checked" style={{color:props.star==1?"red":"black"}}>  </span>
                < div style={{border:"1px solid black",padding:"5px"}}><strong>{props.title}</strong></div>
                
                  <div>
                    <img style={{width:"100%",height:"50%"}} 
                     src={props.img}
                    />
                  </div>
              < div style={{border:""}}>{props.description}</div>

              </div>
             
            
        
          </>:

          <>
          
           </>
        }
    
      </>
        
   
  );
}


export default  Content;
