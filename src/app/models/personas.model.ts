export class PersonasModel {
  id: number;
  primernombre: string;
  segundnombre: string;
  primerapellido: string;
  segundoapellido: string;
  celular: number;
  email: string;

  constructor(json: any = null) {
    if (json !== null) {
      this.id = json.id;
      this.primernombre = json.primernombre;
      this.segundnombre = json.segundnombre;
      this.primerapellido = json.primerapellido;
      this.segundoapellido = json.segundoapellido;
      this.celular = json.celular;
      this.email = json.email;
    } else {
      this.id = null;
      this.primernombre = null;
      this.segundnombre = null;
      this.primerapellido = null;
      this.segundoapellido = null;
      this.celular = null;
      this.email = null;
    }
  }
}
