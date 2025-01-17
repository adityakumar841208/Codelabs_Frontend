import { useState } from 'react';
import { Button, TextareaAutosize, TextField } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import CloseIcon from '@mui/icons-material/Close';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const PostOption = () => {
  const [postModel, setPostModal] = useState(false);
  const [articleModal, setArticleModal] = useState(false);
  const [editorContent, setEditorContent] = useState(''); 

  return (
    <div className="p-4 rounded-md shadow-md m-2 border">
      {/* Start a Post Section */}
      <div className="flex items-center space-x-3 p-3 bg-slate-100 rounded-lg mb-4 border">
        <img
          src="./comp.webp"
          alt="User Avatar"
          className="rounded-full w-10 h-10 border"
        />
        <input
          onClick={() => setPostModal(true)} // Set postModel to true on click
          type="text"
          placeholder="Write here something..."
          className="w-full p-2 rounded-full text-black placeholder:text-gray-600 placeholder-black outline-none border"
        />
      </div>

      {/* Options Section */}
      <div className="flex md:flex justify-center md:justify-between text-gray-400 gap-2">
        <Button
          startIcon={<InsertPhotoIcon />}
          sx={{ background: "blue", color: "white" }}
          className="hover:bg-blue-800 w-1/2 sm:w-auto"
          onClick={() => setPostModal(true)}
        >
          Media
        </Button>
        <Button
          startIcon={<ArticleIcon />}
          sx={{ background: "blue", color: "white" }}
          className="hover:bg-blue-800 w-1/2 sm:w-auto"
          onClick={() => setArticleModal(true)}
        >
          Write article
        </Button>
      </div>

      {/* Post Model */}
      {
        postModel && ( // Show post model when postModel is true
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-md shadow-lg w-full m-1 md:w-1/2 md:min-h-2/3 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold">Create a post</h1>
                <button onClick={() => setPostModal(false)}><CloseIcon /></button>
              </div>
              <textarea
                className="p-2 outline-none rounded-lg focus:outline-none h-80 placeholder:text-black/60 text-lg"
                placeholder="What do you want to talk about?"
              />

              <div className='upload-fileSection flex gap-3'>
                {/* add media icon  */}
                <div className='flex items-center gap-1 p-2 border rounded-lg text-gray-500'>
                  <InsertPhotoIcon />
                </div>
                <div className='flex items-center gap-1 p-2 border rounded-lg text-gray-500'>
                  <ArticleIcon />
                </div>
              </div>

              <Button
                startIcon={<EventIcon />}
                sx={{ background: "blue", color: "white" }}
                className="hover:bg-blue-800 w-full"
              >
                Post
              </Button>
            </div>
          </div>
        )
      }

      {articleModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md shadow-lg w-full m-1 md:w-2/3 md:min-h-2/3 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-xl font-semibold">Write Your Article</h1>
              <button onClick={() => setArticleModal(false)}><CloseIcon /></button>
            </div>

            {/* Quill Editor */}
            <ReactQuill
              theme="snow"
              value={editorContent}
              onChange={setEditorContent}
              placeholder="Write your article here..."
              className="h-64"
            />

            <div className="upload-fileSection flex gap-3 mt-12">
              <div className="flex items-center gap-1 p-2 border rounded-lg text-gray-500 cursor-pointer">
                <InsertPhotoIcon />
                <span>Upload Image</span>
              </div>
            </div>

            <Button
              sx={{ background: 'blue', color: 'white' }}
              className="hover:bg-blue-800 w-full"
              onClick={() => {
                console.log('Article content:', editorContent); // You can replace this with your API call
                setArticleModal(false);
              }}
            >
              Publish Article
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostOption;
