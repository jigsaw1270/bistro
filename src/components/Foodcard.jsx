import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const Foodcard = ({item}) => {
    const {image, name , price , recipe, _id} = item;
const {user} = useContext(AuthContext);
const  navigate = useNavigate();
const location = useLocation();

    const  handleAddtoCart = item =>{
console.log(item);
if(user && user.email){
  const cartItem = { menuitemID: _id, name, image,price, email: user.email}
  fetch('http://localhost:5000/carts',{
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body : JSON.stringify(cartItem)
  })
  .then(res => res.json())
  .then(data => {
    if(data.insertedID){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Added on cart',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
}
else{
  Swal.fire({
    title: 'Please login to add to cart',
  
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'login now'
  }).then((result) => {
    if (result.isConfirmed) {
      navigate('/login', {state: {from: location}})
    }
  })
}
    }
    return (
        <div>
            <div className="shadow-xl card w-96 bg-base-100">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="absolute right-0 px-4 mt-4 mr-4 bg-slate-900 text-teal-50">${price}</p>
  <div className="flex-col items-center text-center card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="justify-end card-actions">
      <button onClick={()=> handleAddtoCart(item)} className="my-4 border-0 border-b-4 border-orange-400 btn btn-outline bg-slate-100">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Foodcard;