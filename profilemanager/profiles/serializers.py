from rest_framework import serializers
from profiles.models import Address

#User Serializer
class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'