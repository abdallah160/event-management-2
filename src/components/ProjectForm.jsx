import { useRef } from "react";

export default function ProjectForm({ postFunction }) {
  let titleRef = useRef();
  let descriptionRef = useRef();
  let dateRef = useRef();
  return (
    <div>
      <div>
        <button>Cancel</button>
        <button
          onClick={() =>
            postFunction({
              id: Date.now(),
              title: titleRef.current.value,
              description: descriptionRef.current.value,
              date: dateRef.current.value,
              tasks: [],
            })
          }
        >
          Create
        </button>
      </div>
      <label>Title</label>
      <input ref={titleRef} type="text" />

      <label>Description</label>
      <input ref={descriptionRef} type="text" />

      <label>Due Date</label>
      <input ref={dateRef} type="date" />
    </div>
  );
}
