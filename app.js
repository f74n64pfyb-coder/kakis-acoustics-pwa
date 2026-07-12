const STORAGE_KEY = "kakis-acoustics-pwa-state-v1";
const APP_VERSION = "70";
const freqs = ["63", "125", "250", "500", "1000", "2000", "4000", "8000"];
const sourceFreqs = ["125", "250", "500", "1000", "2000", "4000"];
const shapeAssets = ["shape_flat.png", "shape_vaulted.png", "shape_raked.png", "shape_arbitrary.png"];

const text = {
  ka: {
    title: "აკუსტიკის კალკულატორი",
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
    extraDoor: "დამატებითი კარის მასალები",
    extraWindow: "დამატებითი ფანჯრის მასალები",
    extraCeiling: "დამატებითი ჭერის მასალები",
    absorbers: "დამატებითი აბსორბერები",
    extraFloorAbsorber: "დამატებითი იატაკის აბსორბერი",
    extraWallAbsorber: "დამატებითი კედლის აბსორბერი",
    extraDoorAbsorber: "დამატებითი კარის აბსორბერი",
    extraWindowAbsorber: "დამატებითი ფანჯრის აბსორბერი",
    extraCeilingAbsorber: "დამატებითი ჭერის აბსორბერი",
    area: "ფართობი",
    reverberation: "რევერბერაციის დრო T [წმ]",
    absorption: "შთანთქმის ფართობი A [m² Sab]",
    calculation: "გამოთვლა",
    withoutAbsorber: "აბსორბერის გარეშე",
    withAbsorber: "აბსორბერით",
    target: "მიზანი",
    targetName: "მიზნის სახელი",
    targetNamePlaceholder: "მიზანი",
    targetValue: "მიზანი",
    targetTime: "მიზანი",
    secondsShort: "წმ",
    average125: "საშუალო 125 ჰც-დან",
    average250: "საშუალო 250 ჰც-დან",
    materialMissing: "მასალა არჩეული არ არის",
    missingTail: "ეს ზედაპირები შთანთქმაში 0-ად ჩაითვლება.",
    areaExceeded: "ფართობი გადაჭარბებულია",
    areaExceededTail: "დამატებული ფართობი მთავარ ფართობს არ უნდა აღემატებოდეს.",
    clearAsk: "ყველა მონაცემი წაიშალოს?",
    improvementBig: "მნიშვნელოვანი გაუმჯობესება",
    improvementMid: "ზომიერი გაუმჯობესება",
    improvementSmall: "მცირე გაუმჯობესება",
    report: "აკუსტიკის ანგარიში",
    printHint: "PDF-ის შესანახად აირჩიე Share/Print და Save to Files.",
    cancel: "გაუქმება",
    done: "დახურვა",
    search: "ძებნა",
    selectMaterial: "მასალის არჩევა",
    measurementsTitle: "აკუსტიკური გაზომვები",
    measurementsHint: "ატვირთეთ AudioTools-ის .txt ფაილები რეალური კალიბრაციისთვის.",
    uploadFiles: "ფაილების ატვირთვა",
    measuredLineLabel: "გაზომილი რეალური",
    simulatedLineLabel: "სიმულაცია"
  },
  en: {
    title: "Acoustics calculator",
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
    extraDoor: "Additional door materials",
    extraWindow: "Additional window materials",
    extraCeiling: "Additional ceiling materials",
    absorbers: "Additional absorbers",
    extraFloorAbsorber: "Additional floor absorber",
    extraWallAbsorber: "Additional wall absorber",
    extraDoorAbsorber: "Additional door absorber",
    extraWindowAbsorber: "Additional window absorber",
    extraCeilingAbsorber: "Additional ceiling absorber",
    area: "Area",
    reverberation: "Reverberation time T [sec]",
    absorption: "Absorption area A [m² Sab]",
    calculation: "Calculation",
    withoutAbsorber: "Without absorber",
    withAbsorber: "With absorber",
    target: "Target",
    targetName: "Target name",
    targetNamePlaceholder: "Target",
    targetValue: "Target",
    targetTime: "Target",
    secondsShort: "sec",
    average125: "Average from 125 Hz",
    average250: "Average from 250 Hz",
    materialMissing: "Material not selected",
    missingTail: "These surfaces are counted as 0 absorption.",
    areaExceeded: "Area exceeded",
    areaExceededTail: "Added area must not exceed the main area.",
    clearAsk: "Clear all data?",
    improvementBig: "Significant improvement",
    improvementMid: "Moderate improvement",
    improvementSmall: "Small improvement",
    report: "Acoustics report",
    printHint: "To save as PDF choose Share/Print and Save to Files.",
    cancel: "Cancel",
    done: "Done",
    search: "Search",
    selectMaterial: "Select material",
    measurementsTitle: "Acoustic Measurements",
    measurementsHint: "Upload AudioTools .txt files for real room calibration.",
    uploadFiles: "Upload Files",
    measuredLineLabel: "Measured Real",
    simulatedLineLabel: "Simulation"
  }
};

const defaults = {
  language: "ka",
  project: "",
  shape: 0,
  resultType: 0,
  measuredType: 0, 
  calibrationType: -1,
  reverberationTargetName: "",
  reverberationTargetValue: "",
  absorptionTargetName: "",
  absorptionTargetValue: "",
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
  extraDoorRows: [],
  extraWindowRows: [],
  extraCeilingRows: [],
  floorAbsorberRows: [],
  wallAbsorberRows: [],
  doorAbsorberRows: [],
  windowAbsorberRows: [],
  ceilingAbsorberRows: [],
  customName: "",
  customValues: ["", "", "", "", "", "", "", ""],
  customMaterials: {},
  openExtraPanels: [],
  measuredFiles: []
};

function freshDefaultState(language = defaults.language) {
  return {
    ...defaults,
    language,
    customValues: [...defaults.customValues],
    customMaterials: {},
    extraFloorRows: [],
    extraWallRows: [],
    extraDoorRows: [],
    extraWindowRows: [],
    extraCeilingRows: [],
    floorAbsorberRows: [],
    wallAbsorberRows: [],
    doorAbsorberRows: [],
    windowAbsorberRows: [],
    ceilingAbsorberRows: [],
    openExtraPanels: [],
    measuredFiles: []
  };
}

