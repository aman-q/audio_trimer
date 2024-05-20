'use client';

import React, { useState, ChangeEvent } from 'react';

const Converter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const [trimmedAudio, setTrimmedAudio] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      alert("File size exceeds 5MB");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log("File uploaded successfully");
    } else {
      console.error("File upload failed");
    }
  };

  const handleTrim = async () => {
    if (!file) {
      alert("No file selected");
      return;
    }

    const response = await fetch('/api/trim', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startTime,
        endTime,
        filename: file.name,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setTrimmedAudio(data.url);
    } else {
      console.error("Audio trimming failed", data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">MP3 (MAX. 5MB)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
      </label>
      <button onClick={handleUpload} className="mt-4 p-2 bg-blue-500 text-white rounded">Upload</button>

      <div className="mt-4">
        <label>
          Start Time (seconds):
          <input type="number" value={startTime} onChange={(e) => setStartTime(Number(e.target.value))} />
        </label>
        <label className="ml-4">
          End Time (seconds):
          <input type="number" value={endTime} onChange={(e) => setEndTime(Number(e.target.value))} />
        </label>
        <button onClick={handleTrim} className="ml-4 p-2 bg-green-500 text-white rounded">Trim</button>
      </div>

      {trimmedAudio && (
        <div className="mt-4">
          <audio controls src={trimmedAudio} />
          <a href={trimmedAudio} download="trimmed_audio.mp3" className="ml-4 p-2 bg-purple-500 text-white rounded">Download Trimmed Audio</a>
        </div>
      )}
    </div>
  );
};

export default Converter;
