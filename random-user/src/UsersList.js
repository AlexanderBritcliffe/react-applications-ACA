
import React, { Component } from 'react'
import axios from 'axios'


export default class UserList extends Component {

    state = {
        grabArray: []
    }


    componentDidMount(){
        axios.get('https://randomuser.me/api?results=25')
        .then( res => {
            const grabArray = res.data.results;
            this.setState({
                grabArray: grabArray
            })
        })
        .then(res => console.log("logging grabArray",this.state.grabArray))
    }
    
    TheContactList = () => {
        const contactList = this.state.grabArray.map((user) => {
            return (<tr>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.gender}</td>
                <img src={user.picture.thumbnail}/>
            </tr>)
        })
        return contactList

    }
    
    render() {
        return (
            <div>
                <h1>Random Names</h1>
                <table align="center" className="ordersTable">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Picture</th>
                        </tr>
                        {this.TheContactList()}
                    </table>
            </div>
        )
    }
}