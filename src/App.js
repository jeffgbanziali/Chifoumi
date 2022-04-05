import { useState, useEffect } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const data = {
    "👊": "✌️",
    "👋": "👊",
    "✌️": "👋",
};
const dataInArr = Object.keys(data);
const toastEffect = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

function App() {
    const [cpt, setcpt] = useState(0);
    useEffect(() => {
        setcpt(JSON.parse(localStorage.getItem("cpt")));
    }, []);

    function handleSelected(item) {
        const selectRandomItemNbr = Math.floor(Math.random() * dataInArr.length);
        const itemRandom = dataInArr[selectRandomItemNbr];
        printResult(item, itemRandom);
    }

    function printResult(itemPlayer, itemRandom) {
        if (itemPlayer === itemRandom) {
            return toast.info("Egalité", toastEffect);
        } else if (data[itemPlayer] === itemRandom) {
            localStorage.setItem("cpt", cpt + 1);
            setcpt(cpt + 1);
            return toast.success("Gagné", toastEffect);
        }
        toast.error("Perdu", toastEffect);
    }
    return ( <
        div className = "App" >
        <
        ToastContainer / >
        <
        div className = "App-header" >
        <
        p > Vous avez { cpt }
        Point < /p> <
        div className = "content" > {
            dataInArr.map((el) => ( <
                div key = { el }
                className = "card"
                onClick = {
                    () => handleSelected(el) } > { el } <
                /div>
            ))
        } <
        /div> <
        /div> <
        /div>
    );
}
export default App;