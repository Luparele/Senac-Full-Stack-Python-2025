//Sistema de Reservas de Hotel:

//Crie uma classe Hotel com propriedades: nome, cidade, quartosDisponiveis.
class Hotel {
    constructor(nome, cidade, quartosDisponiveis) {
        this.nome = nome;              
        this.cidade = cidade;           
        this.quartos = quartosDisponiveis;      
        this.reserva = [];                  
    }
    
    //Adicione métodos para reservarQuarto() e cancelarReserva().
    reservarQuarto(quartosDisponiveis) {
        this.quartos += quartosDisponiveis;
        this.reserva.push({
            tipo: "Reserva",
            cidade: this.cidade,
            nome: this.nome,
            quartos: quartosDisponiveis,
            cliente: this.cliente,
            CPF: this.cpf,
            data: new Date().toLocaleString()
        })
    }
    cancelarQuarto(quartosDisponiveis) {
        this.quartos -= quartosDisponiveis;
        this.reserva.push({
            tipo: "Desistência",
            cidade: this.cidade,
            nome: this.nome,
            quartos: quartosDisponiveis,
            cliente: this.cliente,
            CPF: this.cpf,
            data: new Date().toLocaleString()
        })
    }
    //criar um historico de reservas do cliente
    historicoReservas() {
        console.log(`\nHistórico de reservas de ${this.cliente}:`);
        console.log("---------------------------------");
        
        this.reserva.forEach(operacao => {
            let detalhes = `${operacao.data} - ${operacao.tipo}: R$${Math.abs(operacao.quartos)}`;
            console.log(detalhes);
        });
        
        console.log("---------------------------------");
    }
}     
//Crie uma classe Cliente com nome, CPF e historicoReservas.
class Cliente {
    constructor (nomecliente, CPF, historicoReservas) {
        this.cliente = nomecliente;
        this.cpf = CPF;
        this.historicoReservas = historicoReservas;
    }
}

const cliente1 = new Cliente("Eduardo", "123.456.789-00", []);
const cliente2 = new Cliente("Monique", "987.654.321-00", []);
const hotel1 = new Hotel("Hotel 1", "cidade A", 10);
const hotel2 = new Hotel("Hotel 2", "cidade B", 20);














