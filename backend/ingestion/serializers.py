from rest_framework import serializers

from .models import (
    DataSource,
    ImportBatch,
    RawRecord
)


class DataSourceSerializer(serializers.ModelSerializer):

    class Meta:

        model = DataSource

        fields = '__all__'


class ImportBatchSerializer(serializers.ModelSerializer):

    class Meta:

        model = ImportBatch

        fields = '__all__'


class RawRecordSerializer(serializers.ModelSerializer):

    class Meta:

        model = RawRecord

        fields = '__all__'