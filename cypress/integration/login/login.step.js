
Given('que estou na página de login', () => {
	cy.visit('https://iamsimple.com.br/frente/login/');
});

When('preencher os campos de email {string} e senha {string}', (email,senha) => {
	cy.get('input[type="text"]').type(email);
    cy.get('input[type="password"]').type(senha);
    cy.get('[class="q-btn inline relative-position q-btn-item non-selectable q-btn-secondary q-btn-rectangle q-focusable q-hoverable"]').click()
    cy.wait(5000);
});

Then('devo receber um alerta com a seguinte mensagem {string}', (mensagem) => {
	cy.log(mensagem);
});

