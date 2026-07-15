export default function DefaultItem({ showCreateFun }) {
  return (
    <div>
      <h2>No Project Selected</h2>
      <p>select a project or create a new one</p>
      <button onClick={showCreateFun}>Create new project</button>
    </div>
  );
}
