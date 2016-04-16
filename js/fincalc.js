/*!
* Raving Roo - Easy Savings Calculator v1.0
* Copyright 2014 by David K. Sutton
*
* You are free to use this script on your website.
* While not required, it would be much appreciated if you could link back to http://ravingroo.com
*/

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

function onlyNumbers(keyinput){
	var input=keyinput.charCode? keyinput.charCode : keyinput.keyCode
	// if key press is not a backspace, a period, or a number, then stop character input
	if ((input != 8) && (input != 46)) {
		if ((input < 48) || (input > 57)) {
			return false;
		}
	}
}

function mySavings()
{
 	//Reset error messages to blank
	document.getElementById('incomeError').innerHTML = '';
	document.getElementById('rentError').innerHTML = '';
	document.getElementById('billsError').innerHTML = '';
	document.getElementById('diningError').innerHTML = '';
	document.getElementById('servicesError').innerHTML = '';
	document.getElementById('entertainmentError').innerHTML = '';
	document.getElementById('miscError').innerHTML = '';

	var errorString = '<br><h6>Numeric value required. Example: 381</h6>';
	if ((document.savingscalc.income.value == null) || (document.savingscalc.income.value.length == 0) || (isNaN(document.savingscalc.income.value) == true))
		{document.getElementById('finalBalance').innerHTML = 'Please enter the missing information.';
		document.getElementById('incomeError').innerHTML = errorString;
		}
	else if ((document.savingscalc.rent.value == null) || (document.savingscalc.rent.value.length == 0) || (isNaN(document.savingscalc.rent.value) == true))
		{document.getElementById('finalBalance').innerHTML = 'Please enter the missing information.';
		document.getElementById('rentError').innerHTML = errorString;
		}
	else if ((document.savingscalc.bills.value == null) || (document.savingscalc.bills.value.length == 0) || (isNaN(document.savingscalc.bills.value) == true))
		{document.getElementById('finalBalance').innerHTML = 'Please enter the missing information.';
		document.getElementById('billsError').innerHTML = errorString;
		}
	else if ((document.savingscalc.dining.value == null) || (document.savingscalc.dining.value.length == 0) || (isNaN(document.savingscalc.dining.value) == true))
		{document.getElementById('finalBalance').innerHTML = 'Please enter the missing information.';
		document.getElementById('diningError').innerHTML = errorString;
		}
	else if ((document.savingscalc.services.value == null) || (document.savingscalc.services.value.length == 0) || (isNaN(document.savingscalc.services.value) == true))
		{document.getElementById('finalBalance').innerHTML = 'Please enter the missing information.';
		document.getElementById('servicesError').innerHTML = errorString;
		}
	else if ((document.savingscalc.entertainment.value == null) || (document.savingscalc.entertainment.value.length == 0) || (isNaN(document.savingscalc.entertainment.value) == true))
		{document.getElementById('finalBalance').innerHTML = 'Please enter the missing information.';
		document.getElementById('entertainmentError').innerHTML = errorString;
		}
	else if ((document.savingscalc.misc.value == null) || (document.savingscalc.misc.value.length == 0) || (isNaN(document.savingscalc.misc.value) == true))
		{document.getElementById('finalBalance').innerHTML = 'Please enter the missing information.';
		document.getElementById('miscError').innerHTML = errorString;
		}
	else
	{
		//Set variables from form data
		var income = Number(document.savingscalc.income.value);
		var rent = Number(document.savingscalc.rent.value);
		//console.log(typeof rent);
		var dining = Number(document.savingscalc.dining.value);
		var bills = Number(document.savingscalc.bills.value);
		var services = Number(document.savingscalc.services.value);
		var entertainment = Number(document.savingscalc.entertainment.value);
		var misc = Number(document.savingscalc.misc.value);

		document.getElementById('finalBalance').innerHTML = 'Final Balance: $' + (income - (rent+bills+dining+services+entertainment+misc));

	}

}

function mySavingsReset()
{
	// Reset everything to default/null/blank
	document.getElementById('finalBalance').innerHTML = 'Values reset';

	document.getElementById('incomeError').innerHTML = '';
	document.getElementById('rentError').innerHTML = '';
	document.getElementById('billsError').innerHTML = '';
	document.getElementById('diningError').innerHTML = '';
	document.getElementById('servicesError').innerHTML = '';
	document.getElementById('entertainmentError').innerHTML = '';
	document.getElementById('miscError').innerHTML = '';

	document.savingscalc.income.value = null;
	document.savingscalc.rent.value = null;
	document.savingscalc.bills.value = null;
	document.savingscalc.dining.value = null;
	document.savingscalc.services.value = null;
	document.savingscalc.entertainment.value = null;
	document.savingscalc.misc.value = null;
}