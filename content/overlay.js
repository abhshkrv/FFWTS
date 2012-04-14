var currentFeedIndex = 0;
var array = new Array();
var oldData = new Array();
var isRead = (0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
var pause = false;
var time  = 1;
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
	
	if(document.getElementById("Blackburn").checked == true)
	{
		
	
	
	}
	
	
	//document.getElementById("all_feed").textContent=array[1];
	document.getElementById("all_feed_0").textContent=array[0];
	document.getElementById("all_feed_1").textContent=array[1];
	document.getElementById("all_feed_2").textContent=array[2];
	document.getElementById("all_feed_3").textContent=array[3];
	document.getElementById("all_feed_4").textContent=array[4];
	document.getElementById("all_feed_5").textContent=array[5];
	document.getElementById("all_feed_6").textContent=array[6];
	document.getElementById("all_feed_7").textContent=array[7];
	document.getElementById("all_feed_8").textContent=array[8];
	document.getElementById("all_feed_9").textContent=array[9];
	document.getElementById("all_feed_10").textContent=array[10];
	document.getElementById("all_feed_11").textContent=array[11];
	document.getElementById("all_feed_12").textContent=array[12];
	document.getElementById("all_feed_13").textContent=array[13];
	document.getElementById("all_feed_14").textContent=array[14];
	document.getElementById("all_feed_15").textContent=array[15];
	document.getElementById("all_feed_16").textContent=array[16];
	document.getElementById("all_feed_17").textContent=array[17];
	document.getElementById("all_feed_18").textContent=array[18];
	document.getElementById("all_feed_19").textContent=array[19];
	document.getElementById("all_feed_20").textContent=array[20];
	document.getElementById("all_feed_21").textContent=array[21];
	document.getElementById("all_feed_22").textContent=array[22];
	document.getElementById("all_feed_23").textContent=array[23];
	document.getElementById("all_feed_24").textContent=array[24];
	document.getElementById("all_feed_25").textContent=array[25];
	document.getElementById("all_feed_26").textContent=array[26];
	document.getElementById("all_feed_27").textContent=array[27];
	document.getElementById("all_feed_28").textContent=array[28];
	document.getElementById("all_feed_29").textContent=array[29];
	document.getElementById("all_feed_30").textContent=array[30];
	document.getElementById("all_feed_31").textContent=array[31];
	document.getElementById("all_feed_32").textContent=array[32];
	document.getElementById("all_feed_33").textContent=array[33];
	document.getElementById("all_feed_34").textContent=array[34];
	document.getElementById("all_feed_35").textContent=array[35];
	document.getElementById("all_feed_36").textContent=array[36];
	document.getElementById("all_feed_37").textContent=array[37];
	document.getElementById("all_feed_38").textContent=array[38];
	document.getElementById("all_feed_39").textContent=array[39];
	document.getElementById("all_feed_40").textContent=array[40];
	document.getElementById("all_feed_41").textContent=array[41];
	document.getElementById("all_feed_42").textContent=array[42];
	document.getElementById("all_feed_43").textContent=array[43];
	document.getElementById("all_feed_44").textContent=array[44];
	document.getElementById("all_feed_45").textContent=array[45];
	document.getElementById("all_feed_46").textContent=array[46];
	document.getElementById("all_feed_47").textContent=array[47];
	document.getElementById("all_feed_48").textContent=array[48];
	document.getElementById("all_feed_49").textContent=array[49];
	document.getElementById("all_feed_50").textContent=array[50];
	
	
	
	
	//alert("done");
		
}

function toggleOptions()
{
	//alert("here");
	if(document.getElementById('sound').hidden == false)
	{document.getElementById('sound').hidden = true;
	document.getElementById('update').hidden = true;
	document.getElementById('teams').hidden = true;
	document.getElementById('pause').hidden =true;
	return;
	}
	
	
	if(document.getElementById('sound').hidden == true)
	{
		document.getElementById('sound').hidden = false;
		document.getElementById('update').hidden = false;
		document.getElementById('teams').hidden = false;
		document.getElementById('pause').hidden =false;
		return;
	
	}


}
window.onload = loadArray();
