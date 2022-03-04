import React from 'react';

import Heading from './Components/Heading';
import SingleIntegerForm from './Forms/SingleIntegerForm';
import MultipleIntegerForm from './Forms/MultipleIntegerForm';

const App = () => {
  return (
    <div>
      <Heading />
      <SingleIntegerForm />
      <MultipleIntegerForm />
    </div>
  );
}

export default App;
