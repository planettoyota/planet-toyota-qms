// ============================================================
// PLANET TOYOTA QMS — DATA CONFIGURATION
// Edit this file to update models, executives, prices, etc.
// ============================================================

const MODELS = [
  { name: "Fortuner", variants: ["2.7 Petrol MT 4x2","2.7 Petrol AT 4x2","2.8 Diesel MT 4x4","2.8 Diesel AT 4x4","Legender 4x2 AT","Legender 4x4 AT"] },
  { name: "Innova HyCross", variants: ["G MT","G Plus MT","VX MT","VX Plus AT","ZX AT","ZX Plus AT"] },
  { name: "Innova Crysta", variants: ["G MT 7S","G AT 7S","VX MT 7S","VX AT 7S","ZX AT 7S"] },
  { name: "Urban Cruiser Taisor", variants: ["E MT","S MT","G MT","V MT","V AT","S Plus MT","G Plus MT","V Plus AT"] },
  { name: "Hyryder", variants: ["E MT","S MT","G MT","V MT","S AT","G AT","V AT","S Hybrid","G Hybrid","V Hybrid"] },
  { name: "Glanza", variants: ["E MT","S MT","G MT","V MT","S AT","G AT","V AT"] },
  { name: "Camry", variants: ["Hybrid AT"] },
  { name: "Vellfire", variants: ["2.5 Hybrid AT"] },
  { name: "Hilux", variants: ["Standard 4x4 MT","High 4x4 AT"] },
];

const COLORS = [
  "White Pearl Crystal Shine","Platinum White Pearl","Attitude Black Mica",
  "Sparkling Black Pearl Crystal Shine","Silver Metallic","Avant-Garde Bronze Metallic",
  "Burning Red","Midnight Black","Celestial Blue","Emotional Red","Silky Gold Mica","Super White",
];

const ACCESSORIES = [
  { name: "Body Cover", price: 1500 },
  { name: "Floor Mats (Rubber)", price: 2500 },
  { name: "Floor Mats (3D Premium)", price: 4500 },
  { name: "Seat Covers (Fabric)", price: 6500 },
  { name: "Seat Covers (Leatherette)", price: 12000 },
  { name: "Mud Flaps Set", price: 1200 },
  { name: "Door Edge Guards", price: 800 },
  { name: "Door Visors", price: 2200 },
  { name: "Reverse Parking Sensors", price: 4500 },
  { name: "Reverse Camera", price: 5500 },
  { name: "Dashcam (Front)", price: 4500 },
  { name: "Dashcam (Front + Rear)", price: 7000 },
  { name: "Alloy Wheels (Set of 4)", price: 35000 },
  { name: "Roof Carrier", price: 8000 },
  { name: "Side Steps / Running Board", price: 12000 },
  { name: "Chrome Door Handles", price: 2800 },
  { name: "Steering Cover", price: 900 },
  { name: "Sun Shades (Set)", price: 1800 },
];

const FINANCE_BANKS = [
  "Toyota Financial Services","HDFC Bank","SBI","ICICI Bank",
  "Axis Bank","Kotak Mahindra Bank","Yes Bank","IDFC First Bank","PNB","Canara Bank",
];

// ============================================================
// EXECUTIVES — Add/remove as needed
// PIN must be exactly 4 digits (stored as string)
// ============================================================
const EXECUTIVES = [
  { name: "Rahul Sharma",   pin: "1234" },
  { name: "Amit Singh",     pin: "2345" },
  { name: "Priya Verma",    pin: "3456" },
  { name: "Suresh Kumar",   pin: "4567" },
  { name: "Deepak Yadav",   pin: "5678" },
  { name: "Kavita Devi",    pin: "6789" },
];

// ============================================================
// MANAGER — separate PIN
// ============================================================
const MANAGER = { name: "Piyush (Owner)", pin: "0000" };

// ============================================================
// GOOGLE SHEETS WEBHOOK
// Steps to set up:
//   1. Open your Google Sheet
//   2. Extensions → Apps Script
//   3. Paste the Apps Script from SETUP.md
//   4. Deploy as Web App → Anyone can access
//   5. Copy the Web App URL and paste below
// Leave blank to disable auto-sync (manual WhatsApp share still works)
// ============================================================
const GOOGLE_SHEETS_WEBHOOK = "";  // e.g. "https://script.google.com/macros/s/YOUR_ID/exec"

// Storage key
const SK = "pt_qms_v2";
