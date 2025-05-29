export class Prestador {
    id: string;
    nombre?: string;
    ciudad?: string;
    departamento?: string;
    direccion?: string;
    telefono?: string;
    tipo?: string;
  
    constructor(
      id: string,
      ciudad?: string,
      nombre?: string,
      departamento?: string,
      direccion?: string,
      telefono?: string,
      tipo?: string
    ) {
      this.id = id;
      this.nombre = nombre;
      this.ciudad = ciudad;
      this.departamento = departamento;
      this.direccion = direccion;
      this.telefono = telefono;
      this.tipo = tipo;
    }
  }
  