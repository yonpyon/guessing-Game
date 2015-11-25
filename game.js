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
alert("thats all... yep thats it");