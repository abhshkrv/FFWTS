var currentFeedIndex = 0;
var array = new Array();
var oldData = new Array();
var isRead = (0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var pause = false;
var time  = 60000;

function test()
{
	alert ("YAY!!");

}

function update_time()
{
	//alert("time");
	var newval = document.getElementById( 'mins' ).value;
	if(IsNumeric(newval)&&newval!=' ')
	{
		//alert("here")
		time = newval;
	}
	
	else document.getElementById( 'mins' ).value=1;
	
}

function pause_addon()
{	alert("oops");
	if (pause == true)
	{	pause = false;
		document.getElementById("yo").hidden = false;
		document.getElementById("yo1").hidden = true;
	}
	else if (pause == false)
	{	pause = true;
		document.getElementById("yo").hidden = true;
		document.getElementById("yo1").hidden = false;
	
	}
	

}

function displayDate()
{
	//alert(pause);
	//alert("start");
	if(pause==false)
	{	oldData = array;
		var xmlHttp = null;
			
		//alert("feed seeking");
		xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "GET", 'http://127.0.0.1/ffwts.php', false );
		xmlHttp.send( null );
		 array =  eval ( "(" + xmlHttp.responseText + ")" );
		 
		currentFeedIndex = 0;
		document.getElementById( "feed_number").value = 50-currentFeedIndex;
		document.getElementById('current_feed').textContent   = array[0];
		isRead[currentFeedIndex]=1;
		//alert(oldData[0]);
		//alert(array[0]);
		if(array[0]!=oldData[0])
		{	//alert("NEW STUFF");
			document.getElementById( 'popup_text' ).openPopupAtScreen(1000,130, true);
			
		}
		//document.getElementById( 'popup_text' ).openPopupAtScreen(1000,130, true);
		//updateUnread(oldData, array);
		//alert("here");
		//document.getElementById( 'popup_text' ).openPopupAtScreen(1000,130, true);
		
		//document.getElementById( 'all_feed' ).textContent=array[0];
		//alert("works");
		loadAllstream();
		//for (x=0;x<50;x++)
		//	document.getElementById( 'all_feed_1' ).textContent = document.getElementById( 'all_feed_1' ).textContent +'-----------------------'+ array[x];
		//document.getElementById('current').innerHTML  ="sss";
		//alert( "done");
	  //return xmlHttp.responseText;
	}
	
	
	
		
}
	
function timeChange()
{
	if(document.getElementById( '5min' ).selected = true)
{
		time = 300000;
		alert(time);
}
else if (document.getElementById( '15min' ).selected = true)
{
		time = 900000;
		alert(time);
}
else if(document.getElementById( '10min' ).selected = true)
{
		time = 600000;
		alert(time);
}
else time = 60000;
	}
	

function updateUnread(oldArray, newArray)
{
	count = 0;
	 i =0;
	// j=0;
	for( i=0; i<50; i++)
	{
		if(oldArray[0]!=newArray[i])
		{
			count++;
			//i--;
			
		}
		else 
			break;
		if (count>10)
			break;
	}
	
	//document.getElementById( "unread").value = isRead.count(1);


}



function loadArray()
{
//document.getElementById( "matches").appendItem( "match1", "",'val');
alert("ffwts started");
//displayDate();
//var tmr = require('timer');

setInterval(displayDate, 10000); // no need for an anon function since you don't pass any arguments to yo
//document.getElementById( "matches").appendItem( "match1", "1");
//setTimeout(test(), 5000);
//alert("test");
/*var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'http://127.0.0.1/ffwts.php', false );
    xmlHttp.send( null );
	var array =  eval ( "(" + xmlHttp.responseText + ")" );
	alert( array[0]);
	document.getElementById( "current_feed"    ).value = array[0];
  return array;
*/
}



function updateView()
{


}


function showPrevFeed()
{
	if(currentFeedIndex <= array.length)
	{	document.getElementById( 'current_feed').textContent  = array[currentFeedIndex+1];
		currentFeedIndex++;
		document.getElementById( "feed_number").value = 50-currentFeedIndex;
		isRead[currentFeedIndex]=1;
		//alert("clicked");
	}

}

function openPrefWindow()
{
	
	window.open("chrome://helloworld/content/pref.xul", "", "chrome");
}

