import Invoice from "./Invoice";

const Invoices = ({ invoices, onDelete }) => {
  return (
    <>
      {invoices.map((invoice, index) => (
        <Invoice key={index} invoice={invoice} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Invoices;
