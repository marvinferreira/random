int n = 5;
var height = n;
var length = n;

var triangle = [,];

var output = '';
for(i = 0; i < length; i++){
    output = '';
    for(j = 0; j < i + 1; j++){   
        triangle[i,j] = 'X ';
        output += triangle[i,j];
    }
    console.log(output);
}
