const salesOrgMap = {
    DE: ["1010", "2200", "6110"],
    FR: ["2000", "2320", "6110"],
    NL: ["2320", "2420"],
    EN: ["1550", "2510", "2320"],
    ES: ["2610"],
    PT: ["2640"],
    IT: ["2710"],
    DK: ["2800"],
    NO: ["2900"],
    SE: ["3100"],
    EE: ["5110"],
    LV: ["5210"],
    LT: ["5310"],
    PL: ["5410"],
    FI: ["5710"],
    SI: ["5820"],
    HR: ["5830"],
    SK: ["5840"],
    CZ: ["5845"],
    HU: ["5850"],
    RO: ["5860"],
    BG: ["5870"],
    SER: ["5881"],
    ME: ["5895"],
};
const salesOrgs = [
    { code: "1010", countryCode: "DE", countryName: "Germany" },
    { code: "1550", countryCode: "EN", countryName: "International" },
    { code: "2000", countryCode: "FR", countryName: "France" },
    { code: "2200", countryCode: "AT", countryName: "Austria" },
    { code: "2320", countryCode: "BE", countryName: "Belgium" },
    { code: "2420", countryCode: "NL", countryName: "Netherlands" },
    { code: "2510", countryCode: "UK", countryName: "United Kingdom" },
    { code: "2610", countryCode: "ES", countryName: "Spain" },
    { code: "2640", countryCode: "PT", countryName: "Portugal" },
    { code: "2710", countryCode: "IT", countryName: "Italy" },
    { code: "2800", countryCode: "DK", countryName: "Denmark" },
    { code: "2900", countryCode: "NO", countryName: "Norway" },
    { code: "3100", countryCode: "SE", countryName: "Sweden" },
    { code: "5110", countryCode: "EE", countryName: "Estonia" },
    { code: "5210", countryCode: "LV", countryName: "Latvia" },
    { code: "5310", countryCode: "LT", countryName: "Lithuania" },
    { code: "5410", countryCode: "PL", countryName: "Poland" },
    { code: "5710", countryCode: "FI", countryName: "Finland" },
    { code: "5820", countryCode: "SI", countryName: "Slovenia" },
    { code: "5830", countryCode: "HR", countryName: "Croatia" },
    { code: "5840", countryCode: "SK", countryName: "Slovakia" },
    { code: "5845", countryCode: "CZ", countryName: "Czech Republic" },
    { code: "5850", countryCode: "HU", countryName: "Hungary" },
    { code: "5860", countryCode: "RO", countryName: "Romania" },
    { code: "5870", countryCode: "BG", countryName: "Bulgaria" },
    { code: "5881", countryCode: "SER", countryName: "Serbia" },
    { code: "5895", countryCode: "ME", countryName: "Montenegro" },
    { code: "6000", countryCode: "EN", countryName: "International" },
    { code: "6110", countryCode: "CH", countryName: "Switzerland" },
];
const vendorInput = document.getElementById("vendor");
const vendorListDiv = document.getElementById("vendorList");
const vendorList = [
    "Euronic",
    "Club-3D-BV",
    "VIEWSONIC",
    "ADERIAN",
    "SAMSUNG-GSM",
    "NEOMOUNTS",
    "FRACTAL-DESIGN",
    "SEAMCOM",
    "MICROSOFT",
    "GoTo",
    "HP",
    "REFURB",
    "MICROSOFT-CSP",
    "MICROSOFT-SURFACE",
    "MICROSOFT-SURFACEHUB",
    "MICROSOFT-OEM",
    "XIAOMI-ECO",
    "XIAOMI",
    "LENOVO",
    "LENOVO-IDG",
    "LENOVO-ISG",
    "BRIDGE",
    "HP-SUPPLIES",
    "HP-PRINTING",
    "HP-COMPUTING",
    "HPE",
    "ARUBA",
    "DELL",
    "DELL-COMPUTERS",
    "CISCO",
    "TELEKOM-DEUTSCHLAND",
    "INTEL",
    "SEAGATE",
    "SAMSUNG",
    "SAMSUNG-MOBILE",
    "SAMSUNG-STORAGE",
    "ELECTRONIC ARTS",
    "APPLE",
    "APC",
    "LOGITECH",
    "WESTERN DIGITAL",
    "HUAWEI",
    "SOPHOS",
    "AMD",
    "CANON",
    "CANON-SCANNER",
    "CANON-SUPPLIES",
    "CANON-LFP",
    "FUJITSU",
    "FUJITSU-SCANNER",
    "FUJITSU-CCD",
    "FORTINET",
    "EATON",
    "BROTHER",
    "ASUS",
    "N-ABLE",
    "EPSON",
    "UNIFY",
    "ACER",
    "ACER-MONITOR",
    "ADOBE",
    "ZOTAC",
    "PATRONICS",
    "LG-DISPLAYS",
    "LG-SMART SIGNAGE",
    "ACRONIS",
    "IIYAMA",
    "MOTORLA",
    "CONTOUR DESIGN",
    "DEMANT SOUND",
    "VMWARE",
    "LISTAN",
    "GN-NETCOM",
    "ERGOTRON",
    "ALCATEL-LUCENT",
    "AOC INTERNATIONAL",
    "CONGSTAR",
    "IBM-CLOUD",
    "IBM-HARDWARE",
    "IBM-SOFTWARE",
    "KASPERKY LAB",
    "ZYXEL",
    "POLYCOM",
    "NORTONLIFELOCK",
    "LEXMARK",
    "ESET",
    "WATCHGUARD",
    "RAZER",
    "VEEAM",
    "DATTO",
    "MMD-MONITORS & DISPLAYS",
    "BOSE",
    "DICTOTA",
    "MITEL",
    "KINGSTON",
    "KYOCERA",
    "XEROX",
    "LINDY",
    "LEXWARE",
    "INNOVISION",
    "TRANSCEND",
    "EMC",
    "NEWSTAR",
    "QNAP SYSTEMS",
    "CHERRY",
    "ROOMZ",
    "CIRTRIX",
    "TARGUS",
    "NETGEAR",
    "REALWEAR",
    "SK HYNIX NAND PRODUCT SOLUTIONS",
    "TP-LINK",
    "BARCO",
    "ARCSERVE",
    "PROMETHEAN",
    "AVERPOINT",
    "ALLIED TELESIS",
    "LANCOM",
    "URBAN FACTORY",
    "ASSMANN ELECTRONIC",
    "GIGASET",
    "GIGASET-PRO",
    "GIGASET-CONSUMER",
    "ALSO",
    "MULTIVENDOR",
    "CAMBIUM NETWORKS",
    "3M",
    "NEC DISPLAY SOLUTIONS",
    "ESR",
    "NETAPP",
    "CROWDSTRIKE",
    "BLUEWALKER",
    "QUANTUM",
    "DELOCK",
    "OCTOGATE",
    "YEALINK",
    "TANDBERG DATA",
    "MSI",
    "INSYS",
    "NCP",
    "SANDBERG",
    "DYNABOOK",
    "MICROFOCUS",
    "SUPER MICRO COMPUTER",
    "VERTIV",
    "PHILIPS",
    "D-LINK",
    "GIGABYTE",
    "I-TEC",
    "AUREA SOFTWARE",
    "SNOM TECHNOLOGY",
    "SONY",
    "SILICON POWER COMPUTER & COMMUNICATION",
    "KONFTEL AB",
    "FANVIL",
    "BELKIN",
    "GEMBIRD",
    "AVM",
    "PNY",
    "NET-AT-WORK",
    "BENQ",
    "AGFEO",
    "BINTEC-ELMEG",
    "MATERIALISE",
    "STATIC CONTROL",
    "KFA2",
    "MGE-USV SYSTEME",
    "SENNHEISER",
    "LACIE",
    "C4B",
    "UBIQUITI NETWORKS",
    "FELLOWES",
    "AUERSWALD",
    "SEH",
    "VADE SECURE",
    "BARRACUDA",
    "NUTANIX",
    "OKI",
    "SYNOLOGY",
    "OPTOMA",
    "SANDISK",
    "INTRA2NET",
    "ESTOS",
    "IC INTRACOM",
    "EVER",
    "LANBERG",
    "DROPBOX",
    "SILEX TECHNOLOGY EUROPE",
    "LEITZ ACCO BRANDS",
    "PALIT",
    "SAPPHIRE",
    "RAIDSONIC",
    "XFX",
    "CHIEFTEC",
    "WACOM",
    "TOSHIBA EUROPE",
    "EFB",
    "3DCONNEXION",
    "PANASONIC",
    "CORSAIR",
    "AV STUMPFL",
    "PIXMINDS",
    "CANDY",
    "PEERLESS-AV",
    "OTTER PRODUCTS",
    "PATRIOT MEMORY",
    "TRUST",
    "AVER INDORMATION",
    "STARTECH.COM",
    "POWERCOLOR TUL",
    "PORT DESIGNS",
    "QOLTEC",
    "APACER",
    "MIKROTIK",
    "A-DATA",
    "NVIDIA",
    "GAINWARD EUROPE",
    "SHARP",
    "PARAT",
    "GO EUROPE",
    "GREEN CELL",
    "HAMA",
    "HITACHI-LG",
    "TEAM GROUP",
    "GETT GERÄTETECHNIK",
    "SECOMP",
    "INTER-TECH",
    "RITTAL",
    "GFI SOFTWARE",
    "AIRSLATE",
    "ZEBRA",
    "EXTRALINK",
    "1&1 IONOS",
    "CHECK POINT",
    "JABRA",
    "REINER KARTENGERÄTE",
    "COOLER MASTER",
    "MEDION",
    "NATEC",
    "AKYGA",
    "SANUS",
    "JJ-COMPUTER",
    "INNOFIL3D",
    "GREENBONE",
    "COREL",
    "WITHSECURE",
    "SONOS",
    "ASROCK",
    "ZEPP",
    "SOLARWINDS",
    "MCAFEE IRELAND",
    "AXIS COMMUNICATIONS",
    "KEMP TECHNOLOGIES",
    "WIKO",
    "TECHLY",
    "NETRACK",
    "TRACER",
    "RSA SECURITY",
    "ART",
    "KRAMER",
    "BASF 3D",
    "LOGILINK",
    "DATA AND MORE",
    "ZALMAN",
    "ACTIVISION",
    "WITHINGS",
    "INTEGRAL MEMORY PLC",
    "DORO",
    "CYBER POWER",
    "CENOR",
    "GOODRAM",
    "DYEMANSION",
    "TP VISION",
    "BMG",
    "PEACOCK",
    "SMS EVOKO GROUP",
    "A4TECH",
    "VERBATIM",
    "HGST",
    "EVE SYSTEMS",
    "ANKI",
    "BLIZZARD ENTERTAINMENT",
    "PARTNER CARE EUROPE",
    "ENERGENIE BY GEMBIRD",
    "TWELVE SOUTH",
    "MILESTONES SYSTEMS A/S",
    "LINKSYS",
    "MEDIA TECH",
    "TEAMVIEWER",
    "TECHLY PRO",
    "CREAFORM",
    "PRINTRONIX",
    "PANDUIT",
    "ATEN",
    "4WORLD",
    "SUUNTO",
    "MW",
    "BLAUPUNKT",
    "CSB",
    "RICOH",
    "CLOUD TECHNOLOGY SOLUTIONS",
    "COMDIS",
    "NEXT CONCEPT",
    "REALME",
    "KONICA MINOLTA",
    "DIGITUS",
    "XTON",
    "EIZO",
    "CRICUT",
    "LETSIGNIT",
    "NEOLT FACTORY",
    "PELCO",
    "MANHATTAN",
    "ELITE SCREENS",
    "PLENOM",
    "EDIMAX",
    "AZON",
    "VIDIS S.A.",
    "APPLICATIELINK",
    "IVANTI",
    "ZIMBRA",
    "ESPERANZA",
    "INCASE",
    "SMART TECHNOLOGIES ULC",
    "GRIFFIN",
    "WHITENERGY",
    "TENDA TECHNOLOGY",
    "VAXTOR",
    "HISENSE",
    "DIGICERT",
    "VIVO MOBILE COMMUNICATION",
    "QS SOLUTIONS",
    "PERSONDATASUPPORT",
    "DROPSUITE",
    "CRAFTUNIQUE",
    "INCIPIO",
    "INNO3D",
    "TALLY GENICOM",
    "PRICE INTERNATIONAL",
    "ORVALDI",
    "G.SKILL",
];


