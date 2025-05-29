export class Doctor {
    ciudad?: string;
    departamento?: string;
    descripcion?: string;
    direccion?: string;
    especialidad?: string;
    horario?: string;
    id: string;
    nombre?: string;
    registro?: string;
    telefono?: string;
  
    constructor(
      id: string,
      ciudad?: string,
      departamento?: string,
      descripcion?: string,
      direccion?: string,
      especialidad?: string,
      horario?: string,
      nombre?: string,
      registro?: string,
      telefono?: string
    ) {
      this.ciudad = ciudad;
      this.departamento = departamento;
      this.descripcion = descripcion;
      this.direccion = direccion;
      this.especialidad = especialidad;
      this.horario = horario;
      this.id = id;
      this.nombre = nombre;
      this.registro = registro;
      this.telefono = telefono;
    }
  }
  