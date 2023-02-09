import './index.css'

const Card = props => {
  const {cardsList} = props
  const {id, title, description, imgUrl, className} = cardsList
  return (
    <li className={className} key={id}>
      <h1 className="heading">{title}</h1>
      <p className="para">{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default Card
