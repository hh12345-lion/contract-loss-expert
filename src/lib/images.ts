export type SitePhoto = { src: string; alt: string };

const photo = (file: string, alt: string): SitePhoto => ({
  src: `/images/site/${file}.webp`,
  alt,
});

export const photos = {
  contractPen: photo("contract-pen", "Fountain pen resting on a printed contract"),
  clipboardContract: photo("clipboard-contract", "Signed agreement on a clipboard on a wooden desk"),
  dealTable: photo("deal-table", "Handshake across a table covered in reports and a laptop"),
  agreement: photo("agreement", "Two people shaking hands over paperwork on a desk"),
  handshakeSuits: photo("handshake-suits", "Handshake between two people in business suits"),
  crane: photo("crane", "Tower crane above a construction site"),
  site: photo("site", "Mobile crane working on a large construction site"),
  containers: photo("containers", "Stacks of shipping containers and timber in a freight yard"),
  port: photo("port", "Container terminal with gantry cranes"),
  servers: photo("servers", "Rows of server racks in a data centre"),
  pylons: photo("pylons", "Electricity pylons and power lines across a field"),
  retail: photo("retail", "Aisles and signage inside a retail store"),
  towers: photo("towers", "Office towers seen from street level"),
  boardroom: photo("boardroom", "Professionals in discussion around a boardroom table"),
  gavelBooks: photo("gavel-books", "Gavel beside bound law reports"),
  gavelScales: photo("gavel-scales", "Gavel on an open book with scales of justice behind"),
  factory: photo("factory", "Robotic production line in a vehicle factory"),
  calculatorLedger: photo("calculator-ledger", "Calculator and pen on a ledger sheet"),
  calculatorFigures: photo("calculator-figures", "Calculator and pen on a printed column of figures"),
  analysisDesk: photo("analysis-desk", "Overhead view of a person reviewing printed charts beside a laptop"),
  chartsPaper: photo("charts-paper", "Printed bar and pie charts in an open report"),
  spreadsheetGlasses: photo("spreadsheet-glasses", "Calculator and glasses on printed spreadsheets"),
  mixingDesk: photo("mixing-desk", "Close view of a studio mixing desk"),
  trucks: photo("trucks", "Lorries on a motorway at dusk"),
  exchange: photo("exchange", "Trading floor display at a stock exchange"),
  coinsChart: photo("coins-chart", "Stacks of coins beside a line chart"),
} satisfies Record<string, SitePhoto>;

export type PhotoKey = keyof typeof photos;

/** Photograph for each service, keyed by service id. */
export const serviceImage: Record<string, PhotoKey> = {
  "lost-profits": "calculatorLedger",
  "wasted-expenditure": "calculatorFigures",
  "consequential-loss": "chartsPaper",
  "construction-quantum": "crane",
  "supply-chain-loss": "containers",
  "professional-negligence-damages": "boardroom",
  "ip-licensing-loss": "mixingDesk",
  "expert-determination": "gavelScales",
};

/** Photograph for each sector page, keyed by slug. */
export const sectorImage: Record<string, PhotoKey> = {
  "construction-engineering": "site",
  "technology-software": "servers",
  "supply-chain-manufacturing": "factory",
  "financial-services-banking": "exchange",
  "retail-consumer-goods": "retail",
  "professional-services": "towers",
  "energy-utilities": "pylons",
  "media-entertainment-ip": "mixingDesk",
};

/** Photograph for each case type page, keyed by slug. */
export const caseTypeImage: Record<string, PhotoKey> = {
  "commercial-contract-breach": "contractPen",
  "construction-quantum-disputes": "crane",
  "supply-chain-failure": "port",
  "professional-negligence-loss": "boardroom",
  "ip-licence-breach": "mixingDesk",
  "earn-out-ma-dispute": "handshakeSuits",
  "franchise-agreement-breach": "retail",
  "employment-contract-loss": "clipboardContract",
  "joint-venture-dispute": "dealTable",
  "distribution-agency-agreement": "trucks",
};
