const tarefas = []

//Cria tarefa
function criarTarefa() {
    const tarefa = document.getElementById('tarefa').value
    tarefas.push(tarefa)
    mostrarTarefas()
}
if (!prioridade) {
    prioridade = 'media'
}
return {
    id: Date.now(),
    titulo: titulo.trim(),
    prioridade: prioridade,
    concluida: false

}

//Função 2 - adicionar tarefa
function adicionarTarefa(lista, titulo, prioridade) {
    const tarefa = criarTarefa(titulo, prioridade);

    if (!tarefa) {
        return;
    }
    lista.push(tarefa);
    console.log(`Tarefa adicionada: ${tarefa.titulo}`);
}
//Função 3 - listar tarefas
function listarTarefas(lista)
if (lista.length === 0) {
    console.log('Nenhuma tarefa encontrada.');
    return;
}
// console.log(``n=== Lista de Tarefas ===`n`);
lista.forEach(tarefa, indice) =>
console.log`${indice + 1}. ${status} ${tarefa.prioridade}.toUpperCase()}
        )
    });

}
    //Função 4 - filtraPorPrioridade
function filtrarPorPrioridade(lista, prioridade) {
    return lista.filter(tarefa => tarefa.prioridade === prioridade);
}

//Função 5 - gerarRelatorio
function gerarRelatorio(lista) {
    const total = lista.length;
    const Concluidas = lista.filter(t => t.concluida===true).length;
    const Pendentes = total - Concluidas;

    console.log(``n=== Relatório Final ===`n`);
    console.log(`Total: ${ total } `);
    console.log(`Concluídas: ${ Concluidas } `);
    console.log(`Pendentes: ${ Pendentes } `);

    if(pendentes=== 0) {
    console.log('Parabéns! Todas as tarefas foram concluídas.');
    } else {
    console.log('Continue ! ainda há ${pendentes} tarefas(s) pendente(s);

    }

    
