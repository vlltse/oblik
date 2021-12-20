function loadXML(){
    function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object
    
        // files is a FileList of File objects. List some properties.
        var output = [];
        for (var i = 0, f; f = files[i]; i++) {
          output.push('<li><strong>', (f.name), '</strong> (', f.type || 'n/a', ') - ',
                      f.size, ' bytes, last modified: ',
                      f.lastModifiedDate.toLocaleDateString(), '</li>');
        }
        document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
      }
    
      document.getElementById('files').addEventListener('change', handleFileSelect, false);


    /*  
    const header = document.querySelector('h1');
    header.innerHTML = 'Зараз будемо парсити XML';
    pn = new XMLHttpRequest();

    pn.open("GET","filesxml\17160042888375J1201010100000000110120201716.XML",false);
    pn.send();
    xmlDoc = pn.responseXML;

    document.getElementById("prodavez").innerHTML = 
    xmlDoc.getElementsByTagName("HNAMESEL")[0].nodeValue;
  */
}

/*document.addEventListener('DOMContentLoaded',function{

})*/