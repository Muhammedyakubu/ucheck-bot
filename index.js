
//==================FILL IN YOUR CREDENTIALS=====================//
let username = "your_utor_id"

password = "your_password"



const login_page = 'https://idpz.utorauth.utoronto.ca/idp/profile/SAML2/Redirect/SSO?execution=e1s1',
ucheck_home = 'https://ucheck.utoronto.ca',
ucheck_form = 'https://ucheck.utoronto.ca/questionnaire?org=22f9f13e-e281-4688-9d95-324d4ae4e43b&pt=6475dcb1-9421-4057-8cad-c1604fb173a4',
login_button = "body > div.container > div > div.col-md-4 > div.login-box > form > button",
start_button = "MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-fullWidth",
form_input_class = "sc-pRFZy iIPyzR",
submit_button = document.querySelectorAll("[type=button]").item(1);




function complete_ucheck(username, password) {    
    login(username, password)
    setTimeout(start_form, 5000)
    setTimeout(fill_ucheck_forms, 5000)
}

function login(username, password) {
    document.querySelector("#username").value = username;
    document.querySelector("#password").value = password;
    document.querySelector(login_button).click()
}

function start_form() {
    document.getElementsByClassName(start_button)[0].click()
}

function fill_ucheck_forms(){
    let form_inputs = document.getElementsByClassName(form_input_class)

    let radios = document.querySelectorAll("[type=radio]")

    for (let i = 1; i < 15; i++) {
        radios = document.querySelectorAll("[type=radio]")
        if (i == 1 || i % 2 == 0) {
            console.log(radios[i]);
            if (radios.item(i) === null) 
                break;
            else 
                radios.item(i).click();
        }
    }
    
    submit_button.click()
}