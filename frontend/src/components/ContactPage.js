// src/components/ContactPage.js
import React, { useState } from 'react';
import callApi from '../utils/api';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const data = await callApi('/contact', {
                method: 'POST',
                body: JSON.stringify(formData),
            });
            console.log(data); // Tratar la respuesta
        } catch (error) {
            console.error(error); // Manejar el error
        }
    };

    return ( <
        form onSubmit = { handleSubmit } > { /* Form fields */ } <
        input name = "name"
        value = { formData.name }
        onChange = { handleChange }
        /> <
        input name = "email"
        value = { formData.email }
        onChange = { handleChange }
        /> <
        textarea name = "message"
        value = { formData.message }
        onChange = { handleChange }
        /> <
        button type = "submit" > Enviar < /button> <
        /form>
    );
};

export default ContactPage;