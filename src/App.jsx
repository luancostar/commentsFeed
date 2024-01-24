import Comments from "./components/Comments"
import NewCommentForm from "./components/NewCommentForm"
import useCommentsRoll from "./hooks/useCommentsRoll"


export default function App () {
  const {comments, addComment, removeComment} = useCommentsRoll ()


  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
     <NewCommentForm addGame={addComment} />
       <div className="games">
        {comments.length > 0 ? 
        comments.map((game) => (
        <Comments
         key={game.id}
         title={game.title}
         cover={game.cover}
         onRemove={() => removeComment(game.id)}
         />))
        : (
          <h2>Parece que ainda não há jogos adicionados</h2>
        )}
       </div>
    </div>
  )
}