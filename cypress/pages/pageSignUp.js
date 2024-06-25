import { expect } from "chai";

export class pageSignUp
{
    
    weblocators = {

        signup: '.ihdmxA',
        email: ':nth-child(2) > .input__default',
        name: ':nth-child(3) > .input__default',
        password: ':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default',
        confirmpassword: ':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default',
        submit: '.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0',
        closemodal: '#btnCloseModal',
        erroremail: '.kOeYBn > .input__warging',
        errorpassword: ':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging',
        errorconfirmpassword: ':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging',
        addbalance: '#toggleAddBalance',
        eyebuttompassword: ':nth-child(4) > .login__eye',
        eyebuttomconfirmpassword: ':nth-child(5) > .login__eye',
        visiblepassword: 'input[type="text"]',
        hidepassword: 'input[type="password"]'

    }

    openURL()
    {

        cy
        .visit(Cypress.env('URL'));
        
    }

    clickSignUp()
    {

        cy
        .get(this.weblocators.signup)
        .click();

    }

    setEmail(email)
    {

        cy
        .get(this.weblocators.email)
        .type(email, {force: true});

    }

    setName(name)
    {

        cy
        .get(this.weblocators.name)
        .type(name, {force: true});

    }

    setPassword(password)
    {

        cy
        .get(this.weblocators.password)
        .type(password, {force: true});

    }

    setPasswordConfirm(password)
    {

        cy
        .get(this.weblocators.confirmpassword)
        .type(password, {force: true});

    }

    clickSubmit()
    {

        cy
        .get(this.weblocators.submit)
        .click({force: true});

    }

    verifySubmit()
    {

        cy
        .get(this.weblocators.closemodal)
        .should('have.text', 'Fechar');

    }

    closeModal()
    {

        cy
        .get(this.weblocators.closemodal)
        .click();

    }

    verifyEmail()
    {

        cy
        .get(this.weblocators.erroremail)
        .should('have.text', 'Formato inválido');

    }

    verifyPassword()
    {

        cy
        .get(this.weblocators.errorpassword)
        .should('have.text', 'É campo obrigatório'); 

    }

    verifyPasswordConfirm()
    {

        cy
        .get(this.weblocators.errorconfirmpassword)
        .should('have.text', 'É campo obrigatório'); 

    }

    addBalance()
    {

        cy
        .get(this.weblocators.addbalance)
        .click({force: true});

    }

    clickPasswordEyeButtom()
    {

        cy
        .get(this.weblocators.eyebuttompassword)
        .click({force: true});

    }

    clickConfirmPasswordEyeButtom()
    {

        cy
        .get(this.weblocators.eyebuttomconfirmpassword)
        .click({force: true});

    }

    showPassword()
    {
    
        expect(
            cy
            .get(this.weblocators.visiblepassword)
            .should('be.visible')
            .and('have.value', 'senha123')
        );

    }

    setRegister(email, name, password)
    {

        cy
        .get(this.weblocators.signup)
        .click();
        cy
        .get(this.weblocators.email)
        .type(email, {force: true});
        cy
        .get(this.weblocators.name)
        .type(name, {force: true});
        cy
        .get(this.weblocators.password)
        .type(password, {force: true});
        cy
        .get(this.weblocators.confirmpassword)
        .type(password, {force: true});
        cy
        .get(this.weblocators.submit)
        .click({force: true});
        cy
        .get(this.weblocators.closemodal)
        .click();

    }

    setAccountWithBalance(email, name, password)
    {

        cy
        .get(this.weblocators.signup)
        .click();
        cy
        .get(this.weblocators.email)
        .type(email, {force: true});
        cy
        .get(this.weblocators.name)
        .type(name, {force: true});
        cy
        .get(this.weblocators.password)
        .type(password, {force: true});
        cy
        .get(this.weblocators.confirmpassword)
        .type(password, {force: true});
        cy
        .get(this.weblocators.addbalance)
        .click({force: true});
        cy
        .get(this.weblocators.submit)
        .click({force: true});
        cy
        .get(this.weblocators.closemodal)
        .click();

    }
}
