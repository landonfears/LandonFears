# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('salesfiction', '0012_auto_20150508_0203'),
    ]

    operations = [
        migrations.AddField(
            model_name='script',
            name='pub_date',
            field=models.DateTimeField(verbose_name='date published', blank=True, default=datetime.datetime(2015, 5, 10, 17, 15, 54, 198450, tzinfo=utc)),
        ),
        migrations.AddField(
            model_name='story',
            name='pub_date',
            field=models.DateTimeField(verbose_name='date published', blank=True, default=datetime.datetime(2015, 5, 10, 17, 15, 54, 197494, tzinfo=utc)),
        ),
    ]
