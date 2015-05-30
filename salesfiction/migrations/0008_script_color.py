# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('salesfiction', '0007_remove_line_character'),
    ]

    operations = [
        migrations.AddField(
            model_name='script',
            name='color',
            field=models.CharField(default='#000000', max_length=10),
        ),
    ]