let reverseVendorMap = new Map();

function renderVendorList(value) {
    vendorListDiv.innerHTML = "";
    reverseVendorMap.clear();

    const filtered = vendorList.filter((vendor) =>
        vendor.toLowerCase().startsWith(value.toLowerCase())
    );

    if (filtered.length === 0) {
        vendorListDiv.style.display = "none";
        return;
    }

    filtered.forEach((vendor) => {
        const div = document.createElement("div");
        div.className = "autocomplete-item";

        const vendorWithDash = vendor.replace(/\s+/g, "-");
        div.textContent = vendorWithDash;

        reverseVendorMap.set(vendorWithDash.toLowerCase(), vendor);

        div.addEventListener("click", () => {
            vendorInput.value = vendorWithDash;
            vendorListDiv.style.display = "none";
            checkAndGenerate();
        });

        vendorListDiv.appendChild(div);
    });

    vendorListDiv.style.display = "block";
}

function removeVendorActive(items) {
    items.forEach((item) => item.classList.remove("active"));
}
vendorInput.addEventListener("input", function () {
    const val = this.value;
    if (!val) {
        vendorListDiv.style.display = "none";
        return;
    }
    const exactMatch = vendorList.find((vendor) => vendor.toLowerCase() === val.toLowerCase());
    if (exactMatch) {
        this.value = exactMatch;
        vendorListDiv.style.display = "none";
        return;
    }
    renderVendorList(val);
});
vendorInput.addEventListener("blur", () => {
    setTimeout(() => {
        const inputValue = vendorInput.value;
        const renderedVendor = findAndRenderVendor(inputValue); 
        vendorInput.value = renderedVendor; 
        vendorListDiv.style.display = "none";

        checkAndGenerate(); 
    }, 200);
});

