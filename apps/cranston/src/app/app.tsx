// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss';
import { PetToys } from '@pets-mono-repo/pet-toys';

export function App() {
  const cranstonToys = ['Feathers on a stick', 'Cardboard Box', 'Shoe Box']
  return (
    <>
      <div className="header">
        <h1 className="title"> Welcome Cranston 👋 </h1>
        <img className="pet-pic" src={'../assets/cranston.jpeg'} alt="cranston" />
      </div>
      <PetToys toys={cranstonToys} />
    </>
  );
}

export default App;
