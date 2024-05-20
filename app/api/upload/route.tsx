// app/api/upload/route.tsx

import { NextRequest, NextResponse } from 'next/server';
import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  const form = new IncomingForm();
  form.uploadDir = path.join(process.cwd(), 'public/uploads');
  form.keepExtensions = true;
  
  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject(NextResponse.json({ error: err.message }, { status: 500 }));
        return;
      }

      const file = files.file[0];
      const oldPath = file.filepath;
      const newPath = path.join(process.cwd(), 'public/uploads', file.newFilename);
      await fs.rename(oldPath, newPath);

      resolve(NextResponse.json({ url: `/uploads/${file.newFilename}` }));
    });
  });
}

export const handleRequest = POST;
export const middleware = ['bodyParser'];
