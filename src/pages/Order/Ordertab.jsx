
import Foodcard from '../../components/Foodcard';

const Ordertab = ({items}) => {
    return (
        
              <div className="grid gap-10 md:grid-cols-3">
  {
        items.map(item => <Foodcard key={item._id} item={item}></Foodcard>)
    }
  </div>
       
    );
};

export default Ordertab;