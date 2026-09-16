# Þróttheimar Hub → Google Sheets

The website forms are ready to post to the Google Sheet `Þróttheima Hub — svör`.

## One-time setup

1. Open https://script.google.com/ while signed into the Google account that owns the Sheet.
2. Create a new project named `Þróttheimar Hub backend`.
3. Replace the default code with the contents of `Code.gs` in this folder.
4. Click **Deploy → New deployment → Web app**.
5. Set **Execute as: Me** and **Who has access: Anyone**.
6. Deploy and copy the `/exec` Web App URL.
7. Put that URL into `/config.js` as `window.THROTTHUB_SCRIPT_URL = '...';`.

After that, Hugmyndaboxið writes to `Hugmyndir`, Trúnóboxið writes to `Trúnóspurningar`, and Stúdíó registration writes to `Stúdíóskráningar`.
