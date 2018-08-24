import {ProgramDetail} from './program-detail';

export class Program {
  id: number;
  program_category_id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  program_detail: ProgramDetail;
}
