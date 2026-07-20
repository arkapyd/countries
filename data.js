/* =============================================================
   RESEARCH DASHBOARD — BASELINE DATA
   -------------------------------------------------------------
   The only file you edit to add or change content.
   index.html reads window.DASHBOARD_DATA and renders everything.

   MONEY: monetary figures in USD million, converted at ₹96.5 = US$1
   where drawn from the paper. Trade figures in the Import/Export
   tabs are external FY2024–25 values (APEDA / SEA / PIB), already
   reported in USD by those sources.

   CROPS TABS: each country carries a `crops` object with three
   tabs — production / import / export. Each tab has:
     - note   : one-line context under the tab row
     - blocks : ordered list rendered top-to-bottom. Block types:
         { type:"chart", title, unit, footnote, sources, bars }
             bars[]: { label, value, display, sourceUrl,
                       states, statesSource:{label,url} }
             - value drives bar length; display is printed
             - sourceUrl makes the bar row link to the figure's source
             - states (optional) is the "State (Region)" producer list
               that expands under the row on hover, with statesSource
         { type:"card", title, text, source:{label,url} }
         { type:"badges", title, source:{label,url}, items:[{label,detail}] }

   Region tags use N/S/E/W/NE only:
     North  UP, Punjab, Haryana, Rajasthan
     West   Madhya Pradesh, Maharashtra, Gujarat
     East   West Bengal, Bihar, Odisha
     South  Telangana, Andhra Pradesh, Karnataka, Tamil Nadu
     North-East  Assam, etc.
   ============================================================= */

