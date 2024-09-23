import axios from 'axios';

const UploadPage = () => {
  const handleUpload = async (event) => {
    const formData = new FormData();
    formData.append('videoFile', event.target.files[0]);

    try {
      const response = await axios.post('http://localhost:5000/api/videos/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Upload Video</h1>
      <input type="file" onChange={handleUpload} />
    </div>
  );
};

export default UploadPage;
