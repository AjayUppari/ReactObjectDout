import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {initialUserDetailsList: userDetailsList}

  onSearchInput = event => {
    const searchResults = userDetailsList.filter(eachUser =>
      eachUser.name.includes(event.target.value),
    )
    this.setState({initialUserDetailsList: searchResults})
  }

  render() {
    const {initialUserDetailsList} = this.state

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" onChange={this.onSearchInput} />
        <ul className="list-container">
          {initialUserDetailsList.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              stateObj={this.state}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
