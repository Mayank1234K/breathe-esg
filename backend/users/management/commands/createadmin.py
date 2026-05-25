from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):

    def handle(self, *args, **kwargs):

        if not User.objects.filter(
            username='admin'
        ).exists():

            User.objects.create_superuser(
                username='admin',
                email='admin@example.com',
                password='admin123'
            )

            self.stdout.write(
                self.style.SUCCESS(
                    'Admin user created'
                )
            )

        else:

            self.stdout.write(
                self.style.WARNING(
                    'Admin already exists'
                )
            )