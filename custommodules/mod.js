console.log('this is a module');
function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}
module.exports ={
     avg:average,
     name:"Sanidhya",
     repo:"Git"
}