document.addEventListener("click", function (e) {
    if (!vendorListDiv.contains(e.target) && e.target !== vendorInput) {
        vendorListDiv.style.display = "none";
    }
});
const salesOrgPopup = document.getElementById("salesOrgPopup");
const languageInput = document.getElementById("languageInput");
const languageList = document.getElementById("languageList");
languageInput.addEventListener("click", () => {
    const lang = languageInput.value;
    if (languageOptions.includes(lang)) {
        showSalesOrgPopup(lang);
    }
});
const languageOptions = ["DE", "FR", "NL", "EN", "ES", "IT", "DK", "NO", "SE", "EE", "LV", "LT", "PL", "PT", "FI", "SI", "HR", "SK", "CZ", "HU", "RO", "BG", "SER", "ME"];

function handleSingleSalesOrg(lang) {
    const codes = salesOrgMap[lang] || [];
    if (codes.length === 1) {
        salesOrgPopup.style.display = "none";
        renderTableByLanguageAndCode(lang, codes[0]);
        generateNames(lang, codes[0]);
        return true;
    }
    return false;
}
function showSalesOrgPopup(lang) {
    const codes = salesOrgMap[lang] || [];
    if (codes.length <= 1) {
        salesOrgPopup.style.display = "none";
        return;
    }
    salesOrgPopup.innerHTML = "";
    codes.forEach((code) => {
        const div = document.createElement("div");
        div.className = "autocomplete-item";
        div.textContent = code;
        div.addEventListener("click", () => {
            salesOrgPopup.style.display = "none";
            renderTableByLanguageAndCode(lang, code);
            generateNames(lang, code);
        });
        salesOrgPopup.appendChild(div);
    });
    salesOrgPopup.style.display = "block";
}
function renderLanguageList(inputVal) {
    languageList.innerHTML = "";
    const filtered = languageOptions.filter((l) => l.startsWith(inputVal));
    if (filtered.length <= 1) {
        languageList.style.display = "none";
        return;
    }
    filtered.forEach((lang) => {
        const div = document.createElement("div");
        div.className = "autocomplete-item";
        div.textContent = lang;
        div.addEventListener("click", () => {
            languageInput.value = lang;
            languageList.style.display = "none";
            if (!handleSingleSalesOrg(lang)) {
                showSalesOrgPopup(lang);
            }
        });
        languageList.appendChild(div);
    });
    languageList.style.display = "block";
}
languageInput.addEventListener("input", () => {
    const val = languageInput.value.trim().toUpperCase();
    if (val && languageOptions.includes(val)) {
        emailLanguageInput.setAttribute("value", "");
        emailLanguageInput.value = "";
    }
    if (!val) {
        languageList.style.display = "none";
        salesOrgPopup.style.display = "none";
        return;
    }
    if (languageOptions.includes(val)) {
        languageInput.value = val;
        languageList.style.display = "none";
        if (!handleSingleSalesOrg(val)) {
            showSalesOrgPopup(val);
        }
        return;
    }
    renderLanguageList(val);
});
languageInput.addEventListener("focus", () => {
    const val = languageInput.value.trim().toUpperCase();
    if (!val) return;
    if (val && languageOptions.includes(val)) {
        emailLanguageInput.setAttribute("value", "");
        emailLanguageInput.value = "";
    }
    if (languageOptions.includes(val)) {
        if (!handleSingleSalesOrg(val)) {
            showSalesOrgPopup(val);
        }
    } else {
        renderLanguageList(val);
    }
});
const emailLanguageInput = document.getElementById("emailLanguageInput");
const emailLanguageList = document.getElementById("emailLanguageList");
const emailSalesOrgPopup = document.getElementById("emailSalesOrgPopup");
function renderEmailLanguageList(val) {
    emailLanguageList.innerHTML = "";
    const filtered = languageOptions.filter((l) => l.startsWith(val));
    if (filtered.length <= 1) {
        emailLanguageList.style.display = "none";
        return;
    }
    filtered.forEach((opt) => {
        const div = document.createElement("div");
        div.className = "autocomplete-item";
        div.textContent = opt;
        div.addEventListener("click", () => {
            emailLanguageInput.value = opt;
            emailLanguageList.style.display = "none";
            showEmailSalesOrgPopup(opt);
        });
        emailLanguageList.appendChild(div);
    });
    emailLanguageList.style.display = "block";
}

