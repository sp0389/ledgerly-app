interface ButtonProps {
  label: string;
  onClick: () => void;
}

const BlockButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="btn btn-primary btn-block mt-2" onClick={onClick}>
      {label}
    </button>
  )
}

export default BlockButton;