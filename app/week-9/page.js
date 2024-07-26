"use client";
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from 'next/navigation';

const Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();
    
    const handleLogin = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error with github sign-in", error);
        }
    };

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out of firebase", error);
        }
    }

    return (
        <div>
            {!user ? (
                <button onClick={handleLogin}>Login with GitHub</button>
            ) : (
                <div>
                    <div>
                        <p>Welcome, {user.displayName} ({user.email})</p>
                    </div>
                    <div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div>
                        <button onClick={() => router.push('/week-9/shopping-list')}>View Shopping List</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;