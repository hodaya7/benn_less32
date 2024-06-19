$(document).ready(function () {
    //יווצר לכל המשימות שיהיו
    handleCheck();
    handleDelete();

    $(".txtb").keypress(function (userKey) {
        if (userKey.which == 13 && $(".txtb").val() != "") {
            createNewNotCompletedTask();
        }
    });

});

function createNewNotCompletedTask() {
    var input = $(".txtb").val();
    //יצירת דיב חדש
    var newTask = $("<div class='task'></div>")
    newTask.text(input);
    var delIcon = $("<i class='icon fas fa-trash-alt'></i>")
    var checkIcon = $("<i class='icon fas fa-check'></i>")
    newTask.append(delIcon, checkIcon);
    $(".not-complete").append(newTask);
    $(".txtb").val("");
}

function handleCheck() {
    //במקום לבחור את הדיב אבא נו קומפליטד ואז נצטרך קוד כפול לדיב של קומפליטד-
    // נעשה את זה על הדוקומנט פעם אחת
    $(document).on("click",".fa-check", function(){
        var checkTask= $(this).parent();//הדיב שמחזיק את האייקון
        $(this).parent().remove();//הסרה
        $(".complete").append(checkTask);//הוספתו לקומפליטד
        $(this).remove();//הסרת האייקון
    })
}

function handleDelete() {
    $(document).on("click",".fa-trash-alt", function(){
        $(this).parent().remove();//הסרה
    });
}