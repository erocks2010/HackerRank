process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    genes = readLine().split(' ');
    health = readLine().split(' ');
    health = health.map(Number);
    var s = parseInt(readLine());
    var result=[];
    genes.forEach((gene,i)=>{
        let geneSlice=genes.slice(i+1,genes.length);
    geneSlice.forEach((geneSliceItem,j)=>{
        if (geneSliceItem==gene) {
        health[i]=+health[j+i+1];
    }
})
});
    console.log(genes,health)
    for(var a0 = 0; a0 < s; a0++){
        var first_temp = readLine().split(' ');
        var first = parseInt(first_temp[0]);
        var last = parseInt(first_temp[1]);
        var d = first_temp[2];
        var arr=genes.slice(first,last+1);
        var sum=0;
        arr.forEach((gene)=>{
            if(d.indexOf(gene)!=-1){
            //console.log(gene,genes.indexOf(gene),health[genes.indexOf(gene)]);
            sum=sum+health[genes.indexOf(gene)];
        }
    });
        result.push(sum);
        //console.log('\n')
    }
    //console.log(result);
}
