$(".addBtn").click(() => {
    let addTodo = $("#addItem").val();
    if (addTodo.length > 0) {
    $("#todoList").append('<li>' + '<button class="clickable">' + addTodo + "</button>" + "</li>");
    $("#addItem").val('');
    }
});


$("body").on("click", ".clickable", () => {
    console.log("working");
    $(".clickable").css({textDecoration: "line-through"});
});