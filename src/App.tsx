import { useState, useEffect, useRef } from "react";
import FamilyTree from "./components/FamilyTree";
import "./App.scss";
import Header from "./container/Header";

type Props = {};
const App = (props: Props) => {
  const familyData = {
    id: 1,
    name: "Category",
    children: [],
  };

  const [scale, setScale] = useState("1");

  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    if (!boxRef.current || !containerRef.current) return;

    const box = boxRef.current;
    const container = containerRef.current;

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };
    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nxetX = e.clientX - coords.current.startX + coords.current.lastX;
      const nxetY = e.clientY - coords.current.startY + coords.current.lastY;

      box.style.top = `${nxetY}px`;
      box.style.left = `${nxetX}px`;
    };

    box.addEventListener("mousedown", onMouseDown);
    box.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    const cleanUp = () => {
      box.removeEventListener("mousedown", onMouseDown);
      box.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
    };
    return cleanUp;
  }, []);

  return (
    <div className="app">
      <Header scale={scale} setScale={setScale} />
      <div ref={containerRef} className="draggble-container">
        <FamilyTree scale={scale} boxRef={boxRef} family={familyData} />
      </div>
    </div>
  );
};
export default App;
