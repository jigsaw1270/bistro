import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUser } from 'react-icons/fa';
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
// todo: load data from the server to have dynamic isAdmin based on data
const isAdmin = true;
// const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="flex flex-col items-center justify-center drawer-content">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="text-black bg-teal-400 drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="p-4 menu w-80">

                {
                    isAdmin ? <>
                    <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservations"><FaUtensils></FaUtensils> Add items</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Manage items</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                    <li><NavLink to="/dashboard/allusers"><FaUser></FaUser> All users</NavLink></li>
                   


                    </> : <>
                    <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                            <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>

                    </li>
                    </>
                }

                   
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;