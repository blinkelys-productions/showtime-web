import { useParams } from 'react-router-dom';

function Organization() {
    const { orgId } = useParams();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Organization {orgId}</h1>
        </div>
    );
}

export default Organization;