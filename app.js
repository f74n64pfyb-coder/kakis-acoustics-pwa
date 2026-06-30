const STORAGE_KEY = "kakis-acoustics-pwa-state-v1";
const APP_VERSION = "31";
const freqs = ["63", "125", "250", "500", "1000", "2000", "4000", "8000"];
const sourceFreqs = ["125", "250", "500", "1000", "2000", "4000"];
const shapeAssets = ["shape_flat.png", "shape_vaulted.png", "shape_raked.png", "shape_arbitrary.png"];

const text = {
  ka: {
    title: "აკუსტიკის კალკულატორი",
    manual: "მომხმარებლის გზამკვლევი",
    guide1: "ჩაწერე პროექტის სახელი, თუ გინდა PDF-ში გამოჩნდეს.",
    guide2: "აირჩიე ჭერის ფორმა და შეიყვანე შესაბამისი ზომები.",
    guide3: "კარისა და ფანჯრის ფართობები კედლის ფართობს ავტომატურად აკლდება.",
    guide4: "მასალებში ჯერ აირჩიე ვარიანტი; არჩეული არ არის ნიშნავს 0 შთანთქმას.",
    guide5: "თუ ზედაპირზე რამდენიმე მასალაა, დაამატე დამატებითი რიგი.",
    guide6: "შედარება გამოიყენე მეორე ჭერის/აბსორბერის ვარიანტის შესაფასებლად.",
    guide7: "PDF-ისთვის გამოიყენე გაზიარების ღილაკი.",
    roomDimensions: "1. ოთახის ზომები",
    roomHint: "აქ შეყვანილი მონაცემებით ავტომატურად ითვლება იატაკის, კედლების, ჭერის ფართობი და ოთახის მოცულობა.",
    project: "პროექტი",
    projectName: "პროექტის სახელი",
    ceilingShape: "ჭერის ფორმა",
    dimensions: "ზომები",
    totalFloor: "იატაკის სრული ფართობი",
    totalWall: "კედლების სრული ფართობი",
    totalCeiling: "ჭერის სრული ფართობი",
    volume: "მოცულობა",
    materials: "2. მასალები",
    materialHint: "თითოეულ ზედაპირზე აირჩიე მასალა. დამატება გამოიყენე როცა ერთი ზედაპირი რამდენიმე მასალისგან შედგება.",
    coefficients: "მასალის კოეფიციენტები",
    customMaterial: "საკუთარი მასალა",
    description: "აღწერა",
    comparisonCalc: "შედარებითი გამოთვლა",
    results: "3. შედეგები",
    resultHint: "რევერბერაციის დრო T აჩვენებს რამდენ ხანს გრძელდება ხმა ოთახში. შთანთქმის ფართობი A აჩვენებს რამდენად შთანთქავს სივრცე ხმას.",
    exportPdf: "PDF ექსპორტი",
    select: "აირჩიე",
    shapes: ["ბრტყელი ჭერი", "თაღოვანი ჭერი", "დახრილი ჭერი", "ნებისმიერი ფორმა"],
    resultTypes: ["რევერბერაციის დრო", "შთანთქმის ფართობი"],
    length: "სიგრძე L",
    width: "სიგანე B",
    height: "სიმაღლე",
    height1: "სიმაღლე 1",
    height2: "სიმაღლე 2",
    floorArea: "იატაკის ფართობი",
    wallArea: "კედლების ფართობი",
    ceilingArea: "ჭერის ფართობი",
    doorArea: "კარის ფართობი",
    windowArea: "ფანჯრის ფართობი",
    floor: "იატაკი",
    wall: "კედელი",
    door: "კარი",
    window: "ფანჯარა",
    ceiling: "ჭერი",
    add: "დამატება",
    extraFloor: "დამატებითი იატაკის მასალები",
    extraWall: "დამატებითი კედლის მასალები",
    extraCeiling: "დამატებითი ჭერის მასალები",
    absorbers: "დამატებითი აბსორბერები",
    area: "ფართობი",
    comparison: "შედარება",
    comparisonCeiling: "შედარებითი ჭერი",
    comparisonAbsorber: "შედარებითი აბსორბერი",
    comparisonAbsorberArea: "შედარებითი აბსორბერის ფართობი",
    reverberation: "რევერბერაციის დრო T [წმ]",
    absorption: "შთანთქმის ფართობი A [m² Sab]",
    calculation: "გამოთვლა",
    average125: "საშუალო 125 ჰც-დან",
    average250: "საშუალო 250 ჰც-დან",
    materialMissing: "მასალა არჩეული არ არის",
    missingTail: "ეს ზედაპირები შთანთქმაში 0-ად ჩაითვლება.",
    clearAsk: "ყველა მონაცემი წაიშალოს?",
    improvementBig: "მნიშვნელოვანი გაუმჯობესება",
    improvementMid: "ზომიერი გაუმჯობესება",
    improvementSmall: "მცირე გაუმჯობესება",
    noChange: "შედარებაში მნიშვნელოვანი ცვლილება არ ჩანს",
    worse: "შედარებით ვარიანტში რევერბერაცია იზრდება",
    change: "250-8000 ჰც საშუალო ცვლილება",
    report: "აკუსტიკის ანგარიში",
    printHint: "PDF-ის შესანახად აირჩიე Share/Print და Save to Files."
    ,
    cancel: "გაუქმება",
    done: "დახურვა",
    search: "ძებნა",
    selectMaterial: "მასალის არჩევა"
  },
  en: {
    title: "Acoustics calculator",
    manual: "User manual",
    guide1: "Enter a project name if you want it shown in the PDF.",
    guide2: "Select the ceiling shape and enter the required dimensions.",
    guide3: "Door and window areas are automatically subtracted from wall area.",
    guide4: "Select a material first; not selected means 0 absorption.",
    guide5: "If one surface has several materials, add an extra row.",
    guide6: "Use comparison to evaluate another ceiling or absorber option.",
    guide7: "Use the share button for PDF export.",
    roomDimensions: "1. Room dimensions",
    roomHint: "The values entered here calculate the floor, wall, ceiling area and room volume automatically.",
    project: "Project",
    projectName: "Project name",
    ceilingShape: "Ceiling shape",
    dimensions: "Dimensions",
    totalFloor: "Total floor area",
    totalWall: "Total wall area",
    totalCeiling: "Total ceiling area",
    volume: "Volume",
    materials: "2. Materials",
    materialHint: "Choose a material for each surface. Use Add when one surface consists of several materials.",
    coefficients: "Material coefficients",
    customMaterial: "Custom material",
    description: "Description",
    comparisonCalc: "Comparison calculation",
    results: "3. Results",
    resultHint: "Reverberation time T shows how long sound remains in the room. Absorption area A shows how much sound the room absorbs.",
    exportPdf: "Export PDF",
    select: "Select",
    shapes: ["Flat ceiling", "Vaulted ceiling", "Raked ceiling", "Arbitrary"],
    resultTypes: ["Reverberation time", "Absorption area"],
    length: "Length L",
    width: "Width B",
    height: "Height",
    height1: "Height 1",
    height2: "Height 2",
    floorArea: "Floor area",
    wallArea: "Wall area",
    ceilingArea: "Ceiling area",
    doorArea: "Door area",
    windowArea: "Window area",
    floor: "Floor",
    wall: "Wall",
    door: "Door",
    window: "Window",
    ceiling: "Ceiling",
    add: "Add",
    extraFloor: "Additional floor materials",
    extraWall: "Additional wall materials",
    extraCeiling: "Additional ceiling materials",
    absorbers: "Additional absorbers",
    area: "Area",
    comparison: "Comparison",
    comparisonCeiling: "Comparison ceiling",
    comparisonAbsorber: "Comparison absorber",
    comparisonAbsorberArea: "Comparison absorber area",
    reverberation: "Reverberation time T [sec]",
    absorption: "Absorption area A [m² Sab]",
    calculation: "Calculation",
    average125: "Average from 125 Hz",
    average250: "Average from 250 Hz",
    materialMissing: "Material not selected",
    missingTail: "These surfaces are counted as 0 absorption.",
    clearAsk: "Clear all data?",
    improvementBig: "Significant improvement",
    improvementMid: "Moderate improvement",
    improvementSmall: "Small improvement",
    noChange: "No meaningful change in the comparison",
    worse: "The comparison option increases reverberation",
    change: "Average change from 250-8000 Hz",
    report: "Acoustics report",
    printHint: "To save as PDF choose Share/Print and Save to Files."
    ,
    cancel: "Cancel",
    done: "Done",
    search: "Search",
    selectMaterial: "Select material"
  }
};

