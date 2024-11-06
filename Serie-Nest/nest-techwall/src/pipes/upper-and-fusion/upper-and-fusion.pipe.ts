import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UpperAndFusionPipe implements PipeTransform {
  transform(value: {data: string[]}, metadata: ArgumentMetadata) {
    if(metadata.type === 'body'){
      return value.data.map((item) => item.toUpperCase()).join(' ');
    }
    console.log("User Pipe", metadata);
    console.log("Value", value);
    return value;
  }
}
