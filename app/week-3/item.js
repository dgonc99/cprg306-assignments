const Item = ({ name, quantity, category }) => {
    return (
        <li className="flex justify-between items-center p-4 border-b bg-slate-700" >
        <ul className="flex justify-between items-center p-4 border-b bg-slate-700" >
            <div className="flex flex-col">
                <span className="font-bold text-lg text-white">{name}</span>
                <span className="text-white">Buy {quantity} in {category}</span>
                <li className="font-bold text-lg text-white">{name}</li>
                <li className="text-white">Buy {quantity} in {category}</li>
            </div>
        </li>
        </ul>
    );
};

export default Item;