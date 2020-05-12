### Primeiro App Usando React.
Primeiro app utilizando React JS. Desenvolvido em um Crash Course do Youtube. Algo super simples mas com muito conceitos interessante sobre essa lib.

<image src="images/PrintScreen.png" width="500"/>

## Desafios
Acostumado com C#, VB.Net foi certamente muito diferente entender como todos os parametros são passados, como funciona a estrutura e acionamento de eventos, porém achei muito produtivo como tudo funciona.

## O que aprendi:
- [x] Como o React funciona através da DOM Virtual e DOM do Usuario.
- [x] Utilizar argumentos Props.
- [x] Lançar e manipular eventos.
- [x] Alterar estados (Set State).
- [x] Sincronizar varios elementos em somente uma base de dados.
- [x] Functional Components (Componentes por função sem extender a classe Components do React).
- [x] LifeCycle Hooks (Sequencia de renderização do React).
- [x] Introdução a JSX.
- [x] Desestruturação em JS (Algo super interessante e novo)

## Partes de codigos que achei mais interessante vindo de linguagem C#.
```
 handleIncrement = (counter) => {
    // Quando o objeto é passado com ... é obtido a referencia, não valor.
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    // Criando um novo objeto com o dado atualizado.
    counters[index] = { ...counter };
    counters[index].value++;

    // Alterando state via React utilizando desestrituração.
    this.setState({ counters });
  };
```
## Link Do Curso.
https://www.youtube.com/watch?v=Ke90Tje7VS0
  
