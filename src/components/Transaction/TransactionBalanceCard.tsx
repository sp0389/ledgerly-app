interface TransactionBalanceCardProps {
  title: string;
  amount: number;
}

const TransactionBalanceCard: React.FC<TransactionBalanceCardProps> = ({ title, amount }) => {
  return (
    <div className="fade-in overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-base-200/30 to-secondary/10 p-6 shadow-xl ring-1 ring-primary/20 transition-all hover:scale-105">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-base-content">{title}</h3>
        <p className="text-2xl font-bold text-primary">
          ${amount.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
export default TransactionBalanceCard;