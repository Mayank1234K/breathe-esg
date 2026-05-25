from django.urls import path

from .views import (
    approve_record,
    reject_record,
    delete_record,
    bulk_delete_records
)

urlpatterns = [

    path(
        'approve/<int:pk>/',
        approve_record
    ),

    path(
        'reject/<int:pk>/',
        reject_record
    ),
    path(
    'delete/<int:pk>/',
    delete_record
),
    path(
    'bulk-delete/',
    bulk_delete_records
),
]