function showEmailSalesOrgPopup(lang) {
    const salesOrgs = salesOrgMap[lang] || [];
    if (salesOrgs.length === 1) {
        const code = salesOrgs[0];
        emailSalesOrgPopup.style.display = "none";
        renderTableByLanguageAndCode(lang, code);
        return;
    }
    emailSalesOrgPopup.innerHTML = "";
    salesOrgs.forEach((code) => {
        const div = document.createElement("div");
        div.className = "autocomplete-item";
        div.textContent = code;
        div.addEventListener("click", () => {
            emailSalesOrgPopup.style.display = "none";
            renderTableByLanguageAndCode(lang, code);
        });
        emailSalesOrgPopup.appendChild(div);
    });
    emailSalesOrgPopup.style.display = "block";
}

function handleSingleEmailSalesOrg(lang) {
    const codes = emailSalesOrgPopup[lang] || [];
    if (codes.length === 1) {
        emailSalesOrgPopup.style.display = "none";
        renderTableByLanguageAndCode(lang, codes[0]);
        return true;
    }
    return false;
}
emailLanguageInput.addEventListener("input", function () {
    const val = emailLanguageInput.value.trim().toUpperCase();
    if (!val) {
        emailLanguageList.style.display = "none";
        emailSalesOrgPopup.style.display = "none";
        return;
    }
    if (languageOptions.includes(val)) {
        emailLanguageInput.value = val;
        emailLanguageList.style.display = "none";
        if (!handleSingleEmailSalesOrg(val)) {
            showEmailSalesOrgPopup(val);
        }
        return;
    }
    renderEmailLanguageList(val);
});

