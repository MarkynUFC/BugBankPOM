export class pageLogin
{

    weblocators = {
        
        email: '.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default',
        password: '.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default',
        accessbuttom: '.otUnI',
        modal: '.styles__ContainerContent-sc-8zteav-1',
        closemodal: '#btnCloseModal',
        modaltext: '#modalText',
        requiredfield: '.kOeYBn > .input__warging',
        eyebuttom: '.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .login__eye',
        visiblepassword: 'input[type="text"]',
        hidepassword: 'input[type="password"]'

    }


    fillLogin(email, password)
    {

        cy
        .get(this.weblocators.email)
        .type(email);
        cy
        .get(this.weblocators.password)
        .type(password);

    }

    fillEmail(email)
    {

        cy
        .get(this.weblocators.email)
        .type(email);

    }

    fillPassword(password)
    {

        cy
        .get(this.weblocators.password)
        .type(password);

    }

    closeModal()
    {

        cy
        .get(this.weblocators.closemodal)
        .click();

    }

    clickAccessButtom()
    {

        cy
        .get(this.weblocators.accessbuttom)
        .click();

    }

    clickEyeButtom()
    {

        cy
        .get(this.weblocators.eyebuttom)
        .click();

    }

    verifyLogin()
    {

        expect(cy.get(this.weblocators.modal)
        .should('be.visible'));
        expect(cy.get(this.weblocators.modaltext)
        .should('be.visible')
        .and('have.text', 'Usuário ou senha inválido.\nTente novamente ou verifique suas informações!'));

    }

    verifyEmptyField()
    {

        expect(
            cy.get(this.weblocators.requiredfield)
            .should('be.visible')
            .and('contain.text', 'É campo obrigatório')
        );

    }

}
