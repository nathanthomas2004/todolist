export default function TodoItem({info, uniqueKey, deleteElement}) {
    const handleDelete = () => {
        deleteElement(uniqueKey); 
    }

    return (
        <div>
            <h2>{info}  {uniqueKey}</h2>
            <button onClick={handleDelete}></button>
        </div>
    );
}