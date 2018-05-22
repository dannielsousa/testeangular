import { Questao } from './questao';

export class Campo extends Questao<string> {
  
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }

}
