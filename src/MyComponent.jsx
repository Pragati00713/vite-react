import React from 'react';
import myImage from './Images/op1.jpeg'
import myImages from './Images/op2.jpeg'
import myImagess from './Images/op3.jpeg'
import myImg from './Images/op4.jpeg'
import myImgs from './Images/op5.jpeg'

function MyComponent({name , img, price, link,para}) {
  return (
    <>
    <section  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
  <article style={{display:"flex",flexDirection:"column" , height:"450px",width:"300px",backgroundColor:"silver",justifyContent:"center",alignItems:"center",margin:"10px",borderRadius:"25px",padding:"10px",border: "3px solid black"}}>
    <img  style={{width:"300px", height:"150px", width:"150px",display:"flex", justifyContent:"center"}} src={img} alt=""   />
    <h3>Price :  {price}</h3>
    
    <a href={link} className='btn btn-primary'>click here</a>
    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. {para}</h6>
<h1>Mobiles :  {name}</h1>
  </article>
  
</section>


    {/* <div id="close" style={{height:"auto",width:"100%",backgroundColor:"silver",display:"flex",flexWrap:"wrap", justifyContent:"center",alignItems:"center",}}>
     
     
<div style={{display:"flex",flexDirection:"column" , height:"450px",width:"300px",backgroundColor:"white",justifyContent:"center",alignItems:"center",margin:"10px",borderRadius:"25px",padding:"10px"}} >
<img src={myImage} alt="My Image" style={{height:"150px", width:"150px",display:"flex", justifyContent:"center"}} />
<h1>Oppo Mobiles </h1>
<h2>₹39,999</h2>
<p>OPPO F23 5G (Bold Gold, 8GB RAM, 256GB Storage) | 5000 mAh Battery with 67W SUPERVOOC Charger | 64MP Rear Triple AI Camera with Microlens | 6.72" FHD+ 120Hz Display</p>
<a href="https://www.oppo.com/in/product/oppo-reno8-t.P.P1100122?variant=5011100203&gclid=Cj0KCQjwmICoBhDxARIsABXkXlICLL3fShJSFH7quR4c38oa4MMVHCbez8NGloobzwATYQnOe0rmFFIaAo3FEALw_wcB" target='blank' style={{fontSize:"20px"}}>click here</a>

</div> */}



{/* <div style={{display:"flex",flexDirection:"column" , height:"450px",width:"300px",backgroundColor:"white",justifyContent:"center",alignItems:"center",margin:"10px",borderRadius:"25px",padding:"10px"}} >
<img src={myImagess} alt="My Image" style={{height:"150px", width:"150px",display:"flex", justifyContent:"center"}} />
<h1>Oppo Mobiles </h1>
<h2>₹20,999</h2>
<p>OPPO F23 5G (Bold Gold, 8GB RAM, 256GB Storage) | 5000 mAh Battery with 67W SUPERVOOC Charger | 64MP Rear Triple AI Camera with Microlens | 6.72" FHD+ 120Hz Display</p>
<a href="https://www.oppo.com/in/product/oppo-reno8-t.P.P1100122?variant=5011100203&gclid=Cj0KCQjwmICoBhDxARIsABXkXlICLL3fShJSFH7quR4c38oa4MMVHCbez8NGloobzwATYQnOe0rmFFIaAo3FEALw_wcB" target='blank' style={{fontSize:"20px"}}>click here</a>

</div> */}

{/* <div style={{display:"flex",flexDirection:"column" , height:"450px",width:"300px",backgroundColor:"white",justifyContent:"center",alignItems:"center",margin:"10px",borderRadius:"25px",padding:"10px"}} >
<img src={myImg} alt="My Image" style={{height:"150px", width:"150px",display:"flex", justifyContent:"center"}} />
<h1>Oppo Mobiles </h1>
<h2>₹17,999</h2>
<p>OPPO F23 5G (Bold Gold, 8GB RAM, 256GB Storage) | 5000 mAh Battery with 67W SUPERVOOC Charger | 64MP Rear Triple AI Camera with Microlens | 6.72" FHD+ 120Hz Display</p>
<a href="https://www.oppo.com/in/product/oppo-reno8-t.P.P1100122?variant=5011100203&gclid=Cj0KCQjwmICoBhDxARIsABXkXlICLL3fShJSFH7quR4c38oa4MMVHCbez8NGloobzwATYQnOe0rmFFIaAo3FEALw_wcB" target='blank' style={{fontSize:"20px"}}>click here</a>

</div>
<div style={{display:"flex",flexDirection:"column" , height:"450px",width:"300px",backgroundColor:"white",justifyContent:"center",alignItems:"center",margin:"10px",borderRadius:"25px",padding:"10px"}} >
<img src={myImgs} alt="My Image" style={{height:"150px", width:"150px",display:"flex", justifyContent:"center"}} />
<h1>Oppo Mobiles </h1>
<h2>₹19,999</h2>
<p>OPPO F23 5G (Bold Gold, 8GB RAM, 256GB Storage) | 5000 mAh Battery with 67W SUPERVOOC Charger | 64MP Rear Triple AI Camera with Microlens | 6.72" FHD+ 120Hz Display</p>
<a href="https://www.oppo.com/in/product/oppo-reno8-t.P.P1100122?variant=5011100203&gclid=Cj0KCQjwmICoBhDxARIsABXkXlICLL3fShJSFH7quR4c38oa4MMVHCbez8NGloobzwATYQnOe0rmFFIaAo3FEALw_wcB" target='blank' style={{fontSize:"20px"}}>click here</a>

</div> */}


    {/* </div> */}
    </>
  );
}

export default MyComponent;
