import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



function User() {

    const [user, setUser] = useState([]);
    const [sortedUser, setSortedUser]=useState([])
    const [input, setInput] = useState();
    const [ethr, setEthr]= useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json();
            console.log(user)
            /* setSortedUser(data) */
            setUser(data)
        };
        fetchUser();
    }, [])

    const onChangeHandler= (e)=>{
        setInput(e.target.value)
        const arr=user;
        const res=arr.filter((e)=> e.name.toString().toLowerCase().includes(input.toString().toLowerCase()) || e.name.toString().toUpperCase().includes(input.toString().toUpperCase()))
        setSortedUser(res)
    }

    const onClickHandler =()=>{
        const arr=user;
        const res=arr.filter((e)=> e.name.toString().toLowerCase().includes(input.toString().toLowerCase()) || e.name.toString().toUpperCase().includes(input.toString().toUpperCase()))
        setSortedUser(res)
        setEthr(true)
    }

    return (<div>

<div className=' container d-flex my-5 justify-content-between'>
            <div>
                <input className='inpt' onChange={onChangeHandler} placeholder='Type Name'></input>
                <Button onClick={onClickHandler} variant="primary">Search</Button>
            </div>
            <div>
                <button   className='sort'>Sort by name</button>
            </div>
        </div>

        {
            ethr==true ?
            
<div>
{
    <div className='container'>
        <h3>Search items.</h3>
        
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {sortedUser.map(function (usr) {
                    return (
                        <tr>
                            <th>{usr.id}</th>
                            <th>{usr.name}</th>
                            <th>{usr.username}</th>
                            <th>{usr.email}</th>
                            <th>
                                <tr> 
                                    <th>Streen: {usr.address.street}  ,</th>
                                    <th>Suite: {usr.address.suite} ,</th>
                                    <th>City: {usr.address.city} ,</th>
                                    <th>Zip Code: {usr.address.zipcode} ,</th>
                                    <th>
                                        <tr>
                                            <th>Latitude: {usr.address.geo.lat}</th>
                                            <th>Longitude: {usr.address.geo.lng}</th>
                                        </tr>
                                    </th>
                                </tr>
                            </th>
                        </tr>
                    )
                })
                }
            </tbody>
        </Table>
    </div>
}
</div>
            :
<div>
{
    <div className='container'>
    <h3>Unsorted user's by name.</h3>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {user.map(function (usr) {
                    return (
                        <tr>
                            <th>{usr.id}</th>
                            <th>{usr.name}</th>
                            <th>{usr.username}</th>
                            <th>{usr.email}</th>
                            <th>
                                <tr>
                                    <th>Streen: {usr.address.street}  ,</th>
                                    <th>Suite: {usr.address.suite} ,</th>
                                    <th>City: {usr.address.city} ,</th>
                                    <th>Zip Code: {usr.address.zipcode} ,</th>
                                    <th>
                                        <tr>
                                            <th>Latitude: {usr.address.geo.lat}</th>
                                            <th>Longitude: {usr.address.geo.lng}</th>
                                        </tr>
                                    </th>
                                </tr>
                            </th>
                        </tr>
                    )
                })
                }
            </tbody>
        </Table>
    </div>
}
</div>
        }
    </div>
    )
}

export default User



