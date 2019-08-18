////////////////////////////////////
// Image-Comment-Maker by Lobers //
//////////////////////////////////


var Dokument = app.activeDocument;

// Bildkommentare
var zuSchlecht = "Qualität\r\zu schlecht!\r\Unbrauchbar!\r\Bitte NICHT\r\anrufen!";
var Wasserzeichen = "ACHTUNG!\r\WASSER-\r\ZEICHEN!";
var halbSpaltig = "ZU KLEIN!\r\MAX. 0,5SP!";
var einSpaltig = "ZU KLEIN!\r\MAX. 1SP!";
var zweiSpaltig = "ZU KLEIN!\r\MAX. 2SP!";
var dreiSpaltig = "ZU KLEIN!\r\MAX. 3SP!";
var vierSpaltig = "ZU KLEIN!\r\MAX. 4SP!";
var fuenfSpaltig = "ZU KLEIN!\r\MAX. 5SP!";

// DIALOGBOX
var Dialogbox = new Window("dialog", "Image-Comment-Maker by Lobers");
// Dialogbox-Fläche
btnPnl = Dialogbox.add( "panel", [10,75,210,345], "Bitte Bildkommentar wählen!");
// Buttons
NichtReproduzierbar = btnPnl.add("button", [20,15,175,35], "Unbrauchbar");
WZ = btnPnl.add("button", [20,45,175,65], "Wasserzeichen"); // ACHTUNG! Button-Name am Anfang (hier "WZ") muss sich von Variablen-Name oben unterscheiden, da sonst später nicht der Text, sondern der Datentyp am Ende ausgegeben wird!
HalbSP = btnPnl.add("button", [20,75,175,95], "Max. 0,5sp");
EinSP = btnPnl.add("button", [20,105,175,125], "Max. 1sp"); // Dialogbox-Design in eckigen Klammern: [Seitlicher Abstand, Abstand zum nächsten Objekt nach oben, Breite, Höhe], letzte Angabe in Anführungszeichen entspricht Button-Beschriftung
ZweiSP = btnPnl.add("button", [20,135,175,155], "Max. 2sp");
DreiSP = btnPnl.add("button", [20,165,175,185], "Max. 3sp"); 
VierSP = btnPnl.add("button", [20,195,175,215], "Max. 4sp"); 
FuenfSP = btnPnl.add("button", [20,225,175,245], "Max. 5sp");

///////////////////////////
// KONSTRUKTOR-FUNKTION //
/////////////////////////

function erstelleBildkommentar(Schriftart, Schriftgrösse, Textinhalt){	

// Transparente Fläche anlegen
var transparenzHell = new CMYKColor(); // Farbe für Transparenz festlegen
transparenzHell.cyan = 0;
transparenzHell.magenta = 0;
transparenzHell.yellow = 0;
transparenzHell.black = 0;
app.activeDocument.artLayers.add();
app.activeDocument.selection.fill(transparenzHell);
app.activeDocument.activeLayer.opacity = 85; // Deckkraft  

// Neue Ebene erstellen
var neueEbene = Dokument.artLayers.add();

// Neue Ebene als Textebene definieren
neueEbene.kind = LayerKind.TEXT;

// Schrift-Formattierung und Position
textItemRef = neueEbene.textItem;
textItemRef.font = Schriftart;
textItemRef.contents = Textinhalt;
textItemRef.size = Schriftgrösse;
textItemRef.justification = Justification.CENTER; // Textausrichtung innerhalb des Textrahmens
textItemRef.kind = TextType.PARAGRAPHTEXT; // Text zu Absatztext umwandeln (zum Positionieren essentiell)

// Textrahmen Breite
textItemRef.width= Dokument.width;

// Textrahmen Position
textItemRef.position = new Array(0, (Dokument.height/2)-(textItemRef.height/0.75)); // Position (Abstand linke Kante, Abstand obere Kante)

activeDocument.mergeVisibleLayers(); // Ebenen zusammenlegen

}// End Konstruktor-Funktion


//////////////////////////////////////
// AUFRUF DER FUNKTIONEN PER KLICK //
////////////////////////////////////

