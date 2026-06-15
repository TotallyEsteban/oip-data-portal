# OIP Data Portal

Client-facing data access portal for Ocala Innovation Partners.

## Files

| File | What it is | When you edit it |
|------|-----------|-----------------|
| `index.html` | The portal UI | Almost never — only for design changes |
| `clients.js` | Client credentials & access | Every time you add or change a client |

## Adding a New Client

Open `clients.js` and copy the template at the bottom:

```javascript
'clientemail@company.com:theirpassword': {
  name:        'First Last',
  company:     'Company Name',
  tier:        'TIER 2 — MONTHLY LEASE',
  tierDesc:    'Brief description of what they licensed',
  renewal:     '2026-08-15',
  segments:    ['attorneys', 'title_search'],
  totalRecords: 9201,
},
```

Then push:

```bash
git add clients.js
git commit -m "Add [ClientName] — [Company]"
git push
```

Netlify auto-deploys in ~30 seconds. Client has access immediately.

## Available Segment IDs

**MuniScore:** `attorneys` `title_search` `hard_money` `sba_lenders` `pc_insurance` `prop_tax` `tax_resolution`

**DaaS Tier 1:** `private_equity` `list_brokers` `mktg_platforms` `recruit_plat`

**DaaS Tier 2:** `msp` `alarm` `wealth_mgmt` `staffing_all` `digital_mktg` `saas_all` `cre_all` `developers` `mortgage_all` `banking` `ins_agents` `physicians` `dental` `gc` `hvac_all`

**VP Platform:** `pawn` `auctions` `art_galleries`

**Enterprise (all access):** set `segments: 'all'`

## Login Credentials Format

```
email:password
```

Example: `dee@tdelante.com:dee2026`

Passwords should be unique per client. Change them anytime by editing `clients.js` and pushing.

## Deploy

Hosted on Netlify connected to this GitHub repo.
Any push to `main` auto-deploys in ~30 seconds.

Custom domain: `portal.voltageprovenance.com` (set in Netlify DNS settings)

## Support

Steve Sloan · (407) 569-5117 · steve.localreach@gmail.com
