interface TodoProps {
    id: number; // Unique identifier for the todo
    title: string;
    description: string;
    completed: boolean;
    onComplete: (id: number) => void; // Callback function to handle status change
  }

export default function CardValue({id,title,description,completed,onComplete}:TodoProps){
    return <div>
        <div className="grid grid-cols-1">
            <div className="border rounded-sm p-3 m-3">
                <div className="p-2 m-2 font-xl flex justify-center">
                Title:{title} <br />
                </div>
                <div className="p-2 m-2 font-xl flex justify-center">
                Description:{description} <br />
                </div>

                <div className="flex justify-center">
                <button onClick={()=> onComplete(id)} className="text-white bg-black border-2px rounded p-2 m-2 flex justify-center">{completed ? "Completed":"Mark as complete"}</button>
                </div>
            </div>
        </div>
    </div>
}