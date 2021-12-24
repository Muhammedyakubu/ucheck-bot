
//==================FILL IN YOUR CREDENTIALS=====================//
let username = "your_utor_id"

password = "your_password"



const login_page = 'https://idpz.utorauth.utoronto.ca/idp/profile/SAML2/Redirect/SSO?execution=e1s1',
ucheck_home = 'https://ucheck.utoronto.ca',
ucheck_form = 'https://ucheck.utoronto.ca/questionnaire?org=22f9f13e-e281-4688-9d95-324d4ae4e43b&pt=6475dcb1-9421-4057-8cad-c1604fb173a4',
login_button = "body > div.container > div > div.col-md-4 > div.login-box > form > button",
start_button = "MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-fullWidth",
form_input_class = "sc-pRFZy iIPyzR",
submit_button = document.querySelector("#root > div > div > div > div.MuiContainer-root.sc-pRgDJ.sc-pZdvY.dlLhKU.MuiContainer-maxWidthMd > main > div > div > div > div > div > button > span.MuiButton-label");




function complete_ucheck(username, password) {    
    login(username, password)
    setTimeout(start_form, 5000)
    setTimeout(fill_ucheck_forms(), 5000)
}

function login(username, password) {
    if (window.location.href != login_page) return 

    document.querySelector("#username").value = username;
    document.querySelector("#password").value = password;
    document.querySelector(login_button).click()
}

function start_form() {
    if (window.location.href != ucheck_home) return

    document.getElementsByClassName(start_button)[0].click()
}

function fill_ucheck_forms(){
    if (window.location.href != ucheck_form) return

    let form_inputs = document.getElementsByClassName(form_input_class)

    for (let i = 1; i < 15; i++) {
        if (i == 1 || i % 2 == 0) 
            form_inputs[i].click();
    }

    submit_button.click()
}

