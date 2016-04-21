function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
	
	var myI = document.getElementById('symbol');
	var className=myI.getAttribute("class")
	if(className=="fa fa-check animated")
	{
		myI.className="fa fa-circle-o animated"
	}
}

function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
	
	var myI = document.getElementById('symbol');
	var className=myI.getAttribute("class")
	if(className=="fa fa-check animated")
	{
		myI.className="fa fa-circle-o animated"
	}
}

function myfunc(div)
{
	var myI = document.getElementById('symbol');
	var className=myI.getAttribute("class")
	if (div)
	if(className=="fa fa-circle-o animated" || className=="fa fa-times animated")
	{
		myI.className="fa fa-check animated"
	}
}

function myfunc1(div)
{
	var myI = document.getElementById('symbol');
	var className=myI.getAttribute("class")
	if (div)
	if(className=="fa fa-circle-o animated" || className=="fa fa-check animated")
	{
		myI.className="fa fa-times animated"
	}
}