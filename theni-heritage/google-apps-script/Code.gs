function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const name = cleanText(payload.name, 120);
    const email = cleanText(payload.email, 254);
    const feedback = cleanText(payload.feedback, 5000);
    const rating = Number(payload.rating);

    if (!name || !email || !feedback || !Number.isInteger(rating) || rating < 1 || rating > 5) {
      return jsonResponse({ success: false, error: 'Please provide valid name, email, rating, and feedback.' });
    }

    const spreadsheetId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
    if (!spreadsheetId) throw new Error('Set the SPREADSHEET_ID script property before deploying.');

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheetName = PropertiesService.getScriptProperties().getProperty('SHEET_NAME') || 'Feedback';
    const sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Rating', 'Feedback']);
    }
    sheet.appendRow([new Date(), name, email, rating, feedback]);
    return jsonResponse({ success: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ success: false, error: 'Unable to save feedback.' });
  }
}

function cleanText(value, maxLength) {
  if (typeof value !== 'string') return '';
  const text = value.trim().slice(0, maxLength);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
