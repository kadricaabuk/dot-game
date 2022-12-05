import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Dot from "./Dot";

function App() {
  const [mousePos, setMousePos] = useState({});
  const [dots, setDots] = useState([]);
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  const handleMouseClick = () => {
    setDots(prev => [...prev, {id: dots.length, x: mousePos.x, y: mousePos.y }]);
  };

  return (
    <div className="bg-gray-900 w-full h-[100vw] p-3" >
      <Buttons setDots={setDots} dots={dots}/>
      <div className="w-full h-full" onClick={() => handleMouseClick()}>
        {dots.length>0 && dots.map(d => <Dot key={d.id} positionX={d.x} positionY={d.y}/>)}
      </div>
    </div>
  );
}

export default App;
