
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
    
    generateContactList = () => {
        const contactList = this.state.grabArray.map((user, i) => {
            return (<tr>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
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
                            <th>Name</th>
                            <th>last</th>
                            <th>thumbnail</th>
                        </tr>
                        {this.generateContactList()}
                    </table>
            </div>
        )
    }
}