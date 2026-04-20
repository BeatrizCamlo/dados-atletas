class Atleta {
    
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
        obtemNomeAtleta(){
        return this.nome;
    }

    obtemIdadeAtleta(){
        return this.idade;
    }

    obtemPesoAtleta(){
        return this.peso;
    }

    obtemNotasAtleta(){
        return this.notas;
    }

    obtemCategoria(){
        return this.calculaCategoria();
    }

    obtemIMC(){
        return this.calculaIMC();
    }

    obtemMediaValida(){
        return this.calculaMediaValida();
    }

    calculaCategoria(){
        if (this.idade >= 9 && this.idade <= 11) return "Infantil";
        if (this.idade >= 12 && this.idade <= 13) return "Juvenil";
        if (this.idade >= 14 && this.idade <= 15) return "Intermediário";
        if (this.idade >= 16 && this.idade <= 30) return "Adulto";
        return "Sem categoria";
    }

    calculaIMC(){
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida(){
        let notasOrdenadas = [...this.notas].sort((a, b) => a - b);
        let notasComputadas = notasOrdenadas.slice(1, 4); // Remove a primeira e a última de 5 notas
        let soma = notasComputadas.reduce((acc, nota) => acc + nota, 0);
        return soma / notasComputadas.length;
    }

    exibirDados(){
        console.log(`Nome: ${this.obtemNomeAtleta()}`);
        console.log(`Idade: ${this.obtemIdadeAtleta()}`);
        console.log(`Peso: ${this.obtemPesoAtleta()}`);
        console.log(`Altura: ${this.altura}`);
        console.log(`Notas: ${this.obtemNotasAtleta().join(',')}`);
        console.log(`Categoria: ${this.obtemCategoria()}`);
        console.log(`IMC: ${this.obtemIMC()}`);
        console.log(`Média válida: ${this.obtemMediaValida()}`);
        console.log("");
    }
}

const cesar = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
const eleonor = new Atleta("Eleonor Silva", 15, 60, 1.60, [9.5, 8.75, 9.0, 9.25, 8.5]);
cesar.exibirDados();
eleonor.exibirDados();