const defaults = {
  language: "ka",
  project: "",
  shape: 0,
  resultType: 0,
  length: "",
  width: "",
  height1: "",
  height2: "",
  arbitraryVolume: "",
  arbitraryFloorArea: "",
  arbitraryWallArea: "",
  arbitraryCeilingArea: "",
  doorArea: "",
  windowArea: "",
  floorSelection: -1,
  wallSelection: -1,
  doorSelection: -1,
  windowSelection: -1,
  ceilingSelection: -1,
  extraFloorRows: [],
  extraWallRows: [],
  extraCeilingRows: [],
  extraAbsorberRows: [],
  alternativeEnabled: false,
  alternativeCeilingSelection: -1,
  alternativeAbsorberEnabled: true,
  alternativeAbsorberArea: "",
  alternativeAbsorberSelection: -1,
  customName: "",
  customValues: ["", "", "", "", "", "", "", ""],
  customMaterials: {},
  openExtraPanels: []
};

let state = loadState();
let activePicker = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {...defaults, ...saved, customMaterials: saved.customMaterials || {}};
  } catch {
    return {...defaults};
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function t(key) {
  return text[state.language][key];
}

function n(value) {
  if (typeof value === "number") return value;
  const normalized = String(value ?? "").replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function fmt(value) {
  const rounded = Math.round((Number(value) || 0) * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function sanitizeName(name) {
  if (state.language === "en") {
    if (name === "საკუთარი მასალა") return "Custom material";
    return name
      .replaceAll("Troldtekt", "Acoustic panel")
      .replaceAll("troldtekt", "acoustic panel")
      .replaceAll("TROLDTEKT", "ACOUSTIC PANEL");
  }

  const exactNames = {
    "Linoleum on concrete": "ლინოლეუმი ბეტონზე",
    "Parquet on concrete": "პარკეტი ბეტონზე",
    "Concrete or tiles on concrete": "ბეტონი ან ფილები ბეტონზე",
    "Parquet on timber construction": "პარკეტი ხის კონსტრუქციაზე",
    "Water (Swimming pool)": "წყალი (საცურაო აუზი)",
    "Carpet on concrete": "ხალიჩა ბეტონზე",
    "Bare wall": "შიშველი კედელი",
    "Concrete, painted": "ბეტონი, შეღებილი",
    "Concrete, unpainted": "ბეტონი, შეუღებავი",
    "Gypsum 2 x 12.5 mm": "თაბაშირი 2 x 12.5 მმ",
    "Plastered walls": "შელესილი კედლები",
    "Door, light": "კარი, მსუბუქი",
    "Door, heavy": "კარი, მძიმე",
    "Window (3+12+3 mm)": "ფანჯარა (3+12+3 მმ)",
    "Curtains, 340 g/m2": "ფარდა, 340 გ/მ2",
    "Curtains, 600 g/m2": "ფარდა, 600 გ/მ2",
    "Window (3 mm)": "ფანჯარა (3 მმ)",
    "Wooden ceiling": "ხის ჭერი",
    "საკუთარი მასალა": "საკუთარი მასალა"
  };
  if (exactNames[name]) return exactNames[name];

  return name
    .replaceAll("Concrete", "ბეტონი")
    .replaceAll("Troldtekt", "აკუსტიკური პანელი")
    .replaceAll("troldtekt", "აკუსტიკური პანელი")
    .replaceAll("painted", "შეღებილი")
    .replaceAll("unpainted", "შეუღებავი")
    .replaceAll("Gypsum", "თაბაშირი")
    .replaceAll("Cavity", "ღრუ")
    .replaceAll("mineral wool", "მინერალური ბამბა")
    .replaceAll("Acoustic fleece", "აკუსტიკური ფლისი")
    .replaceAll("baffles", "ბაფლები")
    .replaceAll("Hanging height", "დაკიდების სიმაღლე")
    .replaceAll("Row distance", "რიგებს შორის მანძილი")
    .replaceAll("Tiles", "ფილები")
    .replaceAll("Line", "ხაზი")
    .replaceAll("line", "ხაზი")
    .replaceAll("v-ხაზი", "v-ხაზი")
    .replaceAll("fine", "წვრილი")
    .replaceAll("ultraწვრილი", "ულტრა წვრილი")
    .replaceAll("extreme წვრილი", "ექსტრა წვრილი")
    .replaceAll("mm", "მმ");
}

function materialOptions(kind) {
  const custom = {name: state.language === "en" ? "User defined" : "საკუთარი მასალა", values: freqs.map(() => 0), custom: true};
  return [...MATERIALS[kind], custom, ...(window.STANDARD_ABSORPTION_MATERIALS || [])];
}

function customIndex(kind) {
  return MATERIALS[kind].length;
}

function isCustomSelection(kind, selection) {
  return Number(selection) === customIndex(kind);
}

function emptyCustomValues() {
  return freqs.map(() => "");
}

function customData(source) {
  if (typeof source === "string") {
    state.customMaterials = state.customMaterials || {};
    if (!state.customMaterials[source]) {
      state.customMaterials[source] = {
        name: state.customName || "",
        values: [...(state.customValues || emptyCustomValues())]
      };
    }
    state.customMaterials[source].values = freqs.map((_, index) => state.customMaterials[source].values?.[index] ?? "");
    return state.customMaterials[source];
  }
  if (source && typeof source === "object") {
    if (!source.customValues) source.customValues = emptyCustomValues();
    source.customValues = freqs.map((_, index) => source.customValues?.[index] ?? "");
    return {name: source.customName || "", values: source.customValues};
  }
  return {name: state.customName || "", values: state.customValues || emptyCustomValues()};
}

function materialAt(kind, selection, source) {
  if (selection < 0) return null;
  if (isCustomSelection(kind, selection)) {
    const data = customData(source);
    return {
      name: data.name || (state.language === "en" ? "User defined" : "საკუთარი მასალა"),
      values: freqs.map((_, index) => n(data.values[index]))
    };
  }
  return materialOptions(kind)[selection] || null;
}

function average(values) {
  return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
}

function averageFrom(values, startFreq) {
  const index = freqs.indexOf(String(startFreq));
  return average(index >= 0 ? values.slice(index) : values);
}

function averageRange(values, startFreq, endFreq) {
  const start = freqs.indexOf(String(startFreq));
  const end = freqs.indexOf(String(endFreq));
  return average(start >= 0 && end >= start ? values.slice(start, end + 1) : values);
}

function averageHeight() {
  return state.shape === 0 ? n(state.height1) : (n(state.height1) + n(state.height2)) / 2;
}

function floorArea() {
  return state.shape === 3 ? n(state.arbitraryFloorArea) : n(state.length) * n(state.width);
}

function ceilingArea() {
  const L = n(state.length), B = n(state.width), H1 = n(state.height1), H2 = n(state.height2);
  if (state.shape === 1) {
    const slope = Math.sqrt(Math.pow(B / 2, 2) + Math.pow(Math.max(0.1, H2 - H1), 2));
    return L * slope * 2;
  }
  if (state.shape === 2) {
    const slope = Math.sqrt(Math.pow(B, 2) + Math.pow(Math.max(0.1, H2 - H1), 2));
    return L * slope;
  }
  if (state.shape === 3) return n(state.arbitraryCeilingArea);
  return floorArea();
}

function wallArea() {
  const L = n(state.length), B = n(state.width), H1 = n(state.height1), H2 = n(state.height2);
  const openings = n(state.doorArea) + n(state.windowArea);
  if (state.shape === 1) return Math.max(0, B * 2 * H1 + L * 2 * H1 + (H2 - H1) * B - openings);
  if (state.shape === 2) return Math.max(0, B * 2 * H1 + L * 2 * H1 + (H2 - H1) * B + L * (H2 - H1) - openings);
  if (state.shape === 3) return n(state.arbitraryWallArea);
  return Math.max(0, B * 2 * H1 + L * 2 * H1 - openings);
}

function volume() {
  return state.shape === 3 ? n(state.arbitraryVolume) : floorArea() * averageHeight();
}

function rowContributions(rows, totalArea) {
  let remaining = Math.max(0, totalArea);
  const out = [];
  rows.forEach(row => {
    const area = Math.min(Math.max(0, n(row.area)), remaining);
    remaining -= area;
    if (area > 0) out.push({...row, area, selection: Number(row.selection)});
  });
  return out;
}

function clampCoefficient(value) {
  return Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0));
}

function extrapolatedCoefficient(values, targetFreq) {
  const known = sourceFreqs.map((freq, index) => ({freq: Number(freq), value: n(values[index])}));
  if (targetFreq <= known[0].freq) {
    const a = known[0];
    const b = known[1];
    const slope = (b.value - a.value) / (Math.log2(b.freq) - Math.log2(a.freq));
    return clampCoefficient(a.value + slope * (Math.log2(targetFreq) - Math.log2(a.freq)));
  }
  if (targetFreq >= known[known.length - 1].freq) {
    const a = known[known.length - 2];
    const b = known[known.length - 1];
    const slope = (b.value - a.value) / (Math.log2(b.freq) - Math.log2(a.freq));
    return clampCoefficient(b.value + slope * (Math.log2(targetFreq) - Math.log2(b.freq)));
  }
  const exact = sourceFreqs.indexOf(String(targetFreq));
  return clampCoefficient(exact >= 0 ? values[exact] : 0);
}

function coefficientAt(values, index) {
  if (!values) return 0;
  if (values.length === freqs.length) return clampCoefficient(n(values[index]));
  return extrapolatedCoefficient(values, Number(freqs[index]));
}

function expandedCoefficients(values) {
  return freqs.map((_, index) => coefficientAt(values, index));
}

function coeff(kind, selection, index, source) {
  return coefficientAt(materialAt(kind, selection, source)?.values, index);
}

function computed() {
  const floorExtra = rowContributions(state.extraFloorRows, floorArea());
  const wallExtra = rowContributions(state.extraWallRows, wallArea());
  const absorber = rowContributions(state.extraAbsorberRows, ceilingArea());
  const absorberArea = absorber.reduce((a, r) => a + r.area, 0);
  const ceilingExtra = rowContributions(state.extraCeilingRows, Math.max(0, ceilingArea() - absorberArea));
  const primaryFloor = Math.max(0, floorArea() - floorExtra.reduce((a, r) => a + r.area, 0));
  const primaryWall = Math.max(0, wallArea() - wallExtra.reduce((a, r) => a + r.area, 0));
  const effectiveCeiling = Math.max(0, ceilingArea() - absorberArea - ceilingExtra.reduce((a, r) => a + r.area, 0));
  const absorption = freqs.map((_, i) => {
    let total = primaryFloor * coeff("floor", state.floorSelection, i, "floorSelection");
    total += primaryWall * coeff("wall", state.wallSelection, i, "wallSelection");
    total += n(state.doorArea) * coeff("door", state.doorSelection, i, "doorSelection");
    total += n(state.windowArea) * coeff("window", state.windowSelection, i, "windowSelection");
    total += effectiveCeiling * coeff("ceiling", state.ceilingSelection, i, "ceilingSelection");
    floorExtra.forEach(r => total += r.area * coeff("floor", r.selection, i, r));
    wallExtra.forEach(r => total += r.area * coeff("wall", r.selection, i, r));
    ceilingExtra.forEach(r => total += r.area * coeff("ceiling", r.selection, i, r));
    absorber.forEach(r => total += r.area * coeff("ceiling", r.selection, i, r));
    return total;
  });
  const reverberation = absorption.map(a => a === 0 ? 0 : Math.max(0.05, 0.16 * volume() / a));
  const altAbsorberArea = state.alternativeEnabled && state.alternativeAbsorberEnabled ? Math.min(n(state.alternativeAbsorberArea), ceilingArea()) : 0;
  const altEffectiveCeiling = Math.max(0, ceilingArea() - altAbsorberArea);
  const altAbsorption = freqs.map((_, i) => {
    let total = primaryFloor * coeff("floor", state.floorSelection, i, "floorSelection");
    total += primaryWall * coeff("wall", state.wallSelection, i, "wallSelection");
    total += n(state.doorArea) * coeff("door", state.doorSelection, i, "doorSelection");
    total += n(state.windowArea) * coeff("window", state.windowSelection, i, "windowSelection");
    total += altEffectiveCeiling * coeff("ceiling", state.alternativeCeilingSelection, i, "alternativeCeilingSelection");
    total += altAbsorberArea * coeff("ceiling", state.alternativeAbsorberSelection, i, "alternativeAbsorberSelection");
    floorExtra.forEach(r => total += r.area * coeff("floor", r.selection, i, r));
    wallExtra.forEach(r => total += r.area * coeff("wall", r.selection, i, r));
    return total;
  });
  const altReverberation = altAbsorption.map(a => a === 0 ? 0 : Math.max(0.05, 0.16 * volume() / a));
  return {primaryFloor, primaryWall, effectiveCeiling, absorption, reverberation, altAbsorption, altReverberation, altEffectiveCeiling, altAbsorberArea};
}

function setState(key, value) {
  state[key] = value;
  saveState();
  render();
}

function setPanelOpen(key, isOpen) {
  const panels = new Set(state.openExtraPanels || []);
  if (isOpen) {
    panels.add(key);
  } else {
    panels.delete(key);
  }
  state.openExtraPanels = [...panels];
  saveState();
}

function bindInput(id, key) {
  const el = document.getElementById(id);
  el.value = state[key] ?? "";
  el.addEventListener("input", () => {
    state[key] = el.value;
    saveState();
    renderComputedOnly();
  });
}

function render() {
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
  document.getElementById("lang-ka").classList.toggle("active", state.language === "ka");
  document.getElementById("lang-en").classList.toggle("active", state.language === "en");
  bindStaticInputs();
  renderChoices();
  renderDimensions();
  renderMaterials();
  renderAlternative();
  renderComputedOnly();
}

function bindStaticInputs() {
  const project = document.getElementById("project");
  if (document.activeElement !== project) project.value = state.project;
  project.oninput = () => {
    state.project = project.value;
    saveState();
  };
  document.getElementById("alternative-enabled").checked = state.alternativeEnabled;
}

function renderChoices() {
  const shapes = document.getElementById("shape-buttons");
  shapes.innerHTML = "";
  t("shapes").forEach((label, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.className = index === state.shape ? "active" : "";
    button.onclick = () => setState("shape", index);
    shapes.appendChild(button);
  });
  document.getElementById("shape-image").src = `assets/${shapeAssets[state.shape]}`;

  const types = document.getElementById("result-type-buttons");
  types.innerHTML = "";
  t("resultTypes").forEach((label, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.className = index === state.resultType ? "active" : "";
    button.onclick = () => setState("resultType", index);
    types.appendChild(button);
  });
}

function makeNumber(label, key, unit) {
  const template = document.getElementById("number-template");
  const node = template.content.firstElementChild.cloneNode(true);
  node.querySelector("span").textContent = label;
  const input = node.querySelector("input");
  input.enterKeyHint = "done";
  input.value = state[key] ?? "";
  input.placeholder = "0";
  input.addEventListener("input", () => {
    state[key] = input.value.replace(/[^\d.,]/g, "");
    saveState();
    renderComputedOnly();
  });
  node.querySelector("em").textContent = unit;
  return node;
}

function renderDimensions() {
  const box = document.getElementById("dimensions");
  box.innerHTML = "";
  if (state.shape !== 3) {
    box.appendChild(makeNumber(t("length"), "length", "m"));
    box.appendChild(makeNumber(t("width"), "width", "m"));
    box.appendChild(makeNumber(state.shape === 1 || state.shape === 2 ? t("height1") : t("height"), "height1", "m"));
    if (state.shape === 1 || state.shape === 2) box.appendChild(makeNumber(t("height2"), "height2", "m"));
  } else {
    box.appendChild(makeNumber(t("volume"), "arbitraryVolume", "m³"));
    box.appendChild(makeNumber(t("floorArea"), "arbitraryFloorArea", "m²"));
    box.appendChild(makeNumber(t("wallArea"), "arbitraryWallArea", "m²"));
    box.appendChild(makeNumber(t("ceilingArea"), "arbitraryCeilingArea", "m²"));
  }
  box.appendChild(makeNumber(t("doorArea"), "doorArea", "m²"));
  box.appendChild(makeNumber(t("windowArea"), "windowArea", "m²"));
}

function materialPickerButton(kind, selection, onSelect, source) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "material-picker";
  button.innerHTML = `<span>${esc(selection >= 0 ? selectedMaterialName(kind, selection, source) : t("select"))}</span><b>›</b>`;
  button.onclick = () => openMaterialPicker(kind, selection, onSelect);
  return button;
}

function renderInlineCustomEditor(kind, selection, source) {
  if (!isCustomSelection(kind, selection)) return null;
  const data = customData(source);
  const editor = document.createElement("div");
  editor.className = "custom-editor";

  const nameLabel = document.createElement("label");
  nameLabel.className = "field full custom-description";
  nameLabel.innerHTML = `<span>${t("description")}</span>`;
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.autocomplete = "off";
  nameInput.value = data.name || "";
  nameInput.oninput = () => {
    data.name = nameInput.value;
    if (source && typeof source === "object") source.customName = nameInput.value;
    saveState();
    renderCoefficients();
    renderComputedOnly();
  };
  nameLabel.appendChild(nameInput);
  editor.appendChild(nameLabel);

  const grid = document.createElement("div");
  grid.className = "custom-coefficient-grid";
  freqs.forEach((freq, index) => {
    const label = document.createElement("label");
    label.className = "custom-coefficient";
    label.innerHTML = `<span>${freq} Hz</span>`;
    const input = document.createElement("input");
    input.inputMode = "decimal";
    input.type = "text";
    input.autocomplete = "off";
    input.placeholder = "0";
    input.value = data.values[index] ?? "";
    input.oninput = () => {
      data.values[index] = input.value.replace(/[^\d.,]/g, "");
      if (source && typeof source === "object") source.customValues = data.values;
      saveState();
      renderCoefficients();
      renderComputedOnly();
    };
    label.appendChild(input);
    grid.appendChild(label);
  });
  editor.appendChild(grid);
  return editor;
}

function addExtraRow(key) {
  setPanelOpen(key, true);
  state[key].push({area: "", selection: -1});
  setState(key, state[key]);
}

function renderMaterialBlock(title, kind, key, area, extraTitle, rowsKey, areaKey) {
  const block = document.createElement("div");
  block.className = "material-block";
  const row = document.createElement("div");
  row.className = "material-row";
  const titleEl = document.createElement(rowsKey ? "button" : "div");
  titleEl.className = "material-title";
  if (rowsKey) {
    titleEl.type = "button";
    titleEl.classList.add("title-action");
    titleEl.onclick = event => {
      event.preventDefault();
      addExtraRow(rowsKey);
    };
  }
  titleEl.innerHTML = `<span aria-hidden="true">+</span><strong>${esc(title)}</strong>`;
  const areaEl = document.createElement("div");
  areaEl.className = "area";
  if (areaKey) areaEl.dataset.area = areaKey;
  areaEl.textContent = `${fmt(area)} m²`;
  const picker = materialPickerButton(kind, state[key], value => setState(key, value), key);
  row.append(titleEl, areaEl, picker);
  if (rowsKey) {
    const add = document.createElement("button");
    add.type = "button";
    add.className = "inline-add-btn";
    add.innerHTML = `<span aria-hidden="true">+</span><strong>${esc(extraTitle)}</strong>`;
    add.onclick = event => {
      event.preventDefault();
      addExtraRow(rowsKey);
    };
    row.appendChild(add);
  } else {
    const spacer = document.createElement("div");
    spacer.className = "material-row-spacer";
    row.appendChild(spacer);
  }
  block.appendChild(row);
  const customEditor = renderInlineCustomEditor(kind, state[key], key);
  if (customEditor) block.appendChild(customEditor);
  if (rowsKey) block.appendChild(extraRows(extraTitle, kind, rowsKey));
  return block;
}

function extraRows(title, kind, key) {
  const wrap = document.createElement("div");
  wrap.className = "extra-panel";
  wrap.classList.toggle("hidden", !(state.openExtraPanels || []).includes(key) && state[key].length === 0);
  const list = document.createElement("div");
  list.className = "extra-list";
  state[key].forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "extra-row";
    const titleEl = document.createElement("button");
    titleEl.type = "button";
    titleEl.className = "material-title extra-title title-action";
    titleEl.innerHTML = `<span aria-hidden="true">×</span><strong>${esc(title)}</strong>`;
    titleEl.onclick = event => {
      event.preventDefault();
      state[key].splice(index, 1);
      setState(key, state[key]);
    };
    const area = document.createElement("input");
    area.inputMode = "decimal";
    area.placeholder = "m²";
    area.value = item.area ?? "";
    area.oninput = () => {
      state[key][index].area = area.value.replace(/[^\d.,]/g, "");
      saveState();
      renderComputedOnly();
    };
    const select = materialPickerButton(kind, Number(item.selection ?? -1), value => {
      state[key][index].selection = value;
      saveState();
      render();
    }, item);
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-btn";
    remove.textContent = "×";
    remove.onclick = () => {
      state[key].splice(index, 1);
      setState(key, state[key]);
    };
    row.append(titleEl, area, select, remove);
    list.appendChild(row);
    const customEditor = renderInlineCustomEditor(kind, Number(item.selection ?? -1), item);
    if (customEditor) list.appendChild(customEditor);
  });
  wrap.append(list);
  return wrap;
}

