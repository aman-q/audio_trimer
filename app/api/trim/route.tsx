// app/api/trim/route.tsx

import { NextRequest, NextResponse } from 'next/server';
import ffmpeg from 'fluent-ffmpeg';
import path from 'path';

export async function POST(req: NextRequest) {
  const { startTime, endTime, filename } = await req.json();

  const inputPath = path.join(process.cwd(), 'public/uploads', filename);
  const outputPath = path.join(process.cwd(), 'public/uploads', `trimmed_${filename}`);

  return new Promise<NextResponse>((resolve, reject) => {
    ffmpeg(inputPath)
      .setStartTime(startTime)
      .setDuration(endTime - startTime)
      .output(outputPath)
      .on('end', async () => {
        resolve(NextResponse.json({ url: `/uploads/trimmed_${filename}` }));
      })
      .on('error', (err) => {
        console.error(err);
        reject(NextResponse.json({ error: err.message }, { status: 500 }));
      })
      .run();
  });
}
