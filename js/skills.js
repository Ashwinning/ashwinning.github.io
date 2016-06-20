window.onload = function() { init() };

var public_spreadsheet_url =                'https://docs.google.com/spreadsheets/d/1QXOUoGM93i4dt5XH8QbfS7TG8A00v5b-18Few3KcqfM/pubhtml';

function init() 
{
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
}

function showInfo(data, tabletop) 
{
    //alert("Successfully processed!")
    console.log(data);
    //alert(data[0].Skill);
}

function CreateModule (skill, iconLink, blurb)
{
    	return "<div class=\"module\" id=\"skill_"+skill+"\" data-blurb=\""+blurb+"\">" +
        "<div class=\"circle\" style=\";background-image:url(\'"+iconLink+"\')\"></div><h3>"+skill+"</h3></div>"
}

function ShowFrameWorks()
{
    
}
