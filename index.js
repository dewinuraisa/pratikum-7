const { useState } = React;

const initialTasks = [
    { id: 1, task: "Go to gym", priority: "High", status: "To Do" },
    { id: 2, task: "Read a book", priority: "Low", status: "Done" },
    { id: 3, task: "Go to market", priority: "Medium", status: "In Progress" },
    { id: 4, task: "Restart Learning Solidworks", priority: "High", status: "To Do" },
    { id: 5, task: "change slider to scroll", priority: "High", status: "Done" },
    { id: 6, task: "To publish the article", priority: "Medium", status: "In Progress" }
];

const TaskList = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState({ task: "", priority: "Low", status: "To Do" });

    const addTask = () => {
        setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
        setNewTask({ task: "", priority: "Low", status: "To Do" });
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    return (
        <div class="max-w-4xl mx-auto p-6">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-3xl font-bold">Task List</h1>
                <button onClick={addTask} class="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center">
                    <i class="fas fa-plus mr-2"></i> Add Task
                </button>
            </div>
            <div class="space-y-4">
                {tasks.map((task) => (
                    <div key={task.id} class="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                        <div>
                            <p class="text-gray-500">Task</p>
                            <p class="font-semibold">{task.task}</p>
                        </div>
                        <div>
                            <p class="text-gray-500">Priority</p>
                            <p class={`font-semibold ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>{task.priority}</p>
                        </div>
                        <div>
                            <p class="text-gray-500">Status</p>
                            <p class="font-semibold text-gray-500">{task.status}</p>
                        </div>
                        <div class="flex items-center space-x-4">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600" />
                            <button class="text-gray-500 hover:text-black"><i class="fas fa-edit"></i></button>
                            <button onClick={() => deleteTask(task.id)} class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                ))}
            </div>
            <div class="mt-6">
                <input
                    type="text"
                    name="task"
                    value={newTask.task}
                    onChange={handleInputChange}
                    placeholder="New Task"
                    class="border p-2 rounded mr-2"
                />
                <select
                    name="priority"
                    value={newTask.priority}
                    onChange={handleInputChange}
                    class="border p-2 rounded mr-2"
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <select
                    name="status"
                    value={newTask.status}
                    onChange={handleInputChange}
                    class="border p-2 rounded"
                >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </div>
        </div>
    );
};


