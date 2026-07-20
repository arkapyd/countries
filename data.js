/* =============================================================
   RESEARCH DASHBOARD — BASELINE DATA
   -------------------------------------------------------------
   The only file you edit to add or change content.
   index.html reads window.DASHBOARD_DATA and renders everything.

   MONEY: all monetary figures are in USD million, converted from
   the source's ₹ figures at ₹87 = US$1 (stated in the header chip).

   CROPS TABS: each country carries a `crops` object with three
   tabs — production / import / export. A tab can hold:
     - note    : one-line caveat or context shown under the tab row
     - charts  : [{ title, unit, footnote, bars:[{label, value, display}] }]
                 rendered as horizontal SVG bar charts; `value`
                 drives bar length, `display` is the printed figure
     - cards   : [{ title, text }] — qualitative findings
     - badges  : [{ label, detail }] — stamp chips (e.g. world ranks)

   To add a country: copy the COUNTRY TEMPLATE at the bottom,
   fill it in, and drop it into the `countries` array.
   ============================================================= */

window.DASHBOARD_DATA = {
  meta: {
    title: "Country dashboard",
    fileLabel: "Research file",
    lastUpdated: "2026-07-20",
    baselineNote: "Baseline: Sustainable agriculture in India",
    conversionNote: "Monetary figures in USD million, at ₹87 = US$1"
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
        { label: "Agriculture in GVA", value: "18.4%", note: "current prices, 2022–23" },
        { label: "Primary-sector workforce", value: "46%+", note: "PLFS 2023–24" },
        { label: "Primary dependence on farming", value: "~20%", note: "of households (PRICE 2025)" },
        { label: "Net sown area rain-fed", value: "55%", note: "≈139.4 m ha, as of 2022" },
        { label: "Population in high-risk districts", value: "80%+", note: "hydro-met hazards (CEEW 2021)" },
        { label: "Ministry budget, 2026–27", value: "$16,150 M", note: "Budget Estimate (₹1.41 lakh cr)" },
        { label: "PM-KISAN allocation", value: "$7,300 M", note: "≈45% of ministry budget" },
        { label: "Crop-insurance claims paid", value: "$21,030 M", note: "PMFBY, since 2016" },
        { label: "Micro-irrigation spend", value: "$3,026 M", note: "~109 lakh ha since 2015–16" },
        { label: "Foodgrain output, 2024–25", value: "357.7 mt", note: "record; rice 150.2, wheat 117.9" }
      ],

      crops: {
        heading: "Crop statistics",
        sub: "Production · import · export — figures drawn from the baseline document only",
        tabs: [
          {
            id: "production",
            label: "Production",
            charts: [
              {
                title: "Output of major crops, 2024–25",
                unit: "million tonnes",
                bars: [
                  { label: "Rice", value: 150.18, display: "150.18" },
                  { label: "Wheat", value: 117.94, display: "117.94" },
                  { label: "Pulses", value: 25.68, display: "25.68" },
                  { label: "Millets (Shree Anna)", value: 18.59, display: "18.59" }
                ],
                footnote: "Total foodgrain production: 357.73 mt in 2024–25 — a record. Pulses and millets output are both the world's largest."
              },
              {
                title: "Share of output grown on rain-fed land",
                unit: "%",
                max: 100,
                bars: [
                  { label: "Nutri-cereals", value: 85, display: "85" },
                  { label: "Pulses", value: 83, display: "83" },
                  { label: "Oilseeds", value: 70, display: "70" },
                  { label: "Cotton", value: 65, display: "65" },
                  { label: "All foodgrains", value: 40, display: "~40" }
                ],
                footnote: "55% of net sown area (≈139.4 m ha) is rain-dependent; 61% of farmers survive on such land."
              },
              {
                title: "Crop diversity by water regime",
                unit: "major crops grown annually",
                bars: [
                  { label: "Rain-fed land", value: 34, display: "≈34" },
                  { label: "Irrigated areas", value: 5, display: "≈4–5" }
                ],
                footnote: "Irrigated belts grow principally rice, wheat and sugarcane — the water-assured staples of the Green Revolution — with cotton and maize in pockets."
              }
            ],
            badges: [
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
            ],
            badgesTitle: "World production ranks (FAOSTAT-based)"
          },
          {
            id: "import",
            label: "Import",
            note: "The baseline document carries no quantitative import series — the findings below are its qualitative record. Slot figures in here once a trade source joins the baseline.",
            cards: [
              {
                title: "Bamboo — a net importer, by policy admission",
                text: "The National Bamboo Mission exists to change India's status as a net importer of bamboo, reading the sector's low productivity as headroom for commercial value chains. Restructured in 2018 with a $148 M outlay ($109 M central share)."
              },
              {
                title: "Timber — demand met largely from farms, not forests",
                text: "Trees outside forests already supply about 65% of India's timber demand — the document's core case for agroforestry under SMAF ($31 M indicative outlay, RKVY component 2021–26) and its Har Medh Par Pedh push."
              }
            ]
          },
          {
            id: "export",
            label: "Export",
            note: "No quantitative export series in the baseline either — what it offers is the export ambition and the certified-organic production base being built behind it.",
            cards: [
              {
                title: "Organic produce — the stated export play",
                text: "PKVY and MOVCDNER aim to pitch India — and the North-East specifically — as established exporters of organic produce, developing certified production in a value-chain mode that links organic growers to consumers. Combined: ≈16.7 lakh ha and 27.5 lakh farmers in certified or transition production; $249 M released under PKVY to Dec 2024."
              }
            ],
            charts: [
              {
                title: "Certified / transition organic base behind the export push",
                unit: "lakh hectares",
                bars: [
                  { label: "PKVY (nationwide)", value: 14.99, display: "14.99" },
                  { label: "MOVCDNER (North-East)", value: 1.73, display: "1.73" }
                ],
                footnote: "PKVY: 52,289 clusters, 25.30 lakh farmers. MOVCDNER: 434 Farmer Producer Companies, 2.19 lakh farmers."
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
          text: "Income support ($7,300 M), crop insurance ($1,400 M) and interest subvention ($2,600 M) together take roughly three-quarters of the department's budget. The resilient capital climate-proofing needs — water structures, storage, cold chains, processing — sits in far smaller lines, or off-budget in the $11,490 M AIF and the $575 M Micro Irrigation Fund."
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
          text: "The National Adaptation Fund for Climate Change — 30 projects worth $97 M across 27 States and UTs — was quietly downgraded from a 'scheme' to a 'non-scheme' in November 2022, a telling signal of how precarious ring-fenced adaptation money remains."
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
      kpis: [
        { label: "Indicator", value: "$— M", note: "year / source" }
      ],
      crops: {
        heading: "Crop statistics",
        sub: "Production · import · export",
        tabs: [
          { id: "production", label: "Production",
            charts: [
              { title: "Chart title", unit: "unit",
                bars: [ { label: "Crop", value: 0, display: "0" } ],
                footnote: "optional" }
            ],
            badges: [ { label: "Crop", detail: "rank" } ],
            badgesTitle: "optional"
          },
          { id: "import", label: "Import", note: "optional caveat",
            cards: [ { title: "Finding", text: "..." } ] },
          { id: "export", label: "Export",
            cards: [], charts: [] }
        ]
      },
      insights: [
        { title: "Takeaway", text: "The finding, in a sentence or two." }
      ]
    }
    --------------------------------------------------------- */
  ]
};
