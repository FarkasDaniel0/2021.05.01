var vegleg = 1;
var hozzaad = 1;
function szam(x){
for( i=1; i<=x; i=i+1){
vegleg = vegleg*hozzaad;
hozzaad = hozzaad +1;
document.write(i,'!'," = ", vegleg, "<br>");
} }
szam(20); 