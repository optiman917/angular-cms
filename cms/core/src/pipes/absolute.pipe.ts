import { Pipe, PipeTransform } from '@angular/core';
import { ConfigService } from '../infrastructure/config/config.service';
import { isUrlAbsolute } from '../helpers/common';

@Pipe({
    name: 'absolute'
})
export class AbsolutePipe implements PipeTransform {
    constructor(private configService: ConfigService) { }

    public transform(value: string): string {
        if (isUrlAbsolute(value)) return value;
        return `${this.configService.baseApiUrl}${value}`
    }
}