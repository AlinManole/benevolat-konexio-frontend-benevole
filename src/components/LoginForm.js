import React, { useContext } from 'react'

import styled from 'styled-components'

import InputComponentLargeWd from '../components/InputComponentLargeWd'
import ButtonComponent from '../components/ButtonComponent'

import { useFormik } from "formik"

import * as Yup from 'yup'

import { VolunteerContext } from '../contexts/Volunteer'
import { useNavigate } from 'react-router-dom'


const Form = styled.form`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 30px;
`

const LoginForm = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(VolunteerContext)

    const loginVolunteer = async values => {
        const response = await fetch('http://localhost:5000/auth/login/volunteer', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })

        if (response.error) {
            alert(response.error)
            return
        }

        if (response.status >= 400) {
            alert(response.statusText)
        } else {
            console.log('Volunteer have been connnected', response)
        }

        const data = await response.json()

        setUser(data)
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: values => {
            loginVolunteer(values)
            navigate('/sessions')
        },
        validateOnChange: false,
        validationSchema: Yup.object({
            email: Yup.string().required("Adresse e-mail est requise."),
            password: Yup.string().required("Mot de passe requis.")
        })
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <InputComponentLargeWd
                isInvalid={formik.errors.email}
                onChange={formik.handleChange}
                placeholder="Adresse e-mail"
                name="email"
                type="text"
                autoFocus
            />
            <InputComponentLargeWd
                isInvalid={formik.errors.password}
                onChange={formik.handleChange}
                placeholder="Mot de passe"
                name="password"
                type="password"
            />
            <ButtonComponent
                type="submit"
                label="Se connecter"
                hover
            />
        </Form>
    )
}

export default LoginForm