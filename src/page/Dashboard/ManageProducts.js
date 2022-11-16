import React from 'react';
import useServices from '../../Hooks/useServices';

const ManageProducts = () => {
    const [services,setServices] = useServices()


    const handleDelete =id =>{
        const proceed = window.confirm('are you sure')
        if(proceed){
         const url = `https://young-beyond-90942.herokuapp.com/service/${id}`
         fetch(url,{
             method: 'DELETE'  
         })
         .then(res => res.json())
         .then(data => {
             console.log(data)
             const remaining = services.filter(service => service._id !== id)

             setServices(remaining)
         })
        }
    }
    return (
        <div>
            <h1 className='text-2xl'>ManageProducts</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product name</th>
                         
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            services.map((service, index) => <tr
                            key={service._id}
                            >
                                <th>{index +1}</th>
                                <td>{service.p_name}</td>
                                <td><button onClick={()=>handleDelete(service._id)} class="btn btn-xs bg-[#001858]">delete</button></td>
                                
                            </tr>)
                        }

                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;