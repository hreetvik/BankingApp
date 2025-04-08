import React from 'react'
import {useNavigate } from 'react-roter-dom'

const Redirect = () => {
    const navigate = useNavigate()
    useEffect(() => {navigate('/dashboard')}, [])

}

export default Redirect
