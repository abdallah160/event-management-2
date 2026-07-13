export default function ProjectForm({ className }) {
    return (

        <div className={className}>
            <div>
                <button>Cancel</button>
                <button>Create</button>
            </div>

            <label>Title</label>
            <input type="text" />

            <label>Description</label>
            <input type="text" />

            <label>Due Date</label>
            <input type="date" />


        </div>
    )
}