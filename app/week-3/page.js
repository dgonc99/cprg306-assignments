import ItemList from './item-list';

const Page = () => {
    return (
        <main className='min-h-screen bg-slate-900 p-6'>
            <div className='max-w-md mx-auto shadow-lg rounded-lg overflow-hidden'>
                <h1 className='font-bold text-center bg-slate-600 text-lg'>Shopping List</h1>
            </div>
            <ItemList />
        </main>
    );
};

export default Page;