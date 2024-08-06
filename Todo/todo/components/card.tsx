interface todoProps{
    title:string,
    description:string,
    completed : boolean
}

export default function TodoInfo({title,description,completed}:todoProps){
    return <div>
        <div className="flex justify-center items-center">
            <div className="border rounded-sm p-3 m-3">
                Title:{title} <br />
                Description:{description} <br />
                Completed:{completed ?"Completed":"To be completed"}
            </div>
        </div>
    </div>
}