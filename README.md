# A starting point for a webbsite using Gulp

## Automatiseringsprocessens syfte:
Syfte med automatisering är att slippa göra saker på egen hand, att det sker automatiskt. Detta kan vara att sammanslå flera filer till en. Jag personligen skriver ofta väldigt mycket CSS och har själv svårt att hitta i min CSS-fil. Att kunna dela upp detta i flera filer men att den automatiskt sammanslår till en fil som ska publiceras, samtidigt som jag behåller mina arbetsfiler, är kanon. Det är inte bara att sammanslå filer som kan automatiseras. Man kan bland annat även konvertera innehåll, optimera bilder samt minifiera filer. 

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
Denna används för att ladda om webbsidor i webbläsare utan att behöva trycka på "uppdatera"-knappen. Det sker istället automatiskt. 

## Mitt system och tasks
Arbetsfilerna ligger i en mapp som heter "src". När man kör nedan angivna tasks så läggs filer även in i en mapp som heter "pub". Dessa är de filer som ska publiceras på ett eventuellt webbhotell. 

För att kunna köra min kod så behöver man köra följande: **git clone https://github.com/cssgeek82/gulpone.git**
Sedan behöver man köra: **npm install**. Detta för att npm-paketen ska installeras. Dessa ligger inte på detta repo men information om vilka paket som ska installeras finns i package.json-filen. Så genom att köra npm install så kommer dessa att installeras. 
För att köra igång Gulp och få nedanstående tasks att fungera behöver man köra **gulp** i terminalen. 

* **htmlTask**  
Denna task används för att kopiera HTML-filer från src-mappen (arbetsmappen) till pub-mappen (publiceringsmappen). 

* **jsTask**  
Denna task används för att använda "gulp-concat" för att sammanslå JS-filerna till en enda fil. Den används också för att använda "gulp-uglify-es" för att minifiera JS-filen. Sist men inte minst används den för att föra över denna fil till js-mappen i pub-mappen. 

* **cssTask**
Denna task används först till att använda "gulp-concat" för att sammanslå CSS-filerna till en enda fil. Sen  används den för att använda "gulp-uglifycss" för att minifiera CSS-filen. Sist används den för att föra över denna fil till css-mappen i pub-mappen.

* **imageTask**
Denna används för att först använda "gulp-imagemin" för att göra bilderna mindre. Sedan läggs dessa 'optimerade' bilder in i bild-mappen i pub-mappen. 

* **watchTask**  
Denna task används för att känna av ändringar i de fyra ovanstående "tasks" och tillämpa dessa omedelbart så att pub-mappen ändras utan att man behöver köra något kommando igen. (Denna skulle kunna läggas in i nedanstående task men jag har valt för min egen tydlighets skull att ha denna separat. )

* **syncTask**  
Denna används för att använda "browser-sync" för att automatiskt ladda om webbläsarfönstret. 

* **Exportering**  
Jag exporterar ovanstående tasks så att de kan användas utifrån. Jag kör htmlTask, jsTask, cssTask och imageTask parallelt. Dessa kör jag i serie med watchTask och syncTask som dock körs parellelt med varandra. WatchTask och syncTask kommer hela tiden ligga och vänta på ändringar tills jag avslutar Gulp. 

