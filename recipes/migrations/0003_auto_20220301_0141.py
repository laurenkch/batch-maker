# Generated by Django 3.2.12 on 2022-03-01 01:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0002_auto_20220301_0132'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='cook_time',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='makes',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='prep_time',
        ),
        migrations.RemoveField(
            model_name='recipe',
            name='temp_system',
        ),
    ]
