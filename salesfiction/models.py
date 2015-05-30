from django.db import models
from django.conf import settings
from django.utils import timezone

class Product(models.Model):
	product_name = models.CharField(max_length=200)
	product_content = models.TextField()
	product_image1 = models.ImageField(blank=True, upload_to=settings.PRODUCT_IMAGES_ROOT)
	product_image2 = models.ImageField(blank=True, upload_to=settings.PRODUCT_IMAGES_ROOT)
	product_image3 = models.ImageField(blank=True, upload_to=settings.PRODUCT_IMAGES_ROOT)
	def __str__(self):
		return self.product_name
	
class Character(models.Model):
	character_name = models.CharField(max_length=50)
	character_description = models.TextField(blank=True)
	character_face = models.ImageField(blank=True, upload_to=settings.CHARACTER_IMAGES_ROOT)
	character_hair = models.ImageField(blank=True, upload_to=settings.CHARACTER_IMAGES_ROOT)
	character_eyes = models.ImageField(blank=True, upload_to=settings.CHARACTER_IMAGES_ROOT)
	character_mouth = models.ImageField(blank=True, upload_to=settings.CHARACTER_IMAGES_ROOT)
	character_other = models.ImageField(blank=True, upload_to=settings.CHARACTER_IMAGES_ROOT)
	def __str__(self):
		return self.character_name
	
class Mood(models.Model):
	character = models.ForeignKey(Character)
	mood_name = models.CharField(max_length=50)
	mood_face = models.ImageField(blank=True, upload_to=settings.CHARACTER_IMAGES_ROOT)
	mood_hair = models.ImageField(blank=True, upload_to=settings.CHARACTER_IMAGES_ROOT)
	mood_eyes = models.ImageField(blank=True, upload_to=settings.CHARACTER_IMAGES_ROOT)
	mood_mouth = models.ImageField(blank=True, upload_to=settings.CHARACTER_IMAGES_ROOT)
	mood_other = models.ImageField(blank=True, upload_to=settings.CHARACTER_IMAGES_ROOT)
	def __str__(self):
		return '%s - %s' % (self.character.character_name, self.mood_name)
	
class Story(models.Model):
	story_name = models.CharField(max_length=200)
	story_description = models.TextField()
	pub_date = models.DateTimeField('date published', default=timezone.now, blank=True)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	def __str__(self):
		return self.story_name
		
class Script(models.Model):
	story = models.ForeignKey(Story, related_name='scripts')
	product = models.ForeignKey(Product)
	script_name = models.CharField(max_length=200)
	color = models.CharField(max_length=10, default='#000000')
	pub_date = models.DateTimeField('date published', default=timezone.now, blank=True)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	def __str__(self):
		return self.script_name
	
class Line(models.Model):
	mood = models.ForeignKey(Mood)
	script = models.ForeignKey(Script, related_name='lines')
	text = models.TextField()