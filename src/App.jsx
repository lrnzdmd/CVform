import './assets/style.css';

import Sidebar from './Sidebar.jsx';
import CompiledCV from './CompiledCV.jsx';
import Curriculum from './Curriculum.js';
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

    

  return (
    <>
      <main>
        <Sidebar cv={cv} updateField={updateField} resetCV={resetCV} />
        <CompiledCV cv={cv} />
    </main>
    </>
  )
}

export default App
