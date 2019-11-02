function main() {


    function dropBar() {
        if (dropDowStatus === 'not_toggled') {
            let node = document.createRange().createContextualFragment(dropdownContext);
            dropdownDiv.appendChild(node);
            dropDowStatus = 'toggled';
        } else {
            let jsDropdown = document.querySelector('#js_drop');
            jsDropdown.remove();
            dropDowStatus = 'not_toggled';
        }

    }

    function checkButtons(event) {
        if (event.target.id === 'no_check') {
            document.querySelector('#yes_check').checked = false;
        } else if (event.target.id === 'yes_check') {
            document.querySelector('#no_check').checked = false;
        }
    }


    const dropdownDiv = document.querySelector('#dropdown');
    const dropdownContext = `   
                        <div id="js_drop">
                        <input type="radio" checked="checked" id="yes_check" >Yes<br>
                        <input type="radio" id="no_check">No<br>
                        </div>`;
    const dropButton = document.querySelector('#drop');
    const yesCheck = document.querySelectorAll('#yes_check');
    const noCheck = document.querySelectorAll('#no_check');
    let dropDowStatus = 'not_toggled';

    document.addEventListener('click', checkButtons);
    dropButton.addEventListener('click', dropBar);
}
main();