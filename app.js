$.getJSON("https://spreadsheets.google.com/feeds/list/15s9NJJvoPzrygimu0nR2VVOZQR5RzHnzyqTDmq66HoA/4/public/values?alt=json", function (data) {

    var sheetData = data.feed.entry;

    var i;
    for (i = 0; i < sheetData.length; i++) {

      var tarih = data.feed.entry[i]['gsx$tarih']['$t'];
      var oyuncuFirst = data.feed.entry[i]['gsx$oyuncu1']['$t'];
      var oyuncuSecond = data.feed.entry[i]['gsx$oyuncu2']['$t'];
      var set1 = data.feed.entry[i]['gsx$set1']['$t'];
      var set2 = data.feed.entry[i]['gsx$set2']['$t'];
      var setTb = data.feed.entry[i]['gsx$tie-break']['$t'];
      var ozelDurum = data.feed.entry[i]['gsx$özeldurum']['$t'];
      var kazanan = data.feed.entry[i]['gsx$kazanan']['$t'];

      document.getElementById('demo').innerHTML += (
        '<tr>'+
        '<td>'+oyuncuFirst+'</td>'+
        '<td>'+oyuncuSecond+'</td>'+
        '<td>'+tarih+'</td>'+
        '<td>'+set1+'</td>'+
        '<td>'+set2+'</td>'+
        '<td>'+setTb+'</td>'+
        '<td>'+ozelDurum+'</td>'+
        '<td>'+kazanan+'</td>'+
        '</tr>'
        );

    }
  });