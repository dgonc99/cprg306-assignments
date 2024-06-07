'use client';

import { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = { name, quantity, category };
        console.log(item)

        alert(`Added item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName('');
        setQuantity(1);
        setCategory('produce');
    };


    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-slate-700 shadow-md rounded-md">
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-black">Name:</label>
                    <input 
                        className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder='Item Name'
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-2/10">
                        <label className="block text-sm font-medium text-black">Quantity:</label>
                        <input 
                            className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                            type="number"
                            min="1"
                            max="99"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            required
                        />
                    </div>
                    <div className="w-7/10">
                        <label className="block text-sm font-medium text-black">Category:</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="mt-1 p-2 block w-full border border-gray-300 text-black rounded-md"
                        >
                            <option value="produce" >Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen foods">Frozen Foods</option>
                            <option value="canned">Canned Goods</option>
                            <option value="dry">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    </div>
                <button type="submit"
                    className="w-full py-2 px-4 bg-emerald-800 text-black font-semibold rounded-md hover:bg-emerald-900 mt-5"
                >
                    +
                </button>
            </form>
        </div>
    );
}