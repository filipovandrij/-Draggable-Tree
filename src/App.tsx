import FamilyTree from "./components/FamilyTree";
import "./App.scss";

type Props = {};
const App = (props: Props) => {
  const familyData = {
    id: 1,
    name: "John",
    children: [],
  };
  return (
    <div className="app">
      <FamilyTree family={familyData} />
    </div>
  );
};
export default App;
