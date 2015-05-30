# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('salesfiction', '0004_line_mood'),
    ]

    operations = [
        migrations.AlterField(
            model_name='line',
            name='mood',
            field=models.ForeignKey(to='salesfiction.Mood'),
        ),
        migrations.AlterField(
            model_name='script',
            name='story',
            field=models.ForeignKey(to='salesfiction.Story'),
        ),
    ]
