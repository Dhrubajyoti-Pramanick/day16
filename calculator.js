
    function disp(num){
        document.querySelector("#result").value+= num;
        event.preventDefault();
    }

    function evaluation(fn) {
        return new Function ('return '+fn)();
    }

    let input;
    function calc() {
        event.preventDefault();
        input = document.querySelector("#result").value;
        let result = evaluation(input);
        document.querySelector("#result").value=result;
    }

    function clearScreen(val) {
         document.getElementById(val).innerHTML =""; 
    }