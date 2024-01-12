import { PinturaEditor } from '@pqina/react-pintura';
import { getEditorDefaults } from '@pqina/pintura';
import {useState} from 'react';
import '@pqina/pintura/pintura.css';
import './EditComponent.css';

 const EditComponent = (props)=>{
    const [inlineResult, setInlineResult] = useState();
    const imagefile = props.image;
     console.log('image ; '+imagefile);

  function download(){
    const link = document.createElement('a');
    link.href = inlineResult;
    link.download = 'downloaded-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }

    return(
        <>
        <div style={{height: '100vh'}}>
            <PinturaEditor
                {...getEditorDefaults()}
                src={imagefile}
                onProcess={(res) =>
                    setInlineResult(URL.createObjectURL(res.dest))
                }
            />   
        </div>
        <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'50vh', margin:'10vh'}}>
        {inlineResult ? 
           <div className='download_section'>
           <img src={inlineResult} alt="edited_image" className='myimage'/>
           <button onClick={download} className='downloadbtn'>Download</button>
           </div>
         :''}
        </div>
        </>
    )
}
export default EditComponent;