emailLanguageInput.addEventListener("focus", () => {
    const val = emailLanguageInput.value.trim().toUpperCase();
    if (!val) return;
    if (languageOptions.includes(val)) {
        if (!handleSingleEmailSalesOrg(val)) {
            showEmailSalesOrgPopup(val);
        }
    } else {
        renderEmailLanguageList(val);
    }
});
document.addEventListener("click", function (e) {
    if (!emailLanguageList.contains(e.target) && !emailSalesOrgPopup.contains(e.target) && e.target !== emailLanguageInput) {
        emailLanguageList.style.display = "none";
        emailSalesOrgPopup.style.display = "none";
    }
});
document.addEventListener("click", (e) => {
    if (!languageList.contains(e.target) && e.target !== languageInput) {
        languageList.style.display = "none";
    }
    if (!salesOrgPopup.contains(e.target) && e.target !== languageInput) {
        salesOrgPopup.style.display = "none";
    }
});
const dataMap = {
    DE: {
        1010: { text1: "ALSO Newsletter", text2: "info@email.also.com", text3: "info@also.com", email: "bueckendorf@metacomp.de", ctaText: "MEHR ERFAHREN" },
        2200: { text1: "ALSO Newsletter", text2: "info@email.also.com", text3: "oedataadminreturns-at@also.com", email: "georg.henke@henke.co.at", ctaText: "MEHR ERFAHREN" },
        6110: { text1: "ALSO News", text2: "alsonews-ch@email.also.com", text3: "alsonews-ch@news.also.com", email: "elvis.muriniti@swisspro.ch", ctaText: "MEHR ERFAHREN" },
    },
    FR: {
        2000: { text1: "ALSO France", text2: "marketing-fr@email.also.com", text3: "noreply-fr@also.com", email: "jlaroussinie@ecotic.fr", ctaText: "VOIR LE PRODUIT" },
        2320: { text1: "ALSO Belgium", text2: "newsletter.be@email.also.com", text3: "newsletter.be@also.com", email: "jeroen@autosoft.be", ctaText: "VOIR LE PRODUIT" },
        6110: { text1: "ALSO News", text2: "alsonews-ch@email.also.com", text3: "alsonews-ch@news.also.com", email: "claude.christophi@birdnet.ch", ctaText: "VOIR LE PRODUIT" },
    },
    NL: {
        2320: { text1: "ALSO Belgium", text2: "newsletter.be@email.also.com", text3: "newsletter.be@also.com", email: "kristof.de.coninck@becosoft.be", ctaText: "BESTEL NU" },
        2420: { text1: "ALSO Nederland B.V.", text2: "nieuwsbrief@email.also.com", text3: "info.nl@also.com", email: "elyse.vanrossum@also.com", ctaText: "BESTEL NU" },
    },
    EN: {
        1550: { text1: "ALSO Newsletter", text2: "info@email.also.com", text3: "info@also.com", email: "senait.isaac@also.com", ctaText: "LEARN MORE" },
        2510: { text1: "ALSO Newsletter", text2: "info@email.also.com", text3: "info@also.com", email: "senait.isaac@also.com", ctaText: "LEARN MORE" },
        2320: { text1: "ALSO Belgium", text2: "newsletter.be@email.also.com", text3: "newsletter.be@also.com", email: "newsletter.be@also.com", ctaText: "LEARN MORE" },
    },
    ES: {
        2610: { text1: "ALSO Newsletter", text2: "info@email.also.com", text3: "info.es@also.com", email: "juan.cabrera@bps.com.es", ctaText: "APRENDE MÁS" },
    },
    IT: {
        2710: { text1: "ALSO Newsletter", text2: "info@email.also.com", text3: "no-reply@also.com", email: "natalino@gigahertz.it", ctaText: "MAGGIORI INFORMAZIONI" },
    },
    DK: {
        2800: { text1: "ALSO A/S", text2: "info@email.also.com", text3: "marketing.danmark@also.com", email: "info@moduldata.dk", ctaText: "LÆR MERE" },
    },
    NO: {
        2900: { text1: "ALSO Nyhetsbrev", text2: "info@email.also.com", text3: "marketing.norge@also.com", email: "rikard.faanes@atea.no", ctaText: "KJØP" },
    },
    SE: {
        3100: { text1: "ALSO Nyhetsbrev", text2: "info@email.also.com", text3: "Marketing.Sverige@also.com", email: "johan@itbiten.se", ctaText: "LÄR MER" },
    },
    EE: {
        5110: { text1: "ALSO Eesti", text2: "info@email.also.com", text3: "ee-mailserver@also.com", email: "ilmar@fivepoint.ee", ctaText: "UURI LISAKS" },
    },
    LV: {
        5210: { text1: "ALSO Jaunumi", text2: "info@email.also.com", text3: "LV-marketing@also.com", email: "lauris.v@tomega.lv", ctaText: "PIRKT" },
    },
    LT: {
        5310: { text1: "ALSO Newsletter", text2: "info@email.also.com", text3: "info@also.com", email: "sigitas@ella.lt", ctaText: "SUŽINOKITE DAUGIAU" },
    },
    PL: {
        5410: { text1: "ALSO Newsletter", text2: "newsletter@email.also.com", text3: "newsletter@alsopolska.pl", email: "biuro@cybertom.pl", ctaText: "DOWIEDZ SIȨ WIȨCEJ" },
    },
    FI: {
        5710: { text1: "ALSO Finland Oy", text2: "FI-mailserver@email.also.com", text3: "FI-mailserver@also.com", email: "anne.kangas@ta.fi", ctaText: "LUE LISÄÄ" },
    },
    SI: {
        5820: { text1: "ALSO Slovenija", text2: "info@email.also.com", text3: "Info.si@also.com", email: "borut.jurcevic@tend.si", ctaText: "VEČ INFORMACIJ" },
    },
    HR: {
        5830: { text1: "ALSO Croatia", text2: "marketing.hr@email.also.com", text3: "Info.ALSOCroatia@also.com", email: "prodaja@biro-media.hr", ctaText: "SAZNAJTE VIŠE" },
    },
    SK: {
        5840: { text1: "ALSO Newsletter", text2: "info-sk@email.also.com", text3: "info-sk@also.com", email: "suhaj@zero.sk", ctaText: "UČ SA VIAC" },
    },
    CZ: {
        5845: { text1: "ALSO Newsletter", text2: "info-cz@email.also.com", text3: "info-cz@also.com", email: "forcomp@seznam.cz", ctaText: "DALŠÍ INFORMACE" },
    },
    HU: {
        5850: { text1: "ALSO Newsletter", text2: "info@email.also.com", text3: "info@also.com", email: "laszlo.farago@lemonet.hu", ctaText: "TUDJON MEG TÖBBET" },
    },
    RO: {
        5860: { text1: "ALSO Technology Romania", text2: "info@email.also.com", text3: "info@email.also.com", email: "florin.tirca@vexio.ro", ctaText: "AFLAȚI MAI MULTE" },
    },
    BG: {
        5870: { text1: "ALSO Bulgaria Ltd.", text2: "office.bg@email.also.com", text3: "office.bg@also.com", email: "a.petrov@econsult.bg", ctaText: "НАУЧЕТЕ ПОВЕЧЕ" },
    },
    SER: {
        5881: { text1: "ALSO Newsletter", text2: "info@email.also.com", text3: "info@also.com", email: "info@also.com", ctaText: "LEARN MORE" },
    },
    ME: {
        5895: { text1: "ALSO Newsletter", text2: "info@email.also.com", text3: "info@also.com", email: "info@also.com", ctaText: "LEARN MORE" },
    },
    PT: {
        2640: { text1: "ALSO Newsletter", text2: "info@email.also.com", text3: "info@also.com", email: "vasco@mvti.pt", ctaText: "Comprar" },
    },
};

