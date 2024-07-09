import { useState } from 'react'
import { useEffect } from 'react'
import apiRequest from "./apiRequest"
import { Link } from 'react-router-dom';
import EditDog from './EditDog';


/*import apiRequest*/



function DogsPage() {

    const API_URL = 'https://localhost:7178/Dog'

    const [dogs, setDogs] = useState([])
    const [deleteId, setDeleteId] = useState();



    useEffect(() => {
        const fetchItems = async () => {
            const res = await apiRequest(API_URL)
            if (res.ok) {
                const items = await res.json()
                setDogs(items)
            } else {
                const err = await res.text()
                alert(err)
            }
        }

        fetchItems()

    }, [deleteId])

        const handleDelete = async (id) => {
        const deleteOptions = { 
            method: "DELETE",
             headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        }

        const res = await apiRequest(API_URL, deleteOptions)
        if (res.ok) {
            setDeleteId(id)
            alert("Deleted")
        }
        else {
            const err = await res.text()
            console.log(err)
        }
       }
    

    return (
        <div className="dogPage">

            <Link to='/dogs/new' >
                <button className='newDog' type='button'>NEW DOG</button>
            </Link>

            <div className='table-container'>
                <table className='dogsTable'>
                    <thead>
                        <tr>
                            <th className="id">Id</th>
                            <th className="name">Name</th>
                            <th className="age">Age</th>
                            <th className="color">Color</th>
                            <th className="actions">Actions</th>
                        </tr> 
                    </thead>  

                    <tbody>
                        {dogs.map(item => (
                            <tr key={item.id}>
                                <td className='id'>{item.id}</td>
                                <td className='name'>{item.name}</td>
                                <td className='age'>{item.age}</td>
                                <td className='color'>{item.color}</td>
                                <td className='actions'>
                                    <div>
                                        <button className='deleteButton' type='button' onClick={() => handleDelete(item.id) }>DEL</button>
                                        <Link to={`/dogs/${item.id}`}> 
                                            <button className='editButton' type='button'>EDIT</button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        )) }
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DogsPage
