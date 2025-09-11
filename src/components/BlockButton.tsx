interface ButtonProps {
  label: string;
  onClick: () => void;
}

const BlockButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button 
      className="btn btn-primary w-full transform rounded-lg px-6 py-3 text-sm font-medium transition-all hover:scale-[1.02] hover:shadow-lg focus:ring-2 focus:ring-primary/50 active:scale-[0.98]" 
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default BlockButton;