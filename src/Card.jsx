import React, { useState, useEffect } from 'react'

const Card = props => {
    const [posts, setPosts] = useState({});


    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}, [props.id])
}
