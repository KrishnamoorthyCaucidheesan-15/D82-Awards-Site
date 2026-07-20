/* ============================================================================
   District 82 Awards — Data Source (2026–2027)
   ----------------------------------------------------------------------------
   This is the SINGLE source of truth for every award on the site.
   To add, edit, or remove an award, change this file only — no HTML/JS edits
   are required. The site renders itself from this data.

   Each award object supports these fields (all optional except id/category/name):
     id            unique slug (used in the URL)
     category      one of the CATEGORY ids below
     name          award title
     subtitle      short tag shown under the title (optional)
     summary       one-line blurb shown on category cards
     description   full paragraph(s) — supports plain text
     eligibility   who can win it
     criteria      array of strings — bullet points of what's required
     submission    how / where to submit (string)
     presentation  where/when the award is presented
     keyDates      array of { label, date (YYYY-MM-DD), display } — drives the Calendar
   Missing fields simply don't render — safe to leave blank and fill later.
   ========================================================================== */

const CATEGORIES = [
  {
    id: "membership",
    title: "Membership Awards",
    blurb:
      "Recognising the coaches, mentors, sponsors and district leaders who grow and retain our community.",
    icon: "🤝",
  },
  {
    id: "club",
    title: "Club Awards",
    blurb:
      "Celebrating clubs that attract new members, keep them, and build lasting strength together.",
    icon: "🏆",
  },
  {
    id: "quality",
    title: "Golden · Quality · Platinum · Pathways",
    blurb:
      "The District's premier recognitions for clubs delivering the highest-quality member experience.",
    icon: "⭐",
  },
  {
    id: "pr",
    title: "Public Relations Awards",
    blurb:
      "Honouring clubs and PR leaders who tell the Toastmasters story with creativity and reach.",
    icon: "📣",
  },
];

