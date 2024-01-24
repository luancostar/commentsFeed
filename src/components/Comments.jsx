import PropTypes from "prop-types"

Game.PropTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
    onRemove: PropTypes.func
}

export default function Comments(title, onRemove) {
    return (
        <div>
        <h2>{title}</h2>
          <button onClick={onRemove}>Remover</button>
        </div>
    )
}
 