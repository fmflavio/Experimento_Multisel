const htmlEditor = CodeMirror(document.querySelector(".editor .code .html-code"),{
	lineNumbers:true,
	tabSize:4,
	mode:"xml",
	value:"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<multisel id=\"Projeto1\" title=\"MultiSEL para AMUSE VR\" xmlns=\"DefaultProfile\">\n\t<head>\n\t\t<meta name=\"author\" value=\"seu nome\" />\n\t\t<meta name=\"year\" value=\"2022\" />\n\t</head>\n\t<body primaryComponent=\"scene 1\">\n\t\t<scene id=\"scene 1\">\n\t\t\t<!--Seus codigo aqui-->\n\t\t</scene>\n\t</body>\n</multisel>"
});
const cssEditor = CodeMirror(document.querySelector(".editor .code .css-code"),{
	lineNumbers:true,
	tabSize:4,
	mode:"css"
});
const jsEditor = CodeMirror(document.querySelector(".editor .code .js-code"),{
	lineNumbers:true,
	tabSize:4,
	mode:"javascript"
});
const xmlEditor = CodeMirror(document.querySelector(".exemplo"),{
	lineNumbers:true,
	tabSize:4,
	mode:"xml"
});
document.querySelector("#run-btn").addEventListener("click",function(){
	let htmlCode = htmlEditor.getValue();
	let csslCode = "<style>" + cssEditor.getValue() + "</style>";
	let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
	let previewWindow = document.querySelector("#preview-window").contentWindow.document;
	previewWindow.open();
	previewWindow.write(htmlCode+csslCode+jsCode);
	previewWindow.close();
});
function copyToClipBoard() {
	navigator.clipboard.writeText(htmlEditor.getValue());
	alert("Código copiado para área de transferência, aperte CTL+V em sua mensagem de e-mail para inseri-lo.");
}