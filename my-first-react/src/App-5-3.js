import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const [dataState, setDataState] = useState({
        counter: 0
    });

    const plusHandler = () => {
        setDataState({
            counter: dataState.counter + 1
        });
    }

    const minusHandler = () => {
        setDataState({
            counter: dataState.counter - 1
        });
    }

    return(
        <div className="col-4 mx-auto mt-4">
            <div className="card text-center">
                <div className="card-header">
                    <button className="btn btn-sm btn-success mr-1" onClick={plusHandler}>INCREASE</button>
                    <button className="btn btn-sm btn-warning mr-1" onClick={minusHandler}>DECREASE</button>
                </div>
                <div className="card-body">
                    Current Number:
                    {dataState.counter}
                </div>
            </div>
        </div>
    )
}

export default App;