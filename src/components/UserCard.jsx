import React from "react";
import FormUser from "./FormUser";
import './styles/userCard.css'
import swal from "sweetalert2";



const UserCard = ({ user, deleteUserById, setUpdateInfo, setCloseForm }) => {

  const handleEdit = () => {
    setUpdateInfo(user)
    setCloseForm (false)
  }

  const handleDelete = () => {
    (deleteUserById(user.id)) 

    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'User successfully removed',
      showConfirmButton: 'false',
      timer: 2000
    
    })
  }

  

  
  
  return (
    
    <article className="card">
      <h3 className="card-title">
        {user.first_name} {user.last_name}
      </h3>
      <ul className="card__body">
        <li className="card__item">
          <span className="card__span">Email: </span>
          {user.email}
        </li >
        <li className="card__item">
          <span className="card__span">Birthday: </span>
          {user.birthday}
        </li>
      </ul>
      <footer className="card__footer">
        <button className="card__btn card__btn__trash" onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></button>
        <button className="card__btn card__btn__edit" onClick={handleEdit} ><i className="fa-regular fa-pen-to-square"></i></button>
      </footer>
    </article>
  );
};

export default UserCard;
