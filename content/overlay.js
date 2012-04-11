var currentFeedIndex = 0;
var array = new Array();
var oldData = new Array();
//var isRead = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
var pause = false;
function test()
{
	alert ("YAY!!");

}



function displayDate()
{
	//alert(pause);
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
		//alert(oldData[0]);
		//alert(array[0]);
		if(array[0]!=oldData[0])
		{	//alert("NEW STUFF");
			document.getElementById( 'popup_text' ).openPopupAtScreen(0,0, true);
			
		}
		updateUnread(oldData, array);
		
		
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
	
	document.getElementById( "unread").value = count;


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
		currentFeedIndex--;
		document.getElementById( "feed_number").value = 50-currentFeedIndex;
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
 	alert ("YAY Called!!");
	var data = document.getElementById("dataTextBox").value;
	pause = document.getElementById("pref-backup").value;
	alert(pause);
	
}
window.onload = loadArray();