let state = loadState();
let activePicker = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const migrated = {...freshDefaultState(), ...saved, customMaterials: saved.customMaterials || {}};
    if ((!saved.ceilingAbsorberRows || !saved.ceilingAbsorberRows.length) && saved.extraAbsorberRows?.length) {
      migrated.ceilingAbsorberRows = saved.extraAbsorberRows;
    }
    if (!saved.reverberationTargetName && saved.targetName) migrated.reverberationTargetName = saved.targetName;
    if (!saved.reverberationTargetValue && saved.targetTime) migrated.reverberationTargetValue = saved.targetTime;
    return migrated;
  } catch {
    return freshDefaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function t(key) {
  return text[state.language][key];
}

function targetNameKey(resultType = state.resultType) {
  return resultType === 0 ? "reverberationTargetName" : "absorptionTargetName";
}

function targetValueKey(resultType = state.resultType) {
  return resultType === 0 ? "reverberationTargetValue" : "absorptionTargetValue";
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
    "Window (3+12+3 mm)": "ფანჯარა (3+12+3 mm)",
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
  // ⚠️ ორიგინალი MATERIALS-ის გამოძახება 
  return [custom, ...MATERIALS[kind], ...(window.STANDARD_ABSORPTION_MATERIALS || [])];
}

function customIndex(kind) {
  return 0;
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
    const custom = customData(source);
    return {
      name: custom.name || (state.language === "en" ? "User defined" : "საკუთარი მასალა"),
      values: custom.values,
      custom: true
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

function rowContributionsWithAbsorbers(rows, totalArea) {
  let remaining = Math.max(0, totalArea);
  const materials = [];
  const absorbers = [];
  let grossTotal = 0;
  rows.forEach((row, rowIndex) => {
    const grossArea = Math.min(Math.max(0, n(row.area)), remaining);
    remaining -= grossArea;
    if (grossArea <= 0) return;
    grossTotal += grossArea;
    const nestedAbsorbers = rowContributions(row.absorberRows || [], grossArea);
    const absorberArea = nestedAbsorbers.reduce((total, absorber) => total + absorber.area, 0);
    const materialArea = Math.max(0, grossArea - absorberArea);
    if (materialArea > 0) materials.push({...row, area: materialArea, grossArea, rowIndex, selection: Number(row.selection)});
    nestedAbsorbers.forEach((absorber, absorberIndex) => {
      absorbers.push({...absorber, parentIndex: rowIndex, absorberIndex});
    });
  });
  return {
    materials,
    absorbers,
    grossArea: grossTotal
  };
}

function rowsTotal(rows) {
  return rows.reduce((total, row) => total + Math.max(0, n(row.area)), 0);
}

function nestedAbsorberIssues(rows, label) {
  const issues = [];
  rows.forEach((row, index) => {
    const absorberTotal = rowsTotal(row.absorberRows || []);
    const rowArea = Math.max(0, n(row.area));
    if (absorberTotal > rowArea) issues.push(`${label} ${index + 1}: ${fmt(absorberTotal)} / ${fmt(rowArea)} m²`);
  });
  return issues;
}

function areaIssues() {
  const issues = [];
  const floorTotal = floorArea();
  const wallTotal = wallArea();
  const doorTotal = n(state.doorArea);
  const windowTotal = n(state.windowArea);
  const ceilingTotal = ceilingArea();
  const floorExtra = rowsTotal(state.extraFloorRows);
  const wallExtra = rowsTotal(state.extraWallRows);
  const doorExtra = rowsTotal(state.extraDoorRows);
  const windowExtra = rowsTotal(state.extraWindowRows);
  const ceilingExtra = rowsTotal(state.extraCeilingRows);
  const floorAbsorber = rowsTotal(state.floorAbsorberRows);
  const wallAbsorber = rowsTotal(state.wallAbsorberRows);
  const doorAbsorber = rowsTotal(state.doorAbsorberRows);
  const windowAbsorber = rowsTotal(state.windowAbsorberRows);
  const ceilingAbsorber = rowsTotal(state.ceilingAbsorberRows);
  if (floorExtra + floorAbsorber > floorTotal) issues.push(`${t("floor")}: ${fmt(floorExtra + floorAbsorber)} / ${fmt(floorTotal)} m²`);
  if (wallExtra + wallAbsorber > wallTotal) issues.push(`${t("wall")}: ${fmt(wallExtra + wallAbsorber)} / ${fmt(wallTotal)} m²`);
  if (doorExtra + doorAbsorber > doorTotal) issues.push(`${t("door")}: ${fmt(doorExtra + doorAbsorber)} / ${fmt(doorTotal)} m²`);
  if (windowExtra + windowAbsorber > windowTotal) issues.push(`${t("window")}: ${fmt(windowExtra + windowAbsorber)} / ${fmt(windowTotal)} m²`);
  if (ceilingExtra + ceilingAbsorber > ceilingTotal) issues.push(`${t("ceiling")}: ${fmt(ceilingExtra + ceilingAbsorber)} / ${fmt(ceilingTotal)} m²`);
  issues.push(...nestedAbsorberIssues(state.extraFloorRows, t("extraFloor")));
  issues.push(...nestedAbsorberIssues(state.extraWallRows, t("extraWall")));
  issues.push(...nestedAbsorberIssues(state.extraDoorRows, t("extraDoor")));
  issues.push(...nestedAbsorberIssues(state.extraWindowRows, t("extraWindow")));
  issues.push(...nestedAbsorberIssues(state.extraCeilingRows, t("extraCeiling")));
  return issues;
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

// ⚠️ შეცვლილი სახელი ოვერრაიდის პრობლემის ასაცილებლად
function baseComputed() {
  const floorExtraData = rowContributionsWithAbsorbers(state.extraFloorRows, floorArea());
  const wallExtraData = rowContributionsWithAbsorbers(state.extraWallRows, wallArea());
  const doorExtraData = rowContributionsWithAbsorbers(state.extraDoorRows, n(state.doorArea));
  const windowExtraData = rowContributionsWithAbsorbers(state.extraWindowRows, n(state.windowArea));
  const ceilingExtraData = rowContributionsWithAbsorbers(state.extraCeilingRows, ceilingArea());
  const floorExtra = floorExtraData.materials;
  const wallExtra = wallExtraData.materials;
  const doorExtra = doorExtraData.materials;
  const windowExtra = windowExtraData.materials;
  const ceilingExtra = ceilingExtraData.materials;
  const floorAbsorber = rowContributions(state.floorAbsorberRows, Math.max(0, floorArea() - floorExtraData.grossArea));
  const wallAbsorber = rowContributions(state.wallAbsorberRows, Math.max(0, wallArea() - wallExtraData.grossArea));
  const doorAbsorber = rowContributions(state.doorAbsorberRows, Math.max(0, n(state.doorArea) - doorExtraData.grossArea));
  const windowAbsorber = rowContributions(state.windowAbsorberRows, Math.max(0, n(state.windowArea) - windowExtraData.grossArea));
  const ceilingAbsorber = rowContributions(state.ceilingAbsorberRows, Math.max(0, ceilingArea() - ceilingExtraData.grossArea));
  const ceilingAbsorberArea = ceilingAbsorber.reduce((a, r) => a + r.area, 0);
  const primaryFloor = Math.max(0, floorArea() - floorExtraData.grossArea - floorAbsorber.reduce((a, r) => a + r.area, 0));
  const primaryWall = Math.max(0, wallArea() - wallExtraData.grossArea - wallAbsorber.reduce((a, r) => a + r.area, 0));
  const primaryDoor = Math.max(0, n(state.doorArea) - doorExtraData.grossArea - doorAbsorber.reduce((a, r) => a + r.area, 0));
  const primaryWindow = Math.max(0, n(state.windowArea) - windowExtraData.grossArea - windowAbsorber.reduce((a, r) => a + r.area, 0));
  const effectiveCeiling = Math.max(0, ceilingArea() - ceilingExtraData.grossArea - ceilingAbsorberArea);
  const baseFloor = Math.max(0, floorArea() - floorExtraData.grossArea);
  const baseWall = Math.max(0, wallArea() - wallExtraData.grossArea);
  const baseDoor = Math.max(0, n(state.doorArea) - doorExtraData.grossArea);
  const baseWindow = Math.max(0, n(state.windowArea) - windowExtraData.grossArea);
  const baseCeiling = Math.max(0, ceilingArea() - ceilingExtraData.grossArea);
  const absorptionWithoutAbsorber = freqs.map((_, i) => {
    let total = baseFloor * coeff("floor", state.floorSelection, i, "floorSelection");
    total += baseWall * coeff("wall", state.wallSelection, i, "wallSelection");
    total += baseDoor * coeff("door", state.doorSelection, i, "doorSelection");
    total += baseWindow * coeff("window", state.windowSelection, i, "windowSelection");
    total += baseCeiling * coeff("ceiling", state.ceilingSelection, i, "ceilingSelection");
    floorExtraData.materials.forEach(r => total += r.grossArea * coeff("floor", r.selection, i, r));
    wallExtraData.materials.forEach(r => total += r.grossArea * coeff("wall", r.selection, i, r));
    doorExtraData.materials.forEach(r => total += r.grossArea * coeff("door", r.selection, i, r));
    windowExtraData.materials.forEach(r => total += r.grossArea * coeff("window", r.selection, i, r));
    ceilingExtraData.materials.forEach(r => total += r.grossArea * coeff("ceiling", r.selection, i, r));
    return total;
  });
  const absorption = freqs.map((_, i) => {
    let total = primaryFloor * coeff("floor", state.floorSelection, i, "floorSelection");
    total += primaryWall * coeff("wall", state.wallSelection, i, "wallSelection");
    total += primaryDoor * coeff("door", state.doorSelection, i, "doorSelection");
    total += primaryWindow * coeff("window", state.windowSelection, i, "windowSelection");
    total += effectiveCeiling * coeff("ceiling", state.ceilingSelection, i, "ceilingSelection");
    floorExtra.forEach(r => total += r.area * coeff("floor", r.selection, i, r));
    wallExtra.forEach(r => total += r.area * coeff("wall", r.selection, i, r));
    doorExtra.forEach(r => total += r.area * coeff("door", r.selection, i, r));
    windowExtra.forEach(r => total += r.area * coeff("window", r.selection, i, r));
    ceilingExtra.forEach(r => total += r.area * coeff("ceiling", r.selection, i, r));
    floorExtraData.absorbers.forEach(r => total += r.area * coeff("floor", r.selection, i, r));
    wallExtraData.absorbers.forEach(r => total += r.area * coeff("wall", r.selection, i, r));
    doorExtraData.absorbers.forEach(r => total += r.area * coeff("door", r.selection, i, r));
    windowExtraData.absorbers.forEach(r => total += r.area * coeff("window", r.selection, i, r));
    ceilingExtraData.absorbers.forEach(r => total += r.area * coeff("ceiling", r.selection, i, r));
    floorAbsorber.forEach(r => total += r.area * coeff("floor", r.selection, i, r));
    wallAbsorber.forEach(r => total += r.area * coeff("wall", r.selection, i, r));
    doorAbsorber.forEach(r => total += r.area * coeff("door", r.selection, i, r));
    windowAbsorber.forEach(r => total += r.area * coeff("window", r.selection, i, r));
    ceilingAbsorber.forEach(r => total += r.area * coeff("ceiling", r.selection, i, r));
    return total;
  });
  const reverberationWithoutAbsorber = absorptionWithoutAbsorber.map(a => a === 0 ? 0 : Math.max(0.05, 0.16 * volume() / a));
  const reverberation = absorption.map(a => a === 0 ? 0 : Math.max(0.05, 0.16 * volume() / a));
  return {primaryFloor, primaryWall, primaryDoor, primaryWindow, effectiveCeiling, absorption, absorptionWithoutAbsorber, reverberation, reverberationWithoutAbsorber};
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
  renderComputedOnly();
}

function bindStaticInputs() {
  const project = document.getElementById("project");
  if (document.activeElement !== project) project.value = state.project;
  project.oninput = () => {
    state.project = project.value;
    saveState();
  };
  const targetName = document.getElementById("target-name");
  if (targetName && document.activeElement !== targetName) targetName.value = state[targetNameKey()] ?? "";
  if (targetName) {
    targetName.oninput = () => {
      state[targetNameKey()] = targetName.value;
      saveState();
      renderComputedOnly();
    };
  }
  const target = document.getElementById("target-time");
  if (target && document.activeElement !== target) target.value = state[targetValueKey()] ?? "";
  if (target) {
    target.oninput = () => {
      state[targetValueKey()] = target.value.replace(/[^\d.,]/g, "");
      saveState();
      renderComputedOnly();
    };
  }
  const targetUnit = document.getElementById("target-unit");
  if (targetUnit) targetUnit.textContent = state.resultType === 0 ? (state.language === "en" ? "sec" : "წმ") : "m² Sab";
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
  state[key].push({area: "", selection: -1, absorberRows: []});
  setState(key, state[key]);
}

function addNestedAbsorberRow(key, index) {
  setPanelOpen(key, true);
  state[key][index].absorberRows = state[key][index].absorberRows || [];
  state[key][index].absorberRows.push({area: "", selection: -1});
  setState(key, state[key]);
}

function coefficientLine(kind, selection, source) {
  const material = materialAt(kind, selection, source);
  if (!material) return "";
  return `<div class="coefficient-line">${expandedCoefficients(material.values).map((value, index) => `
    <span><b>${freqs[index]}hz:</b> ${fmt(value)}</span>
  `).join("")}</div>`;
}

function renderMaterialBlock(title, kind, key, area, extraTitle, rowsKey, areaKey, absorberTitle, absorberRowsKey) {
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
  if (absorberRowsKey) {
    const actions = document.createElement("div");
    actions.className = "row-actions";
    const addAbsorber = document.createElement("button");
    addAbsorber.type = "button";
    addAbsorber.className = "inline-add-btn";
    addAbsorber.innerHTML = `<span aria-hidden="true">+</span><strong>${esc(absorberTitle)}</strong>`;
    addAbsorber.onclick = event => {
      event.preventDefault();
      addExtraRow(absorberRowsKey);
    };
    actions.appendChild(addAbsorber);
    row.appendChild(actions);
  } else {
    const spacer = document.createElement("div");
    spacer.className = "material-row-spacer";
    row.appendChild(spacer);
  }
  block.appendChild(row);
  const mainCoefficients = coefficientLine(kind, state[key], key);
  if (mainCoefficients) block.insertAdjacentHTML("beforeend", mainCoefficients);
  const customEditor = renderInlineCustomEditor(kind, state[key], key);
  if (customEditor) block.appendChild(customEditor);
  if (rowsKey) block.appendChild(extraRows(extraTitle, kind, rowsKey, absorberTitle));
  if (absorberRowsKey) block.appendChild(extraRows(absorberTitle, kind, absorberRowsKey));
  return block;
}

function extraRows(title, kind, key, nestedAbsorberTitle = null) {
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
    if (nestedAbsorberTitle) {
      const addNested = document.createElement("button");
      addNested.type = "button";
      addNested.className = "inline-add-btn nested-absorber-btn";
      addNested.innerHTML = `<span aria-hidden="true">+</span><strong>${esc(nestedAbsorberTitle)}</strong>`;
      addNested.onclick = event => {
        event.preventDefault();
        addNestedAbsorberRow(key, index);
      };
      row.appendChild(addNested);
    }
    list.appendChild(row);
    const rowCoefficients = coefficientLine(kind, Number(item.selection ?? -1), item);
    if (rowCoefficients) list.insertAdjacentHTML("beforeend", rowCoefficients);
    const customEditor = renderInlineCustomEditor(kind, Number(item.selection ?? -1), item);
    if (customEditor) list.appendChild(customEditor);
    if (nestedAbsorberTitle && (item.absorberRows || []).length) {
      const nestedWrap = document.createElement("div");
      nestedWrap.className = "nested-absorber-list";
      item.absorberRows.forEach((absorber, absorberIndex) => {
        const nestedRow = document.createElement("div");
        nestedRow.className = "extra-row nested-absorber-row";
        const nestedTitle = document.createElement("div");
        nestedTitle.className = "material-title extra-title";
        nestedTitle.innerHTML = `<span aria-hidden="true">×</span><strong>${esc(nestedAbsorberTitle)}</strong>`;
        const nestedArea = document.createElement("input");
        nestedArea.inputMode = "decimal";
        nestedArea.placeholder = "m²";
        nestedArea.value = absorber.area ?? "";
        nestedArea.oninput = () => {
          state[key][index].absorberRows[absorberIndex].area = nestedArea.value.replace(/[^\d.,]/g, "");
          saveState();
          renderComputedOnly();
        };
        const nestedSelect = materialPickerButton(kind, Number(absorber.selection ?? -1), value => {
          state[key][index].absorberRows[absorberIndex].selection = value;
          saveState();
          render();
        }, absorber);
        const nestedRemove = document.createElement("button");
        nestedRemove.type = "button";
        nestedRemove.className = "remove-btn";
        nestedRemove.textContent = "×";
        nestedRemove.onclick = () => {
          state[key][index].absorberRows.splice(absorberIndex, 1);
          setState(key, state[key]);
        };
        nestedRow.append(nestedTitle, nestedArea, nestedSelect, nestedRemove);
        nestedWrap.appendChild(nestedRow);
        const nestedCoefficients = coefficientLine(kind, Number(absorber.selection ?? -1), absorber);
        if (nestedCoefficients) nestedWrap.insertAdjacentHTML("beforeend", nestedCoefficients);
        const nestedCustomEditor = renderInlineCustomEditor(kind, Number(absorber.selection ?? -1), absorber);
        if (nestedCustomEditor) nestedWrap.appendChild(nestedCustomEditor);
      });
      list.appendChild(nestedWrap);
    }
  });
  wrap.append(list);
  return wrap;
}

function renderMaterials() {
  const c = computed();
  const box = document.getElementById("material-sections");
  box.innerHTML = "";
  box.appendChild(renderMaterialBlock(t("floor"), "floor", "floorSelection", c.primaryFloor, t("extraFloor"), "extraFloorRows", "primaryFloor", t("extraFloorAbsorber"), "floorAbsorberRows"));
  box.appendChild(renderMaterialBlock(t("wall"), "wall", "wallSelection", c.primaryWall, t("extraWall"), "extraWallRows", "primaryWall", t("extraWallAbsorber"), "wallAbsorberRows"));
  box.appendChild(renderMaterialBlock(t("door"), "door", "doorSelection", c.primaryDoor, t("extraDoor"), "extraDoorRows", "door", t("extraDoorAbsorber"), "doorAbsorberRows"));
  box.appendChild(renderMaterialBlock(t("window"), "window", "windowSelection", c.primaryWindow, t("extraWindow"), "extraWindowRows", "window", t("extraWindowAbsorber"), "windowAbsorberRows"));
  box.appendChild(renderMaterialBlock(t("ceiling"), "ceiling", "ceilingSelection", c.effectiveCeiling, t("extraCeiling"), "extraCeilingRows", "effectiveCeiling", t("extraCeilingAbsorber"), "ceilingAbsorberRows"));
}

function missingMaterials(c) {
  const missing = [];
  if (c.primaryFloor > 0 && state.floorSelection < 0) missing.push(t("floor"));
  if (c.primaryWall > 0 && state.wallSelection < 0) missing.push(t("wall"));
  if (c.primaryDoor > 0 && state.doorSelection < 0) missing.push(t("door"));
  if (c.primaryWindow > 0 && state.windowSelection < 0) missing.push(t("window"));
  if (c.effectiveCeiling > 0 && state.ceilingSelection < 0) missing.push(t("ceiling"));
  extraRowsMissing(state.extraFloorRows, t("extraFloor"), t("extraFloorAbsorber"), missing);
  extraRowsMissing(state.extraWallRows, t("extraWall"), t("extraWallAbsorber"), missing);
  extraRowsMissing(state.extraDoorRows, t("extraDoor"), t("extraDoorAbsorber"), missing);
  extraRowsMissing(state.extraWindowRows, t("extraWindow"), t("extraWindowAbsorber"), missing);
  extraRowsMissing(state.extraCeilingRows, t("extraCeiling"), t("extraCeilingAbsorber"), missing);
  [
    [state.floorAbsorberRows, t("extraFloorAbsorber")],
    [state.wallAbsorberRows, t("extraWallAbsorber")],
    [state.doorAbsorberRows, t("extraDoorAbsorber")],
    [state.windowAbsorberRows, t("extraWindowAbsorber")],
    [state.ceilingAbsorberRows, t("extraCeilingAbsorber")]
  ].forEach(([rows, label]) => {
    rows.forEach((row, index) => {
      if (n(row.area) > 0 && Number(row.selection) < 0) missing.push(`${label} ${index + 1}`);
    });
  });
  return missing;
}

// ⚠️ შეცვლილი სახელი
function baseRenderComputedOnly() {
  const c = computed();
  const targetUnit = document.getElementById("target-unit");
  if (targetUnit) targetUnit.textContent = state.resultType === 0 ? (state.language === "en" ? "sec" : "წმ") : "m² Sab";
  document.getElementById("floor-area").textContent = `${fmt(floorArea())} m²`;
  document.getElementById("wall-area").textContent = `${fmt(wallArea())} m²`;
  document.getElementById("ceiling-area").textContent = `${fmt(ceilingArea())} m²`;
  document.getElementById("volume").textContent = `${fmt(volume())} m³`;
  document.querySelectorAll("[data-area]").forEach(el => {
    const key = el.dataset.area;
    const value = key === "door" ? c.primaryDoor : key === "window" ? c.primaryWindow : c[key];
    el.textContent = `${fmt(value)} m²`;
  });
  const warning = document.getElementById("warning");
  const missing = missingMaterials(c);
  const areas = areaIssues();
  const messages = [];
  if (missing.length) messages.push(`${t("materialMissing")}: ${missing.join(", ")}. ${t("missingTail")}`);
  if (areas.length) messages.push(`${t("areaExceeded")}: ${areas.join("; ")}. ${t("areaExceededTail")}`);
  warning.classList.toggle("hidden", messages.length === 0);
  warning.textContent = messages.join(" ");
  renderResults(c);
}

function resultTable(title, values, suffix) {
  return resultRowsTable(title, [{label: t("calculation"), values}], suffix);
}

function resultRowsTable(title, rows, suffix) {
  const colgroup = tableColgroup();
  const measuredLabels = ["გაზომილი EDT", "გაზომილი T20", "გაზომილი T30", "Measured EDT", "Measured T20", "Measured T30"];
  
  const filteredRows = rows.filter(row => {
    const label = row.label;
    return label === t("withoutAbsorber") || 
           measuredLabels.includes(label) ||
           label === t("withAbsorber") || label === t("calculation");
  });

  return `<div class="table-wrap"><table>
    ${colgroup}
    <tr><th>${title}</th>${freqs.map(f => `<th>${f} Hz</th>`).join("")}<th>${t("average125")}</th><th>${t("average250")}</th></tr>
    ${filteredRows.map(row => `<tr><td>${esc(row.label)}</td>${row.values.map(v => `<td>${fmt(v)} ${suffix}</td>`).join("")}<td>${fmt(averageFrom(row.values, 125))}</td><td>${fmt(averageFrom(row.values, 250))}</td></tr>`).join("")}
  </table></div>`;
}

function hasSelectedAbsorberRows(rows) {
  return rows.some(row => n(row.area) > 0 && Number(row.selection) >= 0);
}

function hasSelectedAbsorber() {
  const directRows = [
    ...state.floorAbsorberRows,
    ...state.wallAbsorberRows,
    ...state.doorAbsorberRows,
    ...state.windowAbsorberRows,
    ...state.ceilingAbsorberRows
  ];
  const nestedRows = [
    ...state.extraFloorRows,
    ...state.extraWallRows,
    ...state.extraDoorRows,
    ...state.extraWindowRows,
    ...state.extraCeilingRows
  ].flatMap(row => row.absorberRows || []);
  return hasSelectedAbsorberRows(directRows) || hasSelectedAbsorberRows(nestedRows);
}

function shouldShowChart(c) {
  return volume() > 0 && missingMaterials(c).length === 0;
}

function targetSeries(resultType = state.resultType) {
  const target = n(state[targetValueKey(resultType)]);
  return target > 0 ? freqs.map(() => target) : null;
}

function targetLabel(resultType = state.resultType) {
  return String(state[targetNameKey(resultType)] || "").trim() || t("target");
}

function measuredLabel(typeIndex) {
  const method = ["EDT", "T20", "T30"][Number(typeIndex)] || "EDT";
  return state.language === "en" ? `Measured ${method}` : `გაზომილი ${method}`;
}

function chartUnit() {
  return state.resultType === 0 ? (state.language === "en" ? "sec" : "წმ") : "m² Sab";
}

function resultPresentation(c, resultType = state.resultType) {
  const hasAbsorber = hasSelectedAbsorber();
  const target = targetSeries(resultType);
  const values = resultType === 0 ? c.reverberation : c.absorption;
  const valuesWithout = resultType === 0 ? c.reverberationWithoutAbsorber : c.absorptionWithoutAbsorber;
  
  const rows = hasAbsorber
    ? [{label: t("withoutAbsorber"), values: valuesWithout}]
    : [{label: t("calculation"), values}];
  const series = hasAbsorber
    ? [{label: t("withoutAbsorber"), values: valuesWithout, color: "#f39a00", dash: "8 6"}]
    : [{label: t("calculation"), values, color: "#f39a00", dash: "8 6"}];
  
  if (c.avgMeasured && resultType === 0) {
    if (state.measuredType === 0 && c.avgMeasured.edt && c.avgMeasured.edt.some(v => v > 0)) {
      rows.push({label: measuredLabel(0), values: c.avgMeasured.edt});
      series.push({label: measuredLabel(0), values: c.avgMeasured.edt, color: "#a855f7", dash: "8 6"});
    } else if (state.measuredType === 1 && c.avgMeasured.t20 && c.avgMeasured.t20.some(v => v > 0)) {
      rows.push({label: measuredLabel(1), values: c.avgMeasured.t20});
      series.push({label: measuredLabel(1), values: c.avgMeasured.t20, color: "#14b8a6", dash: "8 6"});
    } else if (state.measuredType === 2 && c.avgMeasured.t30 && c.avgMeasured.t30.some(v => v > 0)) {
      rows.push({label: measuredLabel(2), values: c.avgMeasured.t30});
      series.push({label: measuredLabel(2), values: c.avgMeasured.t30, color: "#ef4444", dash: "8 6"});
    }
  }
  
  if (hasAbsorber) {
    rows.push({label: t("withAbsorber"), values});
    series.push({label: t("withAbsorber"), values, color: "#078000", dash: "8 6"});
  }
  
  if (target) {
    series.push({label: targetLabel(resultType), values: target, color: "#2563eb", dash: "8 6"});
  }
  
  return {rows, series, values};
}

function chartLegend(series) {
  if (!series.length) return "";
  return `<div class="chart-legend">${series.map(item => `
    <span><i style="background:${item.color}"></i>${esc(item.label)}</span>
  `).join("")}</div>`;
}

window.setMeasuredType = function(typeIndex) {
  state.measuredType = Number(typeIndex);
  saveState();
  renderComputedOnly(); 
};

function renderResults(c) {
  const output = document.getElementById("results-output");
  const {rows, series, values} = resultPresentation(c);
  const suffix = state.resultType === 0 ? (state.language === "en" ? "sec" : "წმ") : "m² Sab";
  
  let tabsHtml = "";
  let stiHtml = "";
  
  if (state.measuredFiles && state.measuredFiles.length > 0 && state.resultType === 0) {
    tabsHtml = `
      <div style="display: flex; gap: 4px; background: #f8fafc; padding: 4px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e2e8f0;">
        <button type="button" onclick="window.setMeasuredType(0)" style="flex: 1; padding: 10px; border: none; border-radius: 6px; cursor: pointer; transition: 0.2s; background: ${state.measuredType === 0 ? '#f97316' : 'transparent'}; color: ${state.measuredType === 0 ? '#fff' : '#64748b'}; font-weight: 600; font-size: 14px;">EDT</button>
        <button type="button" onclick="window.setMeasuredType(1)" style="flex: 1; padding: 10px; border: none; border-radius: 6px; cursor: pointer; transition: 0.2s; background: ${state.measuredType === 1 ? '#f97316' : 'transparent'}; color: ${state.measuredType === 1 ? '#fff' : '#64748b'}; font-weight: 600; font-size: 14px;">T20</button>
        <button type="button" onclick="window.setMeasuredType(2)" style="flex: 1; padding: 10px; border: none; border-radius: 6px; cursor: pointer; transition: 0.2s; background: ${state.measuredType === 2 ? '#f97316' : 'transparent'}; color: ${state.measuredType === 2 ? '#fff' : '#64748b'}; font-weight: 600; font-size: 14px;">T30</button>
      </div>
    `;

    stiHtml = `
      <div style="display: flex; gap: 15px; margin-bottom: 20px;">
        <div style="flex: 1; background: #f8fafc; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #e2e8f0;">
          <div style="font-size: 12px; color: #64748b; margin-bottom: 4px;">Simulated STI</div>
          <div style="font-size: 18px; font-weight: 700; color: #0f172a;">${c.stiSimulated_With ? c.stiSimulated_With.toFixed(2) : "0.00"}</div>
        </div>
        <div style="flex: 1; background: #f0f9ff; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #bae6fd;">
          <div style="font-size: 12px; color: #0284c7; margin-bottom: 4px;">Measured STI</div>
          <div style="font-size: 18px; font-weight: 700; color: #0369a1;">${c.stiMeasured ? c.stiMeasured.toFixed(2) : "0.00"}</div>
        </div>
      </div>
    `;
  }

  const chartHtml = shouldShowChart(c) ? `${chartLegend(series)}${chartSvg(series)}` : "";

  output.innerHTML = `
    ${tabsHtml}
    ${stiHtml}
    <h3>${state.resultType === 0 ? t("reverberation") : t("absorption")}</h3>
    ${resultRowsTable(state.resultType === 0 ? t("reverberation") : t("absorption"), rows, suffix)}
    ${chartHtml}
    <div class="result-summary">
      <div class="summary-box"><span>${t("average125")}</span><strong>${fmt(averageFrom(values, 125))} ${suffix}</strong></div>
      <div class="summary-box"><span>${t("average250")}</span><strong>${fmt(averageFrom(values, 250))} ${suffix}</strong></div>
    </div>
  `;
}

function chartSvg(series) {
  const all = series
    .flatMap(item => item.values)
    .map(Number)
    .filter(Number.isFinite)
    .filter(value => value >= 0);
  const values = all.length ? all : [0];
  const rawMin = Math.min(...values);
  const rawMax = Math.max(...values);
  const rawRange = Math.max(rawMax - rawMin, state.resultType === 0 ? 0.05 : 0.1);
  // Uploaded measurements shown without calibration need a denser scale so
  // the seconds axis keeps meaningful decimal labels instead of whole steps.
  const targetTicks = state.resultType === 0 && state.measuredFiles?.length && state.calibrationType === -1 ? 8 : 5;
  const niceStepFor = value => {
    const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
    const normalized = value / magnitude;
    const niceNormalized = normalized < 1.5 ? 1 : normalized < 3.5 ? 2 : normalized < 7.5 ? 5 : 10;
    return niceNormalized * magnitude;
  };
  const padding = rawRange * 0.15;
  const niceStep = niceStepFor((rawRange + padding * 2) / targetTicks);
  const min = Math.max(0, Math.floor(rawMin / niceStep) * niceStep);
  const max = Math.ceil((rawMax + padding) / niceStep) * niceStep;
  const range = max - min;
  const xStep = freqs.length > 1 ? 522 / (freqs.length - 1) : 0;
  const decimals = niceStep < 0.1 ? 2 : 1;
  const tickLabel = value => value.toFixed(decimals);
  
  const points = values => values.map((v, i) => {
    const x = 48 + i * xStep;
    const y = 205 - ((v - min) / range) * 165;
    return [x, y];
  });
  
  const line = pts => pts.map((p, i) => `${i ? "L" : "M"}${p[0]},${p[1]}`).join(" ");
  
  const yTicks = [];
  const tickCount = Math.max(1, Math.round((max - min) / niceStep));
  for (let i = 0; i <= tickCount; i++) {
    yTicks.push(min + niceStep * i);
  }

  return `<svg class="chart" viewBox="0 0 600 250" role="img">
    ${yTicks.map(yVal => {
      const yPos = 205 - ((yVal - min) / range) * 165;
      return `<line x1="42" y1="${yPos}" x2="570" y2="${yPos}" stroke="#f0f1f4" stroke-width="1"/>
              <text x="32" y="${yPos + 4}" font-size="11" text-anchor="end" fill="#555">${tickLabel(yVal)}</text>`;
    }).join("")}
    <line x1="42" y1="205" x2="570" y2="205" stroke="#ccc" stroke-width="1"/>
    <line x1="42" y1="35" x2="42" y2="205" stroke="#ccc" stroke-width="1"/>
    <text x="48" y="24" font-size="11" text-anchor="start" fill="#555">${chartUnit()}</text>
    ${freqs.map((f, i) => `<text x="${48 + i * xStep}" y="225" font-size="11" text-anchor="middle" fill="#555">${f}</text>`).join("")}
    ${series.map(item => {
      const pts = points(item.values);
      const strokeDash = item.dash || ""; 
      return `<path d="${line(pts)}" fill="none" stroke="${item.color}" stroke-width="1.8" stroke-dasharray="${strokeDash}"/>
        ${pts.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#fff" stroke="${item.color}" stroke-width="1.8"/>`).join("")}`;
    }).join("")}
  </svg>`;
}

function reportTable(title, values, suffix) {
  return reportRowsTable(title, [{label: "", values}], suffix);
}

function reportRowsTable(title, rows, suffix) {
  const colgroup = tableColgroup();
  return `<table class="report-table">
    ${colgroup}
    <tr><th>${title}</th>${freqs.map(f => `<th>${f} Hz</th>`).join("")}<th>${t("average125")}</th><th>${t("average250")}</th></tr>
    ${rows.map(row => `<tr><td>${esc(row.label)}</td>${row.values.map(v => `<td>${fmt(v)} ${suffix}</td>`).join("")}<td>${fmt(averageFrom(row.values, 125))}</td><td>${fmt(averageFrom(row.values, 250))}</td></tr>`).join("")}
  </table>`;
}

function tableColgroup() {
  const first = 24;
  const average = 10.5;
  const freqWidth = (100 - first - average * 2) / freqs.length;
  return `<colgroup>
    <col style="width:${first}%">
    ${freqs.map(() => `<col style="width:${freqWidth}%">`).join("")}
    <col style="width:${average}%">
    <col style="width:${average}%">
  </colgroup>`;
}

function coefficientGrid(kind, selection, source) {
  if (selection < 0) return "";
  const material = materialAt(kind, selection, source);
  if (!material) return "";
  return `<div class="pdf-coefficient-grid">${expandedCoefficients(material.values).map((value, index) => `
    <span><em>${fmt(value)}</em></span>
  `).join("")}</div>`;
}

function reportFrequencyHeader() {
  const label = state.language === "en" ? "Frequency" : "სიხშირე";
  return `<div class="pdf-frequency-header">
    <strong>${label}</strong>
    <div>${freqs.map(freq => `<span>${freq} Hz</span>`).join("")}</div>
  </div>`;
}

function selectedMaterialName(kind, selection, source) {
  const material = materialAt(kind, selection, source);
  return material ? sanitizeName(material.name) : t("select");
}

function extraRowsMissing(rows, label, absorberLabel, missing) {
  rows.forEach((row, index) => {
    if (n(row.area) > 0 && Number(row.selection) < 0) missing.push(`${label} ${index + 1}`);
    (row.absorberRows || []).forEach((absorber, absorberIndex) => {
      if (n(absorber.area) > 0 && Number(absorber.selection) < 0) missing.push(`${absorberLabel} ${index + 1}.${absorberIndex + 1}`);
    });
  });
}

function pushReportExtraRows(rows, totalArea, label, absorberLabel, kind, out) {
  let remaining = Math.max(0, totalArea);
  rows.forEach((row, rowIndex) => {
    const grossArea = Math.min(Math.max(0, n(row.area)), remaining);
    remaining -= grossArea;
    if (grossArea <= 0) return;
    const nestedAbsorbers = rowContributions(row.absorberRows || [], grossArea);
    const absorberArea = nestedAbsorbers.reduce((total, absorber) => total + absorber.area, 0);
    const materialArea = Math.max(0, grossArea - absorberArea);
    if (materialArea > 0) {
      out.push([`${label} ${rowIndex + 1}`, materialArea, selectedMaterialName(kind, row.selection, row), coefficientGrid(kind, row.selection, row)]);
    }
    nestedAbsorbers.forEach((absorber, absorberIndex) => {
      out.push([`${absorberLabel} ${rowIndex + 1}.${absorberIndex + 1}`, absorber.area, selectedMaterialName(kind, absorber.selection, absorber), coefficientGrid(kind, absorber.selection, absorber)]);
    });
  });
}

function reportCalculationRows(c) {
  const rows = [];
  const addSurface = (label, area, totalArea, kind, selection, source, absorberRows, absorberLabel, extraRows, extraLabel) => {
    rows.push([label, area, selectedMaterialName(kind, selection, source), coefficientGrid(kind, selection, source)]);
    absorberRows.forEach((row, index) => {
      if (n(row.area) > 0) rows.push([`${absorberLabel} ${index + 1}`, n(row.area), selectedMaterialName(kind, row.selection, row), coefficientGrid(kind, row.selection, row)]);
    });
    pushReportExtraRows(extraRows, totalArea, extraLabel, absorberLabel, kind, rows);
  };

  addSurface(t("floor"), c.primaryFloor, floorArea(), "floor", state.floorSelection, "floorSelection", state.floorAbsorberRows, t("extraFloorAbsorber"), state.extraFloorRows, t("extraFloor"));
  addSurface(t("wall"), c.primaryWall, wallArea(), "wall", state.wallSelection, "wallSelection", state.wallAbsorberRows, t("extraWallAbsorber"), state.extraWallRows, t("extraWall"));
  addSurface(t("door"), c.primaryDoor, n(state.doorArea), "door", state.doorSelection, "doorSelection", state.doorAbsorberRows, t("extraDoorAbsorber"), state.extraDoorRows, t("extraDoor"));
  addSurface(t("window"), c.primaryWindow, n(state.windowArea), "window", state.windowSelection, "windowSelection", state.windowAbsorberRows, t("extraWindowAbsorber"), state.extraWindowRows, t("extraWindow"));
  addSurface(t("ceiling"), c.effectiveCeiling, ceilingArea(), "ceiling", state.ceilingSelection, "ceilingSelection", state.ceilingAbsorberRows, t("extraCeilingAbsorber"), state.extraCeilingRows, t("extraCeiling"));

  const reportRows = rows
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
  return `${reportFrequencyHeader()}<div class="pdf-materials">${reportRows}</div>`;
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
  const presentation = resultPresentation(c, 0);
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
        <div class="pdf-top-grid totals">
          ${reportValue(t("totalFloor"), fmt(floorArea()), "m²")}
          ${reportValue(t("totalWall"), fmt(wallArea()), "m²")}
          ${reportValue(t("totalCeiling"), fmt(ceilingArea()), "m²")}
          ${reportValue(t("volume"), fmt(volume()), "m³")}
        </div>
      </div>
      <h2>${t("calculation")}</h2>
      ${reportCalculationRows(c)}
      <p class="pdf-type">${state.language === "en" ? "Calculation type 1" : "გამოთვლის ტიპი 1"}</p>
      ${reportRowsTable(t("reverberation"), presentation.rows, suffix)}
      ${chartLegend(presentation.series)}
      ${chartSvg(presentation.series)}
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
    .calculation-page { page-break-after: auto; break-after: auto; }
    .pdf-brand { display: grid; gap: 1px; justify-items: end; text-align: right; margin-bottom: 3mm; }
    .pdf-brand strong { font-size: 15px; font-weight: 650; }
    .pdf-brand span { color: #777; font-size: 9px; }
    .calculation-page h1 { margin: 3mm 0 5mm; font-size: 15px; font-weight: 500; }
    .explanation-page h1 { margin: 0 0 8mm; font-size: 15px; font-weight: 500; }
    .pdf-top-grid { display: grid; grid-template-columns: 48mm minmax(0, 1fr); gap: 3mm; width: 100%; max-width: 100%; align-items: start; }
    .pdf-room-image { grid-column: 1; grid-row: 1; }
    .pdf-room-image img { display: block; width: 48mm; max-width: 100%; height: 27mm; object-fit: contain; }
    .pdf-inputs { display: grid; grid-column: 2; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 3px; }
    .pdf-top-grid.totals { grid-column: 1 / -1; }
    .pdf-field { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: end; gap: 2px; min-width: 0; }
    .pdf-field span { grid-column: 1 / -1; font-size: 9px; overflow-wrap: anywhere; }
    .pdf-field strong { min-width: 0; width: 100%; height: 15px; padding: 1px 3px; border: 1px solid #111; font-size: 9px; font-weight: 400; line-height: 12px; overflow: hidden; }
    .pdf-field em { font-size: 9px; font-style: normal; }
    .calculation-page h2, .pdf-type { margin: 3mm 0 1.5mm; font-size: 12px; font-weight: 400; }
    .pdf-frequency-header { display: grid; grid-template-columns: minmax(0, 1fr); margin: 0 0 1mm; color: #333; }
    .pdf-frequency-header strong { text-align: center; font-size: 7.5px; }
    .pdf-frequency-header > div { display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); margin-top: 0.5mm; }
    .pdf-frequency-header span { text-align: center; font-size: 6.5px; white-space: nowrap; }
    .pdf-materials { display: grid; gap: 2px; width: 100%; }
    .pdf-material-row { background: #d3d3d3; padding: 1.8mm 2.2mm 1.5mm; break-inside: avoid; }
    .pdf-material-top { display: grid; grid-template-columns: minmax(0, 1fr) 16mm; gap: 2mm; align-items: baseline; }
    .pdf-material-top em { grid-column: 1 / -1; }
    .pdf-material-top strong { font-size: 9px; font-weight: 700; overflow-wrap: anywhere; }
    .pdf-material-top span, .pdf-material-top em { font-size: 7.5px; font-style: normal; overflow-wrap: anywhere; }
    .pdf-coefficients { margin-top: 1mm; padding: 0; }
    .pdf-coefficient-grid { display: flex; flex-wrap: wrap; gap: 0; max-width: 100%; }
    .pdf-coefficient-grid span { display: flex; gap: 1px; align-items: baseline; min-width: 0; font-size: 7px; line-height: 1.08; white-space: nowrap; }
    .pdf-coefficient-grid span + span { margin-left: 2mm; padding-left: 2mm; border-left: 1px solid #aeb6c1; }
    .pdf-coefficient-grid b { font-weight: 500; }
    .pdf-coefficient-grid em { font-style: normal; }
    .report-table { width: 100%; max-width: 100%; table-layout: fixed; border-collapse: collapse; margin-top: 2mm; }
    .report-table td, .report-table th { border: 1px solid #d8dce2; padding: 2px; font-size: 6.5px; text-align: center; overflow-wrap: anywhere; }
    .report-table th { background: #b6d7f5; font-weight: 600; }
    .report-table td:first-child, .report-table th:first-child { text-align: left; }
    .chart-legend { display: flex; flex-wrap: wrap; gap: 1.5mm 3mm; margin: 1.5mm 0 1mm; font-size: 7.5px; }
    .chart-legend span { display: inline-grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 1.5mm; }
    .chart-legend i { width: 7mm; height: 1mm; border-radius: 99px; }
    .chart { display: block; width: 100%; max-width: 100%; height: 28mm; margin: 1mm 0 0; border: 1px solid #d8dce2; }
    .explanation-page { margin-top: 4mm; break-inside: avoid; }
    .explanation-page .pdf-brand, .explanation-page h1 { display: none; }
    .pdf-explainer { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 3mm; margin-top: 0; padding: 2.5mm; background: #d4d4d4; }
    .pdf-explainer h2 { font-size: 8.5px; margin: 0 0 1mm; }
    .pdf-explainer p { font-size: 7.3px; line-height: 1.15; margin: 0 0 2mm; }
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
  state = freshDefaultState(state.language);
  saveState();
  render();
}

document.getElementById("lang-ka").onclick = () => setState("language", "ka");
document.getElementById("lang-en").onclick = () => setState("language", "en");
document.getElementById("clear-btn").onclick = clearAll;
document.getElementById("export-btn").onclick = exportPdf;
document.getElementById("export-btn-secondary").onclick = exportPdf;
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

// ==========================================================================
// 🛠️ აკუსტიკური გაზომვების საინჟინრო ძრავა
// ==========================================================================

const MeasurementEngine = {
  parseFile(fileText, fileName) {
    const lines = fileText.split('\n');
    const data = { 
      name: fileName, 
      edt: new Array(freqs.length).fill(0), 
      t20: new Array(freqs.length).fill(0), 
      t30: new Array(freqs.length).fill(0), 
      snr: new Array(freqs.length).fill(0) 
    };
    
    let inOctaveSection = false;
    for (let line of lines) {
      if (line.startsWith("Octave Band")) { inOctaveSection = true; continue; }
      if (inOctaveSection && (line.startsWith("1/3 Octave") || line.trim() === "")) { inOctaveSection = false; }
      if (inOctaveSection) {
        const tokens = line.trim().split(/\s+/);
        const freq = tokens[0];
        const freqIdx = freqs.indexOf(freq);
        if (freqIdx !== -1) {
          data.edt[freqIdx] = parseFloat((tokens[1] || "0").replace(',', '.'));
          data.t20[freqIdx] = parseFloat((tokens[2] || "0").replace(',', '.'));
          data.t30[freqIdx] = parseFloat((tokens[3] || "0").replace(',', '.'));
          data.snr[freqIdx] = parseFloat((tokens[7] || "0").replace(',', '.'));
        }
      }
    }
    return data;
  },
  getAverageProfile(files) {
    if (!files || files.length === 0) return null;
    const avg = { edt: new Array(freqs.length).fill(0), t20: new Array(freqs.length).fill(0), t30: new Array(freqs.length).fill(0), snr: new Array(freqs.length).fill(0) };
    const metrics = ["edt", "t20", "t30", "snr"];
    for (let i = 0; i < freqs.length; i++) {
      metrics.forEach(metric => {
        const validValues = files
          .map(file => Number(file[metric]?.[i]))
          .filter(value => Number.isFinite(value) && value > 0);
        avg[metric][i] = validValues.length
          ? validValues.reduce((sum, value) => sum + value, 0) / validValues.length
          : 0;
      });
    }
    return avg;
  },
  calculateSTI(rt60Array, snrArray) {
    const weights = [0.13, 0.14, 0.11, 0.12, 0.19, 0.17, 0.14];
    const targetFreqs = ["125", "250", "500", "1000", "2000", "4000", "8000"];
    let totalSTI = 0, weightSum = 0;
    targetFreqs.forEach((freqStr, idx) => {
      const freqIdx = freqs.indexOf(freqStr); if (freqIdx === -1) return;
      const rt = rt60Array[freqIdx] || 0.05;
      const snr = snrArray ? snrArray[freqIdx] : 30;
      const m_rt = 1 / Math.sqrt(1 + Math.pow((2 * Math.PI * 4.0 * rt) / 13.8, 2));
      const m_noise = 1 / (1 + Math.pow(10, -snr / 10));
      const m_total = m_rt * m_noise;
      let snrEff = 10 * Math.log10(m_total / (1 - m_total + 1e-6));
      snrEff = Math.min(15, Math.max(-15, snrEff));
      totalSTI += weights[idx] * ((snrEff + 15) / 30);
      weightSum += weights[idx];
    });
    return weightSum > 0 ? Math.min(1, Math.max(0, totalSTI / weightSum)) : 0;
  }
};

state.measuredFiles = state.measuredFiles || [];

text.ka.measurementsTitle = "აკუსტიკური გაზომვები";
text.ka.measurementsHint = "ატვირთეთ AudioTools-ის .txt ფაილები რეალური კალიბრაციისთვის.";
text.ka.uploadFiles = "ფაილების ატვირთვა";
text.ka.measuredLineLabel = "გაზომილი რეალური";
text.ka.simulatedLineLabel = "სიმულაცია";

text.en.measurementsTitle = "Acoustic Measurements";
text.en.measurementsHint = "Upload AudioTools .txt files for real room calibration.";
text.en.uploadFiles = "Upload Files";
text.en.measuredLineLabel = "Measured Real";
text.en.simulatedLineLabel = "Simulation";

if (!text[state.language].measuredLineLabel) { text[state.language].measuredLineLabel = state.language === "en" ? "Measured Real" : "გაზომილი რეალური"; }
if (!text[state.language].simulatedLineLabel) { text[state.language].simulatedLineLabel = state.language === "en" ? "Simulation" : "სიმულაცია"; }

// ⚠️ კომპიუტაციის მთავარი ფუნქცია გადაიწერა ორიგინალი სახელების დაცვით
function computed() {
  const c = baseComputed();
  const avgMeasured = MeasurementEngine.getAverageProfile(state.measuredFiles);
  
  if (avgMeasured && state.calibrationType !== -1) {
    const deltaA = freqs.map(() => 0);
    const vol = volume();
    const calKey = state.calibrationType === 0 ? 'edt' : (state.calibrationType === 1 ? 't20' : 't30');
    
    freqs.forEach((_, i) => {
      const realT = avgMeasured[calKey] ? avgMeasured[calKey][i] : 0;
      if (realT > 0 && c.absorptionWithoutAbsorber) {
        const realA = (0.16 * vol) / realT;
        // Calibration must be able to correct in both directions. At low
        // frequencies the model can overestimate absorption, in which case
        // the correction is negative and the simulated reverberation time
        // needs to increase to match the measurement.
        deltaA[i] = realA - c.absorptionWithoutAbsorber[i];
      }
    });
    
    if (c.absorptionWithoutAbsorber && c.absorption) {
      c.absorptionWithoutAbsorber = c.absorptionWithoutAbsorber.map((a, i) => Math.max(0.1, a + deltaA[i]));
      c.absorption = c.absorption.map((a, i) => Math.max(0.1, a + deltaA[i]));
      c.reverberationWithoutAbsorber = c.absorptionWithoutAbsorber.map(a => a === 0 ? 0 : Math.max(0.05, 0.16 * vol / a));
      c.reverberation = c.absorption.map(a => a === 0 ? 0 : Math.max(0.05, 0.16 * vol / a));
    }
  }
  
  c.avgMeasured = avgMeasured;
  if (c.reverberationWithoutAbsorber) c.stiSimulated_Without = MeasurementEngine.calculateSTI(c.reverberationWithoutAbsorber, null);
  if (c.reverberation) c.stiSimulated_With = MeasurementEngine.calculateSTI(c.reverberation, null);
  if (avgMeasured && avgMeasured.t30 && avgMeasured.snr) c.stiMeasured = MeasurementEngine.calculateSTI(avgMeasured.t30, avgMeasured.snr);
  
  return c;
}

window.injectEngineeringUI = function() {
  const targetOutput = document.getElementById("results-output");
  if (!targetOutput) return;

  let panel = document.getElementById("engineering-panel");
  if (!panel) {
    panel = document.createElement("div");
    panel.id = "engineering-panel";
    panel.style.cssText = "margin-bottom: 20px; padding: 15px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;";
    targetOutput.parentNode.insertBefore(panel, targetOutput);
  }

  const isEn = state.language === "en";

  panel.innerHTML = `
    <h4 style="margin: 0 0 5px 0; font-size: 1rem; color: #1e293b;">${t("measurementsTitle")}</h4>
    <p style="font-size: 0.8rem; color: #64748b; margin: 0 0 12px 0; line-height: 1.3;">${t("measurementsHint")}</p>
    
    <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 10px;">
      <button type="button" onclick="document.getElementById('audio-files-input').click()" style="padding: 6px 12px; font-size: 0.85rem; background: #0284c7; color: #fff; border: none; border-radius: 4px; cursor: pointer;">
        ${t("uploadFiles")}
      </button>
      <input type="file" id="audio-files-input" multiple accept=".txt" onchange="window.handleAudioFilesUpload(event)" style="display: none;">
      ${state.measuredFiles.length > 0 ? `<button type="button" onclick="window.clearAudioFiles()" style="color: #ef4444; background: none; border: none; cursor: pointer; font-size: 0.85rem;">✕</button>` : ""}
    </div>

    ${state.measuredFiles.length > 0 ? `
      <div style="font-size: 0.85rem; color: #334155; margin-bottom: 10px;">
        📌 ${isEn ? "Uploaded" : "ატვირთულია"}: <strong>${state.measuredFiles.length} ${isEn ? "positions" : "პოზიცია"}</strong>
      </div>
      
      <div>
        <label style="font-size: 0.8rem; color: #475569; display: block; margin-bottom: 4px;">${isEn ? "Calibration Method:" : "კალიბრაციის მეთოდი:"}</label>
        <select onchange="window.setCalType(this.value)" style="width: 100%; padding: 6px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff;">
          <option value="-1" ${state.calibrationType == -1 ? 'selected' : ''}>${isEn ? "Select (Off)" : "არჩევა (გათიშული)"}</option>
          <option value="0" ${state.calibrationType == 0 ? 'selected' : ''}>EDT</option>
          <option value="1" ${state.calibrationType == 1 ? 'selected' : ''}>T20</option>
          <option value="2" ${state.calibrationType == 2 ? 'selected' : ''}>T30</option>
        </select>
      </div>
    ` : ""}
  `;
};

window.handleAudioFilesUpload = function(event) {
  const files = Array.from(event.target.files); if (files.length === 0) return;
  let loaded = 0; const newFilesData = [];
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      newFilesData.push(MeasurementEngine.parseFile(e.target.result, file.name));
      loaded++;
      if (loaded === files.length) {
        state.measuredFiles = [...state.measuredFiles, ...newFilesData];
        saveState(); renderComputedOnly(); window.injectEngineeringUI();
      }
    };
    reader.readAsText(file);
  });
};

window.clearAudioFiles = function() {
  state.measuredFiles = []; saveState(); renderComputedOnly(); window.injectEngineeringUI();
};

// ⚠️ render-ის განახლებაც სტანდარტული წესით გადაკეთდა
function renderComputedOnly() {
  baseRenderComputedOnly();
  if (typeof window.injectEngineeringUI === "function") window.injectEngineeringUI();
}

document.addEventListener('DOMContentLoaded', () => {
  window.injectEngineeringUI();
});

window.setCalType = function(type) {
  const value = Number(type);
  state.calibrationType = [0, 1, 2].includes(value) ? value : -1;
  saveState();
  renderComputedOnly();
  window.injectEngineeringUI();
};
