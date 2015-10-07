var hours = process.argv[2];
var minutes = process.argv[3];

var hoursStr = '';
var minutesStr = '';

function HoursToRome(hours)
{	
	var countTen = hours/10; // количество десяток
	//var b = ((hours%10)/5); // количество пятерок
	var countOne = hours%10; // количество единиц
	
	
	for (countTen; countTen >= 1; countTen--)
	{
		if (countTen/4 >= 1)
		{
		hoursStr = hoursStr + 'XL';
		countTen = countTen - 4;
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

	while (countOne >= 1)
	{
		if (countOne/9 >= 1) //9 по фен-шую
		{
		hoursStr = hoursStr + 'IX';
		countOne = countOne - 9;
		}
		else if (countOne/5 >= 1) //5 по фен-шую
		{
		hoursStr = hoursStr + 'V';
		countOne = countOne - 5;
		}
		else if (countOne/4 >= 1) //4 по фен-шую
		{
		hoursStr = hoursStr + 'IV';
		countOne = countOne - 4;
		}
		else		
		{
		hoursStr = hoursStr + 'I';
		countOne--;
		}
	}
}

function MinutesToRome(minutes)

{	var countFifty = minutes/50; //количество 50
	var countTen = (minutes%50)/10; // количество 10
	//var b = ((minutes%10)/5); // количество 5
	var countOne = minutes%10; // количество 1
	
	for (countFifty; countFifty >= 1; countFifty--)
	{
		minutesStr = minutesStr + 'L';
	}
	
	for (countTen; countTen >= 1; countTen--)
	{
		if (countTen/4 >= 1)
		{
		minutesStr = minutesStr + 'XL';
		countTen = countTen - 4;
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
	
	while (countOne >= 1)
	{
		if (countOne/9 >= 1) //9 по фен-шую
		{
		minutesStr = minutesStr + 'IX';
		countOne = countOne - 9;
		}
		else if (countOne/5 >= 1) //5 по фен-шую
		{
		minutesStr = minutesStr + 'V';
		countOne = countOne - 5;
		}
		else if (countOne/4 >= 1) //4 по фен-шую
		{
		minutesStr = minutesStr + 'IV';
		countOne = countOne - 4;
		}
		else		
		{
		minutesStr = minutesStr + 'I';
		countOne--;
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
			minutesStr = "N";
			HoursToRome(hours);
			console.log(hoursStr + ':' + minutesStr);
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
