const Item = ({ name, quantity, category }) => {
    return (
        <li className="flex justify-between items-center p-4 border-b bg-slate-700" >
            <div className="flex flex-col">
                <span className="font-bold text-lg text-white">{name}</span>
                <span className="text-white">Buy {quantity} in {category}</span>
            </div>
        </li>
    );
};

export default Item;