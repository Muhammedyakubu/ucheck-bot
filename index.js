
//==================FILL IN YOUR CREDENTIALS=====================//
username = "your_utor_id"

password = "your_password"

const login_page = 'https://idpz.utorauth.utoronto.ca/idp/profile/SAML2/Redirect/SSO?execution=e1s1',
ucheck_home = 'https://ucheck.utoronto.ca',
ucheck_form = 'https://ucheck.utoronto.ca/questionnaire?org=22f9f13e-e281-4688-9d95-324d4ae4e43b&pt=6475dcb1-9421-4057-8cad-c1604fb173a4',
login_button = "body > div.container > div > div.col-md-4 > div.login-box > form > button",
start_button = "MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-fullWidth",
form_input_class = "sc-pRFZy iIPyzR"




function complete_ucheck(username, password) {
    login(username, password);
    start_form();
    fill_ucheck_forms();
}

async function login(username, password) {
    await (window.location.href == login_page)

    document.querySelector("#username").value = username;
    document.querySelector("#password").value = password;
    document.querySelector(login_button).click()

}

async function start_form() {
    await (window.location.href == ucheck_home)

    document.getElementsByClassName(start_button)[0].click()
}

function fill_ucheck_forms(){
    await (window.location.href == ucheck_form)

    let form_inputs = document.getElementsByClassName(form_input_class)


    for (let i = 1; i < 15; i++) {
        if (i == 1 || i % 2 == 0) 
            form_inputs[i].click();
    }
}



//sign in with utorid



//click start ucheck

//complete Ucheck

//first yes
document.querySelector("#f5d87fa4-41c1-41bf-9307-2eb2e7862a28-noFocus > fieldset > label:nth-child(3) > span").click()

//the rest are nos
document.querySelector("#ebdd2acd-87ff-47aa-a7d2-059677987580-noFocus > fieldset > label:nth-child(2) > span").click()

document.querySelector("#\\35 c2a5703-ce69-40aa-bf5a-5ddd81335aa9-noFocus > fieldset > label:nth-child(2) > span").click()

document.querySelector("#\\32 96a215c-8f44-4ca0-b2bc-6861ddabec3b-noFocus > fieldset > label:nth-child(2)").click()

document.querySelector("#c2a1ba3f-0113-49a6-95cc-aeede171963a-noFocus > fieldset > label:nth-child(2) > span").click()

document.querySelector("#\\31 1985099-8548-4dc6-944f-bb4ea9c9494b-noFocus > fieldset > label:nth-child(2)").click()

document.querySelector("#\\31 56f6b12-1f8a-491c-9261-2dd73aef9d6a-noFocus > fieldset > label:nth-child(2) > svg").click()

document.querySelector("#\\38 01d8c6a-6523-437e-bb6d-fa4092dacab1-noFocus > fieldset > label:nth-child(2)").click()

document.querySelector("#root > div > div > div > div.MuiContainer-root.sc-pRgDJ.sc-pZdvY.dlLhKU.MuiContainer-maxWidthMd > main > div > div > div > div > div > button").click()