function capitalizeCTA(text) {
    return text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

Object.values(dataMap).forEach((country) => {
    Object.values(country).forEach((entry) => {
        if (entry.ctaText) {
            entry.ctaText = capitalizeCTA(entry.ctaText);
        }
    });
});

const languageSelect = document.getElementById("languageInput");
const codeInput = document.getElementById("codeInput");
const submitBtn = document.getElementById("submitBtn");
const resultTable = document.getElementById("resultTable");
const tableBody = document.getElementById("tableBody");
function renderTableByLanguageAndCode(lang, code) {
    const data = (dataMap[lang] || {})[code];
    if (data) {
        tableBody.innerHTML = `
            <tr>
                <td>${code}_${lang}</td>
                <td>${data.text1}</td>
                <td>${data.text2}</td>
                <td>${data.text3}</td>
                <td>${data.email}</td>
                <td><strong>${data.ctaText}</strong></td>
            </tr>
        `;
        resultTable.style.display = "table";
    } else {
        tableBody.innerHTML = "";
        resultTable.style.display = "none";
    }
}
function renderTableByLanguage(lang) {
    const codes = salesOrgMap[lang] || [];
    const dataForLang = dataMap[lang] || {};
    let rows = "";
    let hasData = false;
    codes.forEach((code) => {
        const data = dataForLang[code];
        if (data) {
            hasData = true;
            rows += `
            <tr>
              <td>${code}_${lang}</td>
              <td>${data.text1}</td>
              <td>${data.text2}</td>
              <td>${data.text3}</td>
              <td>${data.email}</td>
              <td><strong>${data.ctaText}</strong></td>
            </tr>
          `;
        }
    });
    if (hasData) {
        tableBody.innerHTML = rows;
        resultTable.style.display = "table";
    } else {
        tableBody.innerHTML = "";
        resultTable.style.display = "none";
    }
}
function getCurrentWeek() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60000;
    const oneWeek = 604800000;
    return String(Math.ceil(diff / oneWeek)).padStart(2, "0");
}
function getMMDD() {
    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    return mm + dd;
}
document.addEventListener("DOMContentLoaded", function () {
    function showTooltip(target, message = "Copied!") {
        const oldTooltip = target.querySelector(".copy-tooltip");
        if (oldTooltip) oldTooltip.remove();
        const tooltip = document.createElement("div");
        tooltip.className = "copy-tooltip";
        tooltip.textContent = message;
        target.appendChild(tooltip);
        requestAnimationFrame(() => tooltip.classList.add("show"));
        setTimeout(() => {
            tooltip.classList.remove("show");
            setTimeout(() => tooltip.remove(), 300);
        }, 5000);
    }
    const table = document.getElementById("resultTable");
    table.addEventListener("click", function (event) {
        const td = event.target.closest("td");
        if (td) {
            const text = td.innerText.trim();
            navigator.clipboard.writeText(text).then(() => {
                showTooltip(td);
            });
        }
    });
    const proofNameResult = document.getElementById("proofNameResult");
    proofNameResult.addEventListener("click", function (event) {
        const span = event.target.closest(".copy-text");
        if (span) {
            const text = span.textContent.trim();
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    showTooltip(span);
                })
                .catch((err) => {
                    console.error("Copy failed:", err);
                });
        }
    });
    const bannerPositionResult = document.getElementById("bannerPositionResult");
    bannerPositionResult.addEventListener("click", function (event) {
        const span = event.target.closest(".copy-text");
        if (span) {
            const text = span.textContent.trim();
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    showTooltip(span);
                })
                .catch((err) => {
                    console.error("Copy failed:", err);
                });
        }
    });
    const tableBody = document.getElementById("tableBodyName");
    tableBody.addEventListener("click", function (event) {
        const span = event.target.closest(".email-name");
        if (span) {
            const text = span.textContent.trim();
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    showTooltip(span);
                })
                .catch((err) => {
                    console.error("Copy failed:", err);
                });
        }
    });
    const outputTextarea = document.getElementById("outputHTML");
    outputTextarea.addEventListener("click", function () {
        outputTextarea.select();
        outputTextarea.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(outputTextarea.value).then(() => {
            showTooltip(outputTextarea.parentElement);
        });
    });

    const bannerPositionInput = document.getElementById("bannerPosition");
    const bannerSizeSelect = document.getElementById("bannerSize");
    const datalist = document.getElementById("bannerPositions");

    const bannerPositionSelect = document.getElementById("bannerPosition");
    bannerPositionSelect.innerHTML = `<option value="">-- Select Position --</option>`; 

    Object.keys(bannerToSizeMapping).forEach((position) => {
        const option = document.createElement("option");
        option.value = position;
        option.textContent = position;
        bannerPositionSelect.appendChild(option);
    });

    bannerPositionInput.addEventListener("input", () => {
        const val = bannerPositionInput.value;
        const sizes = bannerToSizeMapping[val] || [];
        bannerSizeSelect.innerHTML = `<option value="">-- Select Size --</option>`;
        sizes.forEach((size) => {
            const opt = document.createElement("option");
            opt.value = size;
            opt.textContent = size;
            bannerSizeSelect.appendChild(opt);
        });
    });
});

function checkAndGenerate() {
    const fields = ["vendor", "campaignName", "campaignID", "programCode", "customDate"];
    const langInput = document.getElementById("languageInput");
    const idTicketEl = document.getElementById("idTicket");
    const bannerProofSection = document.getElementById("bannerProofSection");

    const bannerSize = document.getElementById("bannerSize");
    const typeBanner = document.getElementById("typeBanner");

    const bannerPositionSection = document.getElementById("bannerPositonSection");

    const allFilled = fields.every((id) => {
        const el = document.getElementById(id);
        return el && el.value.trim() !== "";
    });

    const langVal = langInput.value.trim().toUpperCase();
    const isLangValid = langVal && languageOptions.includes(langVal);

    if (typeBanner && typeBanner.value.trim() !== "" && isLangValid) {
        bannerProofSection.style.display = "block";
    } else {
        bannerProofSection.style.display = "none";
    }

    if (bannerSize && bannerSize.value.trim() !== "" && isLangValid) {
        bannerPositionSection.style.display = "block";
    } else {
        bannerPositionSection.style.display = "none";
    }

    if (allFilled) {
        langInput.classList.remove("disabled");
        langInput.disabled = false;
        if (langVal && languageOptions.includes(langVal)) {
            const salesOrgs = salesOrgMap[langVal] || [];
            if (salesOrgs.length === 1) {
                renderTableByLanguageAndCode(langVal, salesOrgs[0]);
                generateNames(langVal, salesOrgs[0]);
            }
        }
    } else {
        langInput.classList.add("disabled");
        langInput.disabled = true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const fields = ["vendor", "campaignName", "campaignID", "idTicket", "programCode", "bannerPosition", "bannerSize", "customDate", "languageInput"];

    fields.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("input", checkAndGenerate);
            el.addEventListener("change", checkAndGenerate);
        }
    });

    checkAndGenerate();
});

