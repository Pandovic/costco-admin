import AsideBar from "../pages/AsideBar"
import { useState } from "react";
// import axios from "axios";

function CreateProduct() {
    const [name, setName] =useState("");
    const [quantity, setQuantity] = useState();
    const [category, setCategory] = useState("");
    const [price, setprice] = useState();
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const check =(e) =>{
        e.preventdefault();
     let formdata = new FormData()
     formdata.append('name', name);
     formdata.append('quantity', quantity);
     formdata.append('category', category);
     formdata.append('price', price);
     formdata.append('description', description);
     formdata.append('image', image);
     console.log(formdata);
    }
   
  return (
    <div>
      <AsideBar/>
      <form action="http://159.65.21.42:9000/create/product" method="post" encType="multipart/form-data"
        className="form-content"  onSubmit={check}>
      
          <div className="form-control">
            <label htmlFor="">Product Name</label>
            <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} />
          </div>

          <div className="form-control">
            <label htmlFor="">Category</label>
            <input type="text" id="category" name="category" onChange={(e)=>setCategory(e.target.value)} />
          </div>

          <div className="form-control">
            <label htmlFor="">Price</label>
            <input type="text" id="price" name="price"  onChange={(e)=>setprice(e.target.value)}/>
          </div>

          <div className="form-control">
            <label htmlFor="">Quantity</label>
            <input type="text" id="price" name="quantity"  onChange={(e)=>setQuantity(e.target.value)}/>
          </div>
          
          <div className="form-control">
            <label htmlFor="">Description</label>
            <input type="text" id="description" name="description"  onChange={(e)=>setDescription(e.target.value)}/>
          </div>

          <div className="form-control">
            <label htmlFor="">Image</label>
            <input type="file" id="image" name="image" onChange={(e)=>setImage(e.target.value)} />
          </div>
       
          <div className="form-btn">
            <button>Submit</button>
          </div>
      </form>
    </div>
  );
}
export default CreateProduct;
