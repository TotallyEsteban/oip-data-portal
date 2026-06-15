// ============================================================
// OIP DATA PORTAL — CLIENT CONFIGURATION
// ============================================================
// This is the ONLY file you need to edit.
// Add a client, push to GitHub, they have access in 30 seconds.
//
// TO ADD A CLIENT:
//   1. Copy one of the blocks below
//   2. Change the email, password, name, tier, segments
//   3. Save this file
//   4. git add . && git commit -m "Add [ClientName]" && git push
//   5. Done — client has access immediately
//
// SEGMENT IDs (use these in the segments array):
//   MUNISCORE:  attorneys, title_search, hard_money, sba_lenders,
//               pc_insurance, prop_tax, tax_resolution
//   DAAS TIER1: private_equity, list_brokers, mktg_platforms, recruit_plat
//   DAAS TIER2: msp, alarm, wealth_mgmt, staffing_all, digital_mktg,
//               saas_all, cre_all, developers, biz_brokers, mortgage_all,
//               banking, cpa, ins_agents, physicians, dental, gc, hvac_all
//   VP PLATFORM: pawn, auctions, art_galleries
//   Use 'all' to give access to everything (Enterprise tier)
// ============================================================

const CLIENTS = {

  // ── ADMIN ─────────────────────────────────────────────────
  // Steve Sloan — full access
  'steve.localreach@gmail.com:oip2026admin': {
    name:        'Steve Sloan',
    company:     'Ocala Innovation Partners',
    tier:        'ENTERPRISE — FULL ACCESS',
    tierDesc:    'All 74 verticals · 3.7M records · Admin view',
    renewal:     'Lifetime',
    segments:    'all',
    totalRecords: 3700000,
  },

  // ── ACTIVE CLIENTS ─────────────────────────────────────────

  // Dee Clarke — T De Lante
  // Tier: Monthly Lease · PE/SaaS/CRE/Lender segments
  // Signed: TBD · Rate: $1,500/mo
  'dee@tdelante.com:dee2026': {
    name:        'Dee Clarke',
    company:     'T De Lante',
    tier:        'TIER 2 — MONTHLY LEASE',
    tierDesc:    'PE/VC · SaaS · Commercial Lenders · CRE · Hard Money',
    renewal:     '2026-07-15',
    segments:    ['private_equity', 'saas_all', 'sba_lenders',
                  'cre_all', 'developers', 'hard_money'],
    totalRecords: 47890,
  },

  // ── DEMO ACCOUNTS ──────────────────────────────────────────

  // Attorney / MuniScore demo
  'demo@lawfirm.com:muniscore2026': {
    name:        'Demo Client',
    company:     'Law Office Demo',
    tier:        'MUNISCORE — ATTORNEY TIER',
    tierDesc:    '38,500 active FL lien cases · Pre-qualified client pipeline',
    renewal:     '2026-07-15',
    segments:    ['attorneys', 'title_search', 'hard_money'],
    totalRecords: 38500,
  },

  // MSP / IT demo
  'demo@mspfirm.com:msp2026': {
    name:        'Demo Client',
    company:     'MSP Demo Access',
    tier:        'TIER 2 — IT/MSP SEGMENT',
    tierDesc:    '8,400+ FL SMBs · 90-day rebuy cycle',
    renewal:     '2026-07-15',
    segments:    ['msp', 'alarm', 'saas_all'],
    totalRecords: 21890,
  },

  // ── TEMPLATE — COPY THIS TO ADD NEW CLIENTS ────────────────
  //
  // 'clientemail@company.com:theirpassword': {
  //   name:        'First Last',
  //   company:     'Company Name',
  //   tier:        'TIER 2 — MONTHLY LEASE',
  //   tierDesc:    'Brief description of what they licensed',
  //   renewal:     '2026-08-15',           // or 'Lifetime'
  //   segments:    ['attorneys', 'title_search'],
  //   totalRecords: 9201,
  // },

};

// ── DO NOT EDIT BELOW THIS LINE ─────────────────────────────
// This exports CLIENTS so index.html can load it
if (typeof module !== 'undefined') module.exports = CLIENTS;
