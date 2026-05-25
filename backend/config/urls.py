from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),
    path('api/users/', include('users.urls')),

    path('api/ingestion/', include('ingestion.urls')),
    path('api/emissions/', include('emissions.urls')),
    path('api/reviews/', include('reviews.urls')),
]