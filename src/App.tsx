import FamilyTree from "./FamilyTree";

type Props = {};
const App = (props: Props) => {
  const familyData = {
    id: 1,
    name: "John",
    children: [],
  };
  return (
    <div>
      <FamilyTree family={familyData} />
    </div>
  );
};
export default App;
