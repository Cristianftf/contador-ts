import { useState } from "react";

// 1️⃣ Definimos la forma de una tarea
interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

export function TodoApp() {
  // 2️⃣ Estado tipado como array de tareas
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [nuevaTarea, setNuevaTarea] = useState<string>("");

  // 3️⃣ Manejar cambios en el input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNuevaTarea(e.target.value);
  };

  // 4️⃣ Agregar tarea
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

  // 5️⃣ Cambiar estado de completada
  const toggleTarea = (id: number): void => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  // 6️⃣ Eliminar tarea
  const eliminarTarea = (id: number): void => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Lista de Tareas (React + TS)</h1>

      <input
        type="text"
        value={nuevaTarea}
        onChange={handleChange}
        placeholder="Escribe una tarea"
      />
      <button onClick={handleAdd}>Agregar</button>

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
    </div>
  );
}
