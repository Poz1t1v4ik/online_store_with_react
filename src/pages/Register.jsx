import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


export default function Register() {
   const [email, setEmail] = useState('')
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [password2, setPassword2] = useState('')
   const navigate = useNavigate()

   
return (
    <div className='section is-medium'>
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-5">
                    <div className="box has-background-info-light">
                        <div className="title has-text-centered">Register</div>
                       {/* {place for form} */}
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

