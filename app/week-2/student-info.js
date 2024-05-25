import Link from 'next/link';

const StudentInfo = () => {
    return(
        <main>
            <p>Dominic Goncalves</p>
            <p>
                <Link href="https://github.com/dgonc99/cprg306-assignments.git">
                    Github Repository
                </Link>
            </p>
        </main>
    );
};

export default StudentInfo;