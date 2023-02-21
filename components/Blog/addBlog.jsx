"use client"
import { useState } from 'react';
import { Card, Text,Input, Textarea, Spacer,Button} from '@nextui-org/react';

const NewBlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [images, setImages] = useState([]);
  const [date, setDate] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new FormData object to store the form data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', author);
    for (const image of images) {
      formData.append('images', image);
    }
    formData.append('date', date);
    formData.append('tags', tags);

    // Send the form data to the backend API
    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      console.log('Blog created successfully');
    } else {
      console.error('Error creating blog:', response.statusText);
    }
  };

  return (
    <div className='p-4 bg-black'>
    <Card>
    <form onSubmit={handleSubmit}>
      <div className='p-2' > 
        <label htmlFor="title">Title:</label>
        <Input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
      </div>
      <Spacer y={1} />
      <div>
        <label htmlFor="content">Content:</label>
        <Textarea size="lg" id="content" value={content} onChange={(event) => setContent(event.target.value)} />
      </div>
        <Spacer y={1} />
      <div>
        <label htmlFor="author">Author:</label>
        <Input type="text" id="author" value={author} onChange={(event) => setAuthor(event.target.value)} />
      </div>
        <Spacer y={1} />
      <div>
        <label htmlFor="images">Images:</label>
        <input type="file" id="images" multiple onChange={(event) => setImages(event.target.files)} />
      </div>
        <Spacer y={1} />
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(event) => setDate(event.target.value)} />
      </div>
        <Spacer y={1} />
      <div>
        <label htmlFor="tags">Tags:</label>
        <Input type="text" id="tags" value={tags} onChange={(event) => setTags(event.target.value)} />
      </div>
        <Spacer y={1} />
      <Button type="submit">Create Blog</Button>
    </form>
    </Card>
    </div>
  );
};


export default NewBlogForm;