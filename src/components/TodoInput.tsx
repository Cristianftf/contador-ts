import React from "react";

interface Props {
  nuevaTarea: string;
  setNuevaTarea: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

export const TodoInput: React.FC<Props> = ({
  nuevaTarea,
  setNuevaTarea,
  handleAdd,
}) => {
  return (
    <div>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <button onClick={handleAdd}>Agregar</button>
    </div>
  );
};
