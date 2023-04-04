    window.onload = function(){
        
        document.getElementById('add').onclick = startKomm;
    }

       function startKomm(){
        
        let text = document.getElementById('txt').value;
        let komm = document.createElement('p');
        let newText = document.createTextNode(text);
        
        komm.appendChild(newText);
        
        document.getElementById('komments').appendChild(komm);
        return true;
       }