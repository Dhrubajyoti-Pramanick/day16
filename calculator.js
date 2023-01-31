
    function disp(num){
        document.querySelector("#result").value+= num;
        event.preventDefault();
    }
// calculation for a string of functions
    // function evaluation(fn) {
    //     return new Function ('return '+fn)();
    // }

    // let input;
    // function calc() {
    //     event.preventDefault();
    //     input = document.querySelector("#result").value;
    //     let result = evaluation(input);
    //     document.querySelector("#result").value=result;
    // }

    function clearScreen() {
        //  document.getElementById(val).innerHTML =""; 
        document.querySelector("#result").value="";
        event.preventDefault();
    }

    function calculation(){
        let arr=[];
        let i;
        // method:1
        // if(document.getElementById('result').value.includes('+')) {
        //     arr=document.getElementById('result').value.split('+');
        //     return parseInt(arr[0]) + parseInt(arr[1]);
        // }

        // if(document.getElementById('result').value.includes('-')) {
        //     arr=document.getElementById('result').value.split('-');
        //     return parseInt(arr[0]) - parseInt(arr[1]);
        // }

        // if(document.getElementById('result').value.includes('/')) {
        //     arr=document.getElementById('result').value.split('/');
        //     return parseInt(arr[0]) / parseInt(arr[1]);
        // }

        // if(document.getElementById('result').value.includes('*')) {
        //     arr=document.getElementById('result').value.split('*');
        //     return parseInt(arr[0]) * parseInt(arr[1]);
        // }

        // if(document.getElementById('result').value.includes("++")) {
        //     arr=document.getElementById('result').value.split("++");
        //     return parseInt(arr[0]) + parseInt(arr[1]);
        // }
        // if(document.getElementById('result').value.includes('+-')) {
        //     arr=document.getElementById('result').value.split('+-');
        //     return parseInt(arr[0]) - parseInt(arr[1]);
        // }
        // if(document.getElementById('result').value.includes('-+')) {
        //     arr=document.getElementById('result').value.split('-+');
        //     return parseInt(arr[0]) - parseInt(arr[1]);
        // }
        // if(document.getElementById('result').value.includes('--')) {
        //     arr=document.getElementById('result').value.split('--');
        //     return parseInt(arr[0]) + parseInt(arr[1]);
        // }
        // if(document.getElementById('result').value.includes('*-')) {
        //     arr=document.getElementById('result').value.split('*-');
        //     i= (parseInt(arr[0]) * parseInt(arr[1])) * -1;
        //     return i;
        // }
        if(document.getElementById('result').value.includes('+')) {
            arr=document.getElementById('result').value.split('+');
            return parseFloat(arr[0]) + parseFloat(arr[1]);
        }

        if(document.getElementById('result').value.includes('-')) {
            arr=document.getElementById('result').value.split('-');
            return parseFloat(arr[0]) - parseFloat(arr[1]);
        }

        if(document.getElementById('result').value.includes('/')) {
            arr=document.getElementById('result').value.split('/');
            return parseFloat(arr[0]) / parseFloat(arr[1]);
        }

        if(document.getElementById('result').value.includes('*')) {
            arr=document.getElementById('result').value.split('*');
            return parseFloat(arr[0]) * parseFloat(arr[1]);
        }


    }
    function calc() {
        let a=calculation();
        document.getElementById('result').value=a;
        event.preventDefault();
    }

