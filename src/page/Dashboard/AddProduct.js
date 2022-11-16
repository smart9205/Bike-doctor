import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async data => {
        
        console.log('data',data);
        const url = `https://young-beyond-90942.herokuapp.com/service`
        fetch(url,{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        })
       
    }


    return (
        <div>
            <h2>AddProduct</h2>
            <form className='text-left' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">product name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="product name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("p_name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'name'
                            },
                            
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">min-quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="minium Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("min", {
                            required: {
                                value: true,
                              
                            },
                            
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">available quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="available_quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("available_quantity", {
                            required: {
                                value: true,
                              
                            },
                            
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                              
                            },
                            
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">photo link</span>
                    </label>
                    <input
                        type="text"
                        placeholder="phot URL"
                        className="input input-bordered w-full max-w-xs"
                        {...register("img", {
                            required: {
                                value: true,
                              
                            },
                            
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        
                    </label>
                </div>

                
                <input className='btn w-full max-w-xs text-white bg-[#001858] text-left' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;