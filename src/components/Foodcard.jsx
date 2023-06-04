

const Foodcard = ({item}) => {
    const {image, name , price , recipe} = item;
    return (
        <div>
            <div className="shadow-xl card w-96 bg-base-100">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="absolute right-0 px-4 mt-4 mr-4 bg-slate-900 text-teal-50">${price}</p>
  <div className="flex-col items-center text-center card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="justify-end card-actions">
      <button className="my-4 border-0 border-b-4 border-orange-400 btn btn-outline bg-slate-100">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Foodcard;