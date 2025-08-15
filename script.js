function buildMessage(){
var spreadsheet = SpreadsheetApp.openById("YOUR SPREADHEET ID HERE"); //spreadsheet id can be found in spreadsheet's url
var sheet = SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[0]);
var data = sheet.getDataRange().getValues();

//pulls text from cell [2][B]
var status = data[1][1] //add whatever else you want to your message here

//deletes row used to make current message to move next message in queue to [2][B]
sheet.deleteRows(2);

//returns completed message
return status;
}

function sendMessage() {
     // Send the message to the Discord channel webhook.
     var message_string = buildMessage();
  let options = {
          "method": "post",
          "headers": {
              "Content-Type": "application/json",
          },
          "payload": JSON.stringify({
              "content": message_string
          })
      };
      Logger.log(options, null, 2);
      UrlFetchApp.fetch("YOUR WEBHOOK URL HERE", options);
}

