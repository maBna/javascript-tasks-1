var hours = process.argv[2];
var minutes = process.argv[3];

var hoursStr = '';
var minutesStr = '';

function HoursToRome(hours)
{	
	var a = hours/10; // количество десяток
	var b = ((hours%10)/5); // количество пятерок
	var c = hours%5; // количество единиц
	
	for (a; a >= 1; a--)
	{
		hoursStr = hoursStr + 'X';
	}
	
	for (b; b >= 1; b--)
	{
		hoursStr = hoursStr + 'V';
	}
	
	for (c; c >= 1; c--)
	{
		if (c == 4) //4 по фен-шую
		{
		hoursStr = hoursStr + 'IV';
		c = c - 4;
		}
		else
		{
		hoursStr = hoursStr + 'I';
		}
	}
}

function MinutesToRome(minutes)
{	
  var d = minutes/50; //количество 50
	var a = (minutes%50)/10; // количество 10
	var b = ((minutes%10)/5); // количество 5
	var c = minutes%5; // количество 1
	
	for (d; d >= 1; d--)
	{
		minutesStr = minutesStr + 'L';
	}
	
	for (a; a >= 1; a--)
	{
		minutesStr = minutesStr + 'X';
	}
	
	for (b; b >= 1; b--)
	{
		minutesStr = minutesStr + 'V';
	}
	
	for (c; c >= 1; c--)
	{
		if (c == 4) // цифра 4 по фен-шую
		{
			minutesStr = minutesStr + 'IV';
			c = c - 4;
		}
		else
		{
			minutesStr = minutesStr + 'I';
		}
	}
}

if (hours <= 23 && hours >= 0)
{
	if (minutes <= 59 && minutes >= 0)
	{
		HoursToRome(hours);
		MinutesToRome(minutes);
		console.log(hoursStr + ':' + minutesStr);
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
