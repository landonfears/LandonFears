from rest_framework import serializers, filters

from salesfiction.models import Script, Character, Product, Mood, Story, Line
		
class StoryScriptSerializer(serializers.ModelSerializer):
	class Meta:
		model = Script
		
		fields = ('id', 'pub_date', 'created_at', 'updated_at')
		read_only_fields = ('id', 'pub_date', 'created_at', 'updated_at')
		
class StorySerializer(serializers.ModelSerializer):
	scripts = serializers.SerializerMethodField()
	
	def get_scripts(self, obj):
		queryset = Script.objects.filter(story__exact=obj.id).order_by('pub_date')
		serializer = StoryScriptSerializer(queryset, many=True, read_only=True)
		return serializer.data
	
	class Meta:
		model = Story
		fields = ('id', 'story_name', 'story_description', 'pub_date', 'created_at', 'updated_at', 'scripts')
		read_only_fields = ('id', 'pub_date', 'created_at', 'updated_at')

class ScriptStorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Story
		fields = ('id', 'story_name', 'story_description', 'pub_date', 'created_at', 'updated_at')
		read_only_fields = ('id', 'pub_date', 'created_at', 'updated_at')
		
class ProductSerializer(serializers.ModelSerializer):
	def to_representation(self, instance):
		ret = super(ProductSerializer, self).to_representation(instance)
		if ret['product_image1'] is not None:
			ret['product_image1'] = ret['product_image1'].rpartition('lf/')[-1]
		if ret['product_image2'] is not None:
			ret['product_image2'] = ret['product_image2'].rpartition('lf/')[-1]
		if ret['product_image3'] is not None:
			ret['product_image3'] = ret['product_image3'].rpartition('lf/')[-1]
		return ret
		
	class Meta:
		model = Product
		fields = ('id', 'product_name', 'product_content', 'product_image1', 'product_image2', 'product_image3')

class CharacterSerializer(serializers.ModelSerializer):
	def to_representation(self, instance):
		ret = super(CharacterSerializer, self).to_representation(instance)
		if ret['character_face'] is not None:
			ret['character_face'] = ret['character_face'].rpartition('lf/')[-1]
		return ret
		
	class Meta:
		model = Character
		fields = ('id', 'character_name', 'character_description', 'character_face')
	
class MoodSerializer(serializers.ModelSerializer):
	def to_representation(self, instance):
		ret = super(MoodSerializer, self).to_representation(instance)
		if ret['mood_face'] is not None:
			ret['mood_face'] = ret['mood_face'].rpartition('lf/')[-1]
		return ret
		
	character = CharacterSerializer()
	
	class Meta:
		model = Mood
		fields = ('id', 'character', 'mood_name', 'mood_face')
		
class LineSerializer(serializers.ModelSerializer):
	mood = MoodSerializer()
	
	class Meta:
		model = Line
		fields = ('id', 'mood', 'text')
		
class ScriptSerializer(serializers.ModelSerializer):
	lines = serializers.SerializerMethodField()
	product = ProductSerializer()
	story = ScriptStorySerializer()
	
	def get_lines(self, obj):
		queryset = Line.objects.filter(script__exact=obj.id).order_by('id')
		serializer = LineSerializer(queryset, many=True, read_only=True)
		return serializer.data
		
	class Meta:
		model = Script
		
		fields = ('id', 'story', 'product', 'script_name', 'color', 'pub_date', 'created_at', 'updated_at', 'lines')
		read_only_fields = ('id', 'pub_date', 'created_at', 'updated_at')