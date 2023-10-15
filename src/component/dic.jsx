export default function Dice() {

    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;
    return (
        <div>
            <h1>Check your luck</h1>
            <h2>{num1}</h2>
            <h2>{num2}</h2>
            <h1 style={{ color: num1 === num2 ? 'green' : 'red' }}>
                {num1 === num2 ? "You Won!!" : "Sorry, next time!!"}</h1>

        </div>
    );
}