const AWARDS = [
  /* ======================= MEMBERSHIP AWARDS ============================= */
  {
    id: "excellence-club-coaching",
    category: "membership",
    name: "Excellence in Club Coaching",
    summary:
      "For Club Coaches who lift a club to Distinguished status or above and hold a 20+ member base.",
    description:
      "Presented to members appointed as Club Coach who help their club achieve Distinguished status or above and maintain a minimum of 20 membership base.",
    eligibility:
      "Club Coaches appointed from 1st July 2026 onwards. Appointment dates are available on the TI web link (https://rb.gy/lsrwt).",
    criteria: [
      "Help the club achieve Distinguished status or above.",
      "Maintain a minimum 20-member base.",
    ],
    presentation: "Ovation 2027 / Reverberation 2027",
    keyDates: [
      { label: "Cut-off (Ovation 2027)", date: "2027-04-30", display: "30 Apr 2027" },
      { label: "Cut-off (Reverberation 2027)", date: "2027-06-30", display: "30 Jun 2027" },
    ],
  },
  {
    id: "excellence-club-mentoring",
    category: "membership",
    name: "Excellence in Club Mentoring",
    summary:
      "For Club Mentors who guide a new club to Distinguished status with a strong 20+ member base.",
    description:
      "Presented to members appointed as Club Mentors who help the club achieve Distinguished status or above and maintain a minimum of 20 membership base as at 31st March 2027.",
    eligibility:
      "Club Mentors of all clubs chartered from 1st July 2026 onwards. Appointment dates are available on the TI web link (https://rb.gy/2s7w1).",
    criteria: [
      "Help the club achieve Distinguished status or above.",
      "Maintain a minimum 20-member base as at 31st March 2027.",
    ],
    presentation: "Ovation 2027 / Reverberation 2027",
    keyDates: [
      { label: "Cut-off (Ovation 2027)", date: "2027-04-30", display: "30 Apr 2027" },
      { label: "Cut-off (Reverberation 2027)", date: "2027-06-30", display: "30 Jun 2027" },
    ],
  },
  {
    id: "member-sponsor",
    category: "membership",
    name: "Member Sponsor Award",
    summary:
      "Recognises members who personally introduce new or reinstated members to any D82 club.",
    description:
      "Introduced to recognise the initiative of members who bring in either new or reinstated members to any Toastmasters club in District 82, with effect from 1st July 2026.",
    eligibility:
      "Any member who introduces a New Member (charter members not considered) or a Reinstated member.",
    criteria: [
      "The club must add the introducing member as the sponsor when submitting details to Club Central.",
      "VP Membership should not list themselves as sponsor unless they personally introduced the member.",
      "Member Sponsor details must be submitted via the link on www.district82.org.",
      "Special recognition for a member who introduces 10 or more members.",
    ],
    submission: "Submit member sponsor details via the link on www.district82.org.",
    presentation: "Ovation 2027",
    keyDates: [
      { label: "Cut-off & Award", date: "2027-05-05", display: "On/before 5 May 2027" },
    ],
  },
  {
    id: "base-retainer",
    category: "membership",
    name: "Base Retainer Award",
    summary:
      "For Area & Division Directors who retain the member base across their clubs.",
    description:
      "Introduced to recognise the effort of retaining the member base at Area and Division levels, with effect from 1st July 2026.",
    eligibility: "Area Directors and Division Directors.",
    criteria: [
      "Retain a minimum of 20 members per club.",
      "100% of clubs for Area Directors; 95% of clubs for Division Directors.",
    ],
    presentation: "Term 1: Reverberation 2026 · Term 2: Ovation 2027",
    keyDates: [
      { label: "Term 1 cut-off", date: "2026-10-31", display: "31 Oct 2026" },
      { label: "Term 2 cut-off", date: "2027-04-30", display: "30 Apr 2027" },
    ],
  },
  {
    id: "distinguished-toastmaster",
    category: "membership",
    name: "Distinguished Toastmaster Award",
    summary:
      "The highest educational achievement in Toastmasters — the DTM.",
    description:
      "Presented to members who achieve the highest educational achievement in Toastmasters, namely the Distinguished Toastmaster (DTM).",
    eligibility: "Open to all members.",
    presentation: "Ovation 2027 / Reverberation 2027",
    keyDates: [
      { label: "Cut-off (Ovation 2027)", date: "2027-04-30", display: "30 Apr 2027" },
      { label: "Cut-off (Reverberation 2027)", date: "2027-06-30", display: "30 Jun 2027" },
    ],
  },
  {
    id: "star-area-director",
    category: "membership",
    name: "Star Area Director",
    subtitle: "Area Director Award",
    summary:
      "For Area Directors who reach President's Distinguished with full visits, training and growth.",
    description:
      "Presented to Area Directors who lead their Area to President's Distinguished status while meeting a full set of quality, training and growth requirements.",
    eligibility: "Open to all Area Directors.",
    criteria: [
      "Achieve President's Distinguished Area.",
      "Qualify by 30th June 2027 to be recognised at Reverberation 2027.",
      "File Area Director Visit Reports: Round 1 before 31 Oct 2026; Round 2 before 31 Mar 2027.",
      "All active clubs in the Area to have all seven club officers trained in both terms.",
      "Achieve net growth of 8% in membership payments if the Area becomes President's Distinguished.",
      "Maintain a minimum 15-member base in all clubs as at 31st March 2027.",
    ],
    presentation: "Reverberation 2027",
    keyDates: [
      { label: "AD Visit — Round 1", date: "2026-10-31", display: "31 Oct 2026" },
      { label: "AD Visit — Round 2", date: "2027-03-31", display: "31 Mar 2027" },
      { label: "Cut-off", date: "2027-06-30", display: "30 Jun 2027" },
    ],
  },
  {
    id: "star-division-director",
    category: "membership",
    name: "Star Division Director",
    subtitle: "Division Director Award",
    summary:
      "For Division Directors who reach President's Distinguished with full visits, training and growth.",
    description:
      "Presented to Division Directors who lead their Division to President's Distinguished status while meeting a full set of quality, training and growth requirements.",
    eligibility: "Open to all Division Directors.",
    criteria: [
      "Achieve President's Distinguished Division.",
      "Qualify by 30th June 2027 to be recognised at Reverberation 2027.",
      "All Area Director Visit Reports filed: Round 1 before 31 Oct 2026; Round 2 before 31 Mar 2027.",
      "All clubs in the Division on active status (minimum 8-member base).",
      "A minimum of 4 trained club officers in both terms.",
      "Division achieves net growth of 8% in membership payments.",
      "Maintain a 15-member base in 80% of clubs; remaining clubs a minimum 8-member base, as at 31 Mar 2027.",
    ],
    presentation: "Reverberation 2027",
    keyDates: [
      { label: "AD Visit — Round 1", date: "2026-10-31", display: "31 Oct 2026" },
      { label: "AD Visit — Round 2", date: "2027-03-31", display: "31 Mar 2027" },
      { label: "Cut-off", date: "2027-06-30", display: "30 Jun 2027" },
    ],
  },
  {
    id: "outstanding-toastmaster",
    category: "membership",
    name: "D82 Outstanding Toastmaster / Division Director / Area Director",
    summary:
      "Recognises one member whose accomplishments, service and enthusiasm are exceptional.",
    description:
      "This award recognises one member whose educational accomplishments, club service, dedication and enthusiasm are exceptional. The suggested point-system form is available at https://www.toastmasters.org/resources/outstanding-toastmaster-guidelines — complete one form for each candidate.",
    eligibility: "Open to all members.",
    submission:
      "Award submission to be sent to the District Trio of 2026–2027 before 30th September 2027.",
    presentation: "Reverberation 2027",
    keyDates: [
      { label: "Cut-off", date: "2027-06-30", display: "30 Jun 2027" },
      { label: "Submission deadline", date: "2027-09-30", display: "30 Sep 2027" },
    ],
  },
  {
    id: "growth-excellence",
    category: "membership",
    name: "Growth Excellence Award",
    subtitle: "Bronze · Silver · Gold",
    summary:
      "Tiered recognition for Area & Division leaders driving net membership-payment growth.",
    description:
      "Presented to leaders who demonstrate outstanding commitment to club sustainability through effective membership growth and retention, resulting in measurable net membership-payment growth within their Area or Division. Net Membership Payments = Active Membership Payments − Base Membership Payments (as of 30 June 2026).",
    eligibility: "Area Directors and Division Directors.",
    criteria: [
      "Bronze: minimum net membership-payment growth of 3% across the Area/Division.",
      "Silver: minimum net membership-payment growth of 5% across the Area/Division.",
      "Gold: minimum net membership-payment growth of 8% across the Area/Division.",
    ],
    presentation: "Ovation 2027",
    keyDates: [{ label: "Cut-off", date: "2027-04-30", display: "30 Apr 2027" }],
  },
  {
    id: "campaign-smedley",
    category: "membership",
    name: "Membership Campaign Excellence — Smedley",
    summary:
      "For Area/Division leaders who rally clubs to win the Smedley Award campaign.",
    description:
      "Presented to Area Directors and Division Directors who demonstrate exceptional leadership in promoting and supporting the Smedley Award membership-building campaign, engaging clubs to build a culture of growth and club vitality.",
    eligibility: "Area Directors and Division Directors.",
    criteria: [
      "Division Directors: minimum 10 clubs participate in the Smedley Award.",
      "Area Directors: minimum 2 clubs participate in the Smedley Award.",
    ],
    presentation: "Reverberation 2026",
    keyDates: [{ label: "Cut-off", date: "2026-09-30", display: "30 Sep 2026" }],
  },
  {
    id: "campaign-talkup",
    category: "membership",
    name: "Membership Campaign Excellence — Talk Up",
    summary:
      "For Area/Division leaders who rally clubs to win the Talk Up Toastmasters campaign.",
    description:
      "Presented to Area Directors and Division Directors who demonstrate exceptional leadership in promoting and supporting the Talk Up Toastmasters membership-building campaign, engaging clubs to build a culture of growth and club vitality.",
    eligibility: "Area Directors and Division Directors.",
    criteria: [
      "Division Directors: minimum 10 clubs participate in Talk Up Toastmasters.",
      "Area Directors: minimum 2 clubs participate in Talk Up Toastmasters.",
    ],
    presentation: "Ovation 2027",
    keyDates: [{ label: "Cut-off", date: "2027-03-31", display: "31 Mar 2027" }],
  },
  {
    id: "campaign-beattheclock",
    category: "membership",
    name: "Membership Campaign Excellence — Beat the Clock",
    summary:
      "For Area/Division leaders who rally clubs to win the Beat the Clock campaign.",
    description:
      "Presented to Area Directors and Division Directors who demonstrate exceptional leadership in promoting and supporting the Beat the Clock membership-building campaign, engaging clubs to build a culture of growth and club vitality.",
    eligibility: "Area Directors and Division Directors.",
    criteria: [
      "Division Directors: minimum 5 clubs participate.",
      "Area Directors: minimum 1 club participates.",
    ],
    presentation: "Reverberation 2027",
    keyDates: [{ label: "Cut-off", date: "2027-06-30", display: "30 Jun 2027" }],
  },
  {
    id: "trailblazer",
    category: "membership",
    name: "Trailblazer Award for Club Growth",
    summary:
      "For leaders who drive district growth by chartering new Toastmasters clubs.",
    description:
      "Presented to leaders who drive district growth by identifying opportunities, engaging communities, and successfully establishing new Toastmasters clubs — recognising outstanding initiative, innovation, perseverance and leadership in expanding the Toastmasters network.",
    eligibility:
      "Division Director: supports the chartering of three (3) or more new clubs. Area Director: supports the chartering of two (2) or more new clubs.",
    presentation: "Ovation 2027",
    keyDates: [{ label: "Cut-off", date: "2027-04-30", display: "30 Apr 2027" }],
  },
  {
    id: "membership-maestro",
    category: "membership",
    name: "Membership Maestro Award",
    summary:
      "For the Top 3 VP Memberships who excel across all three membership campaigns.",
    description:
      "Presented to the Top 3 Vice Presidents Membership who demonstrate exceptional dedication to club growth by achieving more than eight new-member additions during each of the Toastmasters membership-building campaigns — Smedley Award, Talk Up Toastmasters, and Beat the Clock.",
    eligibility: "Top 3 Vice Presidents Membership.",
    criteria: [
      "More than 8 new-member additions during the Smedley Award campaign.",
      "More than 8 new-member additions during Talk Up Toastmasters.",
      "More than 8 new-member additions during Beat the Clock.",
    ],
    presentation:
      "Smedley → Reverberation 2026 · Talk Up → Ovation 2027 · Beat the Clock → Reverberation 2027",
    keyDates: [
      { label: "Smedley cut-off", date: "2026-09-30", display: "30 Sep 2026" },
      { label: "Talk Up cut-off", date: "2027-03-31", display: "31 Mar 2027" },
      { label: "Beat the Clock cut-off", date: "2027-06-30", display: "30 Jun 2027" },
    ],
  },

  /* ========================== CLUB AWARDS =============================== */
  {
    id: "eight-80",
    category: "club",
    name: "Eight-80 Membership Award",
    summary:
      "Add 8 new members and retain 80% of your base — across two terms.",
    description:
      "Recognises clubs able to attract at least 8 new/dual/reinstated members and retain 80% of their club base during each of two terms.",
    eligibility: "All clubs are encouraged to participate.",
    criteria: [
      "TERM 1 — Add 8 new/dual/reinstated members (join date 1 Jul–30 Sep 2026; all paid up to 31 Mar 2027).",
      "TERM 1 — Renew 80%+ of the base from the 30 Jun 2026 roster (measured on 30 Sep 2026 roster); base minimum 20 as of 30 Sep 2026.",
      "TERM 2 — Add 8 new/dual/reinstated members (join date 1 Oct 2026–31 Mar 2027; all paid up to 30 Sep 2027).",
      "TERM 2 — Renew 80%+ of the 30 Sep 2026 roster (measured on 31 Mar 2027 roster); base minimum 20 as of 31 Mar 2027.",
    ],
    submission: "Not required.",
    presentation: "Term 1 → Reverberation 2026 · Term 2 → Ovation 2027",
    keyDates: [
      { label: "Term 1 cut-off", date: "2026-09-30", display: "30 Sep 2026" },
      { label: "Term 2 cut-off", date: "2027-03-31", display: "31 Mar 2027" },
    ],
  },
  {
    id: "membership-retention",
    category: "club",
    name: "Membership Retention Award",
    summary:
      "Rewards strong 80% retention for clubs that don't qualify for Eight-80.",
    description:
      "Recognises club efforts in member retention across both terms. Awarded to clubs that are not qualified for the Eight-80 award.",
    eligibility: "All clubs are encouraged to participate.",
    criteria: [
      "TERM 1 — Renew 80%+ of existing membership by 30 Sep 2026, based on the 30 Jun 2026 roster.",
      "TERM 2 — Renew 80%+ of existing membership by 31 Mar 2027, based on the 30 Jun 2026 roster.",
    ],
    submission: "Not required.",
    presentation: "Term 1 → Reverberation 2026 · Term 2 → Ovation 2027",
    keyDates: [
      { label: "Term 1 cut-off", date: "2026-09-30", display: "30 Sep 2026" },
      { label: "Term 2 cut-off", date: "2027-03-31", display: "31 Mar 2027" },
    ],
  },
  {
    id: "triple-star",
    category: "club",
    name: "Triple Star Award",
    summary:
      "For clubs that earn all three membership-building ribbons in one year.",
    description:
      "Presented to clubs achieving all 3 membership-building ribbons — Smedley Ribbon, Talk Up Toastmasters, and Beat the Clock. Beat the Clock additions are computed from the district roster retrieved on 5 May 2027.",
    eligibility: "All clubs are encouraged to participate.",
    submission: "Not required.",
    presentation: "Ovation 2027 / Reverberation 2027",
    keyDates: [
      { label: "Cut-off (Ovation 2027)", date: "2027-05-05", display: "5 May 2027" },
      { label: "Cut-off (Reverberation 2027)", date: "2027-06-30", display: "30 Jun 2027" },
    ],
  },
  {
    id: "dynamic-duo",
    category: "club",
    name: "Dynamic Duo Award",
    summary:
      "For clubs that earn two of the three membership-building ribbons.",
    description:
      "Presented to clubs achieving 2 of the 3 membership-building ribbons (Smedley, Talk Up Toastmasters, Beat the Clock). Beat the Clock additions are computed from the district roster retrieved on 5 May 2027. Clubs eligible for the Triple Star Award will not receive the Dynamic Duo Award.",
    eligibility: "All clubs are encouraged to participate.",
    submission: "Not required.",
    presentation: "Ovation 2027 / Reverberation 2027",
    keyDates: [
      { label: "Cut-off (Ovation 2027)", date: "2027-05-05", display: "5 May 2027" },
      { label: "Cut-off (Reverberation 2027)", date: "2027-06-30", display: "30 Jun 2027" },
    ],
  },
  {
    id: "early-bird-renewal",
    category: "club",
    name: "Early Bird Renewal",
    summary:
      "For clubs that complete both renewal cycles ahead of the early-bird dates.",
    description:
      "Rewards clubs that complete both renewal cycles early: the first-term renewal on/before 15 Sep 2026 (for the base as of 30 Jun 2026) and the second-term renewal on/before 15 Mar 2027 (for the base as of 1 Oct 2026). Clubs with fewer than 20 members must reach 20+ during the renewal cycles. Both cycles must be completed within the dates to be eligible.",
    eligibility: "All clubs in the District.",
    submission:
      "Submit proof via www.district82.org: dashboard screenshot after renewals (JPG/PNG/PDF), club roster (CSV/XLSX), and wire-transfer email with proof of payment if applicable.",
    presentation: "Presented at the respective Division conferences.",
    keyDates: [
      { label: "First-term cut-off", date: "2026-09-15", display: "15 Sep 2026" },
      { label: "Second-term cut-off", date: "2027-03-15", display: "15 Mar 2027" },
    ],
  },
  {
    id: "highest-membership-addition",
    category: "club",
    name: "Highest Membership Addition Award",
    summary:
      "Top 5 clubs by new/dual/reinstated member additions across the year.",
    description:
      "Given to the Top 5 clubs in District 82 with the highest number of new/dual/reinstated member additions. A minimum of 20 new-member additions should be available for a complete cycle.",
    eligibility: "All clubs are encouraged to participate.",
    submission: "Not required.",
    presentation: "Ovation 2027",
    keyDates: [{ label: "Cut-off", date: "2027-05-05", display: "5 May 2027" }],
  },
  {
    id: "excellence-in-training",
    category: "club",
    name: "Excellence in Training — Term 1 & 2",
    summary:
      "For clubs with all 7 officers trained at the Club Officer Training Program.",
    description:
      "Presented to clubs that have all 7 club officers trained at the Club Officer Training Program organised by the Division. Officers unable to attend their own Division's OTP may attend another Division's. Members holding positions in two clubs must attend two different training programs.",
    eligibility: "All clubs are encouraged to participate.",
    submission: "Not required.",
    presentation: "Division Conference — November 2026 & April 2027",
    keyDates: [
      { label: "Term 1 OTP cut-off", date: "2026-07-31", display: "31 Jul 2026" },
      { label: "Term 2 OTP cut-off", date: "2027-01-31", display: "31 Jan 2027" },
    ],
  },
  {
    id: "fast-start-growth",
    category: "club",
    name: "Fast Start Growth Award",
    summary:
      "Top 5 clubs by new members added in the first four months of the year.",
    description:
      "Presented to the Top 5 clubs achieving the highest number of new-member additions during the first four months of the Toastmasters year (1 Jul – 31 Oct 2026), recognising a strong foundation for long-term club success.",
    eligibility: "All clubs are encouraged to participate.",
    criteria: [
      "New-member additions counted 1 Jul 2026 – 31 Oct 2026.",
      "Clubs ranked by total new members added in the period.",
      "Top 5 clubs receive the award.",
    ],
    presentation: "Reverberation 2026",
    keyDates: [{ label: "Cut-off", date: "2026-10-31", display: "31 Oct 2026" }],
  },
  {
    id: "club-builder-excellence",
    category: "club",
    name: "Club Builder Excellence Award",
    summary:
      "For clubs that actively support chartering a new Toastmasters club.",
    description:
      "Presented to clubs that actively support the successful establishment of a new Toastmasters club, recognising outstanding commitment to expanding opportunities for development within the community.",
    eligibility: "Clubs that support the establishment of a new club.",
    presentation: "Ovation 2027",
    keyDates: [{ label: "Cut-off", date: "2027-05-05", display: "5 May 2027" }],
  },
  {
    id: "club-transformation",
    category: "club",
    name: "Club Transformation Award",
    summary:
      "For clubs that go from non-Distinguished to Distinguished (or higher) in one year.",
    description:
      "Awarded to clubs that transform their performance by progressing from non-Distinguished status to Distinguished recognition or higher within a single Toastmasters year — celebrating dedication, strategic leadership, and member engagement.",
    eligibility: "Clubs that did not achieve any distinguished status as at 30 Jun 2026.",
    presentation: "Ovation 2027 & Reverberation 2027",
    keyDates: [
      { label: "Cut-off (Ovation 2027)", date: "2027-05-05", display: "5 May 2027" },
      { label: "Cut-off (Reverberation 2027)", date: "2027-06-30", display: "30 Jun 2027" },
    ],
  },
  {
    id: "double-renewal-early-bird",
    category: "club",
    name: "Double Renewal Early Bird Award",
    summary:
      "For clubs that pre-pay both renewal cycles by 30 September 2026.",
    description:
      "Presented to clubs that complete membership payments equivalent to at least 50% of their club base for BOTH the October 2026 and April 2027 renewal cycles on/before 30 September 2026 — recognising exceptional planning and commitment to long-term sustainability.",
    eligibility: "Clubs with a base membership of at least 16 members.",
    criteria: [
      "Payments submitted for both the October 2026 and April 2027 renewal cycles.",
      "Payments cover at least 50% of the club's base membership (minimum 10 paid members).",
      "All qualifying payments received on/before 30 September 2026.",
      "Example: a club with a base of 20 renews at least 10 members for both cycles (US$120) by 30 Sep 2026.",
    ],
    presentation: "Reverberation 2026",
    keyDates: [{ label: "Cut-off", date: "2026-09-30", display: "30 Sep 2026" }],
  },

  /* ========= GOLDEN / QUALITY / PLATINUM / PATHWAYS AWARDS ============== */
  {
    id: "quality-club",
    category: "quality",
    name: "Quality Club Award",
    subtitle: "130 points · Select Distinguished+",
    summary:
      "130+ points across the two Avenues, with Select Distinguished status or above.",
    description:
      "Awarded when a club achieves 130+ points in total across the Club Quality Avenue (CQA, 100 pts) and Club Engagement Avenue (CEA, 100 pts). Clubs must achieve a minimum of 75 CQA points and be Select Distinguished or above in the 2026–2027 term. Clubs receiving the Transformation Award or Golden Club Award will not also receive the Quality Club Award.",
    eligibility: "All clubs are encouraged to participate.",
    criteria: [
      "Minimum 75 points in the Club Quality Avenue (CQA).",
      "130+ total points across CQA + CEA.",
      "Select Distinguished status or above.",
    ],
    submission:
      "No separate application — it is enough to make submissions for the various criteria per the guidelines.",
    presentation: "Clubs qualifying by 30 Apr 2027 recognised at Ovation 2027.",
    keyDates: [{ label: "Cut-off", date: "2027-04-30", display: "30 Apr 2027" }],
  },
  {
    id: "golden-club",
    category: "quality",
    name: "Golden Club Award",
    subtitle: "170 points · President's Distinguished",
    summary:
      "170+ points across the two Avenues, with President's Distinguished status.",
    description:
      "Awarded when a club achieves 170+ points in total across the Club Quality Avenue (CQA) and Club Engagement Avenue (CEA). Clubs must achieve a minimum of 75 CQA points and be President's Distinguished in the 2026–2027 term. Clubs can qualify for only one of the Quality Club or Golden Club awards.",
    eligibility: "All clubs are encouraged to participate.",
    criteria: [
      "Minimum 75 points in the Club Quality Avenue (CQA).",
      "170+ total points across CQA + CEA.",
      "President's Distinguished status.",
    ],
    submission:
      "No separate application — it is enough to make submissions for the various criteria per the guidelines.",
    presentation: "Clubs qualifying by 30 Apr 2027 recognised at Ovation 2027.",
    keyDates: [{ label: "Cut-off", date: "2027-04-30", display: "30 Apr 2027" }],
  },
  {
    id: "platinum-club",
    category: "quality",
    name: "Platinum Award",
    subtitle: "District Director's Award",
    summary:
      "The District Director's top honour — Golden Club plus 50+ points for exceptional contribution.",
    description:
      "The prestigious Platinum Club Award, presented by the District Director at the opening ceremony of Ovation 2027, recognises clubs that consistently go beyond expectations — contributing to the Toastmasters fraternity, serving the wider community, and demonstrating excellence in leadership and engagement. To qualify a club must meet the Golden Club Award minimum requirements by 30 Apr 2027, be in good standing as at 30 Apr 2027, and earn at least 50 points from the criteria below. Clubs receiving the Platinum Award will not also receive the Golden Club Award.",
    eligibility: "Clubs meeting the Golden Club Award requirements and in good standing.",
    criteria: [
      "Charter two (2) new clubs before 30 Apr 2027 as official sponsoring club — 50 pts.",
      "Charter one (1) new club between 1 Jul–31 Dec 2026 — 40 pts.",
      "Charter one (1) new club between 1 Jan–30 Apr 2027 — 35 pts.",
      "Revive a struggling club (below 10) back to charter strength (20) by 30 Apr 2027, endorsed by the Division Director & CGD — 25 pts.",
      "Establish and/or manage a Gavel Club (under-18s) by/through the period — 20 pts.",
      "Conduct a Youth Leadership Program completed by 30 Apr 2027 — 10 pts.",
      "Support a District event (sponsorship, venue, or host club); 5 pts each up to a maximum of 15 pts.",
    ],
    submission:
      "Documentary and/or photographic evidence must be submitted where applicable. Charter points may be claimed once TMI confirms charter acceptance and payment.",
    presentation: "Presented by the District Director at the opening of Ovation 2027.",
    keyDates: [{ label: "Cut-off", date: "2027-04-30", display: "30 Apr 2027" }],
  },
  {
    id: "pathways-quality",
    category: "quality",
    name: "Pathways Quality Award",
    subtitle: "Star & Excellence tiers",
    summary:
      "Recognises real educational progress — Level 1 & Level 3 completions by 31 Dec 2026.",
    description:
      "Recognises clubs that demonstrate genuine educational progress in the first half of the year, measured by Pathways level completions approved in Base Camp by 31 December 2026. Two tiers exist. Star: 3× Level 1 and 2× Level 3 completions. Excellence: 4× Level 1 and 3× Level 3 completions. A club may achieve both tiers in the same year — only the higher tier applies. Completions after 31 December are not eligible for this award (but still count toward other DCP goals).",
    eligibility: "All active District 82 clubs in good standing.",
    criteria: [
      "Star tier: minimum 3× Level 1 and 2× Level 3 completions by 31 Dec 2026.",
      "Excellence tier: minimum 4× Level 1 and 3× Level 3 completions by 31 Dec 2026.",
      "Completions must be formally approved in Base Camp (verbal/email confirmations do not qualify).",
    ],
    submission: "No separate submission — computed from the Dashboard / Base Camp.",
    presentation:
      "All qualifying clubs recognised on District social media; the first 20 Excellence-tier clubs recognised at Ovation 2027.",
    keyDates: [
      { label: "Completions cut-off", date: "2026-12-31", display: "31 Dec 2026" },
    ],
  },

  /* ==================== PUBLIC RELATIONS AWARDS ======================== */
  {
    id: "creative-content-newsletter",
    category: "pr",
    name: "Creative Content Newsletter Award",
    subtitle: "Gold · Silver · Bronze",
    summary:
      "Top-scoring club newsletters, judged independently across Term 1 and Term 2.",
    description:
      "Recognises the highest-scoring club newsletters for Term 1 & Term 2. The three top-scoring clubs receive Gold, Silver, and Bronze. Terms are independent — a club may enter either or both. Judged on Brand Compliance (25), Layout & Presentation (25), Content (40) and Club Information (10).",
    eligibility:
      "The newsletter must be exactly 20 pages including covers (5% score deduction for each page over/under), comply with the TI Brand Manual with no major violations, and credit each contributing author.",
    criteria: [
      "Brand-compliant logo, colours, typography, and club naming.",
      "Consistent typography, colour and white space; clear visual hierarchy and readability.",
      "Club achievements, member recognition, and editorial team credited.",
      "Messages from officers; educational articles; promotion of the Toastmasters mission.",
      "Club details: officers, meeting details, contacts, social links, and events.",
    ],
    submission:
      "Upload the newsletter as a PDF (Google Drive or reliable file-share) and submit via district82.org/d82-submission. Questions: d82publicrelations@gmail.com.",
    presentation: "Gold / Silver / Bronze per term.",
    keyDates: [
      { label: "Term 1 cut-off", date: "2026-11-30", display: "30 Nov 2026" },
      { label: "Term 2 cut-off", date: "2027-03-31", display: "31 Mar 2027" },
    ],
  },
  {
    id: "annual-flyer-excellence",
    category: "pr",
    name: "Annual Flyer Excellence Award",
    subtitle: "Monthly leaderboard · Gold · Silver · Bronze",
    summary:
      "One flyer per month across a nine-month cycle; scores accumulate on a leaderboard.",
    description:
      "Clubs may submit one creative flyer per month, published on the club's social media, across the nine-month cycle (Jul 2026 – Mar 2027). Every valid submission is scored and accumulates on the Annual Flyer Leaderboard; the three highest cumulative scores win Gold, Silver, and Bronze. Each month the top flyer is 'Champion Flyer of the Month' (once per club per year) and the next four are 'Top Flyers of the Month'. Judged on Brand Compliance (30%), Creativity & Organization (45%), and Value of Information (25%).",
    eligibility:
      "No major brand violations (a major violation disqualifies). Flyer must be posted on the club's social media page (corporate clubs may use alternative channels with a screenshot + copy of the flyer). One flyer per club per month.",
    criteria: [
      "Align with the published Monthly Theme — a non-aligned submission receives a 10% deduction.",
      "One flyer per club per month.",
      "Links must stay accessible throughout judging; broken/expired links are disqualified.",
    ],
    submission:
      "Submit a link to the flyer via district82.org/d82-submission. One flyer per month only.",
    presentation: "Monthly recognition + year-end Gold / Silver / Bronze.",
    keyDates: [
      { label: "Monthly cut-off", date: "2026-07-31", display: "Last day of each month" },
      { label: "Final cut-off", date: "2027-03-31", display: "31 Mar 2027" },
    ],
  },
  {
    id: "best-social-media-presence",
    category: "pr",
    name: "Best Social Media Presence Award",
    subtitle: "Gold · Silver · Bronze",
    summary:
      "Baseline in July, final in March — measuring growth on your strongest channel.",
    description:
      "Recognises clubs that use social media most effectively over the year. Clubs submit a baseline at the start of the year (31 Jul 2026) across Facebook, Instagram, TikTok, Threads and LinkedIn, then a final submission (31 Mar 2027) selecting one platform to be evaluated. Judged on Campaigns & Impact (25%), Brand Compliance (20%), Consistent Posting (20%), Organic Growth (20%), and Reach & Engagement (15%).",
    eligibility:
      "Accounts must be current for the program year; content must comply with the TI Brand Manual with no major violations; a baseline must be submitted by 31 Jul 2026 to be eligible.",
    submission:
      "Submit the baseline (31 Jul) and the final submission (31 Mar) via district82.org/d82-submission.",
    presentation: "Gold / Silver / Bronze.",
    keyDates: [
      { label: "Baseline", date: "2026-07-31", display: "31 Jul 2026" },
      { label: "Final", date: "2027-03-31", display: "31 Mar 2027" },
    ],
  },
  {
    id: "external-outreach-star",
    category: "pr",
    name: "External Outreach Star Award",
    subtitle: "Gold · Silver · Bronze",
    summary:
      "Points for genuine external media coverage — print, TV, radio, and online.",
    description:
      "Recognises clubs that excel at reaching external audiences through media coverage. Points accumulate across the year; the three highest totals win Gold, Silver, and Bronze. Points: TI Magazine article (10), local TV/radio (8), local print (6), online web media (4), TI Magazine photo (2). This award is for EXTERNAL coverage only — anything self-published on the club's own newsletter, social pages, or website is disqualified.",
    eligibility:
      "All coverage must relate to Toastmasters, promote its benefits, and add value for non-Toastmasters. Evidence (link/copy of the publication or broadcast details) must be submitted.",
    submission:
      "Submit evidence of publicity via district82.org/d82-submission within four weeks of publishing.",
    presentation: "Gold / Silver / Bronze.",
    keyDates: [
      { label: "Per publication", date: "2027-03-31", display: "Within 4 weeks of publishing" },
      { label: "Final cut-off", date: "2027-03-31", display: "31 Mar 2027" },
    ],
  },
  {
    id: "excellence-video-series",
    category: "pr",
    name: "Excellence in Video Series Award",
    subtitle: "Monthly leaderboard · Gold · Silver · Bronze",
    summary:
      "One short video per month across a nine-month cycle; scores accumulate on a leaderboard.",
    description:
      "Clubs may submit one video (30 seconds – 2 minutes) per month across the nine-month cycle (Jul 2026 – Mar 2027). Scores accumulate on the Annual Video Leaderboard; the three highest cumulative scores win Gold, Silver, and Bronze. Monthly recognition mirrors the flyer award. Judged on Innovation & Creativity (40%), Effort (25%), Value of Content (15%), Brand Compliance (10%), and Professionalism (10%).",
    eligibility:
      "Videos 30s–2min, no major brand violations, one video per club per month. If posting on social media, obtain TI approval per the Brand Manual.",
    criteria: [
      "Align with the published Monthly Theme — a non-aligned submission receives a 10% deduction.",
      "One video per club per month.",
      "Links must stay accessible throughout judging.",
    ],
    submission:
      "Upload the video (Google Drive or reliable file-share) and submit the link via district82.org/d82-submission. One video per month only.",
    presentation: "Monthly recognition + year-end Gold / Silver / Bronze.",
    keyDates: [
      { label: "Monthly cut-off", date: "2026-07-31", display: "Last day of each month" },
      { label: "Final cut-off", date: "2027-03-31", display: "31 Mar 2027" },
    ],
  },
  {
    id: "division-pr-excellence",
    category: "pr",
    name: "Division PR Excellence Award",
    subtitle: "Gold · Silver · Bronze",
    summary:
      "Honours Division PR Managers who lead PR effectively across their division.",
    description:
      "Acknowledges Division Public Relations Managers (PRMs) who demonstrate exemplary leadership in promoting Toastmasters within their divisions. The three highest-scoring PRMs win Gold, Silver, and Bronze. Judged on Club Support (20%), Division Campaigns (20%), Workshops & Training (15%), Division Social Media (15%), Newsletter Initiatives (10%), Documentation & Reporting (10%), and Innovation (10%). Each PRM may present and reflect on their year's work to the District PR Team after the cut-off.",
    eligibility:
      "Serving Division PRMs who are Toastmasters in good standing, do not hold a district leadership position or serve on a district extended team, maintain a consistent divisional social-media presence, and keep all channels brand-compliant throughout the year.",
    submission:
      "The application is available from 1 March 2027 on the district website; submit via district82.org/d82-submission.",
    presentation: "Gold / Silver / Bronze.",
    keyDates: [
      { label: "Opens", date: "2027-03-01", display: "1 Mar 2027" },
      { label: "Cut-off", date: "2027-03-31", display: "31 Mar 2027" },
    ],
  },
];

/* Monthly PR themes (Flyer & Video) — reference data shown on the Calendar page. */
const PR_THEMES = [
  { month: "July", theme: "Meet Your Club Leaders", focus: "Build trust in the new leadership team" },
  { month: "August", theme: "You Plus One", focus: "Membership building & club promotion" },
  { month: "September", theme: "Champions in Action", focus: "Contest success stories & speaking excellence" },
  { month: "October", theme: "Mentors Matter", focus: "Mentorship, coaching, member development" },
  { month: "November", theme: "Telling Our Story", focus: "Club newsletters & internal communication" },
  { month: "December", theme: "Celebrate with Style", focus: "Christmas themed meetings" },
  { month: "January", theme: "New Year, New Skills", focus: "Learning, growth, and self-improvement" },
  { month: "February", theme: "Success Starts Here", focus: "Member success stories, personal & professional growth" },
  { month: "March", theme: "Stronger Together", focus: "Joint meetings & club collaboration" },
];
