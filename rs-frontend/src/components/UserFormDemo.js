import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormHeader, StyledButton, Form, Age, MySelect } from '../styles/style';
import SelectCountry from './SelectCountry';
import Select from 'react-select'

export default function UserFormDemo() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!location.state) {
            alert("You must answer the user type questions before.")
            navigate("/")
        }
    }, [])

    const genderOptions = [
        {value: "male", label: "Male"},
        {value: "female", label: "Female"},
        {value: "non-binary", label: "Non-binary"},
        {value: "other", label: "Other"}
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

    return (
        <>
            <FormHeader>
                <p>The following are some questions that are part of the
                    form to, at the end, predict your user type. </p>
            </FormHeader>
            <Form>
                <Age>
                    <label for="age">Age</label>
                    <input type="number" name="age" min="0" max="120"/>
                </Age>

                <SelectCountry />

                <MySelect>
                    <h3>Gender</h3>
                    <Select options={genderOptions} />
                </MySelect>

                <MySelect>
                    <h3>Scholarity</h3>
                    <Select options={scholarityOptions} />
                </MySelect>

                <StyledButton style={{margin: "1em 0em"}}>Continue</StyledButton>
            </Form>
        </>
    )
}