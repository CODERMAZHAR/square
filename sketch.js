var marks = [2,3,4,5,6,7,8,9];

function msquare(marks){
  for(var i=0;i<marks.length;i++)
  {
   marks[i]=marks[i]*marks[i];
  }
  return marks;
}


function setup() 
{
  createCanvas(400,400);
var result=msquare(marks);
console.log(marks);
}

function draw() 
{
  background(30);
}

 

