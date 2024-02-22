$("form").on('submit',function(evento){
    evento.preventDefault()
    
    let nomeTarefa = $("#nome-tarefa").val()
    let novaTarefa = $(`<li>${nomeTarefa}</li>`)

    $(novaTarefa).appendTo('ul')
    $("#nome-tarefa").val("")
})


$("#lista-tarefas").click(function(){
    $("li").css("text-decoration", "line-through")
})