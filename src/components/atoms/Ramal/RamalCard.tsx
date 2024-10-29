interface RamalCardProps {
  extensionNumber: string;
  operatorName: string;
  status: "online" | "offline" | "on-call";
}

const RamalCard = ({
  extensionNumber,
  operatorName,
  status,
}: RamalCardProps) => {
  const statusClasses = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    "on-call": "bg-orange-500",
  };
  const cardColor = statusClasses[status];
  return (
<div className={`flex p-2 mb-2 text-white rounded ${cardColor}`}>
            <div className={`w-1/5 p-2 items-center justify-center`}>
                <h3 className="text-lg">{extensionNumber}</h3>
            </div>
            <div className={`flex-1 p-2 flex items-center justify-center`}>
                <p className="text-sm">{operatorName}</p>
            </div>
        </div>
  );
};

export default RamalCard;
