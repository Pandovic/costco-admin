import axios from "axios";
import { useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

function UpdateUsers(){
    const navigate = useNavigate();
    const { _id } = useParams();
    const [user, setUser] = useState([]); 

    useEffect(() => {
        fetch("http://159.65.21.42:9000/user/" + _id)
        .then((resp) => resp.json())
        .then((data) => {
            setUser(data);
        });

        
    },[]);

    const updateUser = (e) => {
        e.preventDefault();
        axios.put("http://159.65.21.42:9000/user/" + _id, user)
        .then(res => {
            alert("Data update successfull !!!");
            navigate("/users");
        })
        .catch((err) => {
            console.log(err.response.data || "Code 500: Internal Server Error")
           })
    }

    return(
        <div>
            <form className="form-content" onSubmit={updateUser}>
                <div className="form-control">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/>
                  
                </div>
                {/* <div className="form-control">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" value={user.lname} onChange={(e) => setUser({...user, lname: e.target.value})}/>
                   
                </div> */}
                <div className="form-control">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})}/>
                   
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
                    
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="text" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
                    
                </div>
                <div className="form-btn">
                    <button type="submit" >Update</button>
                </div>
            </form>


        </div>
    )
}

export default UpdateUsers;