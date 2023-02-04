import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/loading'
import ItemCategory from "./ItemCategory"


export default function Category() {
let[categoryName,setcategoryName]=useState([])
let[category,setcategory]=useState([])

let[isLoading,setisLoading]=useState(true)


          

async function getcategoryName(){
  let{data} = await axios.get(`https://dummyjson.com/products/categories`)

setcategoryName(data)
setisLoading(false)
}



async function getcategory(catName){
  let{data} = await axios.get(`https://dummyjson.com/products/category/${catName}`)

setcategory(data.products)
setisLoading(false)
}





  useEffect(()=>{

getcategoryName()
getcategory('smartphones')
},[])

function getCt(x){
getcategory(x)

}

  return (
    <>
      {isLoading && <Loading />}
          {!isLoading && <>
        <section>
        <div className="row mt-5 pt-5 mx-md-4">
          <h4 className='fw-bold color pb-4 text-center'>Category</h4> 
            
<div className="col-md-3 mb-2">

  <div className="dropdown-content">
   <div>
     <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[0])}>{categoryName[0]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[1])}>{categoryName[1]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[2])}>{categoryName[2]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[3])}>{categoryName[3]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[4])}>{categoryName[4]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[5])}>{categoryName[5]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[6])}>{categoryName[6]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[7])}>{categoryName[7]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[8])}>{categoryName[8]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[9])}>{categoryName[9]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[10])}>{categoryName[10]}</a>
   </div>
<div>
      <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[11])}>{categoryName[11]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[12])}>{categoryName[12]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[13])}>{categoryName[13]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[14])}>{categoryName[14]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[15])}>{categoryName[15]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[16])}>{categoryName[16]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[17])}>{categoryName[17]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[18])}>{categoryName[18]}</a>
    <a className='pointer-event text-uppercase' onClick={()=>getCt(categoryName[19])}>{categoryName[19]}</a>
</div>

  

  
</div>


</div>

<div className="col-md-9">
  <div className="row">
 
      {category?.map(product=> <ItemCategory key={product.id} data={product} />)}
</div>
</div>
</div>
           
          
         
  
    </section>
  
    </>}
    </>
  )
}
