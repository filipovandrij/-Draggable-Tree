import React, { useState } from "react";

interface Person {
  id: number;
  name: string;
  children?: Person[];
  parent?: Person;
  editMode?: boolean;
}

interface FamilyTreeProps {
  family: Person;
  boxRef: any;
  scale: string;
}

const FamilyTree: React.FC<FamilyTreeProps> = ({ scale, boxRef, family }) => {
  const [familyData, setFamilyData] = useState<Person>(family);

  const handleAddChild = (person: Person) => {
    const childName = prompt("Enter new branche:");
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

  const handleChangeName = (
    person: Person,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    person.name = event.target.value;
    setFamilyData({ ...familyData });
  };

  const handleToggleEditMode = (person: Person) => {
    person.editMode = !person.editMode;
    setFamilyData({ ...familyData });
  };

  const renderFamilyTree = (person: Person): JSX.Element => {
    return (
      <div key={person.id}>
        <div className="father-block">
          {person.editMode ? (
            <input
              type="text"
              value={person.name}
              onChange={(event) => handleChangeName(person, event)}
            />
          ) : (
            <span>{person.name}</span>
          )}
          <button className="add-button" onClick={() => handleAddChild(person)}>
            +
          </button>
          {person.parent && (
            <button
              className="delete-button"
              onClick={() => handleRemoveChild(person)}
            >
              X
            </button>
          )}
          <button
            className="edit-button"
            onClick={() => handleToggleEditMode(person)}
          >
            {person.editMode ? "✔" : "✎"}
          </button>
        </div>
        <div className="block">
          {person.children &&
            person.children.map((child) => (
              <React.Fragment key={child.id}>
                {renderFamilyTree(child)}
              </React.Fragment>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div
      ref={boxRef}
      style={{ transform: ` scale(${scale})` }}
      className="family-tree"
    >
      {renderFamilyTree(familyData)}
    </div>
  );
};

export default FamilyTree;
