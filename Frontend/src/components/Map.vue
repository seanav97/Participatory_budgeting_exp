<template>
  <div id="map" ref="map" style="margin-left:1%">
        <img :src="getImageURL('userHome.png')" height="45" width="65" ref="homeImage">
        <div  v-for="item in this.$parent.items" :key='item'>
            <img :src="getImageURL(item.url)" height="45" width="65" :ref="item.item_name">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            url:'userHome.png',

        }
    },
    mounted(){
        this.drawImages();
    },
    methods: {
        getImageURL(img){
            return require('../assets/'+img);
        },
        drawImages(){
            this.$refs.homeImage.style.position='relative';
            this.$refs.homeImage.style.left='30%';
            this.$refs.homeImage.style.top='30%';

            this.$parent.items.forEach(item => {
                this.$refs[item.item_name][0].style.position='relative';
                this.$refs[item.item_name][0].style.left=item.x_coord.toString()+'%';
                this.$refs[item.item_name][0].style.top=item.y_coord.toString()+'%';
                this.$refs[item.item_name][0].style.opacity=0.3;
            });
        },
    }
}
</script>

<style>
    #map
    {
        background-image: url('../assets/city_ams.png');
        width: 600px;
        height: 600px;
    }
</style>