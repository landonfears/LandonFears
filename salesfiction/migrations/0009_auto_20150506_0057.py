# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('salesfiction', '0008_script_color'),
    ]

    operations = [
        migrations.AddField(
            model_name='story',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2015, 5, 6, 0, 57, 2, 306581, tzinfo=utc), auto_now_add=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='story',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2015, 5, 6, 0, 57, 7, 386359, tzinfo=utc), auto_now=True),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='character',
            name='character_eyes',
            field=models.ImageField(blank=True, upload_to='/home/landon/lf/media/'),
        ),
        migrations.AlterField(
            model_name='character',
            name='character_face',
            field=models.ImageField(blank=True, upload_to='/home/landon/lf/media/'),
        ),
        migrations.AlterField(
            model_name='character',
            name='character_hair',
            field=models.ImageField(blank=True, upload_to='/home/landon/lf/media/'),
        ),
        migrations.AlterField(
            model_name='character',
            name='character_mouth',
            field=models.ImageField(blank=True, upload_to='/home/landon/lf/media/'),
        ),
        migrations.AlterField(
            model_name='character',
            name='character_other',
            field=models.ImageField(blank=True, upload_to='/home/landon/lf/media/'),
        ),
        migrations.AlterField(
            model_name='line',
            name='script',
            field=models.ForeignKey(related_name='lines', to='salesfiction.Script'),
        ),
        migrations.AlterField(
            model_name='mood',
            name='mood_eyes',
            field=models.ImageField(blank=True, upload_to='/home/landon/lf/media/'),
        ),
        migrations.AlterField(
            model_name='mood',
            name='mood_face',
            field=models.ImageField(blank=True, upload_to='/home/landon/lf/media/'),
        ),
        migrations.AlterField(
            model_name='mood',
            name='mood_hair',
            field=models.ImageField(blank=True, upload_to='/home/landon/lf/media/'),
        ),
        migrations.AlterField(
            model_name='mood',
            name='mood_mouth',
            field=models.ImageField(blank=True, upload_to='/home/landon/lf/media/'),
        ),
        migrations.AlterField(
            model_name='mood',
            name='mood_other',
            field=models.ImageField(blank=True, upload_to='/home/landon/lf/media/'),
        ),
        migrations.AlterField(
            model_name='product',
            name='product_image1',
            field=models.ImageField(blank=True, upload_to='/home/landon/lf/media/'),
        ),
        migrations.AlterField(
            model_name='product',
            name='product_image2',
            field=models.ImageField(blank=True, upload_to='/home/landon/lf/media/'),
        ),
        migrations.AlterField(
            model_name='product',
            name='product_image3',
            field=models.ImageField(blank=True, upload_to='/home/landon/lf/media/'),
        ),
    ]
