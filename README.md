# Easy-Google-apps-script-to-post-Discord-Message-from-Google-Sheet
I couldn't find a simple Discord auto message script for Google Apps Script so I wrote my own. Simply provide your speadsheed's id and your webhook's url.

This JavaScript script for Google Apps Script automatically sends a message from a Discord webhook using data from a spreadsheet. It posts messages in a queue always using the data from cell [2][B]. Row to will be deleted after a message is sent so the next message in line will always be in cell [2][B].

To set up.

1. Create your spreadsheet in Google Sheets
2. In the extensions tab, click Apps Script
3. Paste the contents of Script.js into new Google Script
4. Replace "YOUR SPREADSHEET ID HERE" with the id found in your sheet's url. Example: https://docs.google.com/spreadsheets/d/this_part_is_the_id/
5. Create a webhook on discord if you haven't already. Paste it's url onto "YOUR WEBHOOK URL HERE."
6. Determine when you want it to run.

If you want to add additional content to the message (mine has a static form link to collect new data for the sheet, for example) you add it to this line "var status = data[1][1]"
Example: var status = data[1][1] + "my form link."
