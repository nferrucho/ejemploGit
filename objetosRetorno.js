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
    //ejemplo de encapsulamiento
    verDireccion(){
        return this.#direccion;
    }

}

class Cuenta {
    numero;
    #saldoCuenta;
    agencia;
    // constructor : establece los parametros iniciales de la clase
    constructor(){
        // inicializo atributos
        this.#saldoCuenta = 0;
        this.agencia = 13;
        this.numero = "";
        
    }

    depositoCuenta(valor){
        // accediendo al objeto clase referenciado
        if (valor > 0 ) {
            this.#saldoCuenta += valor;
        }
        return this.#saldoCuenta;
    }

    retiroCuenta(valor){
        // accediendo al objeto clase referenciado
        if (valor <= this.#saldoCuenta) {
            this.#saldoCuenta -= valor;
        }
        return this.#saldoCuenta;
    }
    // permite retornar valor privado
    verSaldo(){
        return this.#saldoCuenta;
    }
}

const cliente1 = new Cliente();

cliente1.idcliente = 1;
cliente1.nombre = "nelson";
cliente1.numeroCuenta = 12345;
let direccion = cliente1.verDireccion();

console.log(cliente1);
console.log(direccion);

const cuenta1 = new Cuenta();
cuenta1.numero = 123456789;
//cuenta1.#saldoCuenta = 300;
cuenta1.agencia = "bogota";

console.log(cuenta1);

//operaciones con los atributos de la clase
//console.log("saldo en cuenta es ", cuenta1.#saldoCuenta);
//cuenta1.#saldoCuenta +=  200;

//usando el metodo depositoCuenta
cuenta1.depositoCuenta(25);

// creando otra cuenta
const cuentaJuan = new Cuenta();
let saldo = cuentaJuan.verSaldo();
console.log("El saldo es", saldo);
console.log("saldo en cuentaJuan es ", cuentaJuan);

saldo = cuentaJuan.depositoCuenta(125);
console.log("El saldo es", saldo);

saldo = cuentaJuan.retiroCuenta(25);
console.log("El saldo es", saldo);
