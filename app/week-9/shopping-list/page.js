'use client';
import { useUserAuth } from "../_utils/auth-context";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import ItemList from './item-list';
import NewItem from './new-item';
import { getItems, addItem } from '../_services/shopping-list-service';
import MealIdeas from './meal-ideas';

const Page = () => {
    const [ items, setItems ] = useState([]);
    const [ selectedItemName, setSelectedItemName ] = useState("");
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();


    function handleItemSelect(name) {
        const strings = name.split(',');
        const cleanName = strings[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(cleanName);
    }

    const handleAddItem = async (newItem) => {
        const userId = user?.uid;
        if (userId) {
            const docId = await addItem(userId, newItem);
            setItems((prevItems) => [...prevItems, { id: docId, ...newItem}]);
        }
    }

    async function loadItems() {
        const userId = user?.uid;
        if (userId) {
            const itemsData = await getItems(userId);
            setItems(itemsData);
        }
    }

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);
    
    return (
        <div>
            { !user ? (
                <div>
                    <p>Please Login to view this page</p>
                </div>
            ) : (
                <main className='min-h-screen bg-slate-900 p-6'>
                    <div className='flex'>
                        <div className='flex-1'>
                            <div className='max-w-md mx-auto shadow-lg rounded-lg overflow-hidden'>
                                <h1 className='font-bold text-center  text-lg'>Shopping List</h1>
                            </div>
                            <NewItem onAddItem={handleAddItem} />
                            <ItemList onItemSelect={handleItemSelect} items={items}/>
                        </div>
                        <div>
                            <MealIdeas ingredient={selectedItemName}/>
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
};

export default Page;