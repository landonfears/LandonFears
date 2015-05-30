# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('salesfiction', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='character_eyes',
            field=models.ImageField(upload_to='/home/landon/lf/static/characters/', blank=True),
        ),
        migrations.AlterField(
            model_name='character',
            name='character_face',
            field=models.ImageField(upload_to='/home/landon/lf/static/characters/'),
        ),
        migrations.AlterField(
            model_name='character',
            name='character_hair',
            field=models.ImageField(upload_to='/home/landon/lf/static/characters/', blank=True),
        ),
        migrations.AlterField(
            model_name='character',
            name='character_mouth',
            field=models.ImageField(upload_to='/home/landon/lf/static/characters/', blank=True),
        ),
        migrations.AlterField(
            model_name='character',
            name='character_other',
            field=models.ImageField(upload_to='/home/landon/lf/static/characters/', blank=True),
        ),
        migrations.AlterField(
            model_name='mood',
            name='mood_eyes',
            field=models.ImageField(upload_to='/home/landon/lf/static/characters/', blank=True),
        ),
        migrations.AlterField(
            model_name='mood',
            name='mood_face',
            field=models.ImageField(upload_to='/home/landon/lf/static/characters/', blank=True),
        ),
        migrations.AlterField(
            model_name='mood',
            name='mood_hair',
            field=models.ImageField(upload_to='/home/landon/lf/static/characters/', blank=True),
        ),
        migrations.AlterField(
            model_name='mood',
            name='mood_mouth',
            field=models.ImageField(upload_to='/home/landon/lf/static/characters/', blank=True),
        ),
        migrations.AlterField(
            model_name='mood',
            name='mood_other',
            field=models.ImageField(upload_to='/home/landon/lf/static/characters/', blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='product_image1',
            field=models.ImageField(upload_to='/home/landon/lf/static/products/', blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='product_image2',
            field=models.ImageField(upload_to='/home/landon/lf/static/products/', blank=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='product_image3',
            field=models.ImageField(upload_to='/home/landon/lf/static/products/', blank=True),
        ),
    ]
