from django.contrib import admin

from .models import Character, Mood, Product, Line, Story, Script

class MoodInline(admin.StackedInline):
    model = Mood
    extra = 1
	
class LineInline(admin.TabularInline):
    model = Line
    extra = 2
	
class CharacterAdmin(admin.ModelAdmin):
	fieldsets = [
        ('Character Details', {'fields': ['character_name', 'character_description']}),
        ('Character Images', {'fields': ['character_face', 'character_hair', 'character_eyes', 'character_mouth', 'character_other'], 'classes': ['collapse']}),
    ]
	inlines = [MoodInline]
	list_display = ('character_name', 'character_description')

class ProductAdmin(admin.ModelAdmin):
	fieldsets = [
        ('Product Details', {'fields': ['product_name', 'product_content']}),
        ('Product Images', {'fields': ['product_image1', 'product_image2', 'product_image3'], 'classes': ['collapse']}),
    ]
	list_display = ('product_name', 'product_content')
	
class StoryAdmin(admin.ModelAdmin):
	fields = ['story_name', 'story_description', 'pub_date']
	list_display = ('story_name', 'story_description', 'pub_date', 'created_at', 'updated_at')
	
class ScriptAdmin(admin.ModelAdmin):
	inlines = [LineInline]
	list_display = ('script_name', 'pub_date', 'created_at', 'updated_at')
	
admin.site.register(Story, StoryAdmin)	
admin.site.register(Product, ProductAdmin)
admin.site.register(Character, CharacterAdmin)
admin.site.register(Script, ScriptAdmin)