# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', primary_key=True, auto_created=True)),
                ('character_name', models.CharField(max_length=50)),
                ('character_description', models.TextField(blank=True)),
                ('character_face', models.ImageField(upload_to='')),
                ('character_hair', models.ImageField(upload_to='', blank=True)),
                ('character_eyes', models.ImageField(upload_to='', blank=True)),
                ('character_mouth', models.ImageField(upload_to='', blank=True)),
                ('character_other', models.ImageField(upload_to='', blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Line',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', primary_key=True, auto_created=True)),
                ('text', models.TextField()),
                ('character', models.ForeignKey(to='salesfiction.Character')),
            ],
        ),
        migrations.CreateModel(
            name='Mood',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', primary_key=True, auto_created=True)),
                ('mood_name', models.CharField(max_length=50)),
                ('mood_face', models.ImageField(upload_to='', blank=True)),
                ('mood_hair', models.ImageField(upload_to='', blank=True)),
                ('mood_eyes', models.ImageField(upload_to='', blank=True)),
                ('mood_mouth', models.ImageField(upload_to='', blank=True)),
                ('mood_other', models.ImageField(upload_to='', blank=True)),
                ('character', models.ForeignKey(to='salesfiction.Character')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', primary_key=True, auto_created=True)),
                ('product_name', models.CharField(max_length=200)),
                ('product_content', models.TextField()),
                ('product_image1', models.ImageField(upload_to='', blank=True)),
                ('product_image2', models.ImageField(upload_to='', blank=True)),
                ('product_image3', models.ImageField(upload_to='', blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Script',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', primary_key=True, auto_created=True)),
                ('script_name', models.CharField(max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('product', models.ForeignKey(to='salesfiction.Product')),
            ],
        ),
        migrations.AddField(
            model_name='line',
            name='script',
            field=models.ForeignKey(to='salesfiction.Script'),
        ),
    ]
