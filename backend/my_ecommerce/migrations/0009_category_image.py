# Generated by Django 5.0.3 on 2024-07-21 08:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_ecommerce', '0008_alter_contact_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to='category_images/'),
        ),
    ]
