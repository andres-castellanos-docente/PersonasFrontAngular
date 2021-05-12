export class PersonasModel {
  id: number;
  primernombre: string;
  segundnombre: string;
  primerapellido: string;
  segundoapellido: string;
  ncelular: number;
  email: string;

  constructor(json: any = null) {
    if (json !== null) {
      this.id = json.id;
      this.primernombre = json.primernombre;
      this.segundnombre = json.segundnombre;
      this.primerapellido = json.primerapellido;
      this.segundoapellido = json.segundoapellido;
      this.ncelular = json.ncelular;
      this.email = json.email;
    } else {
      this.id = null;
      this.primernombre = null;
      this.segundnombre = null;
      this.primerapellido = null;
      this.segundoapellido = null;
      this.ncelular = null;
      this.email = null;
    }
  }
}
