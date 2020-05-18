let bucketLists  = [];

$('#addButton').on('click',function(){
 
  let bucketItem = $('#addList').val();
  
  $('#theList').append(`<li>${bucketItem}</li>`);
  
    bucketLists.push(bucketItem);
  
 localStorage.setItem("bucketlists", JSON.stringify(bucketLists));
});


let bucketlists = JSON.parse(localStorage.getItem("bucketlists"));

$('#theList').append(`<li> ${bucketlists} </li>`);