import { useState } from "react";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const App = () => {
  const dataAtual = new Date();
  const min = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
  const max = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);

  const [minDate, setMinDate] = useState<Date>(min);
  const [maxDate, setMaxDate] = useState<Date>(max);

  return (
    <main className="main-container">
      <section className="label-vencimento">Escolha o período das despesas</section>
      <section className="data-form-control-container">
        <div >
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => {
              setMinDate(date);
            }}
            className="data-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <p className="label-vencimento-a">Á</p>
        <div>
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => {
              setMaxDate(date);
            }}
            className="data-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </section>


    </main>
  );
};

export default App;
