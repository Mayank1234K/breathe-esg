from django.db import models

from organizations.models import Organization
from django.contrib.auth.models import User


class DataSource(models.Model):

    SOURCE_CHOICES = [
        ('sap', 'SAP'),
        ('utility', 'Utility'),
        ('travel', 'Travel'),
    ]

    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE
    )

    source_type = models.CharField(
        max_length=50,
        choices=SOURCE_CHOICES
    )

    name = models.CharField(max_length=255)


class ImportBatch(models.Model):

    STATUS_CHOICES = [
        ('processing', 'Processing'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
    ]

    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE
    )

    data_source = models.ForeignKey(
        DataSource,
        on_delete=models.CASCADE
    )

    uploaded_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

    file_name = models.CharField(max_length=255)

    status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES
    )

    imported_at = models.DateTimeField(auto_now_add=True)


class RawRecord(models.Model):

    import_batch = models.ForeignKey(
        ImportBatch,
        on_delete=models.CASCADE
    )

    raw_payload = models.JSONField()

    row_number = models.IntegerField()

    parse_status = models.CharField(
        max_length=50,
        default='success'
    )

    error_message = models.TextField(
        blank=True,
        null=True
    )