interface HeaderProps {
  label: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ label, description }) => {
  return (
    <div className="w-full mb-4 rounded-2xl bg-gradient-to-br from-base-200/30 via-primary/5 to-primary/10 p-8 shadow-lg ring-1 ring-primary/20 sm:flex sm:items-center sm:justify-between">
      <div className="flex flex-col gap-2 sm:max-w-3xl">
        <h2 className="text-3xl font-extrabold text-base-content sm:text-4xl">
          {label}
        </h2>
        <p className="text-base text-base-content/70 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Header;