var bannerToSizeMapping = {
    "acmp-dashboard-banner": ["510x170", "1150x170", "1150x360"],
    "email-banner": ["640x90", "620x180"],
    "external-display-banner": ["160x600", "120x600", "300x250", "728x90"],
    "shop-basket-banner": ["300x100"],
    "shop-compare-banner": ["300x100"],
    "shop-daily-news": ["510x170", "120x600"],
    "shop-dashboard": ["510x170"],
    "shop-dashboard-mega": ["1150x360"],
    "shop-dashboard-super": ["1150x170", "1150x360"],
    "shop-footer-banner": ["185x90"],
    "shop-layer-banner": ["800x500"],
    "shop-notepad-banner": ["300x100"],
    "shop-order-confirmation-banner": ["510x400"],
    "shop-popup-banner": ["960x500", "800x500"],
    "shop-product-detail": ["920x90", "510x170"],
    "social-banner": ["1200x628"],
    "today-email-special-banner": ["620x300"],
    "today-email-topbanner": ["670x620"],
    "website-deals&discoveries-banner": ["510x170"],
    "website-deals&discoveries-teaser-image": ["703x410"],
    "website-deals&discoveries-hero-image": ["1260x523"],
    "website-homepage-banner": ["1012x570", "920x90", "1920x575"],
    "website-otherpage-banner": ["1012x570", "920x90", "1920x575"],
};
function generateProofName(lang, selectedCode) {
    const vendor = document.getElementById("vendor").value.toLowerCase();
    const campaign = document.getElementById("campaignName").value.trim().replace(/\s+/g, "_");
    const project = document.getElementById("campaignID").value.trim();
    const idTicket = document.getElementById("idTicket").value.trim();

    typeBanner = document.getElementById("typeBanner").value;
    const selectedDate = document.getElementById("customDate").value;
    const dateObj = selectedDate ? new Date(selectedDate) : new Date();

    const countryCode = languageInput.value.trim().toUpperCase() || selectedCode || lang;
    const week = getWeekNumber(dateObj);
    if (!typeBanner) {
        document.getElementById("proofNameResult").innerHTML = "";
        return;
    }
    const proofName = `${countryCode}_${week}_${typeBanner}_${vendor}_${campaign}_${idTicket}`;

    document.getElementById("proofNameResult").innerHTML = `
       <div class="copy-text">
            <p>${proofName}</p>
        </div>
    `;
    document.getElementById("typeBanner").addEventListener("change", () => {
        const lang = document.getElementById("languageInput").value.trim().toUpperCase();
        if (lang && languageOptions.includes(lang)) {
            const salesOrgs = salesOrgMap[lang] || [];
            if (salesOrgs.length > 0) {
                generateProofName(lang, salesOrgs[0]);
            }
        }
    });
}
function generatePositionBannerName(lang, selectedCode) {
    const vendor = document.getElementById("vendor").value.toLowerCase();
    const campaign = document
        .getElementById("campaignName")
        .value.trim()
        .split(/\s+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join("");
    const project = document.getElementById("campaignID").value.trim();
    const bannerPosition = document.getElementById("bannerPosition").value.trim();
    const bannerSize = document.getElementById("bannerSize").value.trim();

    const selectedDate = document.getElementById("customDate").value;
    const dateObj = selectedDate ? new Date(selectedDate) : new Date();

    const year = dateObj.getFullYear().toString().slice(-2);
    const week = getWeekNumber(dateObj);
    const yycw = `${year}CW${week}`;

    const code = selectedCode || (salesOrgMap[lang] && salesOrgMap[lang][0]) || "0000";

    const name = `${code}_${vendor}_${yycw}_${lang}${campaign}_${project}_${bannerPosition}_${bannerSize}`;

    document.getElementById("bannerPositionResult").innerHTML = `
        <div class="copy-text">
            <p>${name}</p>
        </div>
    `;
}
function getLangFromSalesOrg(code) {
    for (const lang in salesOrgMap) {
        if (salesOrgMap[lang].includes(code)) {
            return lang;
        }
    }
    return "";
}

function autoParseCampaignInfo() {
    const raw = document.getElementById("campaignName").value;
    const { langCode, vendor, campaign } = parseCampaignInfo(raw);

    if (campaign) document.getElementById("campaignName").value = campaign;

    if (vendor) document.getElementById("vendor").value = vendor;

    if (langCode) {
        const langInput = document.getElementById("languageInput");
        langInput.value = langCode;

        // ✅ Đảm bảo trigger sự kiện để hệ thống phản ứng
        langInput.dispatchEvent(new Event("input", { bubbles: true }));
    }

    console.log("🎯 Auto parsed:", { langCode, vendor, campaign });
}



function normalize(str) {
    return str
        .toLowerCase();
}


function findBestMatchingVendor(possibleVendor) {
     const normalizedInput = normalize(possibleVendor);

    const candidates = vendorList.map((vendor) => {
        const normalizedVendor = normalize(vendor);
        let score = 0;

        if (normalizedInput === normalizedVendor) {
            score = 100;
        } else if (normalizedInput.includes(normalizedVendor)) {
            score = 80;
        } else if (normalizedVendor.includes(normalizedInput)) {
            score = 60;
        } else {
            const inputWords = normalizedInput.match(/[a-z0-9]+/g) || [];
            inputWords.forEach((word) => {
                if (normalizedVendor.includes(word)) {
                    score += word.length;
                }
            });
        }

        return { original: vendor, score };
    });

    const sorted = candidates
        .filter((c) => c.score > 0)
        .sort((a, b) => b.score - a.score);

    const bestMatch = sorted.length > 0 ? sorted[0].original : "";

    renderVendorList(bestMatch);

    for (const [vendorWithDash, vendorOriginal] of reverseVendorMap.entries()) {
        if (vendorOriginal === bestMatch) {
            return vendorWithDash;
        }
    }

    return bestMatch.replace(/\s+/g, "-");
}

function getRenderedVendor(vendor) {
    for (const [withDash, original] of vendorMap.entries()) {
        if (original === vendor) return withDash;
    }
    return vendor.replace(/\s+/g, "-"); 
}



function parseCampaignInfo(rawCampaign) {
    let mainPart = rawCampaign.split("-").slice(1).join("-").split("*")[0].trim();
    console.log("mainPart", mainPart);

    const tokens = mainPart.split(/\s+/);

    const codeToken = tokens.find((token) => /^\d{4}$/.test(token));
    const langCode = getLangFromSalesOrg(codeToken);

    const codeIndex = tokens.indexOf(codeToken);
    const quarterIndex = tokens.findIndex((token) => /Q\d/i.test(token));

    let vendor = "";
    let campaign = "";

    if (codeIndex !== -1 && quarterIndex !== -1 && quarterIndex > codeIndex) {
        const vendorTokens = tokens.slice(codeIndex + 1, quarterIndex);
        const possibleVendor = vendorTokens.join(" ");
        vendor = findBestMatchingVendor(possibleVendor);
    }

    if (quarterIndex !== -1) {
        const campaignTokens = tokens.slice(quarterIndex + 1);
        campaign = campaignTokens.join(" ");
    }

    campaign = campaign
        .split(/\s+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ")
        .trim();

    return {
        langCode: langCode || "",
        vendor,
        campaign,
    };
}

function generateNames(_, __) {
    const rawCampaign = document.getElementById("campaignName").value;
    const parsed = parseCampaignInfo(rawCampaign);

    if (parsed.campaign) {
        document.getElementById("campaignName").value = parsed.campaign;
    }
    if (parsed.vendor) {
        document.getElementById("vendor").value = parsed.vendor;
    }
    if (parsed.langCode) {
        document.getElementById("languageInput").value = parsed.langCode;
    }

    // 🔁 Đọc lại từ input để chắc chắn dùng giá trị cuối cùng
    const vendor = document.getElementById("vendor").value;
    const campaign = document.getElementById("campaignName").value;
    const langCode = document.getElementById("languageInput").value;

    const project = document.getElementById("campaignID").value.trim();
    const programCode = document.getElementById("programCode").value;
    const selectedDate = document.getElementById("customDate").value;
    const dateObj = selectedDate ? new Date(selectedDate) : new Date();
    const year = dateObj.getFullYear().toString().slice(-2);
    const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
    const dd = String(dateObj.getDate()).padStart(2, "0");
    const mmdd = `${mm}${dd}`;
    const week = getWeekNumber(dateObj);
    const yycw = `${year}CW${week}`;

    const tableBodyName = document.getElementById("tableBodyName");
    tableBodyName.innerHTML = "";

    const salesOrgsToRender = salesOrgMap[langCode] || [];
    salesOrgsToRender.forEach((code) => {
        const org = salesOrgs.find((item) => item.code === code);
        const countryName = org ? org.countryName : "Unknown";

        const fullName = `${code}-${programCode}-${yycw}-${mmdd}-${vendor}-${langCode}${campaign}-${project}`;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${code}_${langCode}</td>
            <td>${countryName}</td>
            <td><span class="email-name">${fullName}</span></td>
        `;
        tableBodyName.appendChild(row);
    });

    console.log("✅ Final info:", { campaign, vendor, langCode });

    generateProofName(langCode, salesOrgsToRender[0]);
    generatePositionBannerName(langCode, salesOrgsToRender[0]);
}


document.getElementById("bannerPosition").addEventListener("change", function () {
    const selectedPosition = this.value;
    const bannerSizeSelect = document.getElementById("bannerSize");

    bannerSizeSelect.innerHTML = `<option value="">-- Select Size --</option>`;

    if (bannerToSizeMapping[selectedPosition]) {
        bannerToSizeMapping[selectedPosition].forEach((size) => {
            const option = document.createElement("option");
            option.value = size;
            option.textContent = size;
            bannerSizeSelect.appendChild(option);
        });
    }
});

document.getElementById("bannerSize").addEventListener("change", () => {
    const lang = document.getElementById("languageInput").value.trim().toUpperCase();
    if (lang && languageOptions.includes(lang)) {
        const salesOrgs = salesOrgMap[lang] || [];
        if (salesOrgs.length > 0) {
            generatePositionBannerName(lang, salesOrgs[0]);
        }
    }
});

function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return String(weekNo).padStart(2, "0");
}
document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("customDate").value = today;

    const typeBannerInput = document.getElementById("typeBanner");

    if (typeBannerInput) {
        typeBannerInput.addEventListener("input", () => {
            const lang = document.getElementById("languageInput").value.trim().toUpperCase();
            const salesOrgs = salesOrgMap[lang] || [];
            const selectedCode = salesOrgs.length === 1 ? salesOrgs[0] : "";

            generateProofName(lang, selectedCode);
        });
    }
});
const inputEl = document.getElementById("inputHTML");
const outputEl = document.getElementById("outputHTML");
function convertUnicodeToHTMLEntities(text) {
    const cleanText = text.replace(/[\n\r]/g, "");
    let result = "";
    for (let char of cleanText) {
        result += `&#${char.codePointAt(0)};`;
    }
    return result;
}
inputEl.addEventListener("input", () => {
    outputEl.value = convertUnicodeToHTMLEntities(inputEl.value);
});
