from django.urls import path

from .views import (
    UploadSAPView,
    UploadUtilityView,
    UploadTravelView
)

urlpatterns = [

    path(
        'upload/sap/',
        UploadSAPView.as_view()
    ),

    path(
        'upload/utility/',
        UploadUtilityView.as_view()
    ),

    path(
        'upload/travel/',
        UploadTravelView.as_view()
    ),
]