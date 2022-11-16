import React from 'react';
import { toast } from 'react-toastify';

const UseAdmin = ({ user, refetch }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`https://young-beyond-90942.herokuapp.com/user/admin/${email}`,
            {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })

            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to create admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Successfully create an admin`)
                }
            })
    }
    return (
        <tr>
            <th></th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs bg-[#001858]">Make admin</button>}</td>
            <td><button class="btn btn-xs bg-[#001858]">Remove User</button></td>
        </tr>
    );
};

export default UseAdmin;