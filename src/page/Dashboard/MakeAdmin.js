import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UseAdmin from './UseAdmin';


const MakeAdmin = () => {


    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://young-beyond-90942.herokuapp.com/user',{

        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>user:{users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Add admin</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map(user =><UseAdmin
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UseAdmin>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;