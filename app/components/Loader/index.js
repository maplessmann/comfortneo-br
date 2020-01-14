const Loader = ({ isVisible }) => {
  if (!isVisible) return null

  return (
    <div className="loader-wrapper">
      <svg className="loader" viewBox="25 25 50 50">
        <circle
          className="elipse"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  )
}

export default Loader
