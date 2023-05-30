import './index.css'
import {Component} from 'react'

const UserProfile = props => {
  const {userDetails, stateObj} = props
  const {imageUrl, name, role, uniqueNo} = userDetails

  const onDeleteUser = () => {
    const {initialUserDetailsList} = stateObj
    const filteredUsers = initialUserDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    Component.setState({initialUserDetailsList: filteredUsers})
  }
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button type="button" className="delete-button" onClick={onDeleteUser}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          className="delete-img"
          alt="cross"
        />
      </button>
    </li>
  )
}
export default UserProfile
