
import PropTypes from "prop-types"
import InputComment from "./InputComment"
import { useState } from "react"
 
NewCommentForm.propTypes = {
    addGame: PropTypes.func
}


export default function NewCommentForm ({addComment}) {
const [title, setTitle] = useState("")
 
const handleSubmit = (ev) => {
    ev.preventDefault()
    addComment({title})
    setTitle("") 
}

return (
<form style={{display: "flex", alignItems:"center", gap:"2rem"}} onSubmit={handleSubmit}>
<InputComment id="title" label="E-mail" value={title} setValue={setTitle} />
 
<button>Adicionar Comentário</button>
</form>
)}
