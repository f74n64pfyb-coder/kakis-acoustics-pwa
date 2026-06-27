const STORAGE_KEY = "kakis-acoustics-pwa-state-v1";
const freqs = ["125", "250", "500", "1000", "2000", "4000"];
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
    change: "250-4000 ჰც საშუალო ცვლილება",
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
    change: "Average change from 250-4000 Hz",
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
  customValues: ["", "", "", "", "", ""]
};

let state = loadState();
let activePicker = null;

function loadState() {
  try {
    return {...defaults, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}")};
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
  const custom = {name: state.customName || (state.language === "en" ? "Custom material" : "საკუთარი მასალა"), values: state.customValues.map(n)};
  return [...MATERIALS[kind], custom];
}

function average(values) {
  return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
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
    if (area > 0) out.push({area, selection: Number(row.selection)});
  });
  return out;
}

function coeff(kind, selection, index) {
  const arr = materialOptions(kind);
  return arr[selection]?.values?.[index] ?? 0;
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
    let total = primaryFloor * coeff("floor", state.floorSelection, i);
    total += primaryWall * coeff("wall", state.wallSelection, i);
    total += n(state.doorArea) * coeff("door", state.doorSelection, i);
    total += n(state.windowArea) * coeff("window", state.windowSelection, i);
    total += effectiveCeiling * coeff("ceiling", state.ceilingSelection, i);
    floorExtra.forEach(r => total += r.area * coeff("floor", r.selection, i));
    wallExtra.forEach(r => total += r.area * coeff("wall", r.selection, i));
    ceilingExtra.forEach(r => total += r.area * coeff("ceiling", r.selection, i));
    absorber.forEach(r => total += r.area * coeff("ceiling", r.selection, i));
    return total;
  });
  const reverberation = absorption.map(a => a === 0 ? 0 : Math.max(0.05, 0.16 * volume() / a));
  const altAbsorberArea = state.alternativeEnabled && state.alternativeAbsorberEnabled ? Math.min(n(state.alternativeAbsorberArea), ceilingArea()) : 0;
  const altEffectiveCeiling = Math.max(0, ceilingArea() - altAbsorberArea);
  const altAbsorption = freqs.map((_, i) => {
    let total = primaryFloor * coeff("floor", state.floorSelection, i);
    total += primaryWall * coeff("wall", state.wallSelection, i);
    total += n(state.doorArea) * coeff("door", state.doorSelection, i);
    total += n(state.windowArea) * coeff("window", state.windowSelection, i);
    total += altEffectiveCeiling * coeff("ceiling", state.alternativeCeilingSelection, i);
    total += altAbsorberArea * coeff("ceiling", state.alternativeAbsorberSelection, i);
    floorExtra.forEach(r => total += r.area * coeff("floor", r.selection, i));
    wallExtra.forEach(r => total += r.area * coeff("wall", r.selection, i));
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
  renderCustom();
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

function materialPickerButton(kind, selection, onSelect) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "material-picker";
  button.innerHTML = `<span>${esc(selection >= 0 ? selectedMaterialName(kind, selection) : t("select"))}</span><b>›</b>`;
  button.onclick = () => openMaterialPicker(kind, selection, onSelect);
  return button;
}

function renderMaterialBlock(title, kind, key, area, extraTitle, rowsKey, areaKey) {
  const block = document.createElement("div");
  block.className = "material-block";
  const row = document.createElement("div");
  row.className = "material-row";
  const label = document.createElement("label");
  label.textContent = title;
  label.appendChild(materialPickerButton(kind, state[key], value => setState(key, value)));
  const areaEl = document.createElement("div");
  areaEl.className = "area";
  if (areaKey) areaEl.dataset.area = areaKey;
  areaEl.textContent = `${fmt(area)} m²`;
  row.append(label, areaEl);
  block.appendChild(row);
  if (rowsKey) block.appendChild(extraRows(extraTitle, kind, rowsKey));
  return block;
}

function extraRows(title, kind, key) {
  const wrap = document.createElement("details");
  wrap.className = "subpanel";
  const summary = document.createElement("summary");
  summary.textContent = title;
  wrap.appendChild(summary);
  const list = document.createElement("div");
  list.className = "extra-list";
  state[key].forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "extra-row";
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
    });
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-btn";
    remove.textContent = "×";
    remove.onclick = () => {
      state[key].splice(index, 1);
      setState(key, state[key]);
    };
    row.append(area, select, remove);
    list.appendChild(row);
  });
  const add = document.createElement("button");
  add.type = "button";
  add.className = "small-btn";
  add.textContent = t("add");
  add.onclick = () => {
    state[key].push({area: "", selection: -1});
    setState(key, state[key]);
  };
  wrap.append(list, add);
  return wrap;
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
  box.appendChild(extraRows(t("absorbers"), "ceiling", "extraAbsorberRows"));
  renderCoefficients();
}

