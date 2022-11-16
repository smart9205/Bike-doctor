import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {

   

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {

        console.log('data', data);
        const url = `https://young-beyond-90942.herokuapp.com/info`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result =>{
                console.log(result)
                if(result.success){
                    toast("data upload")
                }
                else{
                    toast("data upload")
                }
            })

    }

    const [user] = useAuthState(auth)

    return (
        <div>
            <form className='text-left' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">name</span>
                    </label>
                    <input
                        type="text"
                        value={user?.displayName}
                        placeholder="name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">email</span>
                    </label>
                    <input
                        type="text"
                        value={user?.email}
                        placeholder="email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                           

                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">phone</span>
                    </label>
                    <input
                        type="number"
                        placeholder="phone"
                        className="input input-bordered w-full max-w-xs"
                        {...register("phone", {
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
                        <span className="label-text">Education background </span>
                    </label>
                    <input
                        type="education"
                        placeholder="education background"
                        className="input input-bordered w-full max-w-xs"
                        {...register("education", {
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
                        <span className="label-text">linkedin</span>
                    </label>
                    <input
                        type="link"
                        placeholder="linkedin"
                        className="input input-bordered w-full max-w-xs"
                        {...register("link", {
                            required: {
                                value: true,

                            },

                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                    </label>
                </div>
                


                <input className='btn w-full max-w-xs text-white bg-[#001858] text-left' type="submit" value="update profile" />
            </form>
        </div>
    );
};

export default MyProfile;