function renderExtraOnlyBlock(title, kind, key) {
  const block = document.createElement("div");
  block.className = "material-block";
  const row = document.createElement("div");
  row.className = "material-row";
  const titleEl = document.createElement("button");
  titleEl.type = "button";
  titleEl.className = "material-title title-action";
  titleEl.innerHTML = `<span aria-hidden="true">+</span><strong>${esc(title)}</strong>`;
  titleEl.onclick = event => {
    event.preventDefault();
    addExtraRow(key);
  };
  const spacerA = document.createElement("div");
  spacerA.className = "material-row-spacer";
  const spacerB = document.createElement("div");
  spacerB.className = "material-row-spacer";
  const add = document.createElement("button");
  add.type = "button";
  add.className = "inline-add-btn";
  add.innerHTML = `<span aria-hidden="true">+</span><strong>${esc(t("add"))}</strong>`;
  add.onclick = event => {
    event.preventDefault();
    addExtraRow(key);
  };
  row.append(titleEl, spacerA, spacerB, add);
  block.append(row, extraRows(title, kind, key));
  return block;
}

function renderMaterials() {
  const c = computed();
  const box = document.getElementById("material-sections");
  box.innerHTML = "";
  box.appendChild(renderMaterialBlock(t("floor"), "floor", "floorSelection", c.primaryFloor, t("extraFloor"), "extraFloorRows", "primaryFloor"));
  box.appendChild(renderMaterialBlock(t("wall"), "wall", "wallSelection", c.primaryWall, t("extraWall"), "extraWallRows", "primaryWall"));
  box.appendChild(renderMaterialBlock(t("door"), "door", "doorSelection", n(state.doorArea), null, null, "door"));
  box.appendChild(renderMaterialBlock(t("window"), "window", "windowSelection", n(state.windowArea), null, null, "window"));
  box.appendChild(renderMaterialBlock(t("ceiling"), "ceiling", "ceilingSelection", c.effectiveCeiling, t("extraCeiling"), "extraCeilingRows", "effectiveCeiling"));
  box.appendChild(renderExtraOnlyBlock(t("absorbers"), "ceiling", "extraAbsorberRows"));
  renderCoefficients();
}

