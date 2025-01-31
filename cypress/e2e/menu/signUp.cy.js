/// <reference types="Cypress"/>

import { expect } from "chai";
import bugbank from "../../fixtures/bugbank.json";
import { pageSignUp } from "../../pages/pageSignUp.js";
const registerObj = new pageSignUp();

describe('Teste funcional de cadastro', () => {

    beforeEach(() => {
        registerObj.openURL();
    });
    
    it('C01 - Conta criada com sucesso', () => {
           
            registerObj.clickSignUp();
            registerObj.setEmail(bugbank.email);
            registerObj.setName(bugbank.name);
            registerObj.setPassword(bugbank.password);
            registerObj.setPasswordConfirm(bugbank.password);
            registerObj.clickSubmit();
            registerObj.verifySubmit();
            registerObj.closeModal();

    });

    it('C02 - Formato de email invalido', () => {
    
            registerObj.clickSignUp();
            registerObj.setEmail('teste@teste');
            registerObj.setName('Teste da Silva');
            registerObj.setPassword('senha123');
            registerObj.setPasswordConfirm('senha123');
            registerObj.clickSubmit();
            registerObj.verifyEmail();

    })

    context('C03 -  Validar campos vazios', () => {
        
        it('Campo senha vazio', () => {
            
            registerObj.clickSignUp();
            registerObj.setEmail('teste@teste.com');
            registerObj.setName('Teste');
            registerObj.clickSubmit();
            registerObj.verifyPassword();

        });

        it('Campo comfirmar senha vazio', () => {
            
            registerObj.clickSignUp();
            registerObj.setEmail('teste@teste.com');
            registerObj.setName('Teste');
            registerObj.setPassword('senha123');
            registerObj.clickSubmit();
            registerObj.verifyPasswordConfirm();

        });
    });

    context('C04 - Validar o botao vizualizar senha da pagina de registrar usuario', () => {

        it('Mostrar a senha do campo senha', () => {

            registerObj.clickSignUp();
            registerObj.setPassword(bugbank.password);
            registerObj.clickPasswordEyeButtom();
            registerObj.showPassword();

        });
        
        it('Mostrar a senha do campo confirmação senha', () => {
            
            registerObj.clickSignUp();
            registerObj.setPasswordConfirm(bugbank.password);
            registerObj.clickConfirmPasswordEyeButtom();
            registerObj.showPassword();

        });
    });
});




