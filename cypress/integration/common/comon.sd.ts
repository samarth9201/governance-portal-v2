import { Given, Then } from 'cypress-cucumber-preprocessor/steps';


Given('click {string} element', (selector: string) => {
    cy.get(selector).click();
});

Given('click by text {string}', (text: string) => {
    cy.contains(text).click();
});
Given('navigate to {string} page', async (page: string) => {
    cy.visit(`http://localhost:3000${page}`);
});

Given('{string} visible', async (testId: string) => {
    cy.get(testId).should('be.visible');
});

Given('{string} text visible', async (testId: string) => {
    cy.get(testId).should('be.visible');
});

Given('{string} is disabled', async (testId: string) => {
    cy.get(testId).should('be.disabled');
});



Then(
    'type in {string} field with value {string}',
    async (fieldName: string, text: string) => {
        cy.get(`input[name*="${fieldName}"]`).type(text);
    },
);
