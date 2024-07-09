import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import apiRequest from './apiRequest';

const EditDog = () => {

    // const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [color, setColor] = useState('');
    const [dog, setDog] = useState({});
    let [edited, setEdited] = useState(false);
    const API_URL = 'https://localhost:7178/Dog'

    const {dogId} = useParams();

    const fetchItems = async () => {
        const res = await apiRequest(`${API_URL}/${dogId}`)
        if (res.ok) {
            const dog = await res.json()
            setDog(dog)
            setName(dog.name)
            setAge(dog.age)
            setColor(dog.color)
        } else {
            const err = await res.text()
            alert(err)
        }
    }

    useEffect(() => {

        fetchItems();

    },[dogId])

    const navigate = useNavigate();

    const editData = {
        Id: dog.id,
        Name: name,
        Age: age,
        Color:color
    }

    const editOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editData)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await apiRequest(API_URL, editOptions)

        await fetchItems();
        setName('')
        setAge('');
        setColor('');
        setEdited(!edited);
        navigate('/dogs')
    }



  return (
    <div className='editDogPage'>
        <div className="input-section">
            <form className="register-form" onSubmit={handleSubmit}>

            <div className="register-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name='name' className="register-input" placeholder="Enter the dog's name" required value={name} onChange={(e) => setName(e.target.value.trim())} />
            </div>

            <div className="register-field">
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" className="register-input" placeholder="Enter the dog's age" min="0" max="99" required value={age} onChange={(e) => setAge(e.target.value.trim())} />
            </div>

            <div className="register-field">  
            <label htmlFor="color">Color</label>
            <input type="text" id="color" name="color" className="register-input" placeholder="Enter the dog's color" required value={color} onChange={(e) => setColor(e.target.value.trim())} />
            </div>

            
            <button className="register-btn" type="submit">SAVE</button>

            </form>
        </div>
    </div>
  )
}

export default EditDog