# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('salesfiction', '0009_auto_20150506_0057'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='character_face',
            field=models.ImageField(upload_to='/media/', blank=True),
        ),
        migrations.AlterField(
            model_name='script',
            name='story',
            field=models.ForeignKey(to='salesfiction.Story', related_name='scripts'),
        ),
    ]
