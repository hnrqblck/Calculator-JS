function Calc() {
    this.display = document.querySelector('.display');

    this.starts = () => {
        this.clickButtons();
        this.pressEnter();
    }

    this.clickButtons = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btn-num')) this.btnToDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.clearsDisplay();
            if(el.classList.contains('btn-del')) this.deletesLastPressed();
            if(el.classList.contains('btn-eq')) this.calculatesDisplay();
        })
    };

    this.btnToDisplay = value => {
        this.display.value += value;
        this.display.focus();
    };

    this.clearsDisplay = () => this.display.value = '';

    this.deletesLastPressed = () => this.display.value = this.display.value.slice(0, -1);

    this.calculatesDisplay = () => {
        let calcOperation = this.display.value;

        try {
            calcOperation = eval(calcOperation);

            if(!calcOperation) {
                alert('Invalid operation!');
                return;
            }

            this.display.value = String(calcOperation);
        } catch (e) {
            alert('Invalid operation!');
            return;
        }
    };

    this.pressEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) this.calculatesDisplay();
        })
    };
}

const calculator = new Calc();
calculator.starts();