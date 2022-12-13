import React from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'
import swal from 'sweetalert2'

const FormUser = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setCloseForm}) => {


useEffect(() => {
    reset(updateInfo)
},[updateInfo])


    const {register, reset, handleSubmit} = useForm()

  

const submit = data => {
    if(updateInfo){
        //updata
        updateUserById(updateInfo.id, data)
        setUpdateInfo()
    }else {
        //create
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'user created successfully',
          showConfirmButton: 'false',
          timer: 2000
        
        })
        createNewUser(data)
    }

    setCloseForm(true)


        reset({
            email: '',
            first_name: '',
            last_name: '',
            birthday: '',
            password: ''
        })
    }
    
    

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
      <div onClick={() => setCloseForm(true)} className='form__x'><i class="fa fa-circle-xmark"></i></div>
      <h2 className='form__title'>{updateInfo ? 'Update User': 'Create User'}</h2>
      <div className='form__div'>
        <label className='form__label' htmlFor="email">Email</label>
        <input className='form__input' type="email" id="email" {...register("email")} />
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="password">Password</label>
        <input className='form__input' type="password" id="password" {...register("password")}/>
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="first_name">First Name</label>
        <input className='form__input' type="text" id="first_name"  {...register("first_name")}/>
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="last_name">Last name</label>
        <input className='form__input' type="text" id="last_name"{...register("last_name")} />
      </div>
      <div className='form__div'>
        <label htmlFor="birthday">Birthday</label>
        <input className='form__input' type="date" id="birthday" {...register("birthday")}/>
      </div>
      <button className='form__btn'>Submit</button>
    </form>

  )
}

export default FormUser