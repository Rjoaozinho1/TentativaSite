function inserirBanco() {

    const mysql = require('mysql2')
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'formulario'
    })

    // Obtendo os valores dos campos do formulário
    const nome = document.getElementById('name').value
    const telefone = document.getElementById('phone').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value

    // Dados a serem inseridos no banco
    const dados = {
        nome: nome,
        telefone: telefone,
        cpf: cpf,
        email: email
    }

    // Executando a inserção no banco
    connection.query('INSERT INTO clientes SET ?', dados, (error, results) => {
        if (error) {
            console.error('Erro ao inserir dados:', error)
        } else {
            console.log('Dados inseridos com sucesso!')
        }
    })

    // Encerrando a conexão com o banco de dados
    connection.end()

}

function atualizarBanco() {

    const mysql = require('mysql2')
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'formulario'
    })

    const id = document.getElementById('id').value
    const nome = document.getElementById('name').value
    const telefone = document.getElementById('phone').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value

    const dadosAtualizados = {
        nome: nome,
        telefone: telefone,
        cpf: cpf,
        email: email
    }

    connection.query('UPDATE clientes SET ? WHERE id = ?', [dadosAtualizados, id], (error, results) => {
        if (error) {
            console.error('Erro ao atualizar dados:', error)
        } else {
            console.log('Dados atualizados com sucesso!')
        }
    })

    connection.end()

}

function removerBanco() {

    const mysql = require('mysql2')
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'formulario'
    })

    const id = document.getElementById('id').value

    connection.query('DELETE FROM clientes WHERE id = ?', id, (error, results) => {
        if (error) {
            console.error('Erro ao remover dados:', error)
        } else {
            console.log('Dados removidos com sucesso!')
        }
    })

    connection.end()

}