import { TaskPriority } from "../../types";
import { X } from 'lucide-react'

interface CreateTaskModalProps {
    isOpen: boolean,
    onClose: () => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CreateTaskModal = ({onClose, onSubmit} : CreateTaskModalProps) => {
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black/50
        backdrop-blur-sm z-50">

            {/* input plane */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg">
                {/* Header */}
                <div className="flex items-center justify-between py-4 px-6">
                    <h3 className="font-bold text-lg">Create New Task</h3>
                    <button 
                    className="bg-white text-gray-400 hover:text-gray-600"
                    onClick={onClose}>
                        <X size={24}/>
                    </button>
                </div>

                {/* form */}
                <form 
                className="p-6 space-y-4"
                onSubmit={onSubmit}>
                    {/* title */}
                    <div>
                        <label className="block text-sm text-gray-700 font-medium mb-1">
                            Title
                        </label>
                        <input
                        name="title"
                        required
                        placeholder="e.g, Fix Navigation Bug"
                        className="border w-full rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500
                        border-gray-200 shadow-xs outline-none">
                        </input>
                    </div>

                    {/* description */}
                    <div>
                        <label className="block text-sm text-gray-700 font-medium mb-1">
                            Description
                        </label>
                        <textarea
                        name="description"
                        placeholder="Add details..."
                        rows={3}
                        className="border w-full rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500
                        border-gray-200 shadow-xs outline-none block">
                        </textarea>
                    </div>

                    {/* priority */}
                    <div>
                        <label className="block text-sm text-gray-700 font-medium mb-1">
                            Priority
                        </label>
                        <select 
                        name="priority"
                        className="w-full border rounded-lg px-3 py-2 border-gray-200 shadow-xs">
                            <option value={TaskPriority.LOW}>Low</option>
                            <option value={TaskPriority.MEDIUM}>Medium</option>
                            <option value={TaskPriority.HIGH}>High</option>
                        </select>
                    </div>

                    {/* due date */}
                    <div>
                        <label className="block text-sm text-gray-700 font-medium mb-1">
                            Due
                        </label>
                        <div className="flex items-center gap-2">
                            {/* date */}
                            <input
                            name="date"
                            type="date"
                            placeholder="Date(1-31)"
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500
                            border-gray-200 shadow-xs outline-none">
                            </input>
                        </div>
                    </div>

                    {/* cancel and create task buttons */}
                    <div className="mt-4 flex items-center justify-end gap-3">
                        <button
                        type="button"
                        className="px-4 py-2 bg-white hover:bg-gray-200 transition:colors duration-200
                        rounded-lg"
                        onClick={onClose}>
                            <p className="text-sm">Cancel</p>
                        </button>
                        <button
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700
                        transition:colors duration-200 active:bg-blue-900">
                            <p className="text-sm">Create Task</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTaskModal;
