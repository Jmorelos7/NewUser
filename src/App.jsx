import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import axios from 'axios'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'

function App() {

  const [closeForm, setCloseForm] = useState(true)

  const {users, createNewUser, getAllUsers, deleteUserById, updateUserById}= useCrud()

  
  const [updateInfo, setUpdateInfo] = useState()
  useEffect(() => {
  getAllUsers()
},[])

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <div className='register'>
        <h1 className='user__register'>User register</h1>
      </div>
      <div className='hermosura'>
      <button className='App__btn' onClick={() => setCloseForm (false)}>User <i class="fa fa-user seudo__btn"></i></button>
      <div className='user-container'>
      {
        users?.map(user => (
          <UserCard
          key={user.id}
          user={user}
          deleteUserById={deleteUserById}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
          />
          
          ))
        }
      </div>
    </div>

      <div className={`form-container ${closeForm && 'close__form'}`}> 
      <FormUser
      createNewUser={createNewUser}
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      setCloseForm={setCloseForm}
      />
      </div>
      <br />
      </div>

  )
}

export default App
