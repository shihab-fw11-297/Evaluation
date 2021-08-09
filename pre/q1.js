function faulty(str){
    var x=0,y=0;
    for(var i=0; i<str.length;i++){
        if(str[i]=="L"){
            x++;
        }
        else if(str[i]=="R"){
            x--;
        }
        else if(str[i]=="U"){
            y++;
        }
        else if(str[i]=="D"){
            y--;
        }
    }
    if(x==0 && y==0){
        console.log('Yes');
    }
    else{
        console.log('No');
    }
}
function runProgram(input) {
    var isSplit = input.split(/[\r\n]+/);
    var times = Number(isSplit[0]);
    for (var i = 1; i <= times; i++) {
        var data = isSplit[i * 2];
      	faulty(data);
          
    }
}
    if (process.env.USERNAME === "Shihab") {
    runProgram(`2\n4\nLRUD\n5\nRLRUD`);
    } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
}