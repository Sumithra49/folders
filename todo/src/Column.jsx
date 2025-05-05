import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React from "react";
import TodoItem from "./TodoItem";

function Column({ id, items }) {
  return (
    <div className="column">
      <h2>{id.toUpperCase()}</h2>
      <SortableContext
        id={id}
        items={items}
        strategy={verticalListSortingStrategy}
      >
        {items.map((item, index) => (
          <TodoItem key={item} id={item} index={index} />
        ))}
      </SortableContext>
    </div>
  );
}

export default Column;
