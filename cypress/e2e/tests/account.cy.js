/// <reference types = "Cypress"/>

import bugbank from "../../fixtures/bugbank.json";
import { pageLogin } from "../../pages/pageLogin.js";
import { pageSignUp } from "../../pages/pageSignUp.js";
import { pageAccount } from "../../pages/pageAccount.js";

const registerObj = new pageSignUp();
const registerObjL = new pageLogin();
const resgisterObjA = new pageAccount();

describe('Teste funcional de conta', () => {

    beforeEach(() => {

        registerObj.openURL();

    })

    it('C01 - Acessar pagamentos', () => {

        registerObj.setRegister(bugbank.email, bugbank.name, bugbank.password);
        registerObjL.fillLogin(bugbank.email, bugbank.password);
        registerObjL.clickAccessButtom();
        resgisterObjA.clickPayment();

    });

    it('C02 - Acessar saque', () => {

        registerObj.setRegister(bugbank.email, bugbank.name, bugbank.password);
        registerObjL.fillLogin(bugbank.email, bugbank.password);
        registerObjL.clickAccessButtom();
        resgisterObjA.clickWithdraw();

    });

    context('C03 - Acessar extrato', () => {
        it('Conta sem saldo', () => {
        
            registerObj.setRegister(bugbank.email, bugbank.name, bugbank.password);
            registerObjL.fillLogin(bugbank.email, bugbank.password);
            registerObjL.clickAccessButtom();
            resgisterObjA.clickBankStatement();
            resgisterObjA.verifyBankStatement();

        });

        it('Conta com saldo', () => {
            
            registerObj.setAccountWithBalance(bugbank.email, bugbank.name, bugbank.password);
            registerObjL.fillLogin(bugbank.email, bugbank.password);
            registerObjL.clickAccessButtom();
            resgisterObjA.clickBankStatement();
            resgisterObjA.verifyBankStatement();

        });

    });

    //Nessa aplicação não é possivel realizar transferencia, pois é impossivel cadastrar mais de 1 usuário na aplicação

    context('C04 - Acessar transferencia', () => {
        it('Erro ao realizar uma transferencia inserindo todos os dados', () => {
            
            registerObj.setAccountWithBalance(bugbank.email, bugbank.name, bugbank.password);
            registerObjL.fillLogin(bugbank.email, bugbank.password);
            registerObjL.clickAccessButtom();
            resgisterObjA.clickTransfer();
            resgisterObjA.tryMakeATransfer(bugbank.accountnumber, bugbank.digit, bugbank.transfervalue, bugbank.description);
            
        });

        it('Numero da conta invalido', () => {

            registerObj.setAccountWithBalance(bugbank.email, bugbank.name, bugbank.password);
            registerObjL.fillLogin(bugbank.email, bugbank.password);
            registerObjL.clickAccessButtom();
            resgisterObjA.clickTransfer();
            resgisterObjA.fillDigit(bugbank.digit);
            resgisterObjA.fillTransferValue(bugbank.transfervalue);
            resgisterObjA.fillDescription(bugbank.description);
            resgisterObjA.clickTranferNow();
            resgisterObjA.errorMessage();

        });

        it('Digito da conta invalido', () => {
            
            registerObj.setAccountWithBalance(bugbank.email, bugbank.name, bugbank.password);
            registerObjL.fillLogin(bugbank.email, bugbank.password);
            registerObjL.clickAccessButtom();
            resgisterObjA.clickTransfer();
            resgisterObjA.fillAccountNumber(bugbank.accountnumber);
            resgisterObjA.fillTransferValue(bugbank.transfervalue);
            resgisterObjA.fillDescription(bugbank.description);
            resgisterObjA.clickTranferNow();
            resgisterObjA.errorMessage();

        });

        it('Campo para inserir um valor de tranferencia invalido', () => {

            registerObj.setAccountWithBalance(bugbank.email, bugbank.name, bugbank.password);
            registerObjL.fillLogin(bugbank.email, bugbank.password);
            registerObjL.clickAccessButtom();
            resgisterObjA.clickTransfer();
            resgisterObjA.fillAccountNumber(bugbank.accountnumber);
            resgisterObjA.fillDigit(bugbank.digit);
            resgisterObjA.fillDescription(bugbank.description);
            resgisterObjA.clickTranferNow();
            resgisterObjA.errorTransferMessage();

        });
    });

});