# Generated by Django 2.2.6 on 2019-10-23 21:56

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='cook_temp',
            field=models.IntegerField(default=1, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(1)]),
        ),
        migrations.AddField(
            model_name='recipe',
            name='cook_time',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='recipe',
            name='directions',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='recipe',
            name='is_public',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='prep_time',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='recipe',
            name='recipe_type',
            field=models.CharField(choices=[('BREAKFAST', 'Breakfast'), ('LUNCH', 'Lunch'), ('DINNER', 'Dinner'), ('DESSERT', 'Dessert')], default='', max_length=1),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='title',
            field=models.CharField(default='', max_length=255),
        ),
    ]