function renderCoefficients() {
  const rows = [];
  if (state.ceilingSelection >= 0) rows.push([t("ceiling"), expandedCoefficients(materialAt("ceiling", state.ceilingSelection, "ceilingSelection")?.values || [])]);
  state.extraAbsorberRows.forEach((r, i) => {
    if (r.selection >= 0) rows.push([`${t("absorbers")} ${i + 1}`, expandedCoefficients(materialAt("ceiling", r.selection, r)?.values || [])]);
  });
  document.getElementById("coefficients-table").innerHTML = rows.length ? rows.map(([name, values]) => `
    <div class="table-wrap"><table><tr><th>${name}</th>${freqs.map(f => `<th>${f} Hz</th>`).join("")}</tr><tr><td>α</td>${values.map(v => `<td>${fmt(v)}</td>`).join("")}</tr></table></div>
  `).join("") : `<p class="hint">${state.language === "en" ? "Ceiling material is not selected yet." : "ჭერის მასალა ჯერ არჩეული არ არის."}</p>`;
}

function renderAlternative() {
  const panel = document.getElementById("alternative-panel");
  panel.classList.toggle("hidden", !state.alternativeEnabled);
  if (!state.alternativeEnabled) return;
  const c = computed();
  panel.innerHTML = `<h3>${t("comparison")}</h3><p>${state.language === "en" ? "Same room with a different ceiling or absorber option." : "იგივე ოთახი სხვა ჭერის ან აბსორბერის ვარიანტით."}</p>`;
  panel.appendChild(renderMaterialBlock(t("comparisonCeiling"), "ceiling", "alternativeCeilingSelection", c.altEffectiveCeiling, null, null, "altEffectiveCeiling"));
  const toggle = document.createElement("label");
  toggle.className = "switch-row comparison-switch";
  toggle.innerHTML = `<input type="checkbox" ${state.alternativeAbsorberEnabled ? "checked" : ""}><i aria-hidden="true"></i><span>${t("comparisonAbsorber")}</span>`;
  toggle.querySelector("input").onchange = e => setState("alternativeAbsorberEnabled", e.target.checked);
  panel.appendChild(toggle);
  if (state.alternativeAbsorberEnabled) {
    const areaField = makeNumber(t("comparisonAbsorberArea"), "alternativeAbsorberArea", "m²");
    areaField.classList.add("comparison-number");
    panel.appendChild(areaField);
    panel.appendChild(renderMaterialBlock(t("comparisonAbsorber"), "ceiling", "alternativeAbsorberSelection", c.altAbsorberArea, null, null, "altAbsorberArea"));
  }
}

