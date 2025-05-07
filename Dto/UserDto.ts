export default class User {
    constructor(
      public nombre: string,
      public apellido: string,
      public email: string,
      public telefono: string,
      public password: string,
      public id_rol: number
    ) {}
  }
  