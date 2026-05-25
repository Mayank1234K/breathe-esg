from django.apps import AppConfig


class OrganizationsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'organizations'

    def ready(self):

        try:

            from organizations.models import Organization
            from ingestion.models import DataSource

            if not Organization.objects.exists():

                org = Organization.objects.create(
                    name='Demo Organization'
                )

                DataSource.objects.create(
                    organization=org,
                    source_type='sap',
                    name='SAP ECC Export'
                )

                DataSource.objects.create(
                    organization=org,
                    source_type='utility',
                    name='Utility Portal Export'
                )

                DataSource.objects.create(
                    organization=org,
                    source_type='travel',
                    name='Concur Export'
                )

                print("Initial demo data created")

        except Exception as e:

            print("Startup data creation skipped:", e)