import './assets/style.css';

import Sidebar from './Sidebar.jsx';
import CompiledCV from './CompiledCV.jsx';
import {Curriculum, Experience} from './Curriculum.js';
import { useState } from 'react';


function App() {
  
    const [cv, setCV] = useState(new Curriculum());

    function updateField(event) {
        const {name, value} = event.target;
        setCV(prevCv => ({...prevCv, [name]: value}));
    }

    function resetCV() {
        setCV(new Curriculum());
    }

    function updateArrayField(event) {
      const { name, value } = event.target;
      const id = event.target.dataset.uuid;
      const arrayName = event.target.dataset.catname;
      

      setCV(prevCv => {
          const updatedArray = [...prevCv[arrayName]];
          const index = updatedArray.findIndex(item => item.id === id);
        
          if (index !== -1) {

            if (name.includes("date")) {
              const newDate = value;
            updatedArray[index] = {
              ...updatedArray[index],
              [name]: newDate
          };
            } else {


              updatedArray[index] = {
                  ...updatedArray[index],
                  [name]: value
              };
          } 
        }
            
          

          return {
              ...prevCv,
              [arrayName]: updatedArray
          };
      });
  }

  function deleteArrayElement(event) {
      const id = event.target.dataset.uuid;
      const arrayName = event.target.dataset.catname.toLowerCase();


      setCV(prevCv => {
        const updatedArray = [...prevCv[arrayName]];
        const index = updatedArray.findIndex(item => item.id === id);
        
        
        if (index !== -1) {
          updatedArray.splice(index,1);
        }

        return { ...prevCv,
                [arrayName]:updatedArray
        };
      });
    }

    function addArrayElement(event) {
      const arrayName = event.target.dataset.catname.toLowerCase();

      setCV(prevCv => {
        const updatedArray = [...prevCv[arrayName]];
      
          updatedArray.push(new Experience("New"));
        

        return { ...prevCv,
                [arrayName]:updatedArray
        };
      });
    }

      

  
    

  return (
    <>
      <main>
        <Sidebar cv={cv} updateField={updateField} resetCV={resetCV} updateArrayField={updateArrayField} deleteArrayElement={deleteArrayElement} addArrayElement={addArrayElement} />
        <CompiledCV cv={cv} />
    </main>
    </>
  )
}

export default App
