import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HomeHeader from "./HomeHeader";
import { useEffect } from "react";

const Register=()=>{
    let history =useNavigate();
    const [error, setError] = useState("");
    const [data,setData]=useState({
     first_name:"",
     last_name:"",
     email:"",
     password:""
})
const handleChange =(e)=>{
    setData({...data,[e.target.name]:e.target.value});
    console.log(data);
}
const submitForm=async (e)=>{
     e.preventDefault();
        const sendData ={
            first_name :data.first_name,
            last_name :data.last_name,
            email:data.email,
            password :data.password
        }
        console.log(sendData);
        //const res = await axios.post("http://localhost/php-react/sportsclub/api/register.php",sendData)
        //const resData = res.data;
        //console.log(res, resData);
        axios.post("http://localhost/php-react/sportsclub/api/register.php",sendData)
         .then((result)=>{
             console.log(result)
             if(result.data.status === "Invalid")
             {
                 setError("Invlaid User")
                 alert("Invalid User");
              } else{
                 history('/login');
             }
        })
}
    useEffect(() => {
        console.log("inside", data)
        //localstorage.getItem()
    }, [])
    return(
        <div className="backround-image">
            <HomeHeader />
        
        
        <div className="main_box">
        <form onSubmit={submitForm}>
            <div className="row">
                <div className="col-md-12 text-center"><h1>Register</h1></div>
            </div>
            <div className="row">
                <div className="col-md-5">First Name</div>
                <div className="col-md-7">
                    <input type="text" name="first_name" className="form-control" onChange={handleChange} value={data.first_name}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">Last Name</div>
                <div className="col-md-7">
                    <input type="text" name="last_name" className="form-control" onChange={handleChange} value={data.last_name}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">Email</div>
                <div className="col-md-7">
                    <input type="email" name="email" className="form-control" onChange={handleChange} value={data.email}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">Password</div>
                <div className="col-md-7">
                    <input type="password" name="password" className="form-control" onChange={handleChange} value={data.password}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-7">
                    <input type="submit" name="submit" value="Register" className="btn btn-success"/>
                </div>
            </div>
            <p>{error}</p>
            </form>
        </div>
       
        </div>
    )
}
export default Register;