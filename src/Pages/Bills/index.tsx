import { useEffect, useState } from "react";
import './styles.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Bills = () => {
  const dataAtual = new Date();
  const min = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
  const max = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);

  const [minDate, setMinDate] = useState<Date>(min);
  const [maxDate, setMaxDate] = useState<Date>(max);

  const alteraData = (date: Date) => {
    setMinDate(new Date(date.getFullYear(), date.getMonth(), 1));
    setMaxDate(new Date(date.getFullYear(), date.getMonth() + 1, 0));
  };

  useEffect(() => {
    //buscar despesas que vencem no mês
  }, [maxDate]);

  return (
    <main className="main-container">
      <section className="label-vencimento">
        Escolha o período das despesas
      </section>
      <section className="data-form-control-container">
        <div>
          <DatePicker
            showIcon
            selected={minDate}
            onChange={alteraData}
            showMonthYearPicker
            className="data-form-control"
            dateFormat="MM/yyyy"
          />
        </div>
      </section>
    </main>
  );
};

export default Bills;