function missingMaterials(c) {
  const missing = [];
  if (c.primaryFloor > 0 && state.floorSelection < 0) missing.push(t("floor"));
  if (c.primaryWall > 0 && state.wallSelection < 0) missing.push(t("wall"));
  if (n(state.doorArea) > 0 && state.doorSelection < 0) missing.push(t("door"));
  if (n(state.windowArea) > 0 && state.windowSelection < 0) missing.push(t("window"));
  if (c.effectiveCeiling > 0 && state.ceilingSelection < 0) missing.push(t("ceiling"));
  state.extraFloorRows.forEach((row, index) => {
    if (n(row.area) > 0 && Number(row.selection) < 0) missing.push(`${t("extraFloor")} ${index + 1}`);
  });
  state.extraWallRows.forEach((row, index) => {
    if (n(row.area) > 0 && Number(row.selection) < 0) missing.push(`${t("extraWall")} ${index + 1}`);
  });
  state.extraCeilingRows.forEach((row, index) => {
    if (n(row.area) > 0 && Number(row.selection) < 0) missing.push(`${t("extraCeiling")} ${index + 1}`);
  });
  state.extraAbsorberRows.forEach((row, index) => {
    if (n(row.area) > 0 && Number(row.selection) < 0) missing.push(`${t("absorbers")} ${index + 1}`);
  });
  if (state.alternativeEnabled && c.altEffectiveCeiling > 0 && state.alternativeCeilingSelection < 0) missing.push(t("comparisonCeiling"));
  if (state.alternativeEnabled && state.alternativeAbsorberEnabled && c.altAbsorberArea > 0 && state.alternativeAbsorberSelection < 0) missing.push(t("comparisonAbsorber"));
  return missing;
}

function renderComputedOnly() {
  const c = computed();
  document.getElementById("floor-area").textContent = `${fmt(floorArea())} m²`;
  document.getElementById("wall-area").textContent = `${fmt(wallArea())} m²`;
  document.getElementById("ceiling-area").textContent = `${fmt(ceilingArea())} m²`;
  document.getElementById("volume").textContent = `${fmt(volume())} m³`;
  document.querySelectorAll("[data-area]").forEach(el => {
    const key = el.dataset.area;
    const value = key === "door" ? n(state.doorArea) : key === "window" ? n(state.windowArea) : c[key];
    el.textContent = `${fmt(value)} m²`;
  });
  const warning = document.getElementById("warning");
  const missing = missingMaterials(c);
  warning.classList.toggle("hidden", missing.length === 0);
  warning.textContent = missing.length ? `${t("materialMissing")}: ${missing.join(", ")}. ${t("missingTail")}` : "";
  renderCoefficients();
  renderResults(c);
}

