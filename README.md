# A starting point for a webbsite using Gulp

## Automatiseringsprocessens syfte:
Syfte med automatisering är att slippa göra saker på egen hand, att de sker automatiskt. Detta kan vara att sammanslå flera filer till en. Jag personligen skriver ofta väldigt mycket CSS och har själv svårt att hitta i min CSS-fil. Att kunna dela upp detta i flera filer men att den automatiskt sammanslår till en fil som ska publiceras, samtidigt som jag behåller mina arbetsfiler, är kanon. Det är inte bara att sammanslå filer som man kan automatiseras. Man kan bland annat även konvertera innehåll, optimera bilder samt minifiera filer. 

## Paket
* **Gulp-concat**  
Denna slår samman filer till en enda fil. Jag har använt den både till CSS och till JS. 

* **Gulp-uglify-es**  
Detta paket används för att minifiera JS-filer. Denna uppdateras dock inte längre, och nu rekommenderas istället "terser". Jag hittade dock en bra webbsida som gick igenom några av dessa paket och följde deras rekommendationer på vissa paket. Detta var ett av dem, jag såg inte förrän senare att den inte uppdateras längre men valde till denna uppgift att behålla paketet. 

* **Gulp-uglifycss**  
Detta paket används till att minifiera CSS-filer. 

* **Gulp-imagemin**  
Denna används för att göra bildfiler i formaten png, jpeg, gif och svg mindre. 

* **Browser-sync**  
Denna
