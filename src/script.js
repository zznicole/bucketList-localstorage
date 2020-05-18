let bucketLists  = [];

$('#addButton').on('click',function(){
 
  let bucketItem = $('#addList').val();
  $('#theList').append(`<li>${bucketItem}</li>`);
  
  // for(let i = 0; i < bucketLists.length; i++) {
    bucketLists.push(bucketItem);
    // console.log(bucketLists);
   
 
// alert(listArray);
//  function addItem (item) {
//    for(let i = 0; i < listArray.length; i++) {
//      localStorage.setItem('localArray',JSON.stringify('localArray'));

//   }

console.log(typeof(bucketLists));
//  }
 localStorage.setItem("bucketlists", JSON.stringify(bucketLists));
});

// let bucketLists = JSON.parse(localStorage.getItem)("bucketLists");