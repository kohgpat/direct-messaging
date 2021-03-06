import {useState, useEffect} from 'react';

export default function useMultiKeyPress() {
  const [keysPressed, setKeyPressed] = useState(new Set([]));

  function downHandler({key}) {
    setKeyPressed(keysPressed.add(key));
  }

  const upHandler = ({key}) => {
    keysPressed.delete(key);
    setKeyPressed(keysPressed);
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
    // eslint-disable-next-line
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keysPressed;
}
