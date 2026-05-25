from rest_framework.decorators import api_view

from rest_framework.response import Response

from .models import NormalizedEmissionRecord

from .serializers import EmissionRecordSerializer


@api_view(['GET'])
def all_records(request):

    records = (
        NormalizedEmissionRecord.objects
        .all()
        .order_by('-created_at')
    )

    serializer = EmissionRecordSerializer(
        records,
        many=True
    )

    return Response(serializer.data)


@api_view(['GET'])
def flagged_records(request):

    records = (
        NormalizedEmissionRecord.objects
        .filter(is_flagged=True)
    )

    serializer = EmissionRecordSerializer(
        records,
        many=True
    )

    return Response(serializer.data)