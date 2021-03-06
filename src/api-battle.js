import axios from 'axios';

function getProfile(username){
  return axios.get('https://api.github.com/users/' + username)
    .then(function(user){
      return user.data;
    });
}

function getRepos(username){
  return axios.get('https://api.github.com/users/' + username + '/repos?per_page=100');
}

function getStarCount(repos){
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0);
}

function calculateScore(profile, repos){
  let followers = profile.followers;
  let totalStars = getStarCount(repos);

  return (followers * 3 + totalStars);
}

function handleError (error){
  console.warn (error);
  return null;
}

function getUserData (player){
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(function(data){
    let profile = data[0];
    let repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    }
  })
}

function sortPlayers(players){
  return players.sort(function(a, b){
    return b.score - a.score;
  });
}
// battle([
//     "ivanseidel", // https://github.com/ivanseidel
//     "honcheng"]  // https://github.com/honcheng
//   ).then((results) => {
//     if (results === null){
//        console.log ('Looks like there was an error!\nCheck that both users exist on github.');
//     }
//     console.log ("battle result:", results[0], results[1]);
//   });

export function battle(players){
   return axios.all(players.map(getUserData))
   .then(sortPlayers);
}

export function   fetchPopularRepos(language){
   var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'
   + language + '&sort=stars&order=desc&type=Repositories');

   return axios.get(encodedURI)
   .then(function(response){
      return response.data.items;
   });
}