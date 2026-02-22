export type CommitteeCode =
  | "PR"
  | "OC"
  | "WEB"
  | "HR"
  | "FR"
  | "SM"
  | "CIVIL"
  | "MECH"
  | "POWER"
  | "COMM";

export type CommitteeStats = {
  members: number;
  secondaryLabel: string;
  secondaryValue: string | number;
};

export type CommitteeDetail = {
  id: string;
  name: string;
  fullName: string;
  about: string;
  stats: CommitteeStats;
  tasks: string[];
  achievements: string[];
};

export type CommitteeDetailsMap = Record<CommitteeCode, CommitteeDetail>;

function createCommitteeDetail(
  id: string,
  name: string,
  fullName: string,
  about: string,
  members: number,
  secondaryLabel: string,
  secondaryValue: string | number,
  tasks: string[],
  achievements: string[],
): CommitteeDetail {
  return {
    id,
    name,
    fullName,
    about,
    stats: { members, secondaryLabel, secondaryValue },
    tasks,
    achievements,
  };
}

export const committeeDetails: CommitteeDetailsMap = {
  PR: createCommitteeDetail(
    "pr",
    "PR",
    "Public Relations",
    "The Public Relations committee manages external communications, " +
      "partnerships, and brand representation. They ensure IEEE SVU SB " +
      "maintains a positive public image and strong stakeholder ties.",
    45,
    "Sponsorship",
    45,
    [
      "Manage media relations and press releases",
      "Build partnerships with industry sponsors",
      "Coordinate with other IEEE chapters",
    ],
    [
      "Secured 5 major corporate sponsorships in 2024",
      "Featured in 3 national tech publications",
      "Grew social media following by 200%",
    ],
  ),
  OC: createCommitteeDetail(
    "oc",
    "OC",
    "Organizing Committee",
    "The Organizing Committee plans and orchestrates flagship events, " +
      "balancing timelines, logistics, and team coordination end-to-end.",
    31,
    "Events",
    18,
    [
      "Define event plans and master schedules",
      "Manage operations readiness before launch",
      "Coordinate cross-committee execution",
    ],
    [
      "Delivered annual conference with 1,200+ attendees",
      "Reduced event delays through process standardization",
      "Built reusable operations playbooks",
    ],
  ),
  WEB: createCommitteeDetail(
    "web",
    "Web",
    "Web Development",
    "The Web committee designs and ships digital products for IEEE SVU SB. " +
      "They maintain platforms and improve performance continuously.",
    30,
    "Projects",
    16,
    [
      "Develop and maintain website and event pages",
      "Build registration and automation interfaces",
      "Improve UX, accessibility, and front-end performance",
    ],
    [
      "Launched a modern branch website for 2025 season",
      "Reduced average page load time by 48%",
      "Delivered 6 internal workflow tools",
    ],
  ),
  HR: createCommitteeDetail(
    "hr",
    "HR",
    "Human Resources",
    "The HR committee leads recruitment, onboarding, and member engagement. " +
      "They support team culture and collaboration across committees.",
    36,
    "Sessions",
    "50+",
    [
      "Run recruitment and onboarding cycles",
      "Track member progress and performance",
      "Organize engagement and team-building activities",
    ],
    [
      "Onboarded over 100 members in one cycle",
      "Improved retention with mentorship tracks",
      "Standardized member follow-up process",
    ],
  ),
  FR: createCommitteeDetail(
    "fr",
    "FR",
    "Fundraising",
    "The Fundraising committee secures financial resources and sponsors to " +
      "support branch activities and strategic initiatives.",
    22,
    "Partners",
    39,
    [
      "Create sponsorship packages and outreach plans",
      "Maintain relationships with corporate partners",
      "Align funding with event and project goals",
    ],
    [
      "Closed 7 sponsorship agreements in one season",
      "Increased recurring partners year-over-year",
      "Achieved full budget coverage for key events",
    ],
  ),
  SM: createCommitteeDetail(
    "sm",
    "SM",
    "Social Media",
    "The Social Media committee crafts platform strategy and content to " +
      "strengthen visibility and community engagement.",
    27,
    "Reach",
    "1M+",
    [
      "Build content calendars and campaigns",
      "Cover events with real-time publishing",
      "Monitor analytics and optimize growth",
    ],
    [
      "Doubled engagement rate across major platforms",
      "Reached new audiences through campaign collaborations",
      "Created consistent visual identity guidelines",
    ],
  ),
  CIVIL: createCommitteeDetail(
    "civil",
    "CIVIL",
    "Civil Engineering",
    "The Civil committee drives technical learning tracks, workshops, and " +
      "hands-on sessions for civil students and enthusiasts.",
    25,
    "Workshops",
    11,
    [
      "Design technical workshops and practical labs",
      "Host domain experts and mentorship circles",
      "Support civil-themed competitions and projects",
    ],
    [
      "Held 12 specialized technical sessions",
      "Launched a mentorship pathway for new members",
      "Partnered with industry engineers for talks",
    ],
  ),
  MECH: createCommitteeDetail(
    "mech",
    "MECH",
    "Mechanical Engineering",
    "The Mechanical committee develops challenge-based programs focused on " +
      "mechanical systems, design thinking, and prototyping.",
    24,
    "Prototypes",
    10,
    [
      "Run CAD and design workshops",
      "Coordinate prototype-focused project tracks",
      "Prepare teams for engineering contests",
    ],
    [
      "Built cross-year project squads for competitions",
      "Increased participation in technical challenges",
      "Delivered skill-based training with mentors",
    ],
  ),
  POWER: createCommitteeDetail(
    "power",
    "POWER",
    "Power & Energy",
    "The Power committee focuses on energy systems, smart grids, and power " +
      "applications through applied workshops and seminars.",
    26,
    "Seminars",
    13,
    [
      "Host power systems technical sessions",
      "Create study groups for core power topics",
      "Lead energy-oriented project initiatives",
    ],
    [
      "Produced practical labs around protection systems",
      "Published technical guides for members",
      "Organized a power-focused mini summit",
    ],
  ),
  COMM: createCommitteeDetail(
    "comm",
    "COMM",
    "Communications",
    "The Communications committee develops skills and projects around signal " +
      "processing, networking, and communication systems.",
    23,
    "Campaigns",
    12,
    [
      "Plan sessions on communication fundamentals",
      "Support hands-on networking activities",
      "Guide mini projects around signal applications",
    ],
    [
      "Ran a communication systems bootcamp",
      "Increased member participation in technical tracks",
      "Documented reusable learning resources",
    ],
  ),
};

export const committeeOrder: CommitteeCode[] = [
  "PR",
  "OC",
  "WEB",
  "HR",
  "FR",
  "SM",
  "CIVIL",
  "MECH",
  "POWER",
  "COMM",
];