function resultTable(title, values, suffix) {
  return `<div class="table-wrap"><table>
    <tr><th>${title}</th>${freqs.map(f => `<th>${f} Hz</th>`).join("")}<th>${t("average125")}</th><th>${t("average250")}</th></tr>
    <tr><td></td>${values.map(v => `<td>${fmt(v)} ${suffix}</td>`).join("")}<td>${fmt(averageFrom(values, 125))}</td><td>${fmt(averageFrom(values, 250))}</td></tr>
  </table></div>`;
}

function renderResults(c) {
  const output = document.getElementById("results-output");
  const values = state.resultType === 0 ? c.reverberation : c.absorption;
  const alt = state.resultType === 0 ? c.altReverberation : c.altAbsorption;
  const suffix = state.resultType === 0 ? (state.language === "en" ? "sec" : "წმ") : "m² Sab";
  output.innerHTML = `
    <h3>${state.resultType === 0 ? t("reverberation") : t("absorption")}</h3>
    ${resultTable(t("calculation"), values, suffix)}
    ${chartSvg(values, state.alternativeEnabled ? alt : null)}
    <div class="result-summary">
      <div class="summary-box"><span>${t("average125")}</span><strong>${fmt(averageFrom(values, 125))} ${suffix}</strong></div>
      <div class="summary-box"><span>${t("average250")}</span><strong>${fmt(averageFrom(values, 250))} ${suffix}</strong></div>
    </div>
    ${state.alternativeEnabled && state.resultType === 0 ? comparisonSummary(c) : ""}
    ${state.alternativeEnabled ? resultTable(t("comparison"), alt, suffix) : ""}
  `;
}

function chartSvg(primary, alternative) {
  const all = alternative ? primary.concat(alternative) : primary;
  const max = Math.max(0.1, ...all);
  const min = Math.min(0, ...all);
  const range = max - min || 1;
  const step = freqs.length > 1 ? 522 / (freqs.length - 1) : 0;
  const points = values => values.map((v, i) => {
    const x = 48 + i * step;
    const y = 205 - ((v - min) / range) * 165;
    return [x, y];
  });
  const line = pts => pts.map((p, i) => `${i ? "L" : "M"}${p[0]},${p[1]}`).join(" ");
  const p1 = points(primary);
  const p2 = alternative ? points(alternative) : [];
  return `<svg class="chart" viewBox="0 0 600 250" role="img">
    <line x1="42" y1="205" x2="570" y2="205" stroke="#d5d8de"/>
    <line x1="42" y1="35" x2="42" y2="205" stroke="#d5d8de"/>
    ${freqs.map((f, i) => `<text x="${48 + i * step}" y="230" font-size="12" text-anchor="middle" fill="#666">${f}</text>`).join("")}
    <path d="${line(p1)}" fill="none" stroke="#f39a00" stroke-width="4" stroke-dasharray="10 8"/>
    ${p1.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="7" fill="#fff" stroke="#f39a00" stroke-width="4"/>`).join("")}
    ${alternative ? `<path d="${line(p2)}" fill="none" stroke="#10b9c6" stroke-width="4"/>${p2.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="7" fill="#fff" stroke="#10b9c6" stroke-width="4"/>`).join("")}` : ""}
  </svg>`;
}

function comparisonSummary(c) {
  const base = averageRange(c.reverberation, 250, 8000);
  const alt = averageRange(c.altReverberation, 250, 8000);
  const diff = base - alt;
  const percent = base === 0 ? 0 : diff / base * 100;
  const abs = Math.abs(percent);
  const neutral = Math.abs(diff) < 0.05 || abs < 2;
  const title = neutral ? t("noChange") : diff < 0 ? t("worse") : abs >= 15 ? t("improvementBig") : abs >= 5 ? t("improvementMid") : t("improvementSmall");
  const cls = neutral ? "neutral" : diff < 0 ? "bad" : "";
  return `<div class="comparison-summary ${cls}">
    <strong>${title}</strong>
    <p>${t("change")}: ${fmt(Math.abs(diff))} ${state.language === "en" ? "sec" : "წმ"} (${fmt(Math.abs(percent))}%)</p>
    <div class="chips">${freqs.slice(freqs.indexOf("250")).map((f, i) => {
      const index = i + freqs.indexOf("250");
      const d = c.reverberation[index] - c.altReverberation[index];
      return `<div class="chip"><span>${f} Hz</span><br><strong>${d >= 0 ? "-" : "+"}${fmt(Math.abs(d))}</strong></div>`;
    }).join("")}</div>
  </div>`;
}

function reportTable(title, values, suffix) {
  return `<table class="report-table">
    <tr><th>${title}</th>${freqs.map(f => `<th>${f} Hz</th>`).join("")}<th>${t("average125")}</th><th>${t("average250")}</th></tr>
    <tr><td></td>${values.map(v => `<td>${fmt(v)} ${suffix}</td>`).join("")}<td>${fmt(averageFrom(values, 125))}</td><td>${fmt(averageFrom(values, 250))}</td></tr>
  </table>`;
}

function coefficientGrid(kind, selection, source) {
  if (selection < 0) return "";
  const material = materialAt(kind, selection, source);
  if (!material) return "";
  return `<div class="pdf-coefficient-grid">${expandedCoefficients(material.values).map((value, index) => `
    <span><b>${freqs[index]}hz</b><em>${fmt(value)}</em></span>
  `).join("")}</div>`;
}

function selectedMaterialName(kind, selection, source) {
  const material = materialAt(kind, selection, source);
  return material ? sanitizeName(material.name) : t("select");
}

function reportCalculationRows(c) {
  const rows = [
    [t("floor"), c.primaryFloor, selectedMaterialName("floor", state.floorSelection, "floorSelection"), coefficientGrid("floor", state.floorSelection, "floorSelection")],
    [t("wall"), c.primaryWall, selectedMaterialName("wall", state.wallSelection, "wallSelection"), coefficientGrid("wall", state.wallSelection, "wallSelection")],
    [t("door"), n(state.doorArea), selectedMaterialName("door", state.doorSelection, "doorSelection"), coefficientGrid("door", state.doorSelection, "doorSelection")],
    [t("window"), n(state.windowArea), selectedMaterialName("window", state.windowSelection, "windowSelection"), coefficientGrid("window", state.windowSelection, "windowSelection")],
    [t("ceiling"), c.effectiveCeiling, selectedMaterialName("ceiling", state.ceilingSelection, "ceilingSelection"), coefficientGrid("ceiling", state.ceilingSelection, "ceilingSelection")]
  ];

  state.extraFloorRows.forEach((row, index) => {
    if (n(row.area) > 0) rows.push([`${t("extraFloor")} ${index + 1}`, n(row.area), selectedMaterialName("floor", row.selection, row), coefficientGrid("floor", row.selection, row)]);
  });
  state.extraWallRows.forEach((row, index) => {
    if (n(row.area) > 0) rows.push([`${t("extraWall")} ${index + 1}`, n(row.area), selectedMaterialName("wall", row.selection, row), coefficientGrid("wall", row.selection, row)]);
  });
  state.extraCeilingRows.forEach((row, index) => {
    if (n(row.area) > 0) rows.push([`${t("extraCeiling")} ${index + 1}`, n(row.area), selectedMaterialName("ceiling", row.selection, row), coefficientGrid("ceiling", row.selection, row)]);
  });
  state.extraAbsorberRows.forEach((row, index) => {
    if (n(row.area) > 0) rows.push([`${t("absorbers")} ${index + 1}`, n(row.area), selectedMaterialName("ceiling", row.selection, row), coefficientGrid("ceiling", row.selection, row)]);
  });

  return rows
    .filter(row => row[1] > 0 || [t("floor"), t("wall"), t("ceiling")].includes(row[0]))
    .map(row => `
      <div class="pdf-material-row">
        <div class="pdf-material-top">
          <strong>${esc(row[0])}</strong>
          <span>${fmt(row[1])} m²</span>
          <em>${esc(row[2])}</em>
        </div>
        <div class="pdf-coefficients">${row[3] || ""}</div>
      </div>
    `).join("");
}

