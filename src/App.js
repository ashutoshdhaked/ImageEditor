import {useState} from 'react';
import './App.css';
import EditComponent from './EditComponent';
function App() {
   const[disp,setdisp] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
   
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  function edit(){
    setdisp(false);     
  }

  return (
    <div>
      { disp ? 
        <div className='mydiv'>
          <div className='imagebg'> 
          {selectedImage && (
        <div className='selected_image'>
          <img src={selectedImage} alt="Selected" style={{width:'500px',height:'300px'}}/>
        </div>
      )}
          </div>
          <div className='mystyle'>
          <label htmlFor='file' className="custom-file-input">Choose file</label>
          <input  id='file' type='file' className='mybtn' onChange={handleImageChange}/>
             { selectedImage &&(<button onClick={edit} className='editbtn'>Edit</button>)}
          </div>
        </div>
     : 
      <EditComponent image={selectedImage}/>
     }
    </div>
  );
}

export default App;
