import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {

        console.log('data', data);
        const url = `https://young-beyond-90942.herokuapp.com/review`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    toast("review upload")
                }
                else {
                    toast("review upload")
                }
            })

    }


    return (
        <div>
            <form className='text-left' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating 0-5</span>
                    </label>

                    
                    <input
                    
                        type="text"

                        placeholder="rating"
                        className="input input-bordered w-full max-w-xs"
                        {...register("number", {

                        })}
                    />
                    
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating Text</span>
                    </label>
                    <input
                        type="text"

                        placeholder="text"
                        className="input input-bordered w-full max-w-xs"
                        {...register("rating", {


                        })}
                    />
                    
                </div>
                <br/>



                <input className='btn w-full max-w-xs text-white bg-[#001858] text-left' type="submit" value="add review" />
            </form>
        </div>
    );
};

export default AddReview;