interface ErrorPromptProps {
  value: string
}

const ErrorPrompt: React.FC<ErrorPromptProps> = ({ value }) => {
  return (
    <div className="alert alert-soft alert-error mb-2" role="alert">
      {value}
    </div>
  )
}

export default ErrorPrompt;