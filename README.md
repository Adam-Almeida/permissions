# App 

Permissions Login App

## RFs (Requisitos Funcionais)

- [ ] Deve ser possível fazer o cadastro de usuários
- [ ] Deve ser possível se autenticar 
- [ ] Deve ser possível cadastrar permissões 
- [ ] Deve ser possível cadastrar roles 
- [ ] Deve ser possível cadastrar produtos 

## RNs (Regras de Negócio)

- [ ] O usuário não deve poder se cadastrar com um email duplicado
- [ ] O usuário pode ter várias permissões

## RNFs (Requisitos não Funcionais)

- [ ] A senha do usuário precisam estar criptografadas
- [ ] Os dados da aplicação devem estar persistidos em um banco PostgreSQL
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token)
- [ ] O usuário deve ser identificado por uma Role