// NICHT REPRODUZIERBAR
NichtReproduzierbar.onClick = function() { // Button-Name (hier "NichtReproduzierbar") mit Onclick-Methode versehen, NICHT den Variablen-Namen!

if (Dokument.width <=3){
	Dokument.resizeImage(new UnitValue(4, "cm"), undefined, 203, ResampleMethod.BICUBIC); // Bildgröße anpassen, um sicherzustellen, dass der Text immer (in der Breite) passt, Auflösung ist wichtig, damit Text vertikal immer in der Mitte steht!
	if (Dokument.width>= Dokument.height*2){	
	Dokument.resizeCanvas(undefined, Dokument.height *2, AnchorPosition.MIDDLECENTER);  // Wenn Dokumenthöhe halb so hoch wie Breite, dann Arbeitsfläche nach oben und unten verdoppeln (damit Text reinpasst)
	}
	erstelleBildkommentar("Verdana-Bold", 10, zuSchlecht); // Bildkommentar (Variable) als Parameter übergeben
}
else if (Dokument.width <=7){
	Dokument.resizeImage(new UnitValue(6, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	if (Dokument.width>= Dokument.height*2){	
	Dokument.resizeCanvas(undefined, Dokument.height *2, AnchorPosition.MIDDLECENTER);
	}
	erstelleBildkommentar("Verdana-Bold", 20, zuSchlecht);
}
else if (Dokument.width <=14){
	Dokument.resizeImage(new UnitValue(13, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	if (Dokument.width>= Dokument.height*2){	
	Dokument.resizeCanvas(undefined, Dokument.height *2, AnchorPosition.MIDDLECENTER);
	}
	erstelleBildkommentar("Verdana-Bold", 40, zuSchlecht);
}
else if (Dokument.width <=22){
	Dokument.resizeImage(new UnitValue(21, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	if (Dokument.width>= Dokument.height*2){	
	Dokument.resizeCanvas(undefined, Dokument.height *2, AnchorPosition.MIDDLECENTER);
	}
	erstelleBildkommentar("Verdana-Bold", 70, zuSchlecht);

}
else if (Dokument.width <=26){
	Dokument.resizeImage(new UnitValue(25, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	if (Dokument.width>= Dokument.height*2){	
	Dokument.resizeCanvas(undefined, Dokument.height *2, AnchorPosition.MIDDLECENTER);
	}
	erstelleBildkommentar("Verdana-Bold", 85, zuSchlecht);
}
else if (Dokument.width <=32){
	Dokument.resizeImage(new UnitValue(31, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	if (Dokument.width>= Dokument.height*2){	
	Dokument.resizeCanvas(undefined, Dokument.height *2, AnchorPosition.MIDDLECENTER);
	}
	erstelleBildkommentar("Verdana-Bold", 80, zuSchlecht);
}
else if (Dokument.width >=32){
	Dokument.resizeImage(new UnitValue(41, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	if (Dokument.width>= Dokument.height*2){
	Dokument.resizeCanvas(undefined, Dokument.height *2, AnchorPosition.MIDDLECENTER);
	}
	erstelleBildkommentar("Verdana-Bold", 100, zuSchlecht);
}
Dialogbox.close(); // Schließe Dialogbox am Ende
}// End function onClick



// WASSERZEICHEN
WZ.onClick = function() {

if (Dokument.width <=3){
	Dokument.resizeImage(new UnitValue(4, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 10, Wasserzeichen);
}
else if (Dokument.width <=7){
	Dokument.resizeImage(new UnitValue(6, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 20, Wasserzeichen);
}
else if (Dokument.width <=14){
	Dokument.resizeImage(new UnitValue(13, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 50, Wasserzeichen);
}
else if (Dokument.width <=22){
	Dokument.resizeImage(new UnitValue(21, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 80, Wasserzeichen);
}
else if (Dokument.width <=26){
	Dokument.resizeImage(new UnitValue(25, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 100, Wasserzeichen);
}
else if (Dokument.width <=32){
	Dokument.resizeImage(new UnitValue(31, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 120, Wasserzeichen);
}
else if (Dokument.width >=32){
	Dokument.resizeImage(new UnitValue(41, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 150, Wasserzeichen);
}
Dialogbox.close(); // Schließe Dialogbox am Ende
}// End function onClick



// 0,5SP
HalbSP.onClick = function() {

if (Dokument.width <=3){
	Dokument.resizeImage(new UnitValue(4, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 10, halbSpaltig);
}
else if (Dokument.width <=7){
	Dokument.resizeImage(new UnitValue(6, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 20, halbSpaltig);
}
else if (Dokument.width <=14){
	Dokument.resizeImage(new UnitValue(13, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 50, halbSpaltig);
}
else if (Dokument.width <=22){
	Dokument.resizeImage(new UnitValue(21, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 80, halbSpaltig);
}
else if (Dokument.width <=26){
	Dokument.resizeImage(new UnitValue(25, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 100, halbSpaltig);
}
else if (Dokument.width <=32){
	Dokument.resizeImage(new UnitValue(31, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 120, halbSpaltig);
}
else if (Dokument.width >=32){
	Dokument.resizeImage(new UnitValue(41, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 150, halbSpaltig);
}
Dialogbox.close(); // Schließe Dialogbox am Ende
}// End function onClick



// 1SP
EinSP.onClick = function() {

if (Dokument.width <=3){
	Dokument.resizeImage(new UnitValue(4, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 10, einSpaltig);
}
else if (Dokument.width <=7){
	Dokument.resizeImage(new UnitValue(6, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 20, einSpaltig);
}
else if (Dokument.width <=14){
	Dokument.resizeImage(new UnitValue(13, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 50, einSpaltig);
}
else if (Dokument.width <=22){
	Dokument.resizeImage(new UnitValue(21, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 80, einSpaltig);
}
else if (Dokument.width <=26){
	Dokument.resizeImage(new UnitValue(25, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 100, einSpaltig);
}
else if (Dokument.width <=32){
	Dokument.resizeImage(new UnitValue(31, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 120, einSpaltig);
}
else if (Dokument.width >=32){
	Dokument.resizeImage(new UnitValue(41, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 150, einSpaltig);
}
Dialogbox.close(); // Schließe Dialogbox am Ende
}// End function onClick



// 2SP
ZweiSP.onClick = function() {

if (Dokument.width <=3){
	Dokument.resizeImage(new UnitValue(4, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 10, zweiSpaltig);
}
else if (Dokument.width <=7){
	Dokument.resizeImage(new UnitValue(6, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 20, zweiSpaltig);
}
else if (Dokument.width <=14){
	Dokument.resizeImage(new UnitValue(13, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 50, zweiSpaltig);
}
else if (Dokument.width <=22){
	Dokument.resizeImage(new UnitValue(21, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 80, zweiSpaltig);
}
else if (Dokument.width <=26){
	Dokument.resizeImage(new UnitValue(25, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 100, zweiSpaltig);
}
else if (Dokument.width <=32){
	Dokument.resizeImage(new UnitValue(31, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 120, zweiSpaltig);
}
else if (Dokument.width >=32){
	Dokument.resizeImage(new UnitValue(41, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 150, zweiSpaltig);
}
Dialogbox.close(); // Schließe Dialogbox am Ende
}// End function onClick



// 3SP
DreiSP.onClick = function() {

if (Dokument.width <=3){
	Dokument.resizeImage(new UnitValue(4, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 10, dreiSpaltig);
}
else if (Dokument.width <=7){
	Dokument.resizeImage(new UnitValue(6, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 20, dreiSpaltig);
}
else if (Dokument.width <=14){
	Dokument.resizeImage(new UnitValue(13, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 50, dreiSpaltig);
}
else if (Dokument.width <=22){
	Dokument.resizeImage(new UnitValue(21, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 80, dreiSpaltig);
}
else if (Dokument.width <=26){
	Dokument.resizeImage(new UnitValue(25, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 100, dreiSpaltig);
}
else if (Dokument.width <=32){
	Dokument.resizeImage(new UnitValue(31, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 120, dreiSpaltig);
}
else if (Dokument.width >=32){
	Dokument.resizeImage(new UnitValue(41, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 150, dreiSpaltig);
}
Dialogbox.close(); // Schließe Dialogbox am Ende
}// End function onClick



// 4SP
VierSP.onClick = function() {

if (Dokument.width <=3){
	Dokument.resizeImage(new UnitValue(4, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 10, vierSpaltig);
}
else if (Dokument.width <=7){
	Dokument.resizeImage(new UnitValue(6, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 20, vierSpaltig);
}
else if (Dokument.width <=14){
	Dokument.resizeImage(new UnitValue(13, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 50, vierSpaltig);
}
else if (Dokument.width <=22){
	Dokument.resizeImage(new UnitValue(21, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 80, vierSpaltig);
}
else if (Dokument.width <=26){
	Dokument.resizeImage(new UnitValue(25, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 100, vierSpaltig);
}
else if (Dokument.width <=32){
	Dokument.resizeImage(new UnitValue(31, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 120, vierSpaltig);
}
else if (Dokument.width >=32){
	Dokument.resizeImage(new UnitValue(41, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 150, vierSpaltig);
}
Dialogbox.close(); // Schließe Dialogbox am Ende
}// End function onClick



// 5SP
FuenfSP.onClick = function() {

if (Dokument.width <=3){
	Dokument.resizeImage(new UnitValue(4, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 10, fuenfSpaltig);
}
else if (Dokument.width <=7){
	Dokument.resizeImage(new UnitValue(6, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 20, fuenfSpaltig);
}
else if (Dokument.width <=14){
	Dokument.resizeImage(new UnitValue(13, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 50, fuenfSpaltig);
}
else if (Dokument.width <=22){
	Dokument.resizeImage(new UnitValue(21, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 80, fuenfSpaltig);
}
else if (Dokument.width <=26){
	Dokument.resizeImage(new UnitValue(25, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 100, fuenfSpaltig);
}
else if (Dokument.width <=32){
	Dokument.resizeImage(new UnitValue(31, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 120, fuenfSpaltig);
}
else if (Dokument.width >=32){
	Dokument.resizeImage(new UnitValue(41, "cm"), undefined, 203, ResampleMethod.BICUBIC);
	erstelleBildkommentar("Verdana-Bold", 150, fuenfSpaltig);
}
Dialogbox.close(); // Schließe Dialogbox am Ende
}// End function onClick

Dialogbox.show(); // Muss ganz am Ende stehen, damit die Dialogbox funktioniert