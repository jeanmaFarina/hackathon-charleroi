const url_needer="http://localhost:3000/needer/";
const url_helper="http://localhost:3000/helper/";
const url_activity="http://localhost:3000/activity/";
const url_group="http://localhost:3000/group/";
const url_pro="http://localhost:3000/pro/";




// a function that returns the list of helpers
async function getHelperList(){
    const resHelper=await fetch(url_helper);
    const helpers=await resHelper.json();
    console.log(helpers);
}


 


// a function that returns a helper when helper id is given
async function getHelper(id){
    const resHelper=await fetch(url_helper+id);
    const helper=await resHelper.json();
    console.log(helper);
}

 
// a function that returns the list of needers
async function getNeederList(){
    const resNeeder=await fetch(url_needer);
    const needers=await resNeeder.json();
    console.log(needers);
    }

// a function that returns a needer  when needer id is given
async function getNeeder(id){
    const resNeeder=await fetch(url_needer+id);
    const needer=await resNeeder.json();
    console.log(needer);
    }



// a function that returns a activity list 
async function getActivityList(){
    const resActivity=await fetch(url_activity);
    const activities=await resActivity.json();
    console.log(activities);
    }

// a function that returns an activity when activity id is given
async function getActivity(id){
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
 

