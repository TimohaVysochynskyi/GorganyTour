import path from 'node:path';
import fs from 'node:fs/promises';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from '../constants/index.js';
import { env } from './env.js';

export const saveFileToUploadDir = async (file, folder) => {
  const newFilePath = path.join(UPLOAD_DIR, folder, file.filename);

  await fs.rename(path.join(TEMP_UPLOAD_DIR, file.filename), newFilePath);

  return `${env('APP_DOMAIN')}/uploads/${folder}/${file.filename}`;
};
