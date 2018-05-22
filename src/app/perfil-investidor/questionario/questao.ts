export class Questao<T> {

  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  class: string;
  name: string;
  opcoes: [''];
  texto: string;

  constructor( options: { 
        value?: T, 
        key?: string, 
        label?: string, 
        requered?: boolean, 
        order?: number, 
        controlType?: string, 
        class?: string,
        name?: string,
        opcoes?: [''],
        texto?: string } = {}) {

      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.requered;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.class = options.class || '';
      this.name = options.name;
      this.opcoes = options.opcoes;
      this.texto = options.texto;
    }
}
