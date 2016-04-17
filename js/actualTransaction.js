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
	if(className=="fa fa-circle-o animated")
	{
		myI.className="fa fa-check animated"
	}
}