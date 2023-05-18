import FamilyTree from "./components/FamilyTree";
import "./App.scss";
import Header from "./container/Header";

type Props = {};
const App = (props: Props) => {
  const familyData = {
    id: 1,
    name: "John",
    children: [],
  };
  return (
    <div className="app">
      <Header />
      <FamilyTree family={familyData} />
    </div>
  );
};
export default App;
