import React, { useState, useEffect } from 'react'
import { account } from '../appwrite/appwriteConf'
import { useNavigate, Link } from 'react-router-dom'
import DonutBase from './DonutBase'
import DonutForm from './DonutForm'


function Profile() {
    const navigate = useNavigate()

const [userDetails, setUserDetails] = useState()

useEffect(() => {
    const getData = account.get() //if a login session is active, you get data from the account
    getData.then(
     function(response){
        if (!userDetails) { //run only once if userDetails is undefined
        setUserDetails(response)
        }
        console.log(userDetails);
     },
     function(error){
        console.log(error);
     }

    )
}, [userDetails])

//logout button function

const handleLogout = async () => { //async needs await,  no need for any event
    try { //trycatch snippet
        await account.deleteSession("current")
        navigate("/")
    } catch (error) {
        console.log(error)
        
    }
}


  return (
        <>
      {userDetails ? ( //if user details are present...
        <>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
            <div>
              <p className="text-xl">Hello and welcome user {userDetails.name}</p>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          {/* TODO FORM */}
          <DonutForm />
          {/* TODO BOX */}
          <DonutBase />
        </>
      ) : ( //if it is not present...
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>

  )
}

export default Profile