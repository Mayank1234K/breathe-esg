from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):

    def handle(self, *args, **kwargs):

        user, created = User.objects.get_or_create(
            username='admin'
        )

        user.set_password('admin123')

        user.is_superuser = True
        user.is_staff = True

        user.save()

        self.stdout.write(
            self.style.SUCCESS(
                'Admin password reset successfully'
            )
        )