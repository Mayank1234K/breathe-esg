from emissions.models import NormalizedEmissionRecord

from .utils import EMISSION_FACTORS


def process_sap(df, organization, raw_records):

    for index, row in df.iterrows():

        try:

            quantity = float(row['MENGE'])

            co2e = (
                quantity *
                EMISSION_FACTORS['diesel_liter']
            )

            flagged = quantity > 10000

            NormalizedEmissionRecord.objects.create(

                organization=organization,

                raw_record=raw_records[index],

                scope='Scope 1',

                category='Fuel',

                activity_type='Diesel Fuel',

                activity_date='2026-05-01',

                quantity=quantity,

                unit='liter',

                normalized_quantity=quantity,

                normalized_unit='liter',

                emission_factor=EMISSION_FACTORS['diesel_liter'],

                co2e_kg=co2e,

                is_flagged=flagged,
            )

            print("SAP Record Saved")

        except Exception as e:

            print("SAP ERROR:", e)



def process_utility(df, organization, raw_records):

    for index, row in df.iterrows():

        try:

            quantity = float(row['kwh'])

            co2e = (
                quantity *
                EMISSION_FACTORS['electricity_kwh']
            )

            flagged = quantity > 50000

            NormalizedEmissionRecord.objects.create(

                organization=organization,

                raw_record=raw_records[index],

                scope='Scope 2',

                category='Electricity',

                activity_type='Grid Electricity',

                activity_date='2026-05-01',

                quantity=quantity,

                unit='kwh',

                normalized_quantity=quantity,

                normalized_unit='kwh',

                emission_factor=EMISSION_FACTORS['electricity_kwh'],

                co2e_kg=co2e,

                is_flagged=flagged,
            )

            print("UTILITY Record Saved")

        except Exception as e:

            print("UTILITY ERROR:", e)



def process_travel(df, organization, raw_records):

    for index, row in df.iterrows():

        try:

            quantity = float(row['distance_km'])

            co2e =round (
                quantity *
                EMISSION_FACTORS['flight_km'], 2
            )

            flagged = quantity > 10000

            NormalizedEmissionRecord.objects.create(

                organization=organization,

                raw_record=raw_records[index],

                scope='Scope 3',

                category='Business Travel',

                activity_type='Flight',

                activity_date='2026-05-01',

                quantity=quantity,

                unit='km',

                normalized_quantity=quantity,

                normalized_unit='km',

                emission_factor=EMISSION_FACTORS['flight_km'],

                co2e_kg=co2e,

                is_flagged=flagged,
            )

            print("TRAVEL Record Saved")

        except Exception as e:

            print("TRAVEL ERROR:", e)