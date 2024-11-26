"use client"
import { useState } from 'react';

const AddLink = () => {
  const [title, setTitle] = useState<string>('');
  const [url, setUrl] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, url }),
    });

    if (response.ok) {
      // Clear the form and maybe redirect
      setTitle('');
      setUrl('');
    } else {
      console.error('Failed to add link');
    }
  };

  return (
    <div className='max-h- h-fit p-4 rounded-2xl border-2 border-gray-500 space-y-4  w-1/3 flex flex-col items-start justify-between'>
      <h1 className='text-3xl'>Add a new Link</h1>
      <form onSubmit={handleSubmit} className='space-y-16 text-gray-400'>
        <div className='flex flex-col items-start'>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
			className='input'
			placeholder='Title'
          />
        </div>
        <div className='flex flex-col items-start'>
          <label htmlFor="url">URL</label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
			className='input'
			placeholder='Link'
          />
        </div>
        <button type="submit" className='p-4 rounded-lg shadow-sm shadow-gray-600'>Add Link</button>
      </form>
    </div>
  );
};

export default AddLink;
