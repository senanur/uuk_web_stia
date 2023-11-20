document.addEventListener("DOMContentLoaded", function () {
    const belipaket = document.getElementById('belipaket');
    const mintapenawaran = document.getElementById('mintapenawaran');
    const response = document.getElementById('response');
    const condition = document.getElementById('condition');
    let input, submit;
    let coderun = false;

    function createInputAndSubmit(type) {
        input = document.createElement("input");
        submit = document.createElement("button");
        input.setAttribute('type', type === 'number' ? 'number' : 'text');
        submit.setAttribute('type', 'button');
        submit.textContent = "Submit";
        response.appendChild(input);
        response.appendChild(submit);
    }

    belipaket.addEventListener("click", () => {
        if (!coderun) {
            createInputAndSubmit('number');
            input.setAttribute("max","5")
            input.setAttribute("min","1")
            coderun = true;
        }

        submit.addEventListener('click', () => {
            if (input.value >= 1 && input.value <= 5) {
                condition.style.display = "block"
                condition.textContent = `Paket ${input.value} telah dibeli`;
            } else {
                condition.style.display = "block"
                condition.textContent = "Invalid input. Please enter a number between 1 and 5.";
            }
        });
    });

    mintapenawaran.addEventListener('click', () => {
        if (!coderun) {
            createInputAndSubmit('text');
            coderun = true;
        }

        submit.addEventListener('click', () => {
            condition.style.display = "block"
            condition.innerHTML = `Penawaran diminta untuk: ${input.value}`;
        });
    });
});
