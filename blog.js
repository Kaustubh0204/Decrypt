// var all = document.getElementByClassName("all");
// all[0].style.display = "none";
// console.log(all);
var title = document.getElementById("categorytitle");

var all = document.getElementsByClassName("all");
var future = document.getElementsByClassName("future");
var gaming = document.getElementsByClassName("gaming");
var reviews = document.getElementsByClassName("reviews");
var electronicshardware = document.getElementsByClassName("electronicshardware");
var spacetravel = document.getElementsByClassName("spacetravel");
var eventsupdates = document.getElementsByClassName("eventsupdates");
var computing = document.getElementsByClassName("computing");
var businessmarket = document.getElementsByClassName("businessmarket");
var technology = document.getElementsByClassName("technology");
var currentdevelopment = document.getElementsByClassName("currentdevelopment");
var opinionpiece = document.getElementsByClassName("opinionpiece");
var software = document.getElementsByClassName("software");
var experience = document.getElementsByClassName("experience");
var technologyenviornment = document.getElementsByClassName("technologyenviornment");
var editorschoice = document.getElementsByClassName("editorschoice");


var i;

title.innerHTML="All blogs"

for (i = 0; i < all.length; i++) {
    all[i].style.display = "block";
}

function switchCategory(categoryname){

    if(categoryname =="all"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "block";
        }

        title.innerHTML="All blogs"
    }


    if(categoryname =="future"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < future.length; i++) {
            future[i].style.display = "block";
        }

        title.innerHTML="Future blogs"

    }


    if(categoryname =="gaming"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < gaming.length; i++) {
            gaming[i].style.display = "block";
        }

        title.innerHTML="Gaming blogs"

    }

    if(categoryname =="reviews"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < reviews.length; i++) {
            reviews[i].style.display = "block";
        }

        title.innerHTML="Review blogs"

    }

    if(categoryname =="electronicshardware"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < electronicshardware.length; i++) {
            electronicshardware[i].style.display = "block";
        }
        title.innerHTML="Electronics and hardware blogs"

    }

    if(categoryname =="spacetravel"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < spacetravel.length; i++) {
            spacetravel[i].style.display = "block";
        }
        title.innerHTML="Space and travel blogs"

    }

    if(categoryname =="eventsupdates"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < eventsupdates.length; i++) {
            eventsupdates[i].style.display = "block";
        }
        title.innerHTML="Events and updates"

    }

    if(categoryname =="computing"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < computing.length; i++) {
            computing[i].style.display = "block";
        }
        title.innerHTML="Computing blogs"

    }

    if(categoryname =="businessmarket"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < businessmarket.length; i++) {
            businessmarket[i].style.display = "block";
        }
        title.innerHTML="Business and market blogs"

    }

    if(categoryname =="technology"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < technology.length; i++) {
            technology[i].style.display = "block";
        }
        title.innerHTML="Technology blogs"

    }

    if(categoryname =="currentdevelopment"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < currentdevelopment.length; i++) {
            currentdevelopment[i].style.display = "block";
        }
        title.innerHTML="Current developmets"

    }

    if(categoryname =="opinionpiece"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < opinionpiece.length; i++) {
            opinionpiece[i].style.display = "block";
        }
        title.innerHTML="Opinion Piece"

    }

    if(categoryname =="opinionpiece"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < opinionpiece.length; i++) {
            opinionpiece[i].style.display = "block";
        }
        title.innerHTML="Opinion Piece"

    }

    if(categoryname =="software"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < software.length; i++) {
            software[i].style.display = "block";
        }

        title.innerHTML="Software blogs"

    }

    if(categoryname =="experience"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < experience.length; i++) {
            experience[i].style.display = "block";
        }

        title.innerHTML="Experience blogs"

    }

    if(categoryname =="technologyenviornment"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < technologyenviornment.length; i++) {
            technologyenviornment[i].style.display = "block";
        }

        title.innerHTML="Technology and enviornment blogs"

    }

    if(categoryname =="editorschoice"){

        for (i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        for (i = 0; i < editorschoice.length; i++) {
            editorschoice[i].style.display = "block";
        }

        title.innerHTML="Editor's Choice 🏆"

    }



   

}