function renderCoefficients() {
  const rows = [];
  if (state.ceilingSelection >= 0) rows.push([t("ceiling"), materialOptions("ceiling")[state.ceilingSelection]?.values || []]);
  state.extraAbsorberRows.forEach((r, i) => {
    if (r.selection >= 0) rows.push([`${t("absorbers")} ${i + 1}`, materialOptions("ceiling")[r.selection]?.values || []]);
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
  panel.innerHTML = `<h3>${t("comparison")}</h3>`;
  panel.appendChild(renderMaterialBlock(t("comparisonCeiling"), "ceiling", "alternativeCeilingSelection", c.altEffectiveCeiling, null, null, "altEffectiveCeiling"));
  const toggle = document.createElement("label");
  toggle.className = "toggle-row";
  toggle.innerHTML = `<span>${t("comparisonAbsorber")}</span><input type="checkbox" ${state.alternativeAbsorberEnabled ? "checked" : ""}>`;
  toggle.querySelector("input").onchange = e => setState("alternativeAbsorberEnabled", e.target.checked);
  panel.appendChild(toggle);
  if (state.alternativeAbsorberEnabled) {
    panel.appendChild(makeNumber(t("comparisonAbsorberArea"), "alternativeAbsorberArea", "m²"));
    panel.appendChild(renderMaterialBlock(t("comparisonAbsorber"), "ceiling", "alternativeAbsorberSelection", c.altAbsorberArea, null, null, "altAbsorberArea"));
  }
}

function renderCustom() {
  const name = document.getElementById("custom-name");
  if (document.activeElement !== name) name.value = state.customName;
  name.oninput = () => {
    state.customName = name.value;
    saveState();
    renderComputedOnly();
  };
  const box = document.getElementById("custom-coefficients");
  box.innerHTML = "";
  freqs.forEach((freq, index) => {
    const node = makeNumber(`${freq} Hz`, `custom-${index}`, "α");
    const input = node.querySelector("input");
    input.value = state.customValues[index] ?? "";
    input.oninput = () => {
      state.customValues[index] = input.value.replace(/[^\d.,]/g, "");
      saveState();
      renderComputedOnly();
    };
    box.appendChild(node);
  });
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
  renderResults(c);
}

function resultTable(title, values, suffix) {
  return `<div class="table-wrap"><table>
    <tr><th>${title}</th>${freqs.map(f => `<th>${f} Hz</th>`).join("")}<th>${t("average125")}</th><th>${t("average250")}</th></tr>
    <tr><td></td>${values.map(v => `<td>${fmt(v)} ${suffix}</td>`).join("")}<td>${fmt(average(values))}</td><td>${fmt(average(values.slice(1)))}</td></tr>
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
      <div class="summary-box"><span>${t("average125")}</span><strong>${fmt(average(values))} ${suffix}</strong></div>
      <div class="summary-box"><span>${t("average250")}</span><strong>${fmt(average(values.slice(1)))} ${suffix}</strong></div>
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
  const points = values => values.map((v, i) => {
    const x = 48 + i * 98;
    const y = 205 - ((v - min) / range) * 165;
    return [x, y];
  });
  const line = pts => pts.map((p, i) => `${i ? "L" : "M"}${p[0]},${p[1]}`).join(" ");
  const p1 = points(primary);
  const p2 = alternative ? points(alternative) : [];
  return `<svg class="chart" viewBox="0 0 600 250" role="img">
    <line x1="42" y1="205" x2="570" y2="205" stroke="#d5d8de"/>
    <line x1="42" y1="35" x2="42" y2="205" stroke="#d5d8de"/>
    ${freqs.map((f, i) => `<text x="${48 + i * 98}" y="230" font-size="13" text-anchor="middle" fill="#666">${f}</text>`).join("")}
    <path d="${line(p1)}" fill="none" stroke="#f39a00" stroke-width="4" stroke-dasharray="10 8"/>
    ${p1.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="7" fill="#fff" stroke="#f39a00" stroke-width="4"/>`).join("")}
    ${alternative ? `<path d="${line(p2)}" fill="none" stroke="#10b9c6" stroke-width="4"/>${p2.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="7" fill="#fff" stroke="#10b9c6" stroke-width="4"/>`).join("")}` : ""}
  </svg>`;
}

function comparisonSummary(c) {
  const base = average(c.reverberation.slice(1));
  const alt = average(c.altReverberation.slice(1));
  const diff = base - alt;
  const percent = base === 0 ? 0 : diff / base * 100;
  const abs = Math.abs(percent);
  const neutral = Math.abs(diff) < 0.05 || abs < 2;
  const title = neutral ? t("noChange") : diff < 0 ? t("worse") : abs >= 15 ? t("improvementBig") : abs >= 5 ? t("improvementMid") : t("improvementSmall");
  const cls = neutral ? "neutral" : diff < 0 ? "bad" : "";
  return `<div class="comparison-summary ${cls}">
    <strong>${title}</strong>
    <p>${t("change")}: ${fmt(Math.abs(diff))} ${state.language === "en" ? "sec" : "წმ"} (${fmt(Math.abs(percent))}%)</p>
    <div class="chips">${freqs.slice(1).map((f, i) => {
      const d = c.reverberation[i + 1] - c.altReverberation[i + 1];
      return `<div class="chip"><span>${f} Hz</span><br><strong>${d >= 0 ? "-" : "+"}${fmt(Math.abs(d))}</strong></div>`;
    }).join("")}</div>
  </div>`;
}

function reportTable(title, values, suffix) {
  return `<table class="report-table">
    <tr><th>${title}</th>${freqs.map(f => `<th>${f} Hz</th>`).join("")}<th>${t("average125")}</th><th>${t("average250")}</th></tr>
    <tr><td></td>${values.map(v => `<td>${fmt(v)} ${suffix}</td>`).join("")}<td>${fmt(average(values))}</td><td>${fmt(average(values.slice(1)))}</td></tr>
  </table>`;
}

function selectedMaterialName(kind, selection) {
  const material = materialOptions(kind)[selection];
  return material ? sanitizeName(material.name) : t("select");
}

function reportMaterialRows(c) {
  const rows = [
    [t("floor"), c.primaryFloor, selectedMaterialName("floor", state.floorSelection)],
    [t("wall"), c.primaryWall, selectedMaterialName("wall", state.wallSelection)],
    [t("ceiling"), c.effectiveCeiling, selectedMaterialName("ceiling", state.ceilingSelection)]
  ];

  if (n(state.doorArea) > 0) rows.push([t("door"), n(state.doorArea), selectedMaterialName("door", state.doorSelection)]);
  if (n(state.windowArea) > 0) rows.push([t("window"), n(state.windowArea), selectedMaterialName("window", state.windowSelection)]);

  state.extraFloorRows.forEach((row, index) => {
    if (n(row.area) > 0) rows.push([`${t("extraFloor")} ${index + 1}`, n(row.area), selectedMaterialName("floor", row.selection)]);
  });
  state.extraWallRows.forEach((row, index) => {
    if (n(row.area) > 0) rows.push([`${t("extraWall")} ${index + 1}`, n(row.area), selectedMaterialName("wall", row.selection)]);
  });
  state.extraCeilingRows.forEach((row, index) => {
    if (n(row.area) > 0) rows.push([`${t("extraCeiling")} ${index + 1}`, n(row.area), selectedMaterialName("ceiling", row.selection)]);
  });
  state.extraAbsorberRows.forEach((row, index) => {
    if (n(row.area) > 0) rows.push([`${t("absorbers")} ${index + 1}`, n(row.area), selectedMaterialName("ceiling", row.selection)]);
  });

  return `<table class="report-table report-materials">
    <tr><th>${state.language === "en" ? "Surface" : "ზედაპირი"}</th><th>${t("area")}</th><th>${t("materials")}</th></tr>
    ${rows.map(row => `<tr><td>${esc(row[0])}</td><td>${fmt(row[1])} m²</td><td>${esc(row[2])}</td></tr>`).join("")}
  </table>`;
}

function buildReport() {
  const c = computed();
  const suffix = state.language === "en" ? "sec" : "წმ";
  const project = state.project.trim() || "Kaki's Acoustics";
  const intro = state.language === "en"
    ? "This acoustics report is generated from the values entered in the calculator. The calculations are based on room volume, surface areas and the selected absorption coefficients."
    : "ეს აკუსტიკის ანგარიში შექმნილია კალკულატორში შეყვანილი მონაცემებით. გამოთვლა ეფუძნება ოთახის მოცულობას, ზედაპირების ფართობებს და არჩეული მასალების შთანთქმის კოეფიციენტებს.";
  const report = document.getElementById("print-report");
  report.innerHTML = `
    <article class="report-page">
      <header class="report-header">
        <div>
          <h2>${t("report")}</h2>
          <p>${esc(project)}</p>
        </div>
        <div class="report-logo">KA</div>
      </header>
      <p class="report-intro">${intro}</p>
      <div class="report-room">
        <div class="report-image"><img src="assets/${shapeAssets[state.shape]}" alt=""></div>
        <div class="report-grid">
          <div class="report-metric"><span>${t("ceilingShape")}</span><strong>${t("shapes")[state.shape]}</strong></div>
          <div class="report-metric"><span>${t("length")}</span><strong>${fmt(n(state.length))} m</strong></div>
          <div class="report-metric"><span>${t("width")}</span><strong>${fmt(n(state.width))} m</strong></div>
          <div class="report-metric"><span>${state.shape === 1 || state.shape === 2 ? t("height1") : t("height")}</span><strong>${fmt(n(state.height1))} m</strong></div>
          ${state.shape === 1 || state.shape === 2 ? `<div class="report-metric"><span>${t("height2")}</span><strong>${fmt(n(state.height2))} m</strong></div>` : ""}
        </div>
      </div>
      <div class="report-grid">
        <div class="report-metric"><span>${t("totalFloor")}</span><strong>${fmt(floorArea())} m²</strong></div>
        <div class="report-metric"><span>${t("totalWall")}</span><strong>${fmt(wallArea())} m²</strong></div>
        <div class="report-metric"><span>${t("totalCeiling")}</span><strong>${fmt(ceilingArea())} m²</strong></div>
        <div class="report-metric"><span>${t("volume")}</span><strong>${fmt(volume())} m³</strong></div>
      </div>
      <h3>${t("materials")}</h3>
      ${reportMaterialRows(c)}
      <h3>${t("reverberation")}</h3>
      ${reportTable(t("calculation"), c.reverberation, suffix)}
      ${chartSvg(c.reverberation, state.alternativeEnabled ? c.altReverberation : null)}
      <div class="result-summary">
        <div class="summary-box"><span>${t("average125")}</span><strong>${fmt(average(c.reverberation))} ${suffix}</strong></div>
        <div class="summary-box"><span>${t("average250")}</span><strong>${fmt(average(c.reverberation.slice(1)))} ${suffix}</strong></div>
      </div>
      ${state.alternativeEnabled ? `<h3>${t("comparison")}</h3>${comparisonSummary(c)}${reportTable(t("comparison"), c.altReverberation, suffix)}` : ""}
      <h3>${t("absorption")}</h3>
      ${reportTable(t("calculation"), c.absorption, "m² Sab")}
    </article>
  `;
}

function exportPdf() {
  buildReport();
  document.body.classList.add("printing");
  setTimeout(() => window.print(), 50);
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
  navigator.serviceWorker.register("./service-worker.js").then(registration => {
    registration.update();
  });
  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
}

render();
