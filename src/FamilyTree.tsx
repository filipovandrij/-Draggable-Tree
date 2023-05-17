import React, { useState } from "react";

interface Person {
  id: number;
  name: string;
  children?: Person[];
  parent?: Person;
}

interface FamilyTreeProps {
  family: Person;
}

const FamilyTree: React.FC<FamilyTreeProps> = ({ family }) => {
  const [familyData, setFamilyData] = useState<Person>(family);

  const handleAddChild = (person: Person) => {
    const childName = prompt("Введіть ім'я нового дитини:");
    if (childName) {
      const newChild: Person = {
        id: Math.random(),
        name: childName,
        parent: person,
      };

      person.children = person.children
        ? [...person.children, newChild]
        : [newChild];
      setFamilyData({ ...familyData });
    }
  };

  const handleRemoveChild = (child: Person) => {
    if (child.parent) {
      child.parent.children = child.parent.children?.filter(
        (c) => c.id !== child.id
      );
      setFamilyData({ ...familyData });
    }
  };

  console.log(familyData);

  const renderFamilyTree = (person: Person, level: number): JSX.Element => {
    return (
      <div key={person.id} style={{ marginLeft: `${level * 20}px` }}>
        <div>
          <input type="text" defaultValue={person.name} />
          <button onClick={() => handleAddChild(person)}>+</button>
          {person.parent && (
            <button onClick={() => handleRemoveChild(person)}>-</button>
          )}
        </div>
        {person.children &&
          person.children.map((child) => renderFamilyTree(child, level + 1))}
      </div>
    );
  };

  return <div className="family-tree">{renderFamilyTree(familyData, 0)}</div>;
};

export default FamilyTree;
