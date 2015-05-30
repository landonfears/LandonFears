# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('salesfiction', '0013_auto_20150510_1715'),
    ]

    operations = [
        migrations.AlterField(
            model_name='script',
            name='pub_date',
            field=models.DateTimeField(verbose_name='date published', blank=True, default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='story',
            name='pub_date',
            field=models.DateTimeField(verbose_name='date published', blank=True, default=django.utils.timezone.now),
        ),
    ]
