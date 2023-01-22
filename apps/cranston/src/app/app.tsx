// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss';
import { PetToys } from '@pets-mono-repo/pet-toys';

export function App() {
  const cranstonToys = ['Feathers on a stick', 'Cardboard Box', 'Shoe Box']
  return (
    <>
      <h1 className="title">
        <span> Hello there, </span>
        Welcome Cranston 👋
      </h1>
      <PetToys toys={cranstonToys} />
    </>
  );
}

export default App;
