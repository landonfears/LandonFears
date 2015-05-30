# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('salesfiction', '0010_auto_20150506_0142'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='character_face',
            field=models.ImageField(blank=True, upload_to='/home/landon/lf/media/'),
        ),
    ]
