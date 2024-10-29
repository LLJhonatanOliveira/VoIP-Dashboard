import RamalCard from "../components/atoms/Ramal/RamalCard";

interface Extension {
  number: string;
  operator: string;
  status: "online" | "offline" | "on-call";
}

const MonitoringPage = () => {
  const extensions1: Extension[] = [
    { number: "101", operator: "Alice", status: "online" },
    { number: "102", operator: "Bob", status: "offline" },
    { number: "103", operator: "Charlie", status: "on-call" },
  ];

  const extensions2: Extension[] = [
    { number: "101", operator: "Alice", status: "online" },
    { number: "102", operator: "Bob", status: "offline" },
    { number: "103", operator: "Charlie", status: "on-call" },
    { number: "101", operator: "Alice", status: "online" },
    { number: "102", operator: "Bob", status: "offline" },
    { number: "103", operator: "Charlie", status: "on-call" },
    { number: "101", operator: "Alice", status: "online" },
    { number: "102", operator: "Bob", status: "offline" },
    { number: "103", operator: "Charlie", status: "on-call" },
  ];

  const extensions3: Extension[] = [
    { number: "101", operator: "Alice", status: "online" },
    { number: "102", operator: "Bob", status: "offline" },
    { number: "103", operator: "Charlie", status: "on-call" },
  ];

  return (
    <>
      <div className="text-lg font-bold mb-4">Monitoramento de Ramais</div>
      <div className="flex">
      <div className="flex-1 p-4" >
        <p className="font-semibold mb-2">Suporte</p>
        {extensions1.map((ext) => (
          <RamalCard
            key={ext.number}
            extensionNumber={ext.number}
            operatorName={ext.operator}
            status={ext.status}
          />
        ))}
      </div>
      <div className="flex-1 p-4">
        <p className="font-semibold mb-2">Comercial</p>
        {extensions2.map((ext) => (
          <RamalCard
            key={ext.number}
            extensionNumber={ext.number}
            operatorName={ext.operator}
            status={ext.status}
          />
        ))}
      </div>
      <div className="flex-1 p-4">
        <p className="font-semibold mb-2">Atendimento</p>
        {extensions3.map((ext) => (
          <RamalCard
            key={ext.number}
            extensionNumber={ext.number}
            operatorName={ext.operator}
            status={ext.status}
          />
        ))}
      </div>
      <div className="flex-1 p-4">
        <p className="font-semibold mb-2">RH</p>
        {extensions1.map((ext) => (
          <RamalCard
            key={ext.number}
            extensionNumber={ext.number}
            operatorName={ext.operator}
            status={ext.status}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default MonitoringPage;