function reportValue(label, value, unit = "") {
  return `<div class="pdf-field"><span>${label}</span><strong>${value}</strong><em>${unit}</em></div>`;
}

function buildReport() {
  document.getElementById("print-report").innerHTML = buildReportMarkup();
}

function buildReportMarkup() {
  const c = computed();
  const suffix = state.language === "en" ? "sec" : "წმ";
  const project = state.project.trim() || "Kaki's Acoustics";
  return `
    <article class="report-page calculation-page">
      <header class="pdf-brand">
        <strong>Kaki's Acoustics</strong>
        <span>Acoustic calculator</span>
      </header>
      <h1>${state.language === "en" ? "Acoustics report" : "აკუსტიკის ანგარიში"}</h1>
      <div class="pdf-top-grid">
        <div class="pdf-room-image"><img src="assets/${shapeAssets[state.shape]}" alt=""></div>
        <div class="pdf-inputs">
          ${reportValue(t("project"), esc(project))}
          ${state.shape === 3 ? reportValue(t("volume"), fmt(volume()), "m³") : reportValue(t("length"), fmt(n(state.length)), "m")}
          ${state.shape === 3 ? reportValue(t("floorArea"), fmt(floorArea()), "m²") : reportValue(t("width"), fmt(n(state.width)), "m")}
          ${state.shape === 3 ? reportValue(t("wallArea"), fmt(wallArea()), "m²") : reportValue(state.shape === 1 || state.shape === 2 ? t("height1") : t("height"), fmt(n(state.height1)), "m")}
          ${state.shape === 1 || state.shape === 2 ? reportValue(t("height2"), fmt(n(state.height2)), "m") : ""}
          ${reportValue(t("doorArea"), fmt(n(state.doorArea)), "m²")}
          ${reportValue(t("windowArea"), fmt(n(state.windowArea)), "m²")}
        </div>
        <div class="pdf-inputs totals">
          ${reportValue(t("totalFloor"), fmt(floorArea()), "m²")}
          ${reportValue(t("totalWall"), fmt(wallArea()), "m²")}
          ${reportValue(t("totalCeiling"), fmt(ceilingArea()), "m²")}
          ${reportValue(t("volume"), fmt(volume()), "m³")}
        </div>
      </div>
      <h2>${t("calculation")}</h2>
      <div class="pdf-materials">${reportCalculationRows(c)}</div>
      <p class="pdf-type">${state.language === "en" ? "Calculation type 1" : "გამოთვლის ტიპი 1"}</p>
      ${reportTable(t("reverberation"), c.reverberation, suffix)}
      ${chartSvg(c.reverberation, state.alternativeEnabled ? c.altReverberation : null)}
      ${state.alternativeEnabled ? `<h3>${t("comparison")}</h3>${comparisonSummary(c)}${reportTable(t("comparison"), c.altReverberation, suffix)}` : ""}
    </article>

    <article class="report-page explanation-page">
      <header class="pdf-brand">
        <strong>Kaki's Acoustics</strong>
        <span>Acoustic calculator</span>
      </header>
      <h1>${state.language === "en" ? "Kaki's Acoustics report" : "Kaki's Acoustics ანგარიში"}</h1>
      <div class="pdf-explainer">
        <section>
          <h2>${state.language === "en" ? "Reverberation time" : "რევერბერაციის დრო"}</h2>
          <p>${state.language === "en" ? "Reverberation time is the time, measured in seconds, that passes between a sound source stopping and the sound dying out. More accurately, it is the number of seconds it takes the sound level to drop 60 dB after the sound source has ceased." : "რევერბერაციის დრო არის დრო წამებში, რომელიც გადის ხმის წყაროს შეჩერებიდან ხმის ჩაქრობამდე. უფრო ზუსტად, ეს არის დრო, რომელიც საჭიროა ხმის დონის 60 dB-ით დასაკლებად."}</p>
          <h2>${state.language === "en" ? "Sound absorption value" : "ხმის შთანთქმის მნიშვნელობა"}</h2>
          <p>${state.language === "en" ? "The efficiency of a sound absorbing material is expressed by its sound absorption value. The value is measured across frequency ranges and also depends on how the material is installed." : "ხმის შთანთქმის მასალის ეფექტურობა გამოიხატება შთანთქმის კოეფიციენტით. მნიშვნელობა იზომება სიხშირეების მიხედვით და დამოკიდებულია მასალის მონტაჟის ტიპზეც."}</p>
        </section>
        <section>
          <h2>${state.language === "en" ? "Absorption and absorption area" : "შთანთქმა და შთანთქმის ფართობი"}</h2>
          <p>${state.language === "en" ? "The sound absorbing effect depends partly on how effective the material is and partly on how many square metres are installed. Greater absorption lowers reverberation time in the room." : "ხმის შთანთქმის ეფექტი დამოკიდებულია მასალის თვისებებზე და გამოყენებულ ფართობზე. რაც უფრო დიდია შთანთქმა, მით უფრო დაბალია რევერბერაციის დრო ოთახში."}</p>
          <h2>${state.language === "en" ? "Sabine's formula" : "საბინის ფორმულა"}</h2>
          <p>${state.language === "en" ? "Acoustic calculations are based on Sabine's formula: reverberation time is proportional to room volume and inversely proportional to total absorption." : "აკუსტიკური გამოთვლები ეფუძნება საბინის ფორმულას: რევერბერაციის დრო პროპორციულია ოთახის მოცულობისა და უკუპროპორციულია სრული შთანთქმის."}</p>
        </section>
      </div>
    </article>
  `;
}

