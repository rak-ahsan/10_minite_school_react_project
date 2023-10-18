import React, { useEffect, useState } from 'react'
import Header from "../component/he"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const login = () => {
    const dom = useNavigate()

    const [username, setUsername] = useState({
        username: '',
        password: ''

    })
    const input = (e) => {
        e.persist();
        setUsername({ ...username, [e.target.name]: e.target.value })
    }

    const save = (e) => {

        e.preventDefault()
        const data = {
            username: username.username,
            password: username.password
        }
        axios.post(`http://localhost/ReactProject/api/login-api.php`, data).then(res => {

        console.log(res);

        if (res.data.token) {
            let auth = res.data.token
            localStorage.setItem('name', res.data[0][0].tea_name);
            localStorage.setItem('role', res.data[0][0].tea_role);
            localStorage.setItem('tea_id', res.data[0][0].tea_id);
            localStorage.setItem('subject', res.data[0][0].sub_name);
            localStorage.setItem('subject_id', res.data[0][0].tea_subject);
            localStorage.setItem('class_name', res.data[0][0].class_name);
            localStorage.setItem('token', res.data.token);
            sessionStorage.setItem('auth', auth);
            dom('/dashboard');
        }else{
            alert ("please check Login Details")
        }
        

            // dom('/dashboard')
        });
        console.log(data);
    }


    return (
        <><Header />
            <div className="container mt-5 justify-content-center d-flex">
                <form class="row g-3" onSubmit={save}>
                    <div class="col-auto">
                        <label for="staticEmail2" class="visually-hidden">Email</label>
                        <input type="text" class="form-control" id="inputPassword2" placeholder="Username" name='username' value={username.username} onChange={input} />
                    </div>
                    <div class="col-auto">
                        <label for="inputPassword2" class="visually-hidden">Password</label>
                        <input type="password" class="form-control" id="inputPassword2" placeholder="Password" name='password' value={username.password} onChange={input} />
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">Login</button>
                    </div>
                </form>
            </div></>
    )
}

export default login