const SHEET_ID = '1QL1bVSrebMMccKzdSzYomiP90-uB0isDez0PE3jV0-8';

function doGet() {
  return ContentService.createTextOutput('Þróttheima Hub form endpoint is running.');
}

function doPost(e) {
  const type = String((e.parameter && e.parameter.type) || '').trim();
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const now = new Date();

  if (type === 'hugmynd') {
    const sheet = ss.getSheetByName('Hugmyndir');
    sheet.appendRow([
      now,
      clean_(e.parameter.name),
      clean_(e.parameter.contact),
      clean_(e.parameter.idea),
      'Nýtt',
      ''
    ]);
    return ok_('hugmynd');
  }

  if (type === 'truno') {
    const sheet = ss.getSheetByName('Trúnóspurningar');
    sheet.appendRow([
      now,
      clean_(e.parameter.question),
      'Nýtt',
      ''
    ]);
    return ok_('truno');
  }

  if (type === 'studio') {
    const sheet = ss.getSheetByName('Stúdíóskráningar');
    sheet.appendRow([
      now,
      clean_(e.parameter.name),
      clean_(e.parameter.interest),
      clean_(e.parameter.message),
      'Nýtt',
      ''
    ]);
    return ok_('studio');
  }

  return ContentService
    .createTextOutput(JSON.stringify({ ok: false, error: 'Unknown form type' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function clean_(value) {
  return String(value || '').trim().slice(0, 2000);
}

function ok_(type) {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, type: type }))
    .setMimeType(ContentService.MimeType.JSON);
}
