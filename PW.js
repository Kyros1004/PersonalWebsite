// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
header.classList.add('navbarDark');

// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})


flagF = false;
flagL = false;
flagI = false;
flagP = false;

// Add event listener on keypress
document.addEventListener('keypress', (event) => {
    var name = event.key;

    if(name=="f"){flagF=true;}
    else if(name=="l" && flagF==true){flagL=true;}
    else if(name=="i" && flagL==true){flagI=true;}
    else if(name=="p" && flagI==true){flagP=true;}
    else{flagF=false; flagI=false; flagL=false; flagP=false;}

    if(flagF==true && flagL==true && flagI==true && flagP==true){
        aux = document.getElementById("home").className;
        if(aux == "bgimage" || aux == "bgimage3"){
            document.getElementById("home").className = "bgimage2";
        }
        else if(aux = "bgimage2"){
            document.getElementById("home").className = "bgimage3";
        }

        flagF=false; 
        flagI=false; 
        flagL=false; 
        flagP=false;
    }
  }, false);
