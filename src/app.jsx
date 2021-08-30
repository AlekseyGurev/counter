import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";
function App() {
  const initialState = [
    { value: 0, id: 1, name: "Вилка" },
    { value: 4, id: 2, name: "Ложка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Арбуз" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (counterId) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === counterId) {
          counter.value += 1;
        }
        return counter;
      })
    );
  };

  const handleDecrement = (counterId) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === counterId) {
          if (counter.value > 0) {
            counter.value -= 1;
          }
        }
        return counter;
      })
    );
  };

  const handleDelete = (counterId) => {
    setCounters(counters.filter((counter) => counter.id !== counterId));
  };
  const handleReset = () => setCounters(initialState);

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, b) => a + b.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
