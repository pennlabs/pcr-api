# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-02-08 08:36
from __future__ import unicode_literals

import api.apiconsumer.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='APIConsumer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, unique=True)),
                ('email', models.EmailField(max_length=75, unique=True)),
                ('description', models.TextField()),
                ('token', models.CharField(default=api.apiconsumer.models.generate_key, max_length=200, unique=True)),
                ('permission_level', models.IntegerField(default=2)),
            ],
        ),
    ]
