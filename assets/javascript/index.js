//listening for the search button to be clicked, get the data, and create a new button on the screen of terms the user has or wants to search later.
document.getElementById('buttonSearch').addEventListener('click', function(event){
 /*    event.preventDefault();
    //variables for paths for ease and readability of code
    var search = document.getElementById('searchTerm');
    var searchHistory = document.getElementById('searchHistory');

    //getting the search value and clearing out search bar
    var searchTerm = search.value;
    console.log(searchTerm);
    search.value = "";

    //creating new element and posting it
    var searchedItem = document.createElement('span');
        //searchedItem.setAttribute('class', "button-searchHistory");
    searchedItem.addEventListener('click', getGif);
    searchedItem.setAttribute('data-name', searchTerm);
    searchedItem.textContent = "#"+searchTerm;

    searchHistory.append(searchedItem); */
    createTermButton();
});

document.addEventListener('keydown', function(event){
    if(13 == event.keyCode) {
        createTermButton();
    }
});
//creates the button that shows up on the aside with the searchbox text.
function createTermButton(){

    //variables for paths for ease and readability of code
    var search = document.getElementById('searchTerm');
    var searchHistory = document.getElementById('searchHistory');

    //getting the search value and clearing out search bar
    var searchTerm = search.value;
    console.log(searchTerm);
    search.value = "";

    if(searchTerm != ""){ //validate user input. dont want blank inputs.
        //creating new element and posting it
        var searchedItem = document.createElement('span');
            //searchedItem.setAttribute('class', "button-searchHistory");
        searchedItem.addEventListener('click', getGif);
        searchedItem.setAttribute('data-name', searchTerm);
        searchedItem.textContent = "#"+searchTerm;

        searchHistory.append(searchedItem);  
    }
    
};
//functions to work as the mouse 'hover' swaps the attributes so that gifs only play when hovered over.
function gifAnimate(){
    this.setAttribute('src', this.attributes.dataMovingURL.value);
}
function gifStill(){
    this.setAttribute('src', this.attributes.dataStillURL.value);
}

//function used to get the gifs and populate them to the screen
function getGif(){
    searchTerm = this.getAttribute('data-name');
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=gcSmR9mT3vJr69zLe0vQDZIHeY0mFux4&limit=5");
    xhr.done(function(response) {

        for (var i = 0; i< response.data.length; i++){ //repeats for each of the responses we get from GIPHY.
            console.log(response.data[i]);
            var data = response.data[i];
            var newGif = document.createElement('img');
            newGif.setAttribute('class', 'funnies');
            newGif.setAttribute('src', data.images.fixed_height_still.url);
            newGif.setAttribute('dataStillURL', data.images.fixed_height_still.url);
            newGif.setAttribute('dataMovingURL', data.images.fixed_height.url);
            newGif.addEventListener("mouseover", gifAnimate);
            newGif.addEventListener("mouseout", gifStill);
            document.getElementById('gifBox').prepend(newGif);
        }
        console.log (response);
     });
}
