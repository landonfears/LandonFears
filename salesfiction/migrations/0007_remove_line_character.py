# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('salesfiction', '0006_auto_20150501_0211'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='line',
            name='character',
        ),
    ]
