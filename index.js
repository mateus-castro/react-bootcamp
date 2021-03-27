"use strict";

var container = document.getElementById("app");

//código em js

// var titulo = document.createElement("h1");

// titulo.innerHTML = "titulo inserido por javasucuripto";

// container.appendChild(titulo);


//código em react

function Contador(props){

    // let numero = 0;

    const [numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero + 1);
        // numero++;
        console.log("somei e ficou = ", numero+1)
    }
    
    function subtrair(){
        setNumero(numero - 1);
        // numero--;
        console.log("subtraí e ficou = ", numero)
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App(){
    return (
        <React.Fragment>
            <h1>Escolha seu jogador preferido da NBA:</h1>
            <Contador titulo="LeBron James" />
            <img src="img/james.jpg" />
            <Contador titulo="Stephen Curry" />
            <img src="img/curry.jpg" />
            <Contador titulo="Russell Westbrook" />
            <img src="img/russ.jpg" />
        </React.Fragment>
        
    );
}




ReactDOM.render(React.createElement(App, null, null), container);

// ReactDOM.render(React.createElement(App, 
//     {
//         titulo: "eu vim de props",
//         paragrafo: "lululululululululu"

//     }, null), container);

// ReactDOM.render(App("asdf"), container);

// usamos PascalCase para componentes em react para 
// diferenciar das functions em JavaScript que são escritas
// em camelCase

// componentes só podem retornar um elemento por componente
// saída -> aninhgar em React.Fragment

// podemos criar propriedades para nossos componentes (props)