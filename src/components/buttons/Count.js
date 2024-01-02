import React, {useEffect, useState} from 'react';

const Count = () => {
    const [count, setCount] = useState(0)

    function handleCount () {
        setCount(count + 2);
    }

    useEffect(() => {
        document.title = `Вы нажали ${count}`
    });

    return (
        <div>
            <p>Вы нажали четное количество раз {count}</p>
            <button className={"button"} onClick={handleCount}>Нажми на меня!</button>
        </div>
    );
};

export default Count;