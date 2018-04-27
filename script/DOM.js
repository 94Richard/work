$(function(){
	var DOMHeight=window.innerHeight;
	var DOMWidth=window.innerWidth;
	if(DOMHeight >= 3800)
	{		
		$(body).css("overflow","hidden");
	}
	else
	{
		$(body).css("overflow","auto");
	}
	
	})