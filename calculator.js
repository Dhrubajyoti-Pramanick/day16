// function disp(value) {
//     document.getElementById("result").value+= value;
//     event.preventDefault();
// }
// function clearScreen(val) {
//     document.getElementById(val).innerHTML ="";
// }
// function calc() {
//     let exp=document.display.textview.value;
//     document.display.textview.value=result(exp);
// }
// function result(exp) {
//     return new Function('return ' +exp)();
// }

{/* <script>
        function insert(num){
            document.form1.textview.value=document.form1.textview.value+num;
        }
        function equal(){
            let exp=document.form1.textview.value;
            document.form1.textview.value=result(exp);
        }
        function result(exp){
            return new Function('return '+exp)();
        }
    </script> */}

    function disp(num){
        document.querySelector("#result").value+= num;
        event.preventDefault();
    }

    function evaluation(fn) {
        return new Function ('return '+fn);
    }

    document.querySelector(".result").addEventListener("click",function calc(){
        let input = document.querySelector("#result").value;
        let result = evaluation(input);
        document.querySelector("#result").value=result;
    })

    function clearScreen(val) {
         document.getElementById(val).innerHTML =""; 
    }