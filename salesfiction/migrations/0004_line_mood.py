# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('salesfiction', '0003_auto_20150501_0204'),
    ]

    operations = [
        migrations.AddField(
            model_name='line',
            name='mood',
            field=models.ForeignKey(default=0, to='salesfiction.Mood'),
        ),
    ]
