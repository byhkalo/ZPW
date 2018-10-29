var vip = [ {
  title: "Bill Gates",
  where: "http://www.onet.pl", 
  url: "cat1.jpg"
}, {
  title: "Władimir Putin",
  where: "http://www.interia.pl", 
  url: "cat2.jpg"
}, {
  title: "Donald Trump", 
  where: "http://www.wp.pl", 
  url: "cat3.jpg"
}];

function drawTable() {
  var table = '<table>';
  var cols = 3;
    for (var index = 0; index < vip.length; index++) {
      table += 
      '<div class="course">' +
        '<h3>' + vip[index].title + '<h3>'+
        '<img src="' + vip[index].url + '">'+
        '<a href="' + vip[index].where + '">Where is a cat?</a>'+
      '</div>';
    }
  table += '</tr>';
  
  document.getElementById("badges").innerHTML = '<table>' + table + '</table>'
}
