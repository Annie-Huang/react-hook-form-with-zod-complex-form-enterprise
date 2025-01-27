import { Schema } from '@/features/employee/wrapper/types/schema';
import { wait } from '@/utils/wait';

export const create = async (data: Schema) => {
  await wait();
  console.log(data);
};
