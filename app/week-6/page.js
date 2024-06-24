'use client';
import { useState } from 'react';

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

const Page = () => {
    const [ items, setItems ] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };
    
    return (
        <main className='min-h-screen bg-slate-900 p-6'>
            <div className='max-w-md mx-auto shadow-lg rounded-lg overflow-hidden'>
                <h1 className='font-bold text-center bg-slate-600 text-lg'>Shopping List</h1>
            </div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items}/>
        </main>
    );
};

export default Page;