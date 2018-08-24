import {CreatedAt} from './created-at';
import {ActivityList} from '../activity-list';
import {Output} from '../output';
import {Input} from '@angular/core';

export class Activity {
  id: number;
  name: string;
  description: string;
  created_at: CreatedAt;
  activity_list: ActivityList[];
  output: Output[];
  input: Input[];
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || null;
    this.description = obj && obj.description || null;
    this.created_at = obj && obj.created_at || null;
    this.activity_list = obj && obj.activity_list || null;
    this.output = obj && obj.output || null;
    this.input = obj && obj.input || null;
  }
}
