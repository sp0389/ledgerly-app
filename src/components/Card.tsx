interface CardProps { }

const Card: React.FC<CardProps> = () => {
  return (
    <div>
      <div className="card w-full">
        <div className="card-body shadow-lg rounded-lg">
          <h5 className="card-title mb-2.5">Welcome to Our Service</h5>
          <p className="mb-4">Discover the features and benefits that our service offers. Enhance your experience with our user-friendly platform designed to meet all your needs.</p>
          <div className="card-actions">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card;