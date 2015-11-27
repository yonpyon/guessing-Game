var name=prompt("what is your name?");
alert("we're going to play a guessing game!!! it about me, Mika!!")
var p1 = prompt("whats my ethnicity??").toUpperCase();

while(p1 != "JAPANESE"){
	alert("nope!... think ninjas");
	p1 = prompt("whats my ethnicity??").toUpperCase();

};

alert("yep!!! thats it!!!");

var p2 = prompt("whats my gender").toUpperCase();
while(p2 != "AGENDER"){
	alert("nup. its a non bianary gender!!....(actually i dont think alot of people will get it, its agender.. sorry)")
	p2 = prompt("whats my gender").toUpperCase();
};
alert("yes!! i use they/them pronouns");

var p3 = prompt("whats my favorite food?!").toUpperCase();
while( p3!= "APPLES"){
	if(p3 === "KIMCHEE"){
		alert("i like kimchee... but no");
		p3 = prompt("whats my favorite food?!").toUpperCase();
	}
	else if(p3 === "BACON"){
		alert("im a vegaterian....nopenopenopenopenope");
		p3 = prompt("whats my favorite food?!").toUpperCase();
	}
	else if(p3==="LEGUMES"){
		alert("yum.... but nope!:DDDDDD");
		p3 = prompt("whats my favorite food?!").toUpperCase();
	}
	else{
		alert("erm.... nope");
		p3 = prompt("whats my favorite food?!").toUpperCase();

	}
}

alert("your right " + name + " !" );


var p4 = prompt("what can i draw most of the time?").toUpperCase();
while (p4!="HUMANS"){
	if (p4 === "ANIMALS") {
		alert("i wish... m(_ _; )m");
		p4 = prompt("what can i draw most of the time?").toUpperCase();
	};
	if else(p4 === "LANDSCAPES"){
		alert("i cant bob ross.... actually i can, but i get bored.");
		p4 = prompt("what can i draw most of the time?").toUpperCase();
	}
	if else(p4 === "ANIME"){
		alert("if i had a penny for everytime i got this question id kill every person with pennys that asked my that question. no.");
		p4 = prompt("what can i draw most of the time?").toUpperCase();
	}
	else{
		alert("nope!")
		p4 = prompt("what can i draw most of the time?").toUpperCase();
	}
}
alert("yep!! im a cartoonist");

var p5= prompt("am i listening to youtube videos right now? (true or false)");{
	if (false) {
		alert("no")
		p5= prompt("am i listening to youtube videos right now? (true or false)");
	}
	else{
		alert("true or false man.... just true or false.");
	}
}
alert("yep.... deathgrips man....");

var p6 = prompt("how old am i?");{
	if (p6=== 16){
		alert("yep");
	}
	else{
		if(p6 < 16){
			alert("nuh uh! go higer");
		}
		else if(p6> 16){
			alert("NOPE! :DDD go lower");
		}
	}
}

alert("thats all... yep thats it");