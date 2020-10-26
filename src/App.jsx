import React, { useState, useEffect } from 'react'



const App = () => {

const [posts, setPosts] = useState([])
const [selectedPost, setSelectedPost] = useState("1")



useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(posts => setPosts(json))
})
}

return (
    <main className="container">
        <section className="row my-2">
            <div className="col-md-12">
                <select
                    value={selectedPost}
                    onChange={event => setSelectedPost(event.target.value)}
                    className="form-control">
                    {posts.map(posts => (
                        <option key={posts.id} value={posts.id}>{posts.title}</option>
                    ))}
                </select>
            </div>
        </section>
        <section className="row">
            <Card id={selectedPost} />
        </section>
    </main>
);



export default App