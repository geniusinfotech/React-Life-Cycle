
import React from 'react';
import LifeCycle from './components/LifeCycle';
import Counter from './components/Counter';
// import LifecycleDemo from './components/LifecycleDemo';

function App() {
  return (
    <div className="App">
      {/* <LifecycleDemo resetCounter={false} /> */}
      <LifeCycle LastName="Genius Infotech" />
      <Counter />
    </div>
  );
}

export default App;
