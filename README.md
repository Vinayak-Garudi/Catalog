# Basic NextJS tempelate

- Compitable with typescript language.
- With UI components.
- Utitlty functions.
- basic example of using useContext for state management:

```typescript
import React from "react";
import { useGlobalState } from "../context/GlobalStateProvider";

const ExampleComponent: React.FC = () => {
  const { state, setState } = useGlobalState();

  // Set a variable in global state
  const setVariable = (key: string, value: any) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Get a variable from global state
  const getVariable = (key: string) => state[key];

  return (
    <div>
      <h2>Global State Management</h2>
      <div>
        <strong>Current State:</strong>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <button onClick={() => setVariable("username", "John Doe")}>
        Set Username
      </button>
      <button onClick={() => alert(getVariable("username"))}>
        Get Username
      </button>
    </div>
  );
};

export default ExampleComponent;
```
