/// <reference types = "Cypress"/>

import bugbank from "../../fixtures/bugbank.json";
import { pageLogin } from "../../pages/pageLogin.js";
import { pageSignUp } from "../../pages/pageSignUp.js";
const registerObj = new pageSignUp();
const registerObjL = new pageLogin();

describe('Teste funcional de login', () => {

    beforeEach(() => {

        registerObj.openURL();
        
    })

    it('C01 - Login feito com sucesso', () => {

        registerObj.setRegister(bugbank.email, bugbank.name, bugbank.password);
        registerObjL.fillLogin(bugbank.email, bugbank.password);
        registerObjL.clickAccessButtom();

    });

    it('C02 - Falha ao realizar login', () => {
        
        registerObjL.fillLogin('teste@teste.com', 'teste123');
        registerObjL.clickAccessButtom();
        registerObjL.verifyLogin();

    });

    it('C03 - Validar o botao vizualizar senha da pagina de login', () => {
        
        registerObjL.fillPassword(bugbank.password);
        registerObjL.clickEyeButtom();
        registerObj.showPassword();

    });
    
    context('C04 - Validar campos vazios', () => {

        it('Campo e-mail vazio', () => {
            
            registerObjL.fillPassword(bugbank.password);
            registerObjL.clickAccessButtom();
            registerObjL.verifyEmptyField();

        });

        it('Campo senha vazio', () => {
            
            registerObjL.fillEmail(bugbank.email);
            registerObjL.clickAccessButtom();
            registerObjL.verifyEmptyField();

        });
    });

});