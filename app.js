import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => {
    return <h2>this is a title document</h2>
}

const HeadingComponent = () => {
    return (
        <div>
            <Title />
            <h1 className='heading'>here is a functional component</h1>
        </div>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);