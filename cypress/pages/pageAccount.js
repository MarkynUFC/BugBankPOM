export class pageAccount
{

    weblocators = {

        transfer: '#btn-TRANSFERÊNCIA',
        payment: '#btn-PAGAMENTOS',
        bankstatement: '#btn-EXTRATO',
        withdraw: '#btn-SAQUE',
        modaltext: '#modalText',
        closemodal: '#btnCloseModal',
        balanceavaliable: '#textBalanceAvailable',
        transfernowbuttom: '.style__ContainerButton-sc-1wsixal-0',
        accountnumber: ':nth-child(1) > .input__default',
        digit: '.account__data > :nth-child(2) > .input__default',
        transfervalue: '.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default',
        description: ':nth-child(3) > .input__default',
        transfervalueerrormsg: '.kOeYBn > .input__warging'

    }

    clickTransfer()
    {

        cy
        .get(this.weblocators.transfer)
        .click();

    }

    clickPayment()
    {

        cy
        .get(this.weblocators.payment)
        .click();
        cy
        .get(this.weblocators.modaltext)
        .should('be.visible')
        .and('have.text', 'Funcionalidade em desenvolvimento');

    }

    clickBankStatement()
    {

        cy
        .get(this.weblocators.bankstatement)
        .click();

    }

    clickWithdraw()
    {
        cy
        .get(this.weblocators.withdraw)
        .click();
        expect(
            cy
            .get(this.weblocators.modaltext)
            .should('be.visible')
            .and('have.text', 'Funcionalidade em desenvolvimento')
        );
    }

    verifyBankStatement()
    {
        expect(
            cy
            .get(this.weblocators.balanceavaliable)
            .should('be.visible')
        );

    }

    tryMakeATransfer(number,number2, number3, text)
    {

        cy
        .get(this.weblocators.accountnumber)
        .type(number);
        cy
        .get(this.weblocators.digit)
        .type(number2);
        cy
        .get(this.weblocators.transfervalue)
        .type(number3);
        cy
        .get(this.weblocators.description)
        .type(text);
        cy
        .get(this.weblocators.transfernowbuttom)
        .click();
        cy
        .get(this.weblocators.modaltext)
        .should('have.text', 'Conta inválida ou inexistente');
        cy
        .get(this.weblocators.closemodal)
        .click();
    }

    fillAccountNumber(number)
    {
        cy
        .get(this.weblocators.accountnumber)
        .type(number);
    }

    fillDigit(number)
    {
        cy
        .get(this.weblocators.digit)
        .type(number);
    }

    fillTransferValue(number)
    {
        cy
        .get(this.weblocators.transfervalue)
        .type(number);
    }

    fillDescription(text)
    {
        cy
        .get(this.weblocators.description)
        .type(text);
    }

    clickTranferNow()
    {
        cy
        .get(this.weblocators.transfernowbuttom)
        .click();
    }

    errorMessage()
    {
        cy
        .get(this.weblocators.modaltext)
        .should('have.text', 'Conta inválida ou inexistente');
        cy
        .get(this.weblocators.closemodal)
        .click();
    }

    errorTransferMessage()
    {
        cy
        .get(this.weblocators.transfervalueerrormsg)
        .should('have.text', 'transferValue must be a `number` type, but the final value was: `NaN` (cast from the value `""`).');
    }
}