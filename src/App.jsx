import Examples from './components/Examples/Examples.jsx';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/Core_Concepts/Core_Concepts.jsx';


function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
