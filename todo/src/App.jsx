import { closestCenter, DndContext } from '@dnd-kit/core';
import React, { useState } from 'react';
import Column from './Column';

const initialData = {
  todo: ['Task 1', 'Task 2'],
  inProgress: ['Task 3'],
  review: [],
  done: [],
  closed: [],
};

function App() {
  const [tasks, setTasks] = useState(initialData);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const sourceColumn = active.data.current.sortableContainerId;
      const destinationColumn = over.data.current.sortableContainerId;

      const sourceItems = tasks[sourceColumn];
      const destinationItems = tasks[destinationColumn];

      const [movedItem] = sourceItems.splice(active.data.current.index, 1);
      destinationItems.splice(over.data.current.index, 0, movedItem);

      setTasks({
        ...tasks,
        [sourceColumn]: sourceItems,
        [destinationColumn]: destinationItems,
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="columns">
        {Object.keys(tasks).map((status) => (
          <Column key={status} id={status} items={tasks[status]} />
        ))}
      </div>
    </DndContext>
  );
}

export default App;
