
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import authgif  from '../../assets/others/authentication2.png'
import GoogleSignIn from "../Login/GoogleSignIn";

const Signup = () => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
const {createUser, updateUserProfile} = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        console.log(watch("example")); 
        createUser(data.email , data.password)
        .then(result => {
            const loggedUser = result.userr;
            console.log(loggedUser);
            updateUserProfile(data.name , data.photoURL)
            .then(() =>{
              const saveUser = {name : data.name, email:data.email}
             fetch('http://localhost:5000/users',{
              method: 'POST',
              headers: {
                'content-type':'application/json'
              },
              body : JSON.stringify(saveUser)
             })
             .then(res => res.json())
             .then(data => {
              if(data.insertedId){
                reset();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'User created successfully',
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/');

              }
             })
           
            })
            .catch(error => console.log(error))
        })}

    return (
       <>
       <Helmet>
        <title>Sign up</title>
        
      </Helmet>
         <div className="min-h-screen bg-teal-400 hero">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center text-white">Signup now!</h1>
            <p className="py-6"> <img src={authgif} alt="" /></p>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input type="text" {...register("name",{ required: true })} name="name" placeholder="name" className="input input-bordered" />
                {errors.name && <span className="text-rose-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL",{ required: true })} placeholder="photo URL" className="input input-bordered" />
                {errors.name && <span className="text-rose-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{ required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-rose-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",{ required: true, minLength:6, maxLength: 20 })} name="password" placeholder="password" className="input input-bordered" />
                {errors.password && <span className="text-rose-600">This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="mt-6 form-control">
               <input type="submit" className="text-white bg-teal-400 btn" value="sign up" />
              </div>
            </form>
            <p>
              <small>
                Already signed up? <Link to='/login'>Log in</Link>
              </small>
            </p>
            <GoogleSignIn></GoogleSignIn>
          </div>
        </div>
      </div>
       </>
    );
};

export default Signup;