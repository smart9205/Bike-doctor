import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdminToken from '../../Hooks/useAdminToken';


const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdminToken(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500 text-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">MyOrders</Link></li>
                    <li><Link to="/dashboard/AddReview">My Reviews</Link></li>
                    <li><Link to="/dashboard/MyProfile">My Profile</Link></li>
                   { admin && <>
                    <li><Link to="/dashboard/ManageProducts">Manage Products</Link></li>

                    <li><Link to="/dashboard/MakeAdmin">MakeAdmin</Link></li>
                    <li><Link to="/dashboard/AddProduct">Add product</Link></li>
                   
                   </>}
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;