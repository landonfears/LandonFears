# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('salesfiction', '0002_auto_20150501_0100'),
    ]

    operations = [
        migrations.CreateModel(
            name='Story',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('story_name', models.CharField(max_length=200)),
                ('story_description', models.TextField()),
            ],
        ),
        migrations.AddField(
            model_name='script',
            name='story',
            field=models.ForeignKey(to='salesfiction.Story', default=0),
        ),
    ]
