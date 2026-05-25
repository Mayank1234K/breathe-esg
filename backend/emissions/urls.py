from django.urls import path

from .views import (
    all_records,
    flagged_records
)

urlpatterns = [

    path(
        'all/',
        all_records
    ),

    path(
        'flagged/',
        flagged_records
    ),
]