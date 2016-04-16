function getData()
{
	var question1 = document.querySelector('input[name = "question1"]:checked').value;
	var question2 = document.querySelector('input[name = "question2"]:checked').value;
	var question3 = document.querySelector('input[name = "question3"]:checked').value;
	var question4 = document.querySelector('input[name = "question4"]:checked').value;
	var question5 = document.querySelector('input[name = question5"]:checked').value;

	// inputs
	document.writeln("question1 = " + question1);
	document.writeln("question2 = " + question2);
	document.writeln("question3 = " + question3);
	document.writeln("question4 = " + question4);
	document.writeln("question5 = " + question5);

	// hard code
	portfolioType = ["Conservative", "Moderately Conservative", "Moderate", "Moderately Aggressive", "Aggressive"];
	var randType = portfolioType[Math.floor(Math.random() * portfolioType.length)];

	document.getElementById('portType').innerHTML = randType;

}