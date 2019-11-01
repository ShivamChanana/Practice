//variables
const tweetlist = document.getElementById("tweet-list");
//event listner
EventListener();
function EventListener() {
 document.querySelector("#form").addEventListener("submit", newtweet);
 //remove tweet from list
 tweetlist.addEventListener("click", removeTweet);

//function
function newtweet(event) {
 event.preventDefault();
 console.log("form event", event.target[0].innerHTML);
 const tweet = document.getElementById("tweet").value;
 console.log("tweet value", tweet);


 //create a li element
 const li = document.createElement("li");
 li.textContent = tweet;
 tweetlist.appendChild(li);

  //create remove button
  const removeBtn = document.createElement("a");
  removeBtn.classList = "remove-tweet";
  removeBtn.textContent = "X"
  li.appendChild(removeBtn)
}
}

function removeTweet(e){
    if(e.target.classList.contains("remove-tweet"))
    e.target.parentElement.remove()
}

//add tweet to local storage

function addTweetLocalStorage(tweet){
    let tweets = []

    //Add the tweet into array
    tweets.push(tweet)

    //
    LoacalStorage("tweets", tweets)

}
addTweetLocalStorage("hello1")