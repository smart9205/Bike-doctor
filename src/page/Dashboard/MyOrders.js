import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [oders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
            fetch(`https://young-beyond-90942.herokuapp.com/booking?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }


                    return res.json()
                })
                .then(data => {

                    setOrders(data)
                })
        }
    }, [user])


    return (
        <div>
            <h2>My Orders: {oders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>product-Quantity</th>
                            <th>Payment</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            oders.map((o, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{o.name}</td>
                                <td>{o.quantity}</td>
                                <td><button  class="btn btn-xs bg-[#001858]">pay</button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;