const Item = ({ name, quantity, category, onSelect }) => {
    
    return (
        <ul onClick={onSelect} className="flex justify-between items-center p-4 border-b bg-slate-700" >
            <div className="flex flex-col">
                <li className="font-bold text-lg text-white">{name}</li>
                <li className="text-white">Buy {quantity} in {category}</li>
            </div>
        </ul>
    );
};

export default Item;