interface HeaderProps {
  label: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ label, description }) => {
  return (
    <div className="rounded-box ring-primary/20 to-primary/10 from-base-100/10 w-full gap-6 bg-gradient-to-br p-6 text-start ring-1 sm:flex mb-2">
      <div className="flex flex-col gap-1.5 sm:w-7/12">
        <h2 className="text-base-content/90 text-2xl leading-tight font-bold capitalize sm:text-4xl">
          {label}
        </h2>
        <p className="text-base-content/80 mt-2 text-base font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Header;