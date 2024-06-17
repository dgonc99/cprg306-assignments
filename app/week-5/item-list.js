'use client';

import { useState } from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {

    const [sortBy, setSortBy] = useState('name');

    let sortedItems;
    if (sortBy === 'name') {
        sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === 'category') {
        sortedItems = [...items].sort((a, b) => a.category.localeCompare(b.category));
    }
    else if (sortBy === 'group') {
        sortedItems = Object.entries(
            items.reduce((accumulator, item) => {
                const category = item.category;
                if (!accumulator[category]) {
                    accumulator[category] = [];
                }
                accumulator[category].push(item);
                return accumulator;
            }, {})
        ).sort(([categoryA], [categoryB]) => categoryA.localeCompare(categoryB)).map(([category, items]) => ({ 
        category, items: items.sort((a,b) => a.name.localeCompare(b.name))
        }));
    }

    const handleClickName = () => {
        setSortBy('name');
    };

    const handleClickCat = () => {
        setSortBy('category');
    };

    const handleClickGroup = () => {
        setSortBy('group');
    };

    return (
        <div className='max-w-md mx-auto mt-10'>
            <div class>
                <span className='ml-2 mb-2'>Sort By: </span>
                <button onClick={handleClickName} 
                className={sortBy === 'name' ? 'bg-orange-700 text-white font-bold py-2 px-4 rounded ml-2 mb-2': 'bg-orange-500 text-white font-bold py-2 px-4 rounded ml-2 mb-2'}>
                    Name
                </button>
                <button onClick={handleClickCat} 
                className={sortBy === 'category' ? 'bg-orange-700 text-white font-bold py-2 px-4 rounded ml-2 mb-2': 'bg-orange-500 text-white font-bold py-2 px-4 rounded ml-2 mb-2'}>
                    Category
                </button>
                <button onClick={handleClickGroup} 
                className={sortBy === 'group' ? 'bg-orange-700 text-white font-bold py-2 px-4 rounded ml-20 mb-2': 'bg-orange-500 text-white font-bold py-2 px-4 rounded ml-20 mb-2'}>
                    Group by Category
                </button>
            </div>
            <div>
                <ul className='divide-y divide-slate-900'>
                    {sortBy === 'group' ?
                    sortedItems.map((category, index) => (
                        <li key={index} className='py-4'>
                            <h2 className='capitalize font-semibold text-xl'>{category.category}</h2>
                            <ul className='divide-y-15 divide-slate-900'>
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="p-4 border-b bg-slate-700 w-full">
                                        <Item
                                            name={item.name}
                                            quantity={item.quantity}
                                            category={item.category}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))
                    : sortedItems.map((item,index) => (
                        <Item
                            key={index}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ItemList;