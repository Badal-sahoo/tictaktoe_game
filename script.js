const button = document.querySelectorAll(".button")
const win = document.querySelector(".wintemp")
let mark = "X";
button.forEach(button => {
    button.addEventListener('click', () => {
        if (mark === "X") {
            button.textContent = mark;
            mark = "O";
        }
        else {
            button.textContent = mark;
            mark = "X";
        } button.disabled = true;
        winner();
    });
});
let win_arr = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]]
function winner() {
    let iswin = false;
    win_arr.forEach(i => {
        const a = button[i[0]].textContent;
        const b = button[i[1]].textContent;
        const c = button[i[2]].textContent;
        if (a !== "" && b !== "" && c !== "" && a === b && b === c) {
            iswin = true;
            disablebox();
            win.style.visibility = "visible";
            win.innerHTML = `<p>🎉 Congratulations, winner is ${a}</p><button class="playagain">PLAY AGAIN</button>`;
            document.querySelector(".playagain").addEventListener("click", resetGame);
        }
    });

    if (!iswin) {
        const allFilled = [...button].every(btn => btn.textContent !== "");
        if (allFilled) {
            disablebox();
            win.style.visibility = "visible";
            win.innerHTML = `<p>🤝 It's a Draw!</p><button class="playagain">PLAY AGAIN</button>`;
            document.querySelector(".playagain").addEventListener("click", resetGame);
        }
    }
}

const disablebox = () => {
    for (let box of button) {
        box.disabled = true;
    }
}
function resetGame() {
    button.forEach(btn => {
        btn.textContent = "";
        btn.disabled = false;
    });
    mark = "X";
    win.style.visibility = "hidden";
}

document.querySelector(".reset").addEventListener("click", resetGame);
