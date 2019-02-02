import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'case'
})

export class CasePipe implements PipeTransform {
    transform(value: string, type: string, extra: string)
    {
        if(type == 'upper')
            value = value.toUpperCase();
        else if (type == 'lower')
            value = value.toLowerCase();

        return value;
    }
}