function showNextFeed()
{
	if(currentFeedIndex >= 1)
	{
		document.getElementById( "current_feed").textContent  = array[currentFeedIndex-1];
		//isFeed[currentFeedIndex-1]=1;
		currentFeedIndex--;
		document.getElementById( "feed_number").value = 50-currentFeedIndex;
		isRead[currentFeedIndex]=1;
	}
}


function updateFeedCount()
{



}

function openBBC()
{	
	window.open('http://www.bbc.co.uk/sport/0/football','_newtab');
}
function submitFunction()
{
 	//alert ("YAY Called!!");
	var data = document.getElementById("dataTextBox").value;
	pause = document.getElementById("pref-backup").value;
	alert(pause);
	
}

function loadAllstream()
{
	//if(document.getElementById("Arsenal").checked == true)
		//document.getElementById("Blackburn").checked = true;
	
	//for (x=0;x<50;x++)
	//	document.getElementById( 'all_feed' ).textContent = document.getElementById( 'all_feed' ).textContent +'<hr />'+ array[i];

	//for(i=0;i<50;i++
	//alert("start");//all_feed_2
	//alert("OK");
	var keywords= ['Welcome'];
	var Arsenal = ['Arsenal','Gunners','Arsene','Wenger'];
	var Blackburn = [ "Blackburn", "Robinson", "Orr", 'Dann', 'Grant Hanley', 'Martin Olsson', 'Hoilett', 'Dunn', 'Nzonzi', 'Marcus Olsson', 'Formica', 'Yakubu','Kean', 'Givet', 'Pedersen', 'Petrovic', 'Rochina', 'Goodwillie', 'Lowe'];
	var Liverpool = ['Liverpool','Kenny','Reds', 'Jones', 'Johnson', 'Carragher', 'Skrtel', 'Agger', 'Henderson','Gerrard', 'Spearing', 'Downing', 'Suarez', 'Carroll','Gulacsi','Jose Enrique', 'Maxi', 'Kuyt', 'Shelvey', 'Kelly','Bellamy'];
	var Everton = ['Everton','Toffees', 'Howard', 'Neville', 'Heitinga', 'Distin', 'Baines', 'Osman', 'Gibson', 'Fellaini', 'Gueye', 'Cahill', 'Jelavic','Hahnemann', 'Hibbert', 'Jagielka', 'Stracqualursi', 'McFadden', 'Coleman', 'Anichebe'];
	var Norwich = ['Norwich', 'Ruddy', 'Martin', 'Ward', 'Ryan Bennett', 'Drury', 'Elliott Bennett', 'Howson', 'Johnson', 'Pilkington', 'Holt', 'Wilbraham','Steer', 'Morison', 'Jackson', 'Surman', 'Hoolahan', 'Fox', 'Naughton'];
	var ManCity = ['Man City','Mancini','Blues','City','Mancini', 'Hart', 'Zabaleta', 'Kompany', 'Lescott', 'Clichy', 'De Jong', 'Barry', 'Nasri', 'Tevez', 'Aguero', 'Silva','Pantilimon', 'Richards', 'Milner', 'Dzeko', 'Johnson', 'Kolarov', 'Toure'];
	var Wolves = [ 'Wolverhampton', 'Wolves', 'Hennessey', 'Forde', 'Stearman', 'Berra', 'Ward', 'Kightly', 'Davis', 'Henry', 'Fletcher', 'Foley', 'Ebanks-Blake','De Vries', 'Edwards', 'Johnson', 'Jarvis', 'Jonsson', 'Zubar', 'Doyle'];
	var Sunderland = ['Sunderland', 'Mignolet', 'Bardsley', 'Turner', 'Kilgallon', 'Richardson', 'Larsson', 'Gardner', 'Colback', 'McClean', 'Bendtner', 'Sessegnon','Westwood', 'Bridge', 'Campbell', 'Vaughan', 'Ji', 'Meyler', 'Kyrgiakos'];
	var QPR = [ 'QPR', 'Kenny', 'Onuoha', 'Ferdinand', 'Hill', 'Taiwo', 'Barton', 'Diakite', 'Derry', 'Mackie', 'Zamora', 'Taarabt','Cerny', 'Gabbidon', 'Traore', 'Buzsaky', 'Young', 'Helguson', 'Wright-Phillips'];
	var WestBrom = ['West Brom', 'Foster', 'Jones', 'McAuley', 'Olsson', 'Ridgewell', 'Brunt', 'Mulumbu', 'Dorrans', 'Thomas', 'Fortune', 'Odemwingie','Daniels', 'Andrews', 'Long', 'Shorey', 'Dawson', 'Cox', 'Scharner'];
	var ManUtd = [  'Manchester United', 'United' , 'De Gea', 'Jones', 'Ferdinand', 'Evans', 'Evra', 'Valencia', 'Giggs', 'Carrick', 'Young', 'Rooney', 'Hernandez', 'Amos', 'Smalling', 'Park', 'Nani', 'Welbeck', 'Cleverley', 'Pogba'];
	var Bolton = ['Bolton'];
	var AstonVilla = ['Villa','Aston Villa', 'Given', 'Hutton', 'Collins', 'Baker', 'Lichaj', 'Bannan', 'Ireland', 'Clark', 'Gardner', 'Weimann','Agbonlahor','Guzan','Zogbia', 'Delfouneso', 'Heskey', 'Cuellar', 'Johnson', 'Carruthers'];
	var Chelsea=['Chelsea','Cech', 'Bosingwa', 'Terry', 'Luiz', 'Cole', 'Ramires', 'Lampard', 'Mikel', 'Kalou', 'Drogba', 'Mata', 'Turnbull', 'Essien', 'Torres', 'Malouda', 'Meireles', 'Sturridge', 'Cahill'];
	var Newcastle=['Newcastle'];
	var Fulham=['Fulham'];
	var Stoke=['Stoke'];
	var Tottenham=['Spurs','Tottenham','Hotspur','Cudicini', 'Walker', 'Gallas', 'King', 'Assou-Ekotto', 'Lennon', 'Modric', 'Parker', 'Bale', 'Adebayor', 'Van der Vaart', 'Friedel', 'Giovani', 'Defoe', 'Rose', 'Livermore', 'Sandro', 'Nelsen'];
	var Wigan=['Wigan'];
	var WestBrom = ['WestBrom'];
	var Wolves=['Wolves'];
	var Swansea =['Swansea'];
	//alert("OK2");
	if(document.getElementById("Arsenal").checked == true)
	{
		//alert("OK3");
		keywords = keywords.concat(Arsenal);	
		//alert("OK4");
	}
	//var arsenal = ['Arsenal','Gunners','Arsene','Wenger'];
	if(document.getElementById("AstonVilla").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(AstonVilla);	
	}
	if(document.getElementById("Blackburn").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(Blackburn);	
	}
	if(document.getElementById("Chelsea").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(Chelsea);	
	}
	if(document.getElementById("Everton").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(Everton);	
	}
	if(document.getElementById("Fulham").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(Fulham);	
	}
	if(document.getElementById("Liverpool").checked == true)
	{
		//alert(Liverpool[2]);
		keywords = keywords.concat(Liverpool);
		//alert(keywords[0]);
	}
	if(document.getElementById("ManUtd").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(ManUtd);	
	}
	if(document.getElementById("ManCity").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(ManCity);	
	}
	if(document.getElementById("Newcastle").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(Newcastle);	
	}
	if(document.getElementById("Norwich").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(Norwich);	
	}
	if(document.getElementById("QPR").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(QPR);	
	}
	if(document.getElementById("Stoke").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(Stoke);	
	}
	if(document.getElementById("Sunderland").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(Sunderland);	
	}
	if(document.getElementById("Swansea").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(Swansea);	
	}
	if(document.getElementById("Tottenham").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(Tottenham);	
	}
	if(document.getElementById("WestBrom").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(WestBrom);	
	}
	if(document.getElementById("Wigan").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(Wigan);	
	}
	if(document.getElementById("Wolves").checked == true)
	{
		//alert(arsenal[2]);
		keywords = keywords.concat(Wolves);	
	}
	//alert("going to print");
	var toShow = new Array();
	for(i=0;i<200;i++)
	{
		for(j=0;j<20;j++)
		{
			if(array[i].indexOf(keywords[j]) != -1)
			{
				toShow.push(array[i]);
				break;
			}
		}
	}
	
	for(i=0;i<100;i++)
	toShow.push('');
	//alert(keywords[1]);
	
	
	
	//document.getElementById("all_feed").textContent=toShow[1];
	document.getElementById("all_feed_0").textContent=toShow[0];
	document.getElementById("all_feed_1").textContent=toShow[1];
	document.getElementById("all_feed_2").textContent=toShow[2];
	document.getElementById("all_feed_3").textContent=toShow[3];
	document.getElementById("all_feed_4").textContent=toShow[4];
	document.getElementById("all_feed_5").textContent=toShow[5];
	document.getElementById("all_feed_6").textContent=toShow[6];
	document.getElementById("all_feed_7").textContent=toShow[7];
	document.getElementById("all_feed_8").textContent=toShow[8];
	document.getElementById("all_feed_9").textContent=toShow[9];
	document.getElementById("all_feed_10").textContent=toShow[10];
	document.getElementById("all_feed_11").textContent=toShow[11];
	document.getElementById("all_feed_12").textContent=toShow[12];
	document.getElementById("all_feed_13").textContent=toShow[13];
	document.getElementById("all_feed_14").textContent=toShow[14];
	document.getElementById("all_feed_15").textContent=toShow[15];
	document.getElementById("all_feed_16").textContent=toShow[16];
	document.getElementById("all_feed_17").textContent=toShow[17];
	document.getElementById("all_feed_18").textContent=toShow[18];
	document.getElementById("all_feed_19").textContent=toShow[19];
	document.getElementById("all_feed_20").textContent=toShow[20];
	document.getElementById("all_feed_21").textContent=toShow[21];
	document.getElementById("all_feed_22").textContent=toShow[22];
	document.getElementById("all_feed_23").textContent=toShow[23];
	document.getElementById("all_feed_24").textContent=toShow[24];
	document.getElementById("all_feed_25").textContent=toShow[25];
	document.getElementById("all_feed_26").textContent=toShow[26];
	document.getElementById("all_feed_27").textContent=toShow[27];
	document.getElementById("all_feed_28").textContent=toShow[28];
	document.getElementById("all_feed_29").textContent=toShow[29];
	document.getElementById("all_feed_30").textContent=toShow[30];
	document.getElementById("all_feed_31").textContent=toShow[31];
	document.getElementById("all_feed_32").textContent=toShow[32];
	document.getElementById("all_feed_33").textContent=toShow[33];
	document.getElementById("all_feed_34").textContent=toShow[34];
	document.getElementById("all_feed_35").textContent=toShow[35];
	document.getElementById("all_feed_36").textContent=toShow[36];
	document.getElementById("all_feed_37").textContent=toShow[37];
	document.getElementById("all_feed_38").textContent=toShow[38];
	document.getElementById("all_feed_39").textContent=toShow[39];
	document.getElementById("all_feed_40").textContent=toShow[40];
	document.getElementById("all_feed_41").textContent=toShow[41];
	document.getElementById("all_feed_42").textContent=toShow[42];
	document.getElementById("all_feed_43").textContent=toShow[43];
	document.getElementById("all_feed_44").textContent=toShow[44];
	document.getElementById("all_feed_45").textContent=toShow[45];
	document.getElementById("all_feed_46").textContent=toShow[46];
	document.getElementById("all_feed_47").textContent=toShow[47];
	document.getElementById("all_feed_48").textContent=toShow[48];
	document.getElementById("all_feed_49").textContent=toShow[49];
	document.getElementById("all_feed_50").textContent=toShow[50];
	
	
	
	
	//alert("done");
		
}

function toggleOptions()
{
	//alert("here");
	if(document.getElementById('pause').hidden == false)
	{document.getElementById('team-heading').hidden = true;
	document.getElementById('update').hidden = true;
	document.getElementById('teams').hidden = true;
	document.getElementById('pause').hidden =true;
	return;
	}
	
	
	if(document.getElementById('pause').hidden == true)
	{
		document.getElementById('team-heading').hidden = false;
		document.getElementById('update').hidden = false;
		document.getElementById('teams').hidden = false;
		document.getElementById('pause').hidden =false;
		return;
	
	}


}
window.onload = loadArray();
