import { useState } from "react"

export default function useCommentsRoll () {
    const [comments, setComments] = useState(() => {
    const storedGames = localStorage.getItem("obc-comments-lib")
    if (!storedGames) return []
    return JSON.parse(storedGames)
  })

 
  const addComment = ({title}) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = {id, title}
    setComments(state => {
      const newState = [...state, game]
      localStorage.setItem("obc-comments-lib", JSON.stringify(newState))
      return newState
    })
  }


  const removeComment = (id) => {
    setComments(state => {
      const newState = state.filter(comment => comment.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  return { comments, addComment, removeComment}
}