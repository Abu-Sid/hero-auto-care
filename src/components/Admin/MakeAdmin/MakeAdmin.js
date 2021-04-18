import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';



const MakeAdmin = () => {
    const { register, handleSubmit, errors,reset } = useForm();
    const onSubmit = data => {
        // console.log('form submitted', data)

        fetch('https://thawing-ravine-07119.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Admin Added Successfully')
                    reset()
                }
            })
    };
    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh', height: '100%' }}>
            
            <div >
                <Sidebar />
                <main className='container mt-5'>
                    <form className=" d-flex" onSubmit={handleSubmit(onSubmit)}>

                        <input name="email" className='form-control' style={{ width: '60%', height: '60px' }} {...register("email",{ required: true })} placeholder='Enter New Admin Email' /> <br />

                        <button type="submit" className='btn btn-success ml-3 mt-4' > Submit</button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default MakeAdmin;
