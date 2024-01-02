import React from 'react';

function handleClick () {
        alert("Гоооол!")
}

const Button = () => {
    return (
        <div>
            <button className={"button"} onClick={handleClick}>Бей по мячу!</button>
        </div>
    );
};

export default Button;