/* =============================================================
   RESEARCH DASHBOARD — BASELINE DATA
   -------------------------------------------------------------
   The only file you edit to add or change content.
   index.html reads window.DASHBOARD_DATA and renders everything.

   MONEY: all monetary figures are in USD million, converted from
   the source's ₹ figures at ₹87 = US$1 (stated in the footer).
   Change the rate note in meta.conversionNote if you re-base.

   To add a country: copy the COUNTRY TEMPLATE at the bottom,
   fill it in, and drop it into the `countries` array.

   Fields:
   - code       3-letter code shown as the stamp badge
   - subtitle   one line under the country name
   - thesis     core argument, shown as the lead paragraph
   - kpis       headline numbers; value is a string so units stay
                exactly as written; note is the small print
   - chartSlots labels for the reserved chart placeholders
   - insights   titled takeaways from the research
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

      chartSlots: [
        {
          title: "Budget composition, 2026–27",
          hint: "income support · insurance · interest subvention vs the rest (USD M)"
        },
        {
          title: "Programme coverage vs cost",
          hint: "the schemes in Table 1 — scale against spend (USD M)"
        },
        {
          title: "Vulnerability & water",
          hint: "rain-fed dependence and district-level climate risk"
        }
      ],

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
      chartSlots: [
        { title: "Chart title", hint: "what it will show" }
      ],
      insights: [
        { title: "Takeaway", text: "The finding, in a sentence or two." }
      ]
    }
    --------------------------------------------------------- */
  ]
};
