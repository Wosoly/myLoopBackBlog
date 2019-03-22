import { Entity, model, property } from '@loopback/repository';

@model()
export class Post extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  author: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  content: string;

  @property({
    type: 'number',
    default: 0,
  })
  pv?: number;


  constructor(data?: Partial<Post>) {
    super(data);
  }
}
