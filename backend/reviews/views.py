from rest_framework.decorators import api_view

from rest_framework.response import Response

from emissions.models import (
    NormalizedEmissionRecord
)


@api_view(['POST'])
def approve_record(request, pk):

    record = (
        NormalizedEmissionRecord.objects.get(
            id=pk
        )
    )

    record.status = 'approved'

    record.save()

    return Response({
        'message': 'Record Approved'
    })


@api_view(['POST'])
def reject_record(request, pk):

    record = (
        NormalizedEmissionRecord.objects.get(
            id=pk
        )
    )

    record.status = 'rejected'

    record.save()

    return Response({
        'message': 'Record Rejected'
    })
@api_view(['DELETE'])
def delete_record(request, pk):

    record = (
        NormalizedEmissionRecord.objects.get(
            id=pk
        )
    )

    record.delete()

    return Response({
        'message': 'Record Deleted'
    })

@api_view(['POST'])
def bulk_delete_records(request):

    ids = request.data.get('ids', [])

    NormalizedEmissionRecord.objects.filter(
        id__in=ids
    ).delete()

    return Response({
        'message': 'Records Deleted'
    })