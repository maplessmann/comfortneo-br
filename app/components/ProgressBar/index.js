const ProgressBar = ({ currentStep, totalSteps }) => {
  const scale = currentStep / totalSteps
  const progressStyle = {
    transform: `scaleX(${scale || 0})`,
  }

  return (
    <div className="progressbar">
      <div className="bar" style={progressStyle} />
    </div>
  )
}

export default ProgressBar
