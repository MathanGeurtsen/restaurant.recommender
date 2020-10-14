if (Math.random() < 0.5){
    // first condition has preference_confirmation on
    if (Math.random() < 0.5){
        // first condition has indian restaurant
        console.log("first condition: preference_confirmation: on, restaurant: indian moderate east")
        console.log("second condition: preference_confirmation: off, restaurant: chinese expensive east")

        var one_link = "http://restaurant.recommender.mathangeurtsen.nl:4443"
        var two_link = "http://restaurant.recommender.mathangeurtsen.nl:4444"

        var one_intro = "In this first test, you are instructed to search for a restaurant in the east part of town with indian food, that is moderately priced. "
        var two_intro = "In the second test, you are instructed to search for a restaurant in the east part of town with chinese food, that is expensively priced. "
    } else {
        // first condition has chinese restaurant
        console.log("first condition: preference_confirmation: off, restaurant: chinese expensive east")
        console.log("second condition: preference_confirmation: on, restaurant: indian moderate east")

        var one_link = "http://restaurant.recommender.mathangeurtsen.nl:4444"
        var two_link = "http://restaurant.recommender.mathangeurtsen.nl:4443"

        var one_intro = "In this first test, you are instructed to search for a restaurant in the east part of town with chinese food, that is expensively priced. "
        var two_intro = "In the second test, you are instructed to search for a restaurant in the east part of town with indian food, that is moderately priced. "

    }

} else {
    // first condition has preference_confirmation off
    if (Math.random() < 0.5){
        // first condition has indian restaurant
        console.log("first condition: preference_confirmation: off, restaurant: indian moderate east")
        console.log("second condition: preference_confirmation: on, restaurant: chinese expensive east")

        var one_link = "http://restaurant.recommender.mathangeurtsen.nl:4444"
        var two_link = "http://restaurant.recommender.mathangeurtsen.nl:4443"

        var one_intro = "In this first test, you are instructed to search for a restaurant in the east part of town with indian food, that is moderately priced. "
        var two_intro = "In the second test, you are instructed to search for a restaurant in the east part of town with chinese food, that is expensively priced. "

    } else {
        // first condition has chinese restaurant
        console.log("first condition: preference_confirmation: on, restaurant: chinese expensive east")
        console.log("second condition: preference_confirmation: off, restaurant: indian moderate east")

        var one_link = "http://restaurant.recommender.mathangeurtsen.nl:4443"
        var two_link = "http://restaurant.recommender.mathangeurtsen.nl:4444"

        var one_intro = "In this first test, you are instructed to search for a restaurant in the east part of town with chinese food, that is expensively priced. "
        var two_intro = "In the second test, you are instructed to search for a restaurant in the east part of town with indian food, that is moderately priced. "
    }
}

// first explanation
var para = document.createElement("p");
var node = document.createTextNode(one_intro);
para.appendChild(node);


// first link
var a1 = document.createElement('a');
var linkText = document.createTextNode("first restaurant recommendation system");
a1.appendChild(linkText);
a1.title = "This is the link to the first restaurant recommendation system";
a1.setAttribute('target', '_blank');
a1.href = one_link;

document.body.appendChild(para)
document.body.appendChild(a1);



// divider, second explanation
var hr = document.createElement("hr");
var para2 = document.createElement("p");
var node2 = document.createTextNode(two_intro);
para2.appendChild(node2);
document.body.appendChild(hr)
document.body.appendChild(para2)

// second link
var a2 = document.createElement('a');
var linkText = document.createTextNode("second restaurant recommendation system");
a2.appendChild(linkText);
a2.title = "This is the link to the second restaurant recommendation system";
a2.setAttribute('target', '_blank');
a2.href = two_link;
document.body.appendChild(a2);
