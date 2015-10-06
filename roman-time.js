var hours = process.argv[2];
var minutes = process.argv[3];

var hoursStr = '';
var minutesStr = '';

function HoursToRome(hours)
{	
	var a = hours/10; // количество десяток
	//var b = ((hours%10)/5); // количество пятерок
	var c = hours%10; // количество единиц
	
	
	for (a; a >= 1; a--)
	{
		if (a/4 >= 1)
		{
		hoursStr = hoursStr + 'XL';
		a = a - 4;
		}
		else
		{
		hoursStr = hoursStr + 'X';
		}
	}
	
	/*for (b; b >= 1; b--)
	{
		hoursStr = hoursStr + 'V';
	}
	*/

	while (c >= 1)
	{
		if (c/9 >= 1) //9 по фен-шую
		{
		hoursStr = hoursStr + 'IX';
		c = c - 9;
		}
		else if (c/5 >= 1) //5 по фен-шую
		{
		hoursStr = hoursStr + 'V';
		c = c - 5;
		}
		else if (c/4 >= 1) //4 по фен-шую
		{
		hoursStr = hoursStr + 'IV';
		c = c - 4;
		}
		else		
		{
		hoursStr = hoursStr + 'I';
		c--;
		}
	}
}

function MinutesToRome(minutes)

{	var d = minutes/50; //количество 50
	var a = (minutes%50)/10; // количество 10
	//var b = ((minutes%10)/5); // количество 5
	var c = minutes%10; // количество 1
	
	for (d; d >= 1; d--)
	{
		minutesStr = minutesStr + 'L';
	}
	
	for (a; a >= 1; a--)
	{
		if (a/4 >= 1)
		{
		minutesStr = minutesStr + 'XL';
		a = a - 4;
		}
		else
		{
		minutesStr = minutesStr + 'X';
		}
	}
	
	/*for (b; b >= 1; b--)
	{
		minutesStr = minutesStr + 'V';
	}*/
	
	while (c >= 1)
	{
		if (c/9 >= 1) //9 по фен-шую
		{
		minutesStr = minutesStr + 'IX';
		c = c - 9;
		}
		else if (c/5 >= 1) //5 по фен-шую
		{
		minutesStr = minutesStr + 'V';
		c = c - 5;
		}
		else if (c/4 >= 1) //4 по фен-шую
		{
		minutesStr = minutesStr + 'IV';
		c = c - 4;
		}
		else		
		{
		minutesStr = minutesStr + 'I';
		c--;
		}
	}
}

if (hours <= 23 && hours >= 0)
{
	if (minutes <= 59 && minutes >= 0)
	{
		if (hours == 0)
		{
			hoursStr = "N";
			MinutesToRome(minutes);
			console.log(hoursStr + ':' + minutesStr);
		}
		else if (minutes == 0)
		{
		
			HoursToRome(hours);
			console.log(hoursStr + ':' + minutesStr);
			minutesStr = "N";
		}
		else 
		{
			HoursToRome(hours);
			MinutesToRome(minutes);
			console.log(hoursStr + ':' + minutesStr);
		}
	}
	else
	{
		console.log('Время указано не верно');
	}
}
else
{
	console.log('Время указано не верно');
}
// Немного замечательного кода и магии
