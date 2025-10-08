import React from "react";

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

interface Props {
  tareas: Tarea[];
  toggleTarea: (id: number) => void;
  eliminarTarea: (id: number) => void;
}

export const TodoList: React.FC<Props> = ({
  tareas,
  toggleTarea,
  eliminarTarea,
}) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tareas.map((t) => (
        <li
          key={t.id}
          style={{
            textDecoration: t.completada ? "line-through" : "none",
            margin: "8px 0",
          }}
        >
          <span onClick={() => toggleTarea(t.id)}>{t.texto}</span>
          <button
            onClick={() => eliminarTarea(t.id)}
            style={{ marginLeft: "10px" }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};