function printDocumentCss() {
  return `
    @page { size: A4; margin: 8mm; }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: #fff; color: #111; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    body { width: 100%; font-size: 10.5px; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .report-page { width: 100%; max-width: 100%; page-break-after: always; break-after: page; background: #fff; overflow: visible; }
    .report-page:last-child { page-break-after: auto; break-after: auto; }
    .pdf-brand { display: grid; gap: 1px; justify-items: end; text-align: right; margin-bottom: 3mm; }
    .pdf-brand strong { font-size: 15px; font-weight: 650; }
    .pdf-brand span { color: #777; font-size: 9px; }
    .calculation-page h1 { margin: 3mm 0 5mm; font-size: 15px; font-weight: 500; }
    .explanation-page h1 { margin: 0 0 8mm; font-size: 15px; font-weight: 500; }
    .pdf-top-grid { display: grid; grid-template-columns: 1fr; gap: 3mm; width: 100%; max-width: 100%; }
    .pdf-room-image img { display: block; width: 52mm; max-width: 100%; height: 30mm; object-fit: contain; }
    .pdf-inputs { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 3px; }
    .pdf-field { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: end; gap: 2px; min-width: 0; }
    .pdf-field span { grid-column: 1 / -1; font-size: 9px; overflow-wrap: anywhere; }
    .pdf-field strong { min-width: 0; width: 100%; height: 15px; padding: 1px 3px; border: 1px solid #111; font-size: 9px; font-weight: 400; line-height: 12px; overflow: hidden; }
    .pdf-field em { font-size: 9px; font-style: normal; }
    .calculation-page h2, .pdf-type { margin: 3mm 0 1.5mm; font-size: 12px; font-weight: 400; }
    .pdf-materials { display: grid; gap: 4px; width: 100%; }
    .pdf-material-row { background: #d3d3d3; padding: 3mm 3mm 2.5mm; break-inside: avoid; }
    .pdf-material-top { display: grid; grid-template-columns: minmax(0, 1fr) 16mm; gap: 2mm; align-items: baseline; }
    .pdf-material-top em { grid-column: 1 / -1; }
    .pdf-material-top strong { font-size: 10px; font-weight: 700; overflow-wrap: anywhere; }
    .pdf-material-top span, .pdf-material-top em { font-size: 8.5px; font-style: normal; overflow-wrap: anywhere; }
    .pdf-coefficients { margin-top: 2mm; padding: 0; }
    .pdf-coefficient-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.8mm 2mm; max-width: 100%; }
    .pdf-coefficient-grid span { display: grid; grid-template-columns: auto 1fr; gap: 2px; align-items: baseline; min-width: 0; font-size: 8px; line-height: 1.08; }
    .pdf-coefficient-grid b { font-weight: 500; }
    .pdf-coefficient-grid em { font-style: normal; }
    .report-table { width: 100%; max-width: 100%; table-layout: fixed; border-collapse: collapse; margin-top: 2mm; }
    .report-table td, .report-table th { border: 1px solid #d8dce2; padding: 2px; font-size: 6.5px; text-align: center; overflow-wrap: anywhere; }
    .report-table th { background: #b6d7f5; font-weight: 600; }
    .report-table td:first-child, .report-table th:first-child { text-align: left; }
    .chart { display: block; width: 100%; max-width: 100%; height: 30mm; margin: 2mm 0 0; border: 1px solid #d8dce2; }
    .comparison-summary { margin: 3mm 0; padding: 3mm; background: #eaf8ee; break-inside: avoid; }
    .comparison-summary.bad { background: #fff4dc; }
    .comparison-summary.neutral { background: #f0f1f5; }
    .chips { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2mm; }
    .chip { background: #fff; padding: 2mm; font-size: 8px; text-align: center; }
    .pdf-explainer { display: block; margin-top: 8mm; padding: 4mm; background: #d4d4d4; }
    .pdf-explainer h2 { font-size: 12px; margin: 0 0 3mm; }
    .pdf-explainer p { font-size: 10px; line-height: 1.2; margin: 0 0 4mm; }
  `;
}

function exportPdf() {
  const markup = buildReportMarkup();
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    document.getElementById("print-report").innerHTML = markup;
    document.body.classList.add("printing");
    setTimeout(() => window.print(), 50);
    setTimeout(() => document.body.classList.remove("printing"), 2000);
    return;
  }
  const baseHref = new URL("./", window.location.href).href;
  printWindow.document.open();
  printWindow.document.write(`<!doctype html>
    <html lang="${state.language}">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <base href="${esc(baseHref)}">
        <title>${esc(state.language === "en" ? "Acoustics report" : "აკუსტიკის ანგარიში")}</title>
        <style>${printDocumentCss()}</style>
      </head>
      <body>${markup}</body>
    </html>`);
  printWindow.document.close();
  setTimeout(() => {
    printWindow.focus();
    printWindow.print();
  }, 250);
}

function clearAll() {
  if (!confirm(t("clearAsk"))) return;
  state = {...defaults, language: state.language};
  saveState();
  render();
}

document.getElementById("lang-ka").onclick = () => setState("language", "ka");
document.getElementById("lang-en").onclick = () => setState("language", "en");
document.getElementById("clear-btn").onclick = clearAll;
document.getElementById("export-btn").onclick = exportPdf;
document.getElementById("export-btn-secondary").onclick = exportPdf;
document.getElementById("alternative-enabled").onchange = e => setState("alternativeEnabled", e.target.checked);
window.addEventListener("afterprint", () => document.body.classList.remove("printing"));

function blurActiveField() {
  const active = document.activeElement;
  if (active && ["INPUT", "TEXTAREA", "SELECT"].includes(active.tagName)) {
    active.blur();
  }
}

document.addEventListener("focusin", event => {
  if (event.target.matches("input, textarea")) {
    document.getElementById("keyboard-bar").classList.remove("hidden");
  }
});

document.addEventListener("focusout", () => {
  setTimeout(() => {
    if (!document.activeElement || !document.activeElement.matches("input, textarea")) {
      document.getElementById("keyboard-bar").classList.add("hidden");
    }
  }, 80);
});

document.addEventListener("keydown", event => {
  if (event.key === "Enter" && event.target.matches("input")) {
    event.preventDefault();
    blurActiveField();
  }
});

document.addEventListener("pointerdown", event => {
  if (!event.target.closest("input, textarea, .keyboard-bar, .picker-sheet")) {
    blurActiveField();
  }
});

document.getElementById("keyboard-done").onclick = blurActiveField;

function openMaterialPicker(kind, selection, onSelect) {
  activePicker = {kind, selection, onSelect, query: ""};
  document.getElementById("picker-backdrop").classList.remove("hidden");
  document.body.classList.add("modal-open");
  document.getElementById("picker-search").value = "";
  renderPickerOptions();
}

function closeMaterialPicker() {
  activePicker = null;
  document.getElementById("picker-backdrop").classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function renderPickerOptions() {
  if (!activePicker) return;
  const query = activePicker.query.trim().toLowerCase();
  const options = [{name: t("select"), index: -1}, ...materialOptions(activePicker.kind).map((m, index) => ({name: sanitizeName(m.name), index}))];
  const filtered = options.filter(option => option.index === -1 || !query || option.name.toLowerCase().includes(query));
  document.getElementById("picker-options").innerHTML = filtered.map(option => `
    <button type="button" class="${option.index === activePicker.selection ? "selected" : ""}" data-value="${option.index}">
      <span>${esc(option.name)}</span>
      ${option.index === activePicker.selection ? "<b>✓</b>" : ""}
    </button>
  `).join("");
}

document.getElementById("picker-search").addEventListener("input", event => {
  if (!activePicker) return;
  activePicker.query = event.target.value;
  renderPickerOptions();
});

document.getElementById("picker-options").addEventListener("click", event => {
  const button = event.target.closest("button[data-value]");
  if (!button || !activePicker) return;
  activePicker.onSelect(Number(button.dataset.value));
  closeMaterialPicker();
});

document.getElementById("picker-cancel").onclick = closeMaterialPicker;
document.getElementById("picker-done").onclick = closeMaterialPicker;
document.getElementById("picker-backdrop").addEventListener("click", event => {
  if (event.target.id === "picker-backdrop") closeMaterialPicker();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(`./service-worker.js?v=${APP_VERSION}`).then(registration => {
    registration.update();
  });
  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
}

async function resetAppCacheIfRequested() {
  const url = new URL(window.location.href);
  if (url.searchParams.get("reset-cache") !== "1") return false;
  if ("serviceWorker" in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map(registration => registration.unregister()));
  }
  if ("caches" in window) {
    const keys = await caches.keys();
    await Promise.all(keys.map(key => caches.delete(key)));
  }
  url.searchParams.delete("reset-cache");
  url.searchParams.set("v", APP_VERSION);
  window.location.replace(url.toString());
  return true;
}

resetAppCacheIfRequested().then(resetting => {
  if (!resetting) render();
});
