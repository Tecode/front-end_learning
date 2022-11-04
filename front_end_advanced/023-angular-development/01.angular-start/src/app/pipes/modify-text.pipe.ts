import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifyText'
})
export class ModifyTextPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    return 'C Text ' + value + args;
  }

}
