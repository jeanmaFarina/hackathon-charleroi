const url_needer="http://localhost:3000/needer/";
const url_helper="http://localhost:3000/helper/";
const url_activity="http://localhost:3000/activity/";
const url_group="http://localhost:3000/group/";
const url_pro="http://localhost:3000/pro/";


/* 
Note that  most of the necessary functions are created we just need to add events of the html 
file and implement these functions either call these functions of copy the body of the functions
*/


function redirectPage(anchorElt) {
    //this function will be used on click event of anchor tag to redirect page
    url= anchorElt.href;
    location.assign(url);
}




async function getHelperList(){
    // a function that returns the list of helpers
    const resHelper=await fetch(url_helper);
    const helpers=await resHelper.json();
    console.log(helpers);
}


 



async function getHelper(id){
    // a function that returns a helper when helper id is given
    const resHelper=await fetch(url_helper+id);
    const helper=await resHelper.json();
    console.log(helper);
}

 

async function getNeederList(){
    // a function that returns the list of needers
    const resNeeder=await fetch(url_needer);
    const needers=await resNeeder.json();
    console.log(needers);
    }



async function getNeeder(id){
    // a function that returns a needer  when needer id is given
    const resNeeder=await fetch(url_needer+id);
    const needer=await resNeeder.json();
    console.log(needer);
    }




async function getActivityList(){
    // a function that returns a activity list 
    const resActivity=await fetch(url_activity);
    const activities=await resActivity.json();
    console.log(activities);
    }


async function getActivity(id){
    // a function that returns an activity when activity id is given
    const resActivity=await fetch(url_activity+id);
    const activity=await resActivity.json();
    console.log(activity);
    }


 async function getGroupActivities(url_group){
    // this function return the list of activities which are grouped
    let return_json=[];
    const resGroup=await fetch(url_group);
    const groups=await resGroup.json();
    let item=[];
    for(group of groups) {
        item="";
        const resActivity=await fetch(url_activity+group.activityId);
        const activity=await resActivity.json();
        // for prototype one group one activity one helper
        item="{ neederId:"+group.neederId +","+ 
        "id:"+activity.id +","+ 
        "image:"+activity.image +","+ 
        "title:"+activity.title+","+  
        "category:"+activity.category +","+ 
        "date:"+activity.date +","+ 
        "time:"+activity.time +","+ 
        "participant:"+activity.participant +","+ 
        "cost:"+activity.cost +","+ 
        "address:"+activity.address +","+ 
        "helperID:"+group.helperId  +"}";
        return_json.push(item);
        item="";
        
    }
    return  {return_json};
}
 

