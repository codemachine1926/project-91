function send() {

    number1 = document.getElementById("input_1").value;
    number2 = document.getElementById("input_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check-box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("input_1").value = "";
    document.getElementById("input_2").value = "";
}