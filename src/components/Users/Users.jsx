import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Users() {

    const[users, setUsers] = useState([]);

    useEffect(() => {
        // fetch("http://jsonplaceholder.typicode.com/users")
        // .then((res) => {return res.json()})
        // .then((data) => {
        //     setUsers(data);
        // })

        axios({
            "method": "GET",
            "url": "http://jsonplaceholder.typicode.com/users"
        }).then(resp => {
            setUsers(resp.data);
        })

    }, [])

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-3">
                    <table>
                        {
                            users.map(item =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                </tr>)
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}
