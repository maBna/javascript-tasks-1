var hours = process.argv[2];
var minutes = process.argv[3];

function Convert(time)
{	
	var timeStr = '';
	var countFifty = time/50; //количество 50
	var countTen = (time%50)/10; // количество 10
	var countOne = time%10; // количество 1
	
	for (countFifty; countFifty >= 1; countFifty--)
	{
		timeStr = timeStr + 'L';
	}
	
	for (countTen; countTen >= 1; countTen--)
	{
		if (countTen/4 >= 1)
		{
		timeStr = timeStr + 'XL';
		countTen = countTen - 4;
		}
		else
		{
		timeStr = timeStr + 'X';
		}
	}
	
	while (countOne >= 1)
	{
		if (countOne/9 >= 1) //9 по фен-шую
		{
		timeStr = timeStr + 'IX';
		countOne = countOne - 9;
		}
		else if (countOne/5 >= 1) //5 по фен-шую
		{
		timeStr = timeStr + 'V';
		countOne = countOne - 5;
		}
		else if (countOne/4 >= 1) //4 по фен-шую
		{
		timeStr = timeStr + 'IV';
		countOne = countOne - 4;
		}
		else		
		{
		timeStr = timeStr + 'I';
		countOne--;
		}
	}
	return timeStr;
}

if (hours <= 23 && hours >= 0)
{
	if (minutes <= 59 && minutes >= 0)
	{
		if (hours == 0)
		{
			console.log('N' + ':' + Convert(minutes));
		}
		else if (minutes == 0)
		{
			console.log(Convert(hours) + ':' + 'N');
		}
		else 
		{
			console.log(Convert(hours) + ':' + Convert(minutes));
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