window.DASHBOARD_DATA = {
  meta: {
    title: "Country dashboard",
    fileLabel: "Research file",
    lastUpdated: "2026-07-20",
    baselineNote: "Baseline: Sustainable agriculture in India",
    conversionNote: "Paper figures in USD million, at ₹96.5 = US$1"
  },

  countries: [
    {
      code: "IND",
      name: "India",
      region: "South Asia",
      subtitle: "Sustainable agriculture & climate resilience",
      thesis:
        "India's stance on climate action in agriculture is adaptation-first — mitigation arrives as a by-outcome of adaptive practice. The support architecture around it is dense and increasingly well-funded, but its composition tilts toward income support and risk transfer over the resilient capital that climate-proofing demands, and it addresses the farm far more thoroughly than the food system around it.",

      kpis: [
        { label: "Agriculture in GVA", value: "18.4%", note: "current prices, 2022–23 (DA&FW)" },
        { label: "Primary-sector workforce", value: "46%+", note: "PLFS 2023–24" },
        { label: "Primary dependence on farming", value: "~20%", note: "of households (PRICE 2025)" },
        { label: "Net sown area rain-fed", value: "55%", note: "≈139.4 m ha (DA&FW Rainfed Position Paper)" },
        { label: "Population in high-risk districts", value: "80%+", note: "hydro-met hazards (CEEW 2021)" },
        { label: "Ministry budget, 2026–27", value: "$14,560 M", note: "BE, ₹1.41 lakh cr (PRS DfG 2026–27)" },
        { label: "PM-KISAN allocation", value: "$6,580 M", note: "≈45% of ministry budget (PIB)" },
        { label: "Crop-insurance claims paid", value: "$18,960 M", note: "PMFBY since 2016 (PIB)" },
        { label: "Micro-irrigation spend", value: "$2,728 M", note: "~109 lakh ha since 2015–16 (NMSA release)" },
        { label: "Foodgrain output, 2024–25", value: "357.7 mt", note: "record; rice 150.2, wheat 117.9 (MoA&FW final estimates)" }
      ],

      glossary: [
        { term: "GVA", full: "Gross Value Added", note: "Output measure used for a sector's contribution to the economy — here, agriculture's share." },
        { term: "GDP", full: "Gross Domestic Product", note: "Total value of goods and services produced in the country in a year." },
        { term: "PLFS", full: "Periodic Labour Force Survey", note: "India's official employment survey, run by the National Statistical Office." },
        { term: "PRICE", full: "People Research on India's Consumer Economy", note: "Research body whose ICE 360° survey re-estimated farm dependence at ~20% of households." },
        { term: "CEEW", full: "Council on Energy, Environment and Water", note: "Indian policy think-tank; source of the district climate-vulnerability figure." },
        { term: "MoA&FW", full: "Ministry of Agriculture & Farmers Welfare", note: "The central ministry overseeing Indian agriculture." },
        { term: "DA&FW", full: "Department of Agriculture & Farmers Welfare", note: "The main department within MoA&FW; publishes production estimates." },
        { term: "BE", full: "Budget Estimate", note: "The amount budgeted for a scheme in a given financial year." },
        { term: "PRS", full: "PRS Legislative Research", note: "Independent group that analyses India's budget and Demand for Grants." },
        { term: "DfG", full: "Demand for Grants", note: "The ministry-wise breakdown of the Union Budget presented to Parliament." },
        { term: "FY", full: "Financial Year", note: "India's fiscal year, running April to March (e.g. FY25 = 2024–25)." },
        { term: "USD", full: "US Dollar", note: "Currency in which all monetary figures here are shown (₹96.5 = US$1)." },
        { term: "PM-KISAN", full: "Pradhan Mantri Kisan Samman Nidhi", note: "Income-support scheme paying eligible farmers ₹6,000 a year." },
        { term: "PMFBY", full: "Pradhan Mantri Fasal Bima Yojana", note: "The national crop-insurance scheme, launched 2016." },
        { term: "NMSA", full: "National Mission for Sustainable Agriculture", note: "Umbrella mission for climate-adaptive farming practices." },
        { term: "NICRA", full: "National Innovations in Climate Resilient Agriculture", note: "ICAR research network developing stress-tolerant varieties and practices." },
        { term: "AIF", full: "Agriculture Infrastructure Fund", note: "Financing facility for post-harvest and farm-gate infrastructure." },
        { term: "MIF", full: "Micro Irrigation Fund", note: "NABARD-managed fund to expand drip and sprinkler irrigation." },
        { term: "NAFCC", full: "National Adaptation Fund for Climate Change", note: "Dedicated adaptation fund, downgraded from 'scheme' to 'non-scheme' in Nov 2022." },
        { term: "NDC", full: "Nationally Determined Contribution", note: "A country's climate pledge under the Paris Agreement." },
        { term: "CBDR", full: "Common But Differentiated Responsibilities", note: "Equity principle that richer, higher-emitting nations should bear more climate burden." },
        { term: "PKVY", full: "Paramparagat Krishi Vikas Yojana", note: "Nationwide scheme promoting cluster-based organic farming." },
        { term: "MOVCDNER", full: "Mission Organic Value Chain Development for North Eastern Region", note: "Organic value-chain mission specific to the North-East." },
        { term: "SMAF", full: "Sub-Mission on Agroforestry", note: "RKVY component promoting trees on farmland ('Har Medh Par Pedh')." },
        { term: "RKVY", full: "Rashtriya Krishi Vikas Yojana", note: "Umbrella agriculture-development scheme funding state-level projects." },
        { term: "NBM", full: "National Bamboo Mission", note: "Mission to build commercial bamboo value chains and cut import dependence." },
        { term: "FPC", full: "Farmer Producer Company", note: "A company owned by farmer-members to pool produce and market collectively." },
        { term: "FAOSTAT", full: "FAO Statistical Database", note: "The UN Food and Agriculture Organization's global production/trade dataset." },
        { term: "APEDA", full: "Agricultural & Processed Food Products Export Development Authority", note: "The body that promotes and tracks India's farm exports." },
        { term: "SEA", full: "Solvent Extractors' Association of India", note: "Industry body reporting India's edible-oil import figures." },
        { term: "PIB", full: "Press Information Bureau", note: "The Indian government's official press and information agency." },
        { term: "DD News", full: "Doordarshan News", note: "India's public-service broadcaster, cited for the production estimates." },
        { term: "UT", full: "Union Territory", note: "A region administered directly by the central government (plural: UTs)." },
        { term: "Shree Anna", full: "Millets / nutri-cereals", note: "The government's branding for millets such as bajra, jowar and ragi." },
        { term: "rabi", full: "Winter cropping season", note: "Crops sown around October–December and harvested in spring (e.g. wheat)." }
      ],

      crops: {
        heading: "Crop statistics",
        sub: "Production · import · export — hover any crop row for its major producing states; click any row, card or badge to open its source",
        tabs: [

          /* ---------------- PRODUCTION ---------------- */
          {
            id: "production",
            label: "Production",
            blocks: [
              {
                type: "chart",
                title: "Output of major crops, 2024–25",
                unit: "million tonnes",
                bars: [
                  { label: "Rice", value: 150.18, display: "150.18",
                    sourceUrl: "https://ddnews.gov.in/en/record-foodgrain-production-marks-highest-growth-in-a-decade/",
                    states: "Uttar Pradesh (North), West Bengal (East), Telangana (South), Punjab (North)",
                    statesSource: { label: "Wikipedia — Rice production in India", url: "https://en.wikipedia.org/wiki/Rice_production_in_India" } },
                  { label: "Wheat", value: 117.94, display: "117.94",
                    sourceUrl: "https://ddnews.gov.in/en/record-foodgrain-production-marks-highest-growth-in-a-decade/",
                    states: "Uttar Pradesh (North), Madhya Pradesh (West), Punjab (North), Haryana (North)",
                    statesSource: { label: "Wikipedia — Wheat production in India", url: "https://en.wikipedia.org/wiki/Wheat_production_in_India" } },
                  { label: "Pulses", value: 25.68, display: "25.68",
                    sourceUrl: "https://ddnews.gov.in/en/record-foodgrain-production-marks-highest-growth-in-a-decade/",
                    states: "Madhya Pradesh (West), Maharashtra (West), Rajasthan (North), Uttar Pradesh (North)",
                    statesSource: { label: "PIB — India's Resilient Production Systems in Agriculture", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2248987&reg=3&lang=1" } },
                  { label: "Millets (Shree Anna)", value: 18.59, display: "18.59",
                    sourceUrl: "https://ddnews.gov.in/en/record-foodgrain-production-marks-highest-growth-in-a-decade/",
                    states: "Rajasthan (North), Maharashtra (West), Karnataka (South)",
                    statesSource: { label: "PIB — India's Resilient Production Systems in Agriculture", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2248987&reg=3&lang=1" } }
                ],
                footnote: "Total foodgrain production: 357.73 mt in 2024–25 — a record. Pulses and millets output are both the world's largest.",
                sources: [
                  { label: "DD News — Final estimates of production of major crops, 2024–25 (MoA&FW)",
                    url: "https://ddnews.gov.in/en/record-foodgrain-production-marks-highest-growth-in-a-decade/" }
                ]
              },
              {
                type: "chart",
                title: "Share of output grown on rain-fed land",
                unit: "%",
                max: 100,
                bars: [
                  { label: "Nutri-cereals", value: 85, display: "85",
                    sourceUrl: "https://agriwelfare.gov.in/Documents/121233187_rapfinaldraft%20(1)_repaired.pdf",
                    states: "Rajasthan (North), Karnataka (South), Maharashtra (West)",
                    statesSource: { label: "PIB — India's Resilient Production Systems in Agriculture", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2248987&reg=3&lang=1" } },
                  { label: "Pulses", value: 83, display: "83",
                    sourceUrl: "https://agriwelfare.gov.in/Documents/121233187_rapfinaldraft%20(1)_repaired.pdf",
                    states: "Madhya Pradesh (West), Maharashtra (West), Rajasthan (North), Uttar Pradesh (North)",
                    statesSource: { label: "PIB — India's Resilient Production Systems in Agriculture", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2248987&reg=3&lang=1" } },
                  { label: "Oilseeds", value: 70, display: "70",
                    sourceUrl: "https://agriwelfare.gov.in/Documents/121233187_rapfinaldraft%20(1)_repaired.pdf",
                    states: "Rajasthan (North), Gujarat (West), Madhya Pradesh (West), Maharashtra (West)",
                    statesSource: { label: "FindEasy — Indian states by oilseeds production", url: "https://www.findeasy.in/indian-states-by-oilseeds-production/" } },
                  { label: "Cotton", value: 65, display: "65",
                    sourceUrl: "https://agriwelfare.gov.in/Documents/121233187_rapfinaldraft%20(1)_repaired.pdf",
                    states: "Gujarat (West), Maharashtra (West), Telangana (South), Rajasthan (North)",
                    statesSource: { label: "PIB — India's Resilient Production Systems in Agriculture", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2248987&reg=3&lang=1" } },
                  { label: "All foodgrains", value: 40, display: "~40",
                    sourceUrl: "https://agriwelfare.gov.in/Documents/121233187_rapfinaldraft%20(1)_repaired.pdf" }
                ],
                footnote: "55% of net sown area (≈139.4 m ha) is rain-dependent; 61% of farmers survive on such land.",
                sources: [
                  { label: "DA&FW — Rainfed Agriculture Position Paper (PDF)",
                    url: "https://agriwelfare.gov.in/Documents/121233187_rapfinaldraft%20(1)_repaired.pdf" }
                ]
              },
              {
                type: "chart",
                title: "Crop diversity by water regime",
                unit: "major crops grown annually",
                bars: [
                  { label: "Rain-fed land", value: 34, display: "≈34",
                    sourceUrl: "https://agriwelfare.gov.in/Documents/121233187_rapfinaldraft%20(1)_repaired.pdf" },
                  { label: "Irrigated areas", value: 5, display: "≈4–5",
                    sourceUrl: "https://agriwelfare.gov.in/Documents/121233187_rapfinaldraft%20(1)_repaired.pdf" }
                ],
                footnote: "Irrigated belts grow principally rice, wheat and sugarcane — the water-assured staples of the Green Revolution — with cotton and maize in pockets.",
                sources: [
                  { label: "DA&FW — Rainfed Agriculture Position Paper (PDF)",
                    url: "https://agriwelfare.gov.in/Documents/121233187_rapfinaldraft%20(1)_repaired.pdf" }
                ]
              },
              {
                type: "badges",
                title: "World production ranks (FAOSTAT-based) — click any badge for the source",
                source: {
                  label: "Wikipedia — List of largest producing countries of agricultural commodities (FAOSTAT)",
                  url: "https://en.wikipedia.org/wiki/List_of_largest_producing_countries_of_agricultural_commodities"
                },
                items: [
                  { label: "Millets", detail: "1st" },
                  { label: "Rice", detail: "1st" },
                  { label: "Wheat", detail: "2nd" },
                  { label: "Milk (cow, buffalo, goat)", detail: "1st" },
                  { label: "Sugarcane", detail: "2nd" },
                  { label: "Honey", detail: "2nd" },
                  { label: "Tobacco", detail: "2nd" },
                  { label: "Vegetables", detail: "1st–3rd" },
                  { label: "Meat", detail: "1st–3rd" },
                  { label: "Spices", detail: "1st–3rd" },
                  { label: "Fibres", detail: "1st–3rd" }
                ]
              }
            ]
          },

          /* ---------------- IMPORT ---------------- */
          {
            id: "import",
            label: "Import",
            note: "Top farm imports below are external FY2024–25 trade figures (SEA / industry data), beyond the baseline paper. The bamboo and timber items are the paper's own qualitative findings, kept in priority order below the numbers.",
            blocks: [
              {
                type: "chart",
                title: "Top agricultural imports by value, 2024–25",
                unit: "USD million",
                bars: [
                  { label: "Edible / vegetable oils", value: 20800, display: "20,800",
                    sourceUrl: "https://www.business-standard.com/economy/news/india-s-vegetable-oil-imports-flat-at-16-3-million-tonnes-in-2024-25-sea-125111301061_1.html" },
                  { label: "Pulses", value: 5500, display: "5,500",
                    sourceUrl: "https://striveedgeias.in/india-pulses-edible-oil-imports/" }
                ],
                footnote: "Edible oil is India's single largest farm import — 16.3 mt in 2024–25 (palm 7.58, soybean 5.47 (record), soft oils 8.43); roughly 57–60% of edible-oil demand is met by imports. Pulses imports hit a record 7.3 mt. Fresh fruit (apples), raw cashew and some spices make up most of the remainder.",
                sources: [
                  { label: "Business Standard / SEA — vegetable oil imports 2024–25",
                    url: "https://www.business-standard.com/economy/news/india-s-vegetable-oil-imports-flat-at-16-3-million-tonnes-in-2024-25-sea-125111301061_1.html" },
                  { label: "StriveEdge IAS — India's pulses & edible-oil import burden 2024–25",
                    url: "https://striveedgeias.in/india-pulses-edible-oil-imports/" }
                ]
              },
              {
                type: "card",
                title: "Bamboo — a net importer, by policy admission",
                text: "The National Bamboo Mission exists to change India's status as a net importer of bamboo, reading the sector's low productivity as headroom for commercial value chains. Restructured in 2018 with a $134 M outlay ($98 M central share).",
                source: {
                  label: "Cabinet Committee on Economic Affairs — restructured National Bamboo Mission (2018)",
                  url: "https://www.indianemployees.com/cabinet-decision/details/cabinet-approves-restructured-national-bamboo-mission"
                }
              },
              {
                type: "card",
                title: "Timber — demand met largely from farms, not forests",
                text: "Trees outside forests already supply about 65% of India's timber demand — the document's core case for agroforestry under SMAF ($28 M indicative outlay, RKVY component 2021–26) and its Har Medh Par Pedh push.",
                source: {
                  label: "MoA&FW — SMAF operational guidelines (PDF)",
                  url: "https://nmsa.dac.gov.in/pdfdoc/Agroforestory_Guidelines_new_English.pdf"
                }
              }
            ]
          },

          /* ---------------- EXPORT ---------------- */
          {
            id: "export",
            label: "Export",
            note: "Top farm exports below are external FY2024–25 figures (PIB / APEDA), beyond the baseline paper. The organic-export findings from the paper (PKVY, then MOVCDNER) are kept in priority order below the top exporters.",
            blocks: [
              {
                type: "chart",
                title: "Top agricultural exports by value, 2024–25",
                unit: "USD million",
                bars: [
                  { label: "Rice (basmati + non-basmati)", value: 12950, display: "12,950",
                    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2248987&reg=3&lang=1" },
                  { label: "Marine products", value: 7410, display: "7,410",
                    sourceUrl: "https://www.naviexports.com/blog/top-10-indian-agricultural-products-in-global-demand/" },
                  { label: "Spices", value: 4520, display: "4,520",
                    sourceUrl: "https://www.naviexports.com/blog/top-10-indian-agricultural-products-in-global-demand/" },
                  { label: "Buffalo meat", value: 3800, display: "~3,800",
                    sourceUrl: "https://www.naviexports.com/blog/top-10-indian-agricultural-products-in-global-demand/" },
                  { label: "Fruits & vegetables", value: 1819, display: "1,819",
                    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2248987&reg=3&lang=1" },
                  { label: "Coffee", value: 1810, display: "1,810",
                    sourceUrl: "https://www.naviexports.com/blog/top-10-indian-agricultural-products-in-global-demand/" },
                  { label: "Tea", value: 920, display: "920",
                    sourceUrl: "https://www.naviexports.com/blog/top-10-indian-agricultural-products-in-global-demand/" }
                ],
                footnote: "Total agri exports ≈ $51.9 billion in FY2024–25. Rice is the single largest, exported to 170+ countries; cotton, sugar and castor oil round out the next tier (sugar and wheat sat under export curbs through the year).",
                sources: [
                  { label: "PIB — India's Resilient Production Systems (rice, fruits & vegetables)",
                    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2248987&reg=3&lang=1" },
                  { label: "Navi Exports — top Indian agricultural exports FY25 breakdown (marine, spices, meat, coffee, tea)",
                    url: "https://www.naviexports.com/blog/top-10-indian-agricultural-products-in-global-demand/" }
                ]
              },
              {
                type: "card",
                title: "Organic produce — the paper's export play (1st: PKVY)",
                text: "PKVY and MOVCDNER aim to pitch India — and the North-East specifically — as established exporters of organic produce, developing certified production in a value-chain mode that links organic growers to consumers. Combined: ≈16.7 lakh ha and 27.5 lakh farmers in certified or transition production; $225 M released under PKVY to Dec 2024.",
                source: {
                  label: "PIB — Nurturing Organic Farming, Empowering Farmers (Oct 2025)",
                  url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2175205&reg=48&lang=2"
                }
              },
              {
                type: "chart",
                title: "Certified / transition organic base behind the export push",
                unit: "lakh hectares",
                bars: [
                  { label: "PKVY (nationwide)", value: 14.99, display: "14.99",
                    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2175205&reg=48&lang=2" },
                  { label: "MOVCDNER (North-East)", value: 1.73, display: "1.73",
                    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2097882" }
                ],
                footnote: "Priority order: PKVY nationwide (52,289 clusters, 25.30 lakh farmers) leads; MOVCDNER (434 Farmer Producer Companies, 2.19 lakh farmers) is the North-East-specific mission.",
                sources: [
                  { label: "PIB — Nurturing Organic Farming (PKVY figures)",
                    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2175205&reg=48&lang=2" },
                  { label: "PIB — Economic Survey 2024–25 agriculture chapter (MOVCDNER figures)",
                    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2097882" }
                ]
              }
            ]
          }
        ]
      },

      insights: [
        {
          title: "Adaptation-first, by design",
          text: "Mitigation arrives as a by-outcome of adaptive practice — direct-seeded rice, alternate wetting and drying, agroforestry. India treats this as a reading of equity and Common But Differentiated Responsibilities, not a policy evasion, since smallholders did least to cause the problem."
        },
        {
          title: "The money leans to transfers",
          text: "Income support ($6,580 M), crop insurance ($1,260 M) and interest subvention ($2,340 M) together take roughly three-quarters of the department's budget. The resilient capital climate-proofing needs — water structures, storage, cold chains, processing — sits in far smaller lines, or off-budget in the $10,360 M AIF and the $518 M Micro Irrigation Fund."
        },
        {
          title: "The farm is covered; the food system is not",
          text: "NMSA and NICRA build capacity at the farm well. Instruments designed to make processing, packaging and transport climate-resilient are largely absent — the critical policy gap the paper identifies."
        },
        {
          title: "Dependence is narrower and deeper than headlines",
          text: "PRICE (2025) puts primary dependence near a fifth of households, not the oft-quoted 70%. But for those households there is no fallback: a bad monsoon or a heat-shortened rabi is a livelihood, not a statistic."
        },
        {
          title: "Adaptation finance is fragile",
          text: "The National Adaptation Fund for Climate Change — 30 projects worth $88 M across 27 States and UTs — was quietly downgraded from a 'scheme' to a 'non-scheme' in November 2022, a telling signal of how precarious ring-fenced adaptation money remains."
        },
        {
          title: "Adoption follows payback",
          text: "Practices that pay for themselves within a season or two spread; those needing upfront money and paying back later do not, without help. Water-efficient technology is the most visible shift of all — yet micro-irrigation still covers under 8% of net sown area, which is why another 100 lakh ha is targeted for 2025–30."
        },
        {
          title: "Ambition is still rising",
          text: "The updated NDC for 2031–35, approved March 2026, commits India to a 47% cut in the emissions intensity of GDP by 2035 from 2005 levels, naming the agricultural missions among the instruments — keeping mitigation ambition rising while leaving the equity logic intact."
        }
      ]
    }

    /* ---------------------------------------------------------
       COUNTRY TEMPLATE — copy, fill in, add a comma after the
       India block above, and paste in.

    ,{
      code: "XXX",
      name: "Country name",
      region: "Region",
      subtitle: "One-line focus of the research",
      thesis: "The core argument in one or two sentences.",
      kpis: [ { label: "Indicator", value: "$— M", note: "year / source" } ],
      crops: {
        heading: "Crop statistics",
        sub: "Production · import · export",
        tabs: [
          { id: "production", label: "Production", blocks: [
              { type:"chart", title:"...", unit:"...",
                bars:[ { label:"Crop", value:0, display:"0",
                         sourceUrl:"https://...",
                         states:"State (Region), State (Region)",
                         statesSource:{ label:"Wikipedia — ...", url:"https://..." } } ],
                footnote:"optional",
                sources:[ { label:"...", url:"https://..." } ] },
              { type:"badges", title:"...", source:{label:"...",url:"https://..."},
                items:[ { label:"Crop", detail:"rank" } ] }
          ] },
          { id:"import", label:"Import", note:"optional", blocks:[
              { type:"chart", title:"...", unit:"USD million", bars:[...], sources:[...] },
              { type:"card", title:"...", text:"...", source:{label:"...",url:"https://..."} }
          ] },
          { id:"export", label:"Export", note:"optional", blocks:[ ] }
        ]
      },
      insights: [ { title:"Takeaway", text:"..." } ]
    }
    --------------------------------------------------------- */
  ]
};
