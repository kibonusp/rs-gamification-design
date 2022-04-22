import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormHeader, StyledButton, Form, Age, MySelect } from '../styles/style';
import SelectCountry from './SelectCountry';
import Select from 'react-select';

const axios = require('axios');

const genderOptions = [
    {value: "male", label: "Male"},
    {value: "female", label: "Female"},
    {value: "non-binary", label: "Non-binary"},
    {value: "not-answer", label: "Prefer Not to Answer"}
]

const scholarityOptions = [
    {value: "Incomplete Primary School", label: "Incomplete Primary School"},
    {value: "Complete Primary School", label: "Complete Primary School"},
    {value: "Incomplete Secondary School", label: "Incomplete Secondary School"},
    {value: "Complete Secondary School", label: "Complete Secondary School"},
    {value: "Incomplete Undegraduation", label: "Incomplete Undegraduation"},
    {value: "Complete Undegraduation", label: "Complete Undegraduation"},
    {value: "Incomplete Graduation", label: "Incomplete Graduation"},
    {value: "Complete Graduation", label: "Complete Graduation"},
    {value: "Incomplete Post Graduation", label: "Incomplete Post Graduation"},
    {value: "Complete Post Graduation", label: "Complete Post Graduation"}
]

export default function UserFormDemo() {
    const navigate = useNavigate();
    const location = useLocation();

    const [age, setAge] = useState()
    const [country, setCountry] = useState()
    const [gender, setGender] = useState()
    const [scholarity, setScholarity] = useState()
    const [user, setUser] = useState()
    const questions = location.state;

    useEffect(() => {
        if (!questions) {
            alert("You must answer the user type questions before.")
            navigate("/")
        }
    }, [])

    useEffect(() => {
        if (user)
            navigate("/recommendation", {state: user})
    }, [user])

    const handleClick = async e => {
        e.preventDefault()

        if (age === undefined || country === undefined || gender === undefined || scholarity === undefined)
            alert("You must fill in all fields.")
        else {
            console.log(age, scholarity.value, gender.value, country.value)
            await axios.post("http://localhost:5300/user", {
                "age": parseInt(age),
                "scholarity": scholarity.value,
                "gender": gender.value,
                "country": country.value
            }).then(function (response) {
                const userID = response.data._id;
                axios.post(`http://localhost:5300/user/${userID}/question`, JSON.stringify({"questions": questions}), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(() => {
                    axios(`http://localhost:5300/user/${userID}/recommendation`).then(response => {
                        console.log(response.data)
                        setUser(response.data);
                    });
                })
            })
        }
    }

    return (
        <div>
            <FormHeader>
                <p>The following are some questions that are part of the
                    form to, at the end, predict your user type. </p>
            </FormHeader>
            <Form>
                <Age>
                    <label>Age</label>
                    <input type="number" name="age" id="age" min="0" max="120" onChange={e => setAge(e.target.value)}/>
                </Age>

                <SelectCountry setCountry={setCountry} />

                <MySelect>
                    <h3>Gender</h3>
                    <Select options={genderOptions} onChange={setGender}/>
                </MySelect>

                <MySelect>
                    <h3>Scholarity</h3>
                    <Select options={scholarityOptions} onChange={setScholarity}/>
                </MySelect>

                <StyledButton style={{margin: '1em 0em'}}onClick={handleClick}>Continue</StyledButton>
            </Form>
        </div>
    )
}