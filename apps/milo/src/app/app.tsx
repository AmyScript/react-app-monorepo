import './app.scss';
import { PetToys } from '@pets-mono-repo/pet-toys';

export function App() {
  const miloToys = ['Ball', 'Socks', 'Stuffed Hedgehog', 'Frisbee', 'Stuffed Dino']
  return (
    <>
      <h1 className="title">
        <span> Hello there, </span>
        Welcome Milo 👋
      </h1>
      <PetToys toys={miloToys} />
    </>
  );
}

export default App;
