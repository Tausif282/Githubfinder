let input =document.getElementById("search");
input.addEventListener("keyup",e=>{
    let searchText=e.target.value;
    getGitHubProfile(searchText);
});

async function getGitHubProfile(searchText){
  let client_id="640b3cd9610b8494e4ee";
  let client_secret="a55aef424da8b952255ab9af658acd582eea4b2b";
  let githubUrl=`https://api.github.com/users/${searchText}?client_id=${client_id}&${client_secret}`;  
    // console.log(searchText);
    let res = await window
    .fetch(githubUrl)
    .catch(err=>console.log(err));
    let Data =await res.json().catch(err=> console.log(err));
    // console.log(Data);

    document.getElementById(
      "template"
    ).innerHTML=`
    <div class="row")
     <div class="col-md-3">
     <img src="${Data.avatar_url}"/>
     <h1 class="display-4 font-weight-bold>${Data.login}</h1>
     </div>
     <div class="col-md-9></div>
     </div>
     <div class="col-md-9">
     <h1>${Data.name}<h1>
     <li>${Data.location}<li>
     <li>${Data.company}<li>
     <li>${Data.email}<li>
     <li>${Data.bio}<li>
     <li>${Data.public}<li>
     </div>
    
    
    `
                                                                                                                                                                                      
}