# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('salesfiction', '0005_auto_20150501_0208'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='character_face',
            field=models.ImageField(upload_to='/home/landon/lf/static/characters/', blank=True),
        ),
    ]
