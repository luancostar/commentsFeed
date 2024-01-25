import { useState } from "react"

export default function App () {
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  const [comments, setComments] = useState([])
  const handleSubmit = (ev) => { ev.preventDefault()

  const newComment = {
    id: Math.floor(Math.random() * 1000000),
    author: author,
    content: content,
    createdAt: new Date()
  }
  
  setComments((state) => [newComment, ...state])
  setAuthor("")
  setContent("")
}

  return (
    <div id="app">
      <h2>Seção de Comentários:</h2>

      <form onSubmit={handleSubmit} >

        <label htmlFor="author">Email</label>
        <input 
        type="email"
         id="author" 
         value={author}
         onChange={(ev) => setAuthor(ev.target.value)}
         required />
        <br />
        <label htmlFor="content">Comentário:</label>
        <textarea
         id="content" 
         required 
         value={content}
         onChange={(ev) => setContent(ev.target.value)}
         cols="30"
          rows="6"></textarea>
        <br />
        <button>Enviar Comentário</button>
      </form>
      <hr />
      <section id="comments">
        {comments.length > 0
        ? (
          comments.map((comment) => (
              <div key={comment.id}>
              <h3>{comment.author}</h3>
              <span>Em {comment.createdAt.toLocaleString()}</span>
              <p>{comment.content}</p>
             </div>
          ))
        ) : (
          <p>Seja o primeiro a comentar! </p>
        )}
      </section>
    </div>  
  )
}