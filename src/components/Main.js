import React,{useState,useEffect,useContext} from 'react'
//  import {Link,useHistory} from 'react-router-dom'
import Source from './Source'
import Heading from './Heading'
import Heading2 from './Heading2'
import Content from './Content'




function Main() {



    const [sfav,setSfav] = useState(false)
    const [fav,setFav] = useState([])
    const [img,setImg] = useState("")
    const [ct,setCt] = useState(0)
    const [sstar,setSstar] = useState(0)
    const [news,setNews] = useState("")
    const [title,setTitle] = useState("")
    const [description,setDiscription] = useState("")
    const [data,setData] = useState([])
    const [name,setName] = useState([])
    const [mheading,setMheading] = useState([])
    //const [data,setData] = useState([])
    // const history=useHistory()
    useEffect(()=>{
       
        fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f4ae79bb38954ed5ab58004b287da72c',{
          
       }).then(res=>res.json())
       .then(result=>{
           console.log(result)
           const allname=result.articles.map(val=>{

            return val.source.name;
        })
    
        setName(allname)
        
           setData(result)
       
          
       }).catch(error=>{
           //history.push('/login')
          // window.location.reload()
       })
    },[])

    console.log(name)
    var set = new Set(name);
    console.log([...set])
    let newname=[...set]
   

const mnewsheading=(name)=>{
const mhead = data.articles.filter(val=>{
    if(val.source.name==name){
        return true;
    }
    else{
        return false
    }
    
})



setMheading(mhead)
setDiscription("");
setImg("")
setTitle("")
setNews(name)
}

const cnt=(img,dsc,title,star)=>{
setDiscription(dsc);
setImg(img)
setTitle(title)
setSstar(star)
}

const star=(v)=>{
    let favnew=[];
const newheading=mheading.map(val=>{
    if(val.url==v){
        if(val.star==1){
        val.star=0;
        let s=ct-1;
            setCt(s);
            let idx= favnew.indexOf(val);
            favnew.splice(idx, 1) 
            

        }
        else{
            val.star=1;
            let s=ct+1;
            setCt(s);
            favnew.push(val)
        }
        return val;
    }
    else{
      
        return val;
    }
})

setMheading(newheading)
setFav((prev)=>{


  return  [...prev,...favnew]
 


})
}


const favorute=()=>{
    
    
       if(sfav==false)   
       setSfav(true)
       else{
        setSfav(false) 
       }
       setDiscription("");
       setImg("")
       setTitle("")
   
    }

  return (
    <div className="flex-container">
          <div className="flex3">
          <div style={{border:"1px solid black"}}><strong>Source</strong></div>
         <Source name={newname} mheading={mnewsheading} />
         <div style={{border:"1px solid black",padding:"5px",cursor:"pointer",borderRadius:"10px" ,margin:"5px"}} className="hv"
          onClick={favorute}
        
            ><strong>favorite ({ct})</strong></div>
          </div>

          <div className="flex3">
        <div style={{border:"1px solid black",padding:"5px"}}><strong>{news}</strong></div>

        {
            sfav?<Heading2 heading={fav} cnt={cnt}  />:
            <Heading heading={mheading} cnt={cnt} star={star} />
        }
       
          
          
          </div>

          <div className="flex6">
          
          <Content img={img} description={description} title={title} star={sstar} />
          
          </div>
    </div>
  );
}


export default Main;
