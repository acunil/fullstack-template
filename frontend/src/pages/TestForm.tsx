import { useState } from 'react';

const TestForm = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitting:', input);
        try {
            const res = await fetch(`/test/length/${input}`);
            const data = await res.json();
            console.log(data);
            setResponse(data.message);
        } catch (error) {
            console.error('Error fetching data:', error);
            setResponse('Error occurred while fetching data');
        }
    };

    return (
        <div>
            <header><h1>Example Component</h1></header>
            <p>
                This is an example component that will prove the frontend is talking to the backend.<br />
                It should work in both local and docker deployments.<br />
                Enter some text in the text box and submit.<br />
                The backend response will give you the length of your input, if successful.
            </p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter text"
                />
                <button type="submit">Submit</button>
            </form>
            {response && <p>{response}</p>}
        </div >
    );
};

export default TestForm;