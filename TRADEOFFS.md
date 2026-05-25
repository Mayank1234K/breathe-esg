# TRADEOFFS.md

## No OCR

PDF OCR was intentionally excluded because invoice formats vary heavily.

## No Async Pipelines

Celery and distributed workers were excluded to keep the prototype focused.

## No Live SAP APIs

Real SAP integrations require security approvals and enterprise infrastructure.