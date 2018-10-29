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
  var table = '';
  var rows = 1;
  var cols = 3;
  for (var r = 0; r < rows r++) {
    table += '<tr>';
    for (var c = 0; c < vip.length; c++) {
      table += '<td>' +  vip[i].title + '</td>';
    }
    table += '</tr>';
  }
  document.write('<table border=1>' + table + '</table>');
  document.write('SOME TEST TEXT');
}
