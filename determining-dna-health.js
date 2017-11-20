var input_stdin = "";
var input_stdin_array = ['6',
    'a b c aa d b',
    '1 2 3 4 5 6',
    '3',
    '1 5 caaab',
    '0 4 xyz',
    '2 4 bcdybc'];
var input_currentline = 0;

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    const start= Date.now();
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
        health[i]+=health[j+i+1];
        health.splice(j+i+1,1);
        genes.splice(j+i+1,1);
    }
})
});
    //console.log(genes,health)
    for(var a0 = 0; a0 < s; a0++){
        var first_temp = readLine().split(' ');
        var first = parseInt(first_temp[0]);
        var last = parseInt(first_temp[1]);
        var d = first_temp[2];
        var arr=genes.slice(first,last+1);
        var sum=0;
        arr.forEach((gene,index)=>{
            //console.log(gene);
            let _d=d;
        while(_d.indexOf(gene)!=-1){
            sum+=health[index+first];
            let _i=_d.indexOf(gene);
            //console.log(_d.indexOf(gene),_d,sum);
            _d=_d.split('');
            _d.splice(_i,1);
            _d=_d.join('');
        }
    });
        result.push(sum);
        //console.log('\n')
    }
    result.sort();
    console.log(result[0]+' '+result[result.length-1] );
    console.log(Date.now()-start);
}
main();
