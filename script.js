input_field = document.getElementById('input');
input_field.focus()
output_field = document.getElementById('output');
output_field.disabled = true;

btn = document.getElementById('btn');

lan1 = document.getElementById('f_lan');
lan2 = document.getElementById('s_lan');

lan1.textContent = 'Ukrainian';
lan2.textContent = 'English';

cpbtn1 = document.getElementById('btn1');
cpbtn1.addEventListener('click', copyInput);
cpbtn2 = document.getElementById('btn2');
cpbtn2.addEventListener('click', copyOutput);


function switchLanguage() {
    let midVal = '';
    midVal = lan1.textContent;
    lan1.textContent = lan2.textContent;
    lan2.textContent = midVal;
    if (lan1.textContent === 'Ukrainian') {
        input_field.addEventListener('input', converterUkr);
    } else {
        input_field.addEventListener('input', converterEng);
    }
    converter(lan1.textContent === 'Ukrainian' ? lettersUkr : lettersEng);
}

const lettersUkr = {
    'й': 'q', 'ц': 'w', 'у': 'e', 'к': 'r', 'е': 't',
    'н': 'y', 'г': 'u', 'ш': 'i', 'щ': 'o', 'з': 'p',
    'х': '[', 'ї': ']', 'ф': 'a', 'і': 's', 'в': 'd',
    'а': 'f', 'п': 'g', 'р': 'h', 'о': 'j', 'л': 'k',
    'д': 'l', 'ж': ';', 'є': '\'', 'я': 'z', 'ч': 'x',
    'с': 'c', 'м': 'v', 'и': 'b', 'т': 'n', 'ь': 'm',
    'б': ',', 'ю': '.',
};

const lettersEng ={
    'q': 'й', 'w': 'ц', 'e': 'у', 'r': 'к', 't': 'е',
    'y': 'н', 'u': 'г', 'i': 'ш', 'o': 'щ', 'p': 'з',
    '[': 'х', ']': 'ї', 'a': 'ф', 's': 'і', 'd': 'в',
    'f': 'а', 'g': 'п', 'h': 'р', 'j': 'о', 'k': 'л',
    'l': 'д', ';': 'ж', '\'': 'є', 'z': 'я', 'x': 'ч',
    'c': 'с', 'v': 'м', 'b': 'и', 'n': 'т', 'm': 'ь',
    ',': 'б', '.': 'ю',
}

function converterUkr() {
    converter(lettersUkr);
}


function converterEng() {
    converter(lettersEng);
}

function converter(language) {
    let input = input_field.value;
    output_field.value = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i].toUpperCase() && input[i] !== input[i].toLowerCase()) {
            const lowerChar = input[i].toLowerCase();
            output_field.value += language[lowerChar]?.toUpperCase() || input[i];
        } else {
            output_field.value += language[input[i]] || input[i];
        }
    }
}

function copyInput(){
    navigator.clipboard.writeText(input_field.value);
}

function copyOutput(){
    navigator.clipboard.writeText(output_field.value);
}

btn.addEventListener('click', switchLanguage);

btn.click()