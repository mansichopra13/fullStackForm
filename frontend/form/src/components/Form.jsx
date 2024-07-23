

import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('male');
    const [department, setDepartment] = useState('');
    const [designation, setDesignation] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [tools, setTools] = useState('');
    const [supervisorName, setSupervisorName] = useState('');
    const [product, setProduct] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [dependents, setDependents] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const employeeData = {
            name, email, contact, gender, department, designation,
            specialization, tools, supervisorName, product,
            maritalStatus, dependents
        };

        const response = await fetch('/api/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employeeData)
        });

        if (response.ok) {
            alert('Employee information submitted successfully');
        } else {
            alert('Failed to submit employee information');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className='main'>
                <fieldset className='info f'>
                    <legend className='title'>Employee Info</legend>
                    <label className='label'>Employee name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                    </label>
                    <label className='label'>Work Email:
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='example@gmail.com' />
                    </label>
                    <label className='label'>Contact:
                        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
                    </label>
                    <label className='label'>Gender:
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <label className='label'>Department:
                        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
                    </label>
                    <label className='label'>Designation:
                        <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
                    </label>
                </fieldset>   

                <fieldset className='skill f'>
                    <legend className='title'>Skill Set</legend>
                    <label className='label'>Specialization:
                        <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
                    </label>
                    <label className='label'>Tools:
                        <input type="text" value={tools} onChange={(e) => setTools(e.target.value)} />
                    </label>
                </fieldset>

                <fieldset className='dept f'>
                    <legend className='title'>Department Details</legend>
                    <label className='label'>Supervisor name:
                        <input type="text" value={supervisorName} onChange={(e) => setSupervisorName(e.target.value)} />
                    </label>
                    <label className='label'>Product:
                        <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
                    </label>
                </fieldset>

                <fieldset className='family f'>
                    <legend className='title'>Family Status</legend>
                    <label className='label'>Marital Status:
                        <input type="text" value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)} />
                    </label>
                    <label className='label'>Number of Dependents:
                        <input type="text" value={dependents} onChange={(e) => setDependents(e.target.value)} />
                    </label>
                </fieldset> 

                <div className="submit-container">
                    <button type="submit" className="submit">Submit</button>
                </div>
            </fieldset>
        </form>
    )
}

export default Form;
