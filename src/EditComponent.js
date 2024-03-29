import { PinturaEditor } from '@pqina/react-pintura';
import { getEditorDefaults } from '@pqina/pintura';
import {useState} from 'react';
import '@pqina/pintura/pintura.css';
import './EditComponent.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const EditComponent = (props)=>{
    const [customState , setCustomState] = useState(true);
    const [inlineResult, setInlineResult] = useState();
    let imagefile = props.image;
    console.log('image ; '+imagefile);

  function download(){
    const link = document.createElement('a');
    link.href = inlineResult;
    link.download = 'downloaded-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }

   function editImage(){
    imagefile =  inlineResult;
    setCustomState(true);
    }

    return(
        <>
         { customState ?
                    <div style={{height: '100vh'}}>
                    <ToastContainer/>
                        <PinturaEditor
                            {...getEditorDefaults()}
                            src={imagefile}
                            onProcess={(res) =>{
                                 toast.success("your image is edited !!");
                                 setCustomState(false);
                                 setInlineResult(URL.createObjectURL(res.dest));
                                }
                            }
                        />   
                    </div>
           :
           <div className='imagesection'>
           {inlineResult ? 
            <div className='download_section'>
            <img src={inlineResult} alt="edited_image" className='myimage'/>
            <div className='btns'>
            <button onClick={download} className='downloadbtn'>Download</button>
             <button onClick={editImage} className='downloadbtn'>Edit</button>
             </div>
            </div>
          :''}
         </div>
           }
        </>
    )
}
export default EditComponent;
