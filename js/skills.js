var public_spreadsheet_url =                'https://docs.google.com/spreadsheets/d/1QXOUoGM93i4dt5XH8QbfS7TG8A00v5b-18Few3KcqfM/pubhtml';

function InitializeTabletop() 
{
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
}

function showInfo(data, tabletop) 
{
    //alert("Successfully processed!")
    console.log(data);
    AddSkillsToPage(data);
    //alert(data[0].Skill);
}

function CreateModule (skill, iconLink, blurb)
{
    	return "<div class=\"module\" id=\""+skill+"\" data-blurb=\""+blurb+"\" data-bg-img=\""+iconLink+"\" data-skill=\""+skill+"\"><div class=\"circle\" style=\"background-image:url('"+iconLink+"')\"></div><h3>"+skill+"</h3></div>"
}

function AddSkillsToPage(data)
{
    for(i = 0; i < data.length; i++)
    {
        $('#'+data[i].Category)
            .find('.autowide')
            .append(CreateModule(data[i].Skill, data[i].IconLink, data[i].Blurb))
            .on( "click", 
                {
                    Skill: data[i].Skill,
                    IconLink: data[i].IconLink,
                    Blurb: data[i].Blurb
                }, ModuleClick );
    }
}

$( document ).ready(function() 
{
    InitializeTabletop();
    
});

function ModuleClick(event)
{
        console.log('click');
        swal({   
            title: "<div class=\"circle\" style=\";background-image:url(\'"+event.data.IconLink+"\')\"></div> <h3>"+event.data.Skill+"</h3>",   
            text: event.data.Blurb,   
            html: true 
        });
}
