# Planet Toyota QMS — Setup Guide
# ============================================================

## WHAT YOU HAVE
A complete mobile-first web app with:
- Executive PIN login (each executive has their own PIN)
- Professional quotation builder with all Toyota models
- Auto-calculated on-road price (ex-showroom + TCS + RTO + insurance + accessories)
- PDF generation via browser Print dialog
- WhatsApp sharing with full formatted message
- Manager dashboard with executive-wise performance
- Google Sheets auto-sync (setup below)
- Works offline (PWA — add to phone home screen)

---

## HOW TO DEPLOY (Free Hosting via GitHub Pages)

### Step 1 — Upload files
1. Go to https://github.com and create a free account
2. Create a new repository named: planet-toyota-qms
3. Upload all files from this folder (maintain folder structure)
4. Go to Settings → Pages → Source: main branch → Save
5. Your URL will be: https://yourusername.github.io/planet-toyota-qms

### Step 2 — Add to phone home screen
**Android (Chrome):**
1. Open the URL in Chrome
2. Tap the 3-dot menu → "Add to Home Screen"
3. App icon appears on home screen

**iPhone (Safari):**
1. Open the URL in Safari
2. Tap Share button (box with arrow) → "Add to Home Screen"

---

## GOOGLE SHEETS SYNC SETUP

### Step 1 — Create your Google Sheet
1. Go to https://sheets.google.com
2. Create a new sheet named: Planet Toyota Quotations
3. Row 1 headers (copy exactly):
   ID | Date | Executive | Customer Name | Phone | City | Model | Variant | Colour | Ex-Showroom | Accessories | TCS | Insurance | RTO | Handling | FASTag | Discount | On-Road Price | Finance Bank | Loan Amount | Tenure | Down Payment | Notes

### Step 2 — Create Apps Script
1. In your Google Sheet: Extensions → Apps Script
2. Delete all existing code
3. Paste this code:

```javascript
const SHEET_NAME = "Sheet1";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Quote ID","Date","Executive","Customer Name","Phone","City",
        "Model","Variant","Colour","Ex-Showroom","Accessories","TCS",
        "Insurance","RTO","Handling","FASTag","Discount","On-Road Price",
        "Finance Bank","Loan Amount","Tenure (months)","Down Payment","Notes"
      ]);
    }
    
    sheet.appendRow([
      data.id, data.date, data.exec,
      data.customerName, data.customerPhone, data.customerCity,
      data.model, data.variant, data.color,
      data.exShowroom, data.accessories, data.tcs,
      data.insurance, data.rto, data.handling,
      data.fastag, data.discount, data.onRoadPrice,
      data.financeBank, data.loanAmount, data.tenure, data.downPayment,
      data.notes
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({status:"ok"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({status:"error",msg:err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 3 — Deploy
1. Click "Deploy" → "New deployment"
2. Type: Web App
3. Execute as: Me
4. Who has access: Anyone
5. Click Deploy → Copy the Web App URL

### Step 4 — Add URL to app
1. Open js/data.js
2. Find: const GOOGLE_SHEETS_WEBHOOK = "";
3. Replace with: const GOOGLE_SHEETS_WEBHOOK = "YOUR_WEB_APP_URL_HERE";
4. Re-upload data.js to GitHub

Done! Every new quotation will auto-appear in your Google Sheet.

---

## CUSTOMISATION

### Change executive PINs
Open js/data.js → find EXECUTIVES array → change pin values

### Add new executives
Open js/data.js → add new entry to EXECUTIVES:
{ name: "New Name", pin: "1234" }

### Change manager PIN
Open js/data.js → find MANAGER → change pin value
DEFAULT MANAGER PIN: 0000 (change this immediately!)

### Add/remove models or variants
Open js/data.js → edit the MODELS array

### Add accessories
Open js/data.js → edit the ACCESSORIES array

---

## DAILY USAGE FLOW

1. Executive opens app on phone → selects name → enters PIN
2. Taps "+ New Quotation"
3. Fills customer details + vehicle + pricing
4. Taps "Generate Quotation"
5. Chooses:
   - "Print / Save as PDF" → phone downloads PDF → can email or share
   - "Share via WhatsApp" → opens WhatsApp with full quote message

Manager: Opens app → enters manager PIN → sees all quotes, executive-wise performance, total pipeline

---

## ICONS (Required for PWA)
You need to add icon images to the /icons/ folder:
- icon-192.png (192×192 pixels) — Toyota logo / Planet Toyota logo
- icon-512.png (512×512 pixels) — same logo, larger

You can create these at https://www.canva.com using your dealership branding.
