Feature: Login

    Scenario Outline: Realizar login na aplicação
        Given que estou na página de login
        When preencher os campos de email "<email>" e senha "<senha>"
        Then devo receber um alerta com a seguinte mensagem "<mensagem>"
        Examples:
            | email                               | senha       | mensagem                                 |
            | guilhermesantosmenezes.gs@gmail.com | teste123456 | Login realizado com sucesso.             |
            | fulanodetal@gmail.com               | 123456      | E-mail ou senha inválidos.               |
            | ⠀⠀                                  | 123456      | Por favor, reveja os campos em vermelho. |
            