const dropdownDiv = document.querySelector('#dropdown');
const dropdownContext = `   <div id="js_drop">
                            <input type="radio" checked="checked" id="yes_check" >Yes<br>
                            <input type="radio" id="no_check">No<br>
                            </div>`;
const dropButton = document.querySelector('#drop');
let dropDowStatus = 'not_toggled';

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

dropButton.addEventListener('click', dropBar);
