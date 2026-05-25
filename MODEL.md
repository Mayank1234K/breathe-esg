# MODEL.md

## Overview

The platform is designed around immutable raw ingestion records and normalized emission records.

## Multi Tenancy

Organizations act as tenants.

All imported records belong to an organization.

## Raw Records

RawRecord preserves original uploaded data for:

- traceability
- auditing
- source lineage

## Normalized Records

NormalizedEmissionRecord stores cleaned ESG activity data.

## Scope Mapping

- Scope 1 → Fuel
- Scope 2 → Electricity
- Scope 3 → Travel

## Auditability

Each normalized record links back to its raw source row.

## Approval Workflow

Records can be:

- pending
- approved
- rejected