//Math.random() devueve numero aleatorio entre 0 y 1.
var numero=Math.random();
if(numero<=0.5){
		console.log('\n'+numero+' menor que 0,5\n\t'+randomnumber(numero)+'\n')
		}
else{
	console.log('\n'+numero+' mayor que 0,5\n\t'+randomnumber(numero)+'\n')
}
function randomnumber(n){
			n*=100;
			return n.toFixed(0);
		}