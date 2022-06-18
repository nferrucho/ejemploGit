class Cliente {
    // atributos publicos
    nombre;
    idcliente;
    numeroCuenta;
    //atributo privado: las operaciones de este atributo 
    //solo se puede hacer dentro de la clase
    //el valor no se va a ver fuera de la clase
    #direccion;

    constructor(){
        this.#direccion = "av colon 11-80";
    }

}

class Cuenta {
    numero;
    saldoCuenta;
    agencia;
    // constructor : establece los parametros iniciales de la clase
    constructor(){
        // inicializo atributos
        this.saldoCuenta = 0;
        this.agencia = 13;
        this.numero = "";
        
    }

    depositoCuenta(valor){
        // accediendo al objeto clase referenciado
        if (valor > 0 ) {
            this.saldoCuenta += valor;
        }
        
    }

    retiroCuenta(valor){
        // accediendo al objeto clase referenciado
        if (valor > this.saldoCuenta) {
            this.saldoCuenta -= valor;
        }
        
    }

}

const cliente1 = new Cliente();

cliente1.idcliente = 1;
cliente1.nombre = "nelson";
cliente1.numeroCuenta = 12345;


console.log(cliente1);

const cuenta1 = new Cuenta();
cuenta1.numero = 123456789;
cuenta1.saldoCuenta = 300;
cuenta1.agencia = "bogota";

console.log(cuenta1);

//operaciones con los atributos de la clase
console.log("saldo en cuenta es ", cuenta1.saldoCuenta);
cuenta1.saldoCuenta +=  200;
console.log("saldo en cuenta adicion es ", cuenta1.saldoCuenta);

//usando el metodo depositoCuenta
cuenta1.depositoCuenta(25);
console.log("saldo en cuenta por metodo es ", cuenta1.saldoCuenta);

// creando otra cuenta
const cuentaJuan = new Cuenta();
cuentaJuan.depositoCuenta(125);
console.log("saldo en cuentaJuan por metodo es ", cuentaJuan.saldoCuenta);
cuentaJuan.retiroCuenta(25);
console.log("saldo en cuentaJuan por metodo es ", cuentaJuan.saldoCuenta);
console.log("saldo en cuentaJuan es ", cuentaJuan);