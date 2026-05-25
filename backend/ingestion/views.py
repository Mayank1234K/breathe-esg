import pandas as pd

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser

from organizations.models import Organization

from .models import (
    DataSource,
    ImportBatch,
    RawRecord
)

from .parsers import (
    process_sap,
    process_utility,
    process_travel
)


class UploadSAPView(APIView):

    parser_classes = [MultiPartParser]

    def post(self, request):

        file = request.FILES['file']

        df = pd.read_csv(file)

        organization = Organization.objects.first()

        datasource = DataSource.objects.get(
            source_type='sap'
        )

        batch = ImportBatch.objects.create(
            organization=organization,
            data_source=datasource,
            uploaded_by=None,
            file_name=file.name,
            status='processing'
        )

        raw_records = []

        for idx, row in df.iterrows():

            raw = RawRecord.objects.create(
                import_batch=batch,
                raw_payload=row.to_dict(),
                row_number=idx + 1,
            )

            raw_records.append(raw)

        process_sap(df, organization, raw_records)

        batch.status = 'completed'
        batch.save()

        return Response({
            'message': 'SAP Upload Successful'
        })


class UploadUtilityView(APIView):

    parser_classes = [MultiPartParser]

    def post(self, request):

        file = request.FILES['file']

        df = pd.read_csv(file)

        organization = Organization.objects.first()

        datasource = DataSource.objects.get(
            source_type='utility'
        )

        batch = ImportBatch.objects.create(
            organization=organization,
            data_source=datasource,
            uploaded_by=None,
            file_name=file.name,
            status='processing'
        )

        raw_records = []

        for idx, row in df.iterrows():

            raw = RawRecord.objects.create(
                import_batch=batch,
                raw_payload=row.to_dict(),
                row_number=idx + 1,
            )

            raw_records.append(raw)

        process_utility(df, organization, raw_records)

        batch.status = 'completed'
        batch.save()

        return Response({
            'message': 'Utility Upload Successful'
        })


class UploadTravelView(APIView):

    parser_classes = [MultiPartParser]

    def post(self, request):

        file = request.FILES['file']

        df = pd.read_csv(file)

        organization = Organization.objects.first()

        datasource = DataSource.objects.get(
            source_type='travel'
        )

        batch = ImportBatch.objects.create(
            organization=organization,
            data_source=datasource,
            uploaded_by=None,
            file_name=file.name,
            status='processing'
        )

        raw_records = []

        for idx, row in df.iterrows():

            raw = RawRecord.objects.create(
                import_batch=batch,
                raw_payload=row.to_dict(),
                row_number=idx + 1,
            )

            raw_records.append(raw)

        process_travel(df, organization, raw_records)

        batch.status = 'completed'
        batch.save()

        return Response({
            'message': 'Travel Upload Successful'
        })