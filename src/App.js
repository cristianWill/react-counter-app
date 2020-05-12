import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  // Utilizado para estado de um componente react, o React analisa alterações para atualizar a DOM.
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // Lugar correto de inicializar props
  constructor() {
    super();
    console.log("App - Constructor");
  }

  // Como se fosse o Load de C#, é o lugar ideal para chamar Ajax, e
  componentDidMount() {
    // Call some setState function here
    console.log("App - Mounted");
  }

  // Funcao para gerenciar evento delete.
  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    // Quando o objeto é passado com ... é obtido a referencia, não valor.
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    // Criando um novo objeto com o dado atualizado.
    counters[index] = { ...counter };
    counters[index].value++;

    // Alterando state via React.
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
