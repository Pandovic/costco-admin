import AsideBar from "../pages/AsideBar";
import { useState } from "react";
import axios from "axios";

function CreateUsers() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    const userData = {
      name: user.name,
      phone: user.phone,
      email: user.email,
      password: user.password,
    };

    console.log(user);
    console.log(userData);

    axios
      .post("http://159.65.21.42:9000/register", userData)
      // .then((resp) => resp.json())
      // .then((data) => {
      //   // setUser(data);
      //   setUser({
      //     name: "",
      //     phone: "",
      //     email: "",
      //     password: "",
      // });

      // });

      .then((res) => {
       alert("successful")
       setUser({
            name: "",
            phone: "",
            email: "",
            password: "",
        });
     })
     .catch((err) => {
      console.log(err.response.data || "Code 500: Internal Server Error")
     })
  };
  return (
    <div>
      <AsideBar />
      <form className="form-content" onSubmit={submitForm}>
        <div className="form-control">
          <label htmlFor="first_name">Full Name</label>
          <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}/>
        </div>
        {/* <div className="form-control">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" value={user.lname} onChange={(e) => setUser({...user, lname: e.target.value})}/>
                   
                </div> */}

        <div className="form-control">
          <label htmlFor="phone">Phone</label>
          <input type="text" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })}/>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })}/>
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="text" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
        </div>
        
        <div className="form-btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateUsers;
