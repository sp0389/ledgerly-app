interface CardProps {
  title: string
  amount: number
}

const Card: React.FC<CardProps> = ({title, amount}) => {
  return (
    <div>
      <div className="card w-full">
        <div className="card-body shadow-lg rounded-lg">
          <h5 className="card-title mb-2.5">{title}</h5>
          <p>{amount}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card;