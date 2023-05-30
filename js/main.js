var a=[];
var b=[];
var size=parseInt(prompt("enter a size of  array"));
var result=[];

for(let k=0; k<size; k++)
{
	a[k]=parseInt(prompt("enter a combine  value " +(k+1)));
	
}
for(let m=0; m<size; m++)
{
	b[m]=parseInt(prompt("enter b combine  value " +(m+1)));
	
}
document.write("input array value 1  " +a);
document.write("<br>");
document.write("input array value 2 " +b);
document.write("<br>");

for(let i=0; i<=a.length; i++)
{
	result.push(a[i]);
}
	for(let j=0; j<=b.length; j++)
	{
		
		result.push(b[j]);
	}
	
document.write(" combined array is " +result);