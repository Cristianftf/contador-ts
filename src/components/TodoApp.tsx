import { useState, useEffect } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoItem";



interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

export function TodoApp() {
  const [tareas, setTareas] = useState<Tarea[]>(() => {
    const saved = localStorage.getItem("tareas");
    return saved ? JSON.parse(saved) : [];
  });

  const [nuevaTarea, setNuevaTarea] = useState<string>("");

  const handleAdd = (): void => {
    if (nuevaTarea.trim() === "") return;
    const nueva: Tarea = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false,
    };
    setTareas([...tareas, nueva]);
    setNuevaTarea("");
  };

  const toggleTarea = (id: number): void => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const eliminarTarea = (id: number): void => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Lista de Tareas</h1>
      <TodoInput
        nuevaTarea={nuevaTarea}
        setNuevaTarea={setNuevaTarea}
        handleAdd={handleAdd}
      />
      <TodoList
        tareas={tareas}
        toggleTarea={toggleTarea}
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
}
