# Generated by Django 3.2.12 on 2022-03-01 01:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0005_alter_recipe_steps'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='personal_notes',
            field=models.TextField(blank=True, null=True),
        ),
    ]