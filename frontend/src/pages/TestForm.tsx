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
        </div>
    );
};

export default TestForm;