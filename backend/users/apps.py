from django.apps import AppConfig


class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users'

    def ready(self):

        try:

            from django.contrib.auth.models import User

            if not User.objects.filter(
                username='admin'
            ).exists():

                User.objects.create_superuser(
                    username='admin',
                    email='admin@example.com',
                    password='admin123'
                )

                print("Admin user created")

        except Exception as e:

            print("Admin creation skipped:", e)