import React, { useState } from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom';


  const Signin = () => {
    const [formData, setFormData] = useState({});
    const [error, seterror]=useState();
    const [loading , setLoading ]= useState(false)
    const navigate= useNavigate();
    const changeHandler = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
  
    const submitHandler = async (e) => {
      e.preventDefault();
      setLoading(true)
      const res = await fetch("/api/auth/signIn", {
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.sucess === false){
        seterror(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      seterror(null);
      navigate('/')
      console.log('data', data)
  
  
    };
    console.log(error);
  
    return (
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-center text-3xl font-semibold my-7">Sign In</h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
         
          <input
            className="rounded-lg border p-3"
            type="email"
            placeholder="email"
            id="email"
            onChange={changeHandler}
          />
          <input
            className="rounded-lg border p-3"
            type="password"
            placeholder="password"
            id="password"
            onChange={changeHandler}
          />
          <button disabled={loading} className="  bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80 uppercase">
            {loading?'loading...': 'Sign In'}
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p>Don't have an account</p>
          <Link to={"/Signup"}>
            <span className="text-blue-700">Sign Up</span>
          </Link>
        </div>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    );
  };
  
export default Signin