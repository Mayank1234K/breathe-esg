from django.db import models

from organizations.models import Organization
from ingestion.models import RawRecord


class NormalizedEmissionRecord(models.Model):

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]

    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE
    )

    raw_record = models.ForeignKey(
        RawRecord,
        on_delete=models.CASCADE
    )

    scope = models.CharField(max_length=20)

    category = models.CharField(max_length=100)

    activity_type = models.CharField(max_length=100)

    activity_date = models.DateField()

    quantity = models.FloatField()

    unit = models.CharField(max_length=50)

    normalized_quantity = models.FloatField()

    normalized_unit = models.CharField(max_length=50)

    emission_factor = models.FloatField()

    co2e_kg = models.FloatField()

    is_flagged = models.BooleanField(default=False)

    status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default='pending'
    )

    created_at = models.DateTimeField(auto_now_add=True)