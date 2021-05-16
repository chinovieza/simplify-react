import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    
    const myPic = 'https://picsum.photos/400/200'
    const myPic2 = 'https://picsum.photos/seed/picsum/400/200'

    return (
        <div class="container">
            <img class="img-thumbnail" src={ myPic } alt="Photo" />
            <img class="img-thumbnail" src={ myPic2 } alt="Photo" />
        </div>
    );
}

export default App;