import { useEffect, useState } from 'react'
import apiRequest from './apiRequest';
import {useHistory } from 'react'
import { useNavigate, redirect } from 'react-router-dom';
import DogsPage from './DogsPage';

function AddDog() {



    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [color, setColor] = useState('');
    let [added, setAdded] = useState(false);
    const API_URL = 'https://localhost:7178/Dog'

    const navigate = useNavigate();

    const postData = {
        Name: name,
        Age:age,
        Color:color
    }

    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fetchItems = async () => {
            const res = apiRequest(API_URL, postOptions);
        }

        await fetchItems();
        setName('')
        setAge('');
        setColor('');
        setAdded(!added);
    }

    useEffect(() =>{
        if(added==true)
        navigate('/dogs')
    },[added])
  

    return (
        <div className='addDogPage'>
            <div className="input-section">
                <h2>Add a new dog</h2>

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

                    
                    <button className="register-btn" type="submit">ADD</button>

                </form>
            </div>
        </div>
    )
}

export default AddDog
