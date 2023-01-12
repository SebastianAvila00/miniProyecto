import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";



function RegisterPage4() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const { login } = useAuth()
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await login(user.email, user.password)
            navigate("/")
        } catch (error) {
            console.log(error);

        }


    }

    return (
        <div className="h-screen">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    onChange={handleChange}
                    type="email"
                    placeholder="ingrese un Email"
                    name="email"
                    id="email"
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    onChange={handleChange}
                    type="password"
                    placeholder="ingrese un Contraseña"
                    name="password"
                    id="password"
                />

                <button className="h-40px w-150px bg-green-400">login</button>
            </form>



        </div>
    )
}

export